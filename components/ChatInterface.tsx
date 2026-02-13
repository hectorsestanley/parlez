'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Lesson } from '@/lib/lessons';
import { useSpeech } from '@/lib/useSpeech';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  lesson: Lesson;
  onComplete: (wordsLearned: string[], summary: string) => void;
}

export default function ChatInterface({ lesson, onComplete }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { isListening, transcript, startListening, stopListening, speak, isSpeaking, isSupported, error: speechError } = useSpeech();

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Start conversation on mount
  useEffect(() => {
    sendMessage('Bonjour!', true);
  }, []);

  // When transcript updates and listening stops, send the message
  useEffect(() => {
    if (!isListening && transcript) {
      sendMessage(transcript);
    }
  }, [isListening]);

  // Auto-speak assistant messages
  useEffect(() => {
    if (autoSpeak && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'assistant') {
        speak(lastMsg.content);
      }
    }
  }, [messages, autoSpeak]);

  async function sendMessage(content: string, isInitial = false) {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: content.trim() };
    const newMessages = isInitial ? [] : [...messages, userMessage];

    if (!isInitial) {
      setMessages(prev => [...prev, userMessage]);
    }
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: isInitial
            ? [{ role: 'user', content: 'Please start the conversation. Greet me and begin the scenario.' }]
            : newMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt: lesson.systemPrompt,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = { role: 'assistant', content: data.message };

      setMessages(prev => [...prev, assistantMessage]);

      // Check if conversation is wrapping up (📝 marker)
      if (data.message.includes('📝')) {
        setIsComplete(true);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Désolé, il y a eu une erreur. (Sorry, there was an error.) Please try again.'
      }]);
    }

    setIsLoading(false);
  }

  function handleComplete() {
    const wordsLearned = lesson.keyVocab.map(v => v.fr);
    const summary = messages
      .filter(m => m.role === 'assistant')
      .map(m => m.content)
      .join(' ')
      .substring(0, 500);
    onComplete(wordsLearned, summary);
  }

  function handleMicClick() {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputText);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-57px)]">
      {/* Top bar with lesson info & controls */}
      <div className="flex-shrink-0 px-4 py-3 bg-white/50 backdrop-blur-sm border-b border-midnight/5">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="font-display font-semibold text-sm">{lesson.title}</h2>
            <p className="text-xs text-midnight/40">{lesson.scenario.substring(0, 60)}...</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoSpeak(!autoSpeak)}
              className={`p-2 rounded-lg text-xs font-medium transition-colors ${
                autoSpeak ? 'bg-ocean/10 text-ocean' : 'bg-midnight/5 text-midnight/40'
              }`}
              title={autoSpeak ? 'Auto-speak on' : 'Auto-speak off'}
            >
              {autoSpeak ? '🔊' : '🔇'}
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'message-user' : 'message-assistant'} px-4 py-3`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                {msg.role === 'assistant' && (
                  <button
                    onClick={() => speak(msg.content)}
                    className="mt-2 text-xs text-midnight/30 hover:text-ocean transition-colors flex items-center gap-1"
                    disabled={isSpeaking}
                  >
                    {isSpeaking ? '🔊 Speaking...' : '🔊 Listen again'}
                  </button>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start animate-fade-in">
              <div className="message-assistant px-5 py-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-midnight/20 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-midnight/20 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-midnight/20 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          {/* Listening indicator */}
          {isListening && (
            <div className="flex justify-end animate-fade-in">
              <div className="message-user px-5 py-4 flex items-center gap-3">
                <div className="flex items-end gap-0.5 h-6">
                  {[0, 1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="w-1 bg-white/70 rounded-full soundwave-bar"
                      style={{ height: '4px' }}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  {transcript || 'Listening...'}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Complete button */}
      {isComplete && (
        <div className="flex-shrink-0 px-4 py-3 bg-sage/5 border-t border-sage/20">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleComplete}
              className="w-full py-3 px-4 bg-gradient-to-r from-sage to-emerald-600 text-white font-display font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              ✨ Complete Lesson
            </button>
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="flex-shrink-0 px-4 py-4 bg-cream border-t border-midnight/5">
        <div className="max-w-2xl mx-auto">
          {speechError && (
            <p className="text-xs text-coral mb-2 text-center">{speechError}</p>
          )}

          <div className="flex items-center gap-3">
            {/* Mic button */}
            {isSupported && (
              <button
                onClick={handleMicClick}
                disabled={isLoading}
                className={`mic-button flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                  isListening
                    ? 'recording bg-coral text-white shadow-lg shadow-coral/30'
                    : 'bg-gradient-to-br from-ocean to-midnight text-white hover:shadow-lg hover:shadow-ocean/20'
                }`}
              >
                {isListening ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                  </svg>
                )}
              </button>
            )}

            {/* Text input (toggle) */}
            <div className="flex-1 flex items-center gap-2">
              {showTextInput || !isSupported ? (
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type in French..."
                    className="flex-1 px-4 py-3 bg-white rounded-xl border border-midnight/10 focus:border-ocean/30 focus:outline-none focus:ring-2 focus:ring-ocean/10 text-sm placeholder:text-midnight/25 transition-all"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => sendMessage(inputText)}
                    disabled={!inputText.trim() || isLoading}
                    className="flex-shrink-0 w-11 h-11 rounded-xl bg-ocean text-white flex items-center justify-center disabled:opacity-30 hover:bg-midnight transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowTextInput(true)}
                  className="flex-1 px-4 py-3 text-left text-sm text-midnight/25 bg-white/50 rounded-xl border border-dashed border-midnight/10 hover:border-midnight/20 transition-colors"
                >
                  Or type instead...
                </button>
              )}
            </div>
          </div>

          {isListening && (
            <p className="text-center text-xs text-coral font-medium mt-2 animate-pulse">
              🎙️ Listening — speak in French, then tap stop
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
