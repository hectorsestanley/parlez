export interface Lesson {
  id: string;
  level: 'A1' | 'A2' | 'B1';
  module: string;
  title: string;
  titleFr: string;
  description: string;
  scenario: string;
  keyVocab: { fr: string; en: string; phonetic: string }[];
  keyPhrases: { fr: string; en: string; phonetic: string }[];
  grammarTip: string;
  systemPrompt: string;
}

export const lessons: Lesson[] = [
  // === A1 - BEGINNER ===
  {
    id: 'a1-01',
    level: 'A1',
    module: 'First Steps',
    title: 'Meeting Someone',
    titleFr: 'Rencontrer quelqu\'un',
    description: 'Learn to introduce yourself and greet people in French.',
    scenario: 'You\'re at a welcome event in Paris and meet someone new. Introduce yourself and have a simple conversation.',
    keyVocab: [
      { fr: 'Bonjour', en: 'Hello', phonetic: 'bohn-ZHOOR' },
      { fr: 'Je m\'appelle', en: 'My name is', phonetic: 'zhuh mah-PEL' },
      { fr: 'Enchanté(e)', en: 'Nice to meet you', phonetic: 'ahn-shahn-TAY' },
      { fr: 'Comment allez-vous?', en: 'How are you?', phonetic: 'koh-MAHN tah-lay VOO' },
      { fr: 'Très bien', en: 'Very well', phonetic: 'treh BYEHN' },
      { fr: 'Au revoir', en: 'Goodbye', phonetic: 'oh ruh-VWAHR' },
    ],
    keyPhrases: [
      { fr: 'Je suis anglais(e)', en: 'I am English', phonetic: 'zhuh swee ahn-GLEH(z)' },
      { fr: 'J\'habite à Londres', en: 'I live in London', phonetic: 'zhah-BEET ah LOHN-druh' },
      { fr: 'Et vous?', en: 'And you?', phonetic: 'ay VOO' },
    ],
    grammarTip: 'In French, "je" (I) becomes "j\'" before a vowel. So "je appelle" becomes "j\'appelle". This is called elision — it makes French flow smoothly!',
    systemPrompt: `You are a friendly French person named Marie at a welcome event in Paris. The user is practicing introducing themselves in French. 

RULES:
- Speak primarily in French, but keep it VERY simple (A1 level)
- After each French sentence, provide an English translation in parentheses
- Start by greeting the user and introducing yourself
- If they make big grammar mistakes, gently correct them by rephrasing what they said correctly, marked with ✦
- Let small pronunciation/accent errors slide
- Keep responses SHORT (2-3 sentences max)
- Be warm, encouraging, and patient
- Use vocabulary from this list when possible: bonjour, je m'appelle, enchanté, comment allez-vous, très bien, au revoir, je suis, j'habite
- After 6-8 exchanges, naturally wrap up the conversation and say goodbye
- When wrapping up, add a summary of what they did well and new words they learned, marked with 📝`
  },
  {
    id: 'a1-02',
    level: 'A1',
    module: 'First Steps',
    title: 'At a Café',
    titleFr: 'Au café',
    description: 'Order your first coffee and croissant in French.',
    scenario: 'You walk into a cozy Parisian café on a sunny morning. Order something to eat and drink.',
    keyVocab: [
      { fr: 'Un café', en: 'A coffee', phonetic: 'uhn kah-FAY' },
      { fr: 'Un croissant', en: 'A croissant', phonetic: 'uhn kwah-SAHN' },
      { fr: 'S\'il vous plaît', en: 'Please', phonetic: 'seel voo PLEH' },
      { fr: 'Merci', en: 'Thank you', phonetic: 'mehr-SEE' },
      { fr: 'L\'addition', en: 'The bill', phonetic: 'lah-dee-SYOHN' },
      { fr: 'Je voudrais', en: 'I would like', phonetic: 'zhuh voo-DREH' },
    ],
    keyPhrases: [
      { fr: 'Je voudrais un café, s\'il vous plaît', en: 'I would like a coffee, please', phonetic: 'zhuh voo-DREH uhn kah-FAY seel voo PLEH' },
      { fr: 'C\'est combien?', en: 'How much is it?', phonetic: 'seh kohn-BYEHN' },
      { fr: 'C\'est délicieux', en: 'It\'s delicious', phonetic: 'seh day-lee-SYUH' },
    ],
    grammarTip: '"Je voudrais" (I would like) is the polite way to order. It\'s the conditional form of "vouloir" (to want). Much more polite than "je veux" (I want)!',
    systemPrompt: `You are a friendly Parisian café waiter/waitress named Lucas. The user is practicing ordering food and drinks in French.

RULES:
- Speak primarily in French, but keep it VERY simple (A1 level)
- After each French sentence, provide an English translation in parentheses
- Start by welcoming them to the café and asking what they'd like
- Offer a few options if they seem stuck
- If they make big grammar mistakes, gently correct by rephrasing, marked with ✦
- Let small errors slide
- Keep responses SHORT (2-3 sentences max)
- Be warm and patient, like a real welcoming café server
- Key vocab to use: café, croissant, s'il vous plaît, merci, l'addition, je voudrais
- After 6-8 exchanges, naturally bring the bill and wrap up
- When wrapping up, add a summary marked with 📝`
  },
  {
    id: 'a1-03',
    level: 'A1',
    module: 'First Steps',
    title: 'Numbers & Shopping',
    titleFr: 'Les nombres et les courses',
    description: 'Learn numbers and buy things at a market.',
    scenario: 'You\'re at an outdoor market in Lyon buying fresh fruit and vegetables.',
    keyVocab: [
      { fr: 'Un kilo de', en: 'A kilo of', phonetic: 'uhn kee-LOH duh' },
      { fr: 'Les pommes', en: 'Apples', phonetic: 'lay POHM' },
      { fr: 'Les tomates', en: 'Tomatoes', phonetic: 'lay toh-MAHT' },
      { fr: 'Combien?', en: 'How much?', phonetic: 'kohn-BYEHN' },
      { fr: 'Euros', en: 'Euros', phonetic: 'uh-ROH' },
      { fr: 'Autre chose?', en: 'Anything else?', phonetic: 'OH-truh SHOHZ' },
    ],
    keyPhrases: [
      { fr: 'Je voudrais un kilo de pommes', en: 'I\'d like a kilo of apples', phonetic: 'zhuh voo-DREH uhn kee-LOH duh POHM' },
      { fr: 'C\'est tout, merci', en: 'That\'s all, thanks', phonetic: 'seh TOO mehr-SEE' },
      { fr: 'Vous avez des...?', en: 'Do you have any...?', phonetic: 'voo zah-VAY day' },
    ],
    grammarTip: 'In French, "de" (of/some) changes with the article: de + le = du, de + les = des. At the market: "un kilo de pommes" (a kilo of apples) but "du fromage" (some cheese).',
    systemPrompt: `You are a cheerful market vendor named Pierre in Lyon selling fresh produce. The user is practicing buying things and using numbers.

RULES:
- Speak primarily in French, A1 level
- After each French sentence, provide English translation in parentheses
- Start by welcoming them and showing what you have
- Use simple numbers (1-20, then prices like 2.50€, 5€)
- If they make big grammar mistakes, gently correct marked with ✦
- Let small errors slide
- Keep responses SHORT (2-3 sentences max)
- Be enthusiastic about your produce!
- After 6-8 exchanges, wrap up the sale
- When wrapping up, add a summary marked with 📝`
  },
  // === A1 continued ===
  {
    id: 'a1-04',
    level: 'A1',
    module: 'Getting Around',
    title: 'Asking for Directions',
    titleFr: 'Demander son chemin',
    description: 'Learn to ask for and understand simple directions.',
    scenario: 'You\'re lost near the Marais district in Paris and need to find the nearest métro station.',
    keyVocab: [
      { fr: 'Où est...?', en: 'Where is...?', phonetic: 'oo EH' },
      { fr: 'Le métro', en: 'The metro', phonetic: 'luh may-TROH' },
      { fr: 'Tout droit', en: 'Straight ahead', phonetic: 'too DRWAH' },
      { fr: 'À gauche', en: 'To the left', phonetic: 'ah GOHSH' },
      { fr: 'À droite', en: 'To the right', phonetic: 'ah DRWAHT' },
      { fr: 'Près d\'ici', en: 'Near here', phonetic: 'preh dee-SEE' },
    ],
    keyPhrases: [
      { fr: 'Excusez-moi, où est le métro?', en: 'Excuse me, where is the metro?', phonetic: 'ehk-skew-ZAY mwah, oo EH luh may-TROH' },
      { fr: 'C\'est loin?', en: 'Is it far?', phonetic: 'seh LWAHN' },
      { fr: 'Merci beaucoup', en: 'Thank you very much', phonetic: 'mehr-SEE boh-KOO' },
    ],
    grammarTip: '"Où est" means "where is" and works for any location. Just add what you\'re looking for: "Où est la gare?" (Where is the station?), "Où est la pharmacie?" (Where is the pharmacy?)',
    systemPrompt: `You are a helpful Parisian local named Sophie. The user is lost and needs directions. Practice giving and understanding simple directions.

RULES:
- Speak primarily in French, A1 level
- After each French sentence, provide English translation in parentheses
- Give simple, clear directions using: tout droit, à gauche, à droite, près d'ici
- If they make big grammar mistakes, gently correct marked with ✦
- Let small errors slide
- Keep responses SHORT (2-3 sentences max)
- Be helpful and friendly
- After 6-8 exchanges, they should arrive at their destination
- When wrapping up, add a summary marked with 📝`
  },
  {
    id: 'a1-05',
    level: 'A1',
    module: 'Getting Around',
    title: 'Taking the Train',
    titleFr: 'Prendre le train',
    description: 'Buy a train ticket and navigate the station.',
    scenario: 'You\'re at Gare du Nord and need to buy a ticket to take the train.',
    keyVocab: [
      { fr: 'Un billet', en: 'A ticket', phonetic: 'uhn bee-YEH' },
      { fr: 'Aller-retour', en: 'Round trip', phonetic: 'ah-LAY ruh-TOOR' },
      { fr: 'Le quai', en: 'The platform', phonetic: 'luh KAY' },
      { fr: 'Le prochain train', en: 'The next train', phonetic: 'luh proh-SHEHN TREHN' },
      { fr: 'À quelle heure?', en: 'At what time?', phonetic: 'ah kel UHR' },
      { fr: 'Première/deuxième classe', en: 'First/second class', phonetic: 'pruh-MYEHR/duh-ZYEM KLAHS' },
    ],
    keyPhrases: [
      { fr: 'Un billet pour... s\'il vous plaît', en: 'A ticket to... please', phonetic: 'uhn bee-YEH poor... seel voo PLEH' },
      { fr: 'Le train part à quelle heure?', en: 'What time does the train leave?', phonetic: 'luh TREHN par ah kel UHR' },
      { fr: 'C\'est quel quai?', en: 'Which platform is it?', phonetic: 'seh kel KAY' },
    ],
    grammarTip: 'Telling time in French: "Il est trois heures" (It\'s 3 o\'clock). For minutes, just add them: "trois heures quinze" (3:15). French often uses 24-hour time, so 15h00 = 3 PM.',
    systemPrompt: `You are a ticket agent named Jean-Paul at Gare du Nord in Paris. The user needs to buy a train ticket.

RULES:
- Speak primarily in French, A1 level
- After each French sentence, provide English translation in parentheses
- Help them buy a ticket, asking about destination, class, single/return
- Use simple times and numbers
- If they make big grammar mistakes, gently correct marked with ✦
- Let small errors slide
- Keep responses SHORT (2-3 sentences max)
- Be professional but friendly
- After 6-8 exchanges, complete the transaction
- When wrapping up, add a summary marked with 📝`
  },
  // === A2 - ELEMENTARY ===
  {
    id: 'a2-01',
    level: 'A2',
    module: 'Daily Life',
    title: 'At the Restaurant',
    titleFr: 'Au restaurant',
    description: 'Order a full meal, ask about dishes, and handle the bill.',
    scenario: 'You\'re at a traditional bistro in Montmartre for dinner. Read the menu, ask questions, and enjoy your meal.',
    keyVocab: [
      { fr: 'L\'entrée', en: 'Starter', phonetic: 'lahn-TRAY' },
      { fr: 'Le plat principal', en: 'Main course', phonetic: 'luh plah prahn-see-PAL' },
      { fr: 'Le dessert', en: 'Dessert', phonetic: 'luh deh-SEHR' },
      { fr: 'La carte', en: 'The menu', phonetic: 'lah KART' },
      { fr: 'Qu\'est-ce que vous recommandez?', en: 'What do you recommend?', phonetic: 'kehs-kuh voo ruh-koh-mahn-DAY' },
      { fr: 'Je suis allergique à', en: 'I\'m allergic to', phonetic: 'zhuh swee ah-lehr-ZHEEK ah' },
    ],
    keyPhrases: [
      { fr: 'Qu\'est-ce qu\'il y a dans ce plat?', en: 'What\'s in this dish?', phonetic: 'kehs-keel yah dahn suh PLAH' },
      { fr: 'Je vais prendre le...', en: 'I\'ll have the...', phonetic: 'zhuh vay PRAHN-druh luh' },
      { fr: 'C\'était excellent', en: 'It was excellent', phonetic: 'seh-teh ehk-seh-LAHN' },
    ],
    grammarTip: '"Je vais prendre" (I\'m going to have) uses the near future tense: aller + infinitive. This is the easiest way to talk about the future in French! "Je vais manger" = I\'m going to eat.',
    systemPrompt: `You are a charming bistro waiter named Antoine in Montmartre. The user is ordering dinner at an A2 level.

RULES:
- Speak primarily in French, A2 level (slightly more complex than A1)
- After each French sentence, provide English translation in parentheses
- Present a simple menu, recommend dishes, answer questions about ingredients
- Use past tense occasionally ("C'était bon?" - Was it good?)
- If they make significant grammar mistakes, correct marked with ✦
- Let minor errors slide
- Keep responses to 2-4 sentences
- Be charming and professional
- Guide through: drinks → starter → main → dessert → bill
- When wrapping up, add a summary marked with 📝`
  },
  {
    id: 'a2-02',
    level: 'A2',
    module: 'Daily Life',
    title: 'Making Plans',
    titleFr: 'Faire des projets',
    description: 'Suggest activities and make plans with a friend.',
    scenario: 'Your French friend calls you to make weekend plans. Discuss what to do, when, and where to meet.',
    keyVocab: [
      { fr: 'Ce week-end', en: 'This weekend', phonetic: 'suh week-EHND' },
      { fr: 'On pourrait', en: 'We could', phonetic: 'ohn poo-REH' },
      { fr: 'Ça te dit?', en: 'Does that sound good?', phonetic: 'sah tuh DEE' },
      { fr: 'À quelle heure on se retrouve?', en: 'What time shall we meet?', phonetic: 'ah kel UHR ohn suh ruh-TROOV' },
      { fr: 'Bonne idée!', en: 'Good idea!', phonetic: 'bohn ee-DAY' },
      { fr: 'Je préfère', en: 'I prefer', phonetic: 'zhuh pray-FEHR' },
    ],
    keyPhrases: [
      { fr: 'Tu es libre ce week-end?', en: 'Are you free this weekend?', phonetic: 'tew eh LEE-bruh suh week-EHND' },
      { fr: 'On se retrouve où?', en: 'Where shall we meet?', phonetic: 'ohn suh ruh-TROOV OO' },
      { fr: 'Ça marche!', en: 'Sounds good! / Deal!', phonetic: 'sah MARSH' },
    ],
    grammarTip: '"On" is incredibly useful in French. It literally means "one" but is used as "we" in casual speech. "On va au cinéma?" = "Shall we go to the cinema?" Much more natural than "nous"!',
    systemPrompt: `You are a friendly French person named Camille calling the user to make weekend plans. Use informal "tu" since you're friends.

RULES:
- Speak primarily in French, A2 level
- After each French sentence, provide English translation in parentheses
- Suggest activities, ask about preferences, negotiate times
- Use informal register (tu, not vous)
- If they make significant grammar mistakes, correct marked with ✦
- Let minor errors slide
- Keep responses to 2-4 sentences
- Be enthusiastic and fun
- Key phrases: on pourrait, ça te dit?, bonne idée, je préfère
- After 6-8 exchanges, finalize the plans
- When wrapping up, add a summary marked with 📝`
  },
  {
    id: 'a2-03',
    level: 'A2',
    module: 'Daily Life',
    title: 'Talking About Work',
    titleFr: 'Parler du travail',
    description: 'Describe your job and ask about someone else\'s in casual conversation.',
    scenario: 'You\'re at a dinner party and someone asks what you do for work. Have a conversation about your jobs.',
    keyVocab: [
      { fr: 'Qu\'est-ce que vous faites comme travail?', en: 'What do you do for work?', phonetic: 'kehs-kuh voo FEHT kohm trah-VY' },
      { fr: 'Je travaille dans', en: 'I work in', phonetic: 'zhuh trah-VY dahn' },
      { fr: 'La technologie', en: 'Technology', phonetic: 'lah tek-noh-loh-ZHEE' },
      { fr: 'Ça vous plaît?', en: 'Do you like it?', phonetic: 'sah voo PLEH' },
      { fr: 'Depuis combien de temps?', en: 'For how long?', phonetic: 'duh-PWEE kohn-BYEHN duh TAHN' },
      { fr: 'C\'est intéressant', en: 'That\'s interesting', phonetic: 'seh ehn-tay-reh-SAHN' },
    ],
    keyPhrases: [
      { fr: 'Je travaille dans la technologie', en: 'I work in technology', phonetic: 'zhuh trah-VY dahn lah tek-noh-loh-ZHEE' },
      { fr: 'J\'aime bien ce que je fais', en: 'I quite like what I do', phonetic: 'zhem BYEHN suh kuh zhuh FEH' },
      { fr: 'Et vous, qu\'est-ce que vous faites?', en: 'And you, what do you do?', phonetic: 'ay VOO kehs-kuh voo FEHT' },
    ],
    grammarTip: '"Depuis" (since/for) is used with present tense in French when something is still ongoing: "Je travaille ici depuis deux ans" = I\'ve been working here for two years. In English we\'d use past tense, but French uses present!',
    systemPrompt: `You are a French architect named Julien/Julie at a dinner party. The user is practicing talking about work at A2 level.

RULES:
- Speak primarily in French, A2 level
- After each French sentence, provide English translation in parentheses
- Ask about their work, share about yours, ask follow-up questions
- Start with "vous" (formal) since you just met
- If they make significant grammar mistakes, correct marked with ✦
- Let minor errors slide
- Keep responses to 2-4 sentences
- Be genuinely interested in their work
- After 6-8 exchanges, naturally transition to another topic or wrap up
- When wrapping up, add a summary marked with 📝`
  },
  // === A2 continued ===
  {
    id: 'a2-04',
    level: 'A2',
    module: 'Social Life',
    title: 'At a House Party',
    titleFr: 'À une fête',
    description: 'Chat casually, give compliments, and talk about hobbies.',
    scenario: 'You\'re at a friend\'s house party and meeting new people. Chat about hobbies, interests, and life.',
    keyVocab: [
      { fr: 'Qu\'est-ce que tu fais pour t\'amuser?', en: 'What do you do for fun?', phonetic: 'kehs-kuh tew FEH poor tah-mew-ZAY' },
      { fr: 'J\'adore', en: 'I love', phonetic: 'zhah-DOR' },
      { fr: 'La course à pied', en: 'Running', phonetic: 'lah KOORS ah PYAY' },
      { fr: 'L\'escalade', en: 'Climbing', phonetic: 'lehs-kah-LAHD' },
      { fr: 'Depuis longtemps?', en: 'For a long time?', phonetic: 'duh-PWEE lohn-TAHN' },
      { fr: 'C\'est génial!', en: 'That\'s awesome!', phonetic: 'seh zhay-NYAL' },
    ],
    keyPhrases: [
      { fr: 'J\'adore la course à pied', en: 'I love running', phonetic: 'zhah-DOR lah KOORS ah PYAY' },
      { fr: 'Je fais de l\'escalade aussi', en: 'I also do climbing', phonetic: 'zhuh FEH duh lehs-kah-LAHD oh-SEE' },
      { fr: 'On devrait en faire ensemble!', en: 'We should do it together!', phonetic: 'ohn duh-VREH ahn FEHR ahn-SAHM-bluh' },
    ],
    grammarTip: '"Faire" (to do/make) is one of the most versatile French verbs. "Je fais du sport" (I do sport), "je fais la cuisine" (I cook), "je fais de l\'escalade" (I do climbing). The "du/de la/de l\'" changes based on the gender of the noun.',
    systemPrompt: `You are a fun, outgoing French person named Alex at a house party. You're chatting casually with the user about hobbies and interests. Use informal "tu".

RULES:
- Speak primarily in French, A2 level
- After each French sentence, provide English translation in parentheses
- Talk about hobbies, sports, interests — keep it light and fun
- Use "tu" throughout (casual party setting)
- React enthusiastically to shared interests
- If they make significant grammar mistakes, correct marked with ✦
- Let minor errors slide
- Keep responses to 2-4 sentences
- Be energetic and fun
- After 6-8 exchanges, wrap up
- When wrapping up, add a summary marked with 📝`
  },
  // === B1 - INTERMEDIATE ===
  {
    id: 'b1-01',
    level: 'B1',
    module: 'Professional Life',
    title: 'Job Interview',
    titleFr: 'L\'entretien d\'embauche',
    description: 'Practice answering common interview questions in French.',
    scenario: 'You have a job interview at a French tech company. Answer questions about your experience and skills.',
    keyVocab: [
      { fr: 'Mon parcours professionnel', en: 'My professional background', phonetic: 'mohn par-KOOR proh-feh-syoh-NEL' },
      { fr: 'J\'ai de l\'expérience en', en: 'I have experience in', phonetic: 'zhay duh lehk-spay-RYAHNS ahn' },
      { fr: 'Mes points forts', en: 'My strengths', phonetic: 'may PWAHN FOR' },
      { fr: 'La gestion de projet', en: 'Project management', phonetic: 'lah zheh-STYOHN duh proh-ZHEH' },
      { fr: 'L\'intelligence artificielle', en: 'Artificial intelligence', phonetic: 'lahn-teh-lee-ZHAHNS ar-tee-fee-SYEL' },
      { fr: 'Je cherche un poste de', en: 'I\'m looking for a position as', phonetic: 'zhuh SHEHRSH uhn POHST duh' },
    ],
    keyPhrases: [
      { fr: 'J\'ai travaillé pendant huit ans dans la tech', en: 'I worked for 8 years in tech', phonetic: 'zhay trah-vah-YAY pahn-DAHN wee-TAHN dahn lah TEK' },
      { fr: 'Ce qui me motive, c\'est', en: 'What motivates me is', phonetic: 'suh kee muh moh-TEEV seh' },
      { fr: 'Je pense que je pourrais apporter', en: 'I think I could bring', phonetic: 'zhuh PAHNS kuh zhuh poo-REH ah-por-TAY' },
    ],
    grammarTip: 'The passé composé (compound past) is essential for interviews: "J\'ai travaillé" (I worked), "J\'ai géré" (I managed), "J\'ai développé" (I developed). Formed with avoir/être + past participle.',
    systemPrompt: `You are a hiring manager named Mathilde at a French tech company. You're conducting a job interview with the user at B1 level.

RULES:
- Speak primarily in French, B1 level (more complex sentences, varied tenses)
- After each French sentence, provide English translation in parentheses
- Ask about: their background, experience, strengths, why this company, what they'd bring
- Use professional/formal register (vous)
- If they make significant grammar mistakes, correct marked with ✦
- Let minor errors slide but note them at the end
- Keep responses to 2-4 sentences
- Be professional but warm
- After 8-10 exchanges, conclude the interview
- When wrapping up, add a detailed summary marked with 📝`
  },
  {
    id: 'b1-02',
    level: 'B1',
    module: 'Professional Life',
    title: 'Giving Your Opinion',
    titleFr: 'Donner son avis',
    description: 'Express opinions, agree, disagree, and debate topics.',
    scenario: 'You\'re having coffee with a French colleague discussing whether remote work is better than office work.',
    keyVocab: [
      { fr: 'Je pense que', en: 'I think that', phonetic: 'zhuh PAHNS kuh' },
      { fr: 'Je suis d\'accord', en: 'I agree', phonetic: 'zhuh swee dah-KOR' },
      { fr: 'Je ne suis pas d\'accord', en: 'I disagree', phonetic: 'zhuh nuh swee pah dah-KOR' },
      { fr: 'D\'un côté... de l\'autre', en: 'On one hand... on the other', phonetic: 'duhn koh-TAY... duh LOH-truh' },
      { fr: 'Il me semble que', en: 'It seems to me that', phonetic: 'eel muh SAHM-bluh kuh' },
      { fr: 'Par contre', en: 'On the other hand / However', phonetic: 'par KOHN-truh' },
    ],
    keyPhrases: [
      { fr: 'Je pense que le télétravail est plus productif', en: 'I think remote work is more productive', phonetic: 'zhuh PAHNS kuh luh tay-lay-trah-VY eh plew proh-dewk-TEEF' },
      { fr: 'Tu as raison, mais...', en: 'You\'re right, but...', phonetic: 'tew ah reh-ZOHN meh' },
      { fr: 'Ça dépend de la situation', en: 'It depends on the situation', phonetic: 'sah day-PAHN duh lah see-tew-ah-SYOHN' },
    ],
    grammarTip: 'The subjunctive mood is used after certain expressions of opinion: "Je ne pense pas que ce soit vrai" (I don\'t think that\'s true). After negative opinions, French uses subjunctive — but don\'t worry too much, most French people get this wrong too!',
    systemPrompt: `You are a French colleague named Thomas having a casual debate over coffee about remote vs office work. Use informal "tu".

RULES:
- Speak primarily in French, B1 level
- After each French sentence, provide English translation in parentheses
- Have a genuine back-and-forth debate with nuanced opinions
- Present arguments, ask for their opinion, agree and disagree
- Use varied connectors: par contre, d'un côté, il me semble que
- If they make significant grammar mistakes, correct marked with ✦
- Let minor errors slide
- Keep responses to 2-4 sentences
- Be engaging and thought-provoking
- After 8-10 exchanges, wrap up the debate
- When wrapping up, add a summary marked with 📝`
  },
  {
    id: 'b1-03',
    level: 'B1',
    module: 'Culture & Life',
    title: 'Describing Experiences',
    titleFr: 'Raconter des expériences',
    description: 'Talk about past experiences and tell stories in French.',
    scenario: 'You\'re at dinner with friends sharing travel stories and memorable experiences.',
    keyVocab: [
      { fr: 'C\'était incroyable', en: 'It was incredible', phonetic: 'seh-teh ehn-kwah-YAH-bluh' },
      { fr: 'Je me souviens', en: 'I remember', phonetic: 'zhuh muh soo-VYEHN' },
      { fr: 'À ce moment-là', en: 'At that moment', phonetic: 'ah suh moh-MAHN lah' },
      { fr: 'J\'ai eu la chance de', en: 'I had the chance to', phonetic: 'zhay ew lah SHAHNS duh' },
      { fr: 'Ça m\'a beaucoup marqué', en: 'It really affected/impacted me', phonetic: 'sah mah boh-KOO mar-KAY' },
      { fr: 'Je n\'oublierai jamais', en: 'I\'ll never forget', phonetic: 'zhuh noo-blee-RAY zhah-MEH' },
    ],
    keyPhrases: [
      { fr: 'L\'année dernière, j\'ai fait un ultra-marathon', en: 'Last year I did an ultra-marathon', phonetic: 'lah-NAY dehr-NYEHR zhay FEH uhn ewl-trah mah-rah-TOHN' },
      { fr: 'Ce qui m\'a le plus impressionné, c\'est', en: 'What impressed me most was', phonetic: 'suh kee mah luh plew ehm-preh-syoh-NAY seh' },
      { fr: 'Si je pouvais y retourner, je le ferais', en: 'If I could go back, I would', phonetic: 'see zhuh poo-VEH ee ruh-toor-NAY zhuh luh fuh-REH' },
    ],
    grammarTip: 'For storytelling, you need two past tenses: passé composé for completed actions ("j\'ai visité" - I visited) and imparfait for descriptions/ongoing states ("il faisait beau" - the weather was nice). Think: what happened vs what was happening.',
    systemPrompt: `You are a French friend named Léa at a dinner party. Everyone is sharing travel stories and memorable experiences. Use informal "tu".

RULES:
- Speak primarily in French, B1 level
- After each French sentence, provide English translation in parentheses
- Share your own stories and ask about theirs
- Encourage use of both passé composé and imparfait
- React to their stories with interest and follow-up questions
- If they make significant grammar mistakes, correct marked with ✦ (especially past tense errors)
- Let minor errors slide
- Keep responses to 2-4 sentences
- Be an engaging storyteller and listener
- After 8-10 exchanges, wrap up
- When wrapping up, add a detailed summary marked with 📝`
  },
];

export const levels = [
  { id: 'A1', name: 'Beginner', description: 'First steps in French', color: 'from-emerald-400 to-teal-500' },
  { id: 'A2', name: 'Elementary', description: 'Everyday conversations', color: 'from-blue-400 to-indigo-500' },
  { id: 'B1', name: 'Intermediate', description: 'Express yourself freely', color: 'from-purple-400 to-pink-500' },
];

export function getLessonsByLevel(level: string): Lesson[] {
  return lessons.filter(l => l.level === level);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find(l => l.id === id);
}
