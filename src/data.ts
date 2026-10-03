export type Interest = {
  id: string;
  name: string;
  symbol: string;
  color: string;
};
export type Topic = { id: string; interest_id: string | null; name: string };
export type Lesson = {
  id: string;
  topic_id: string;
  title: string;
  content: string;
  takeaway: string;
};
export const interests: Interest[] = [
  { id: "technology", name: "Technology", symbol: "\u2318", color: "blue" },
  { id: "sql", name: "SQL & data", symbol: "\u25a4", color: "orange" },
  { id: "parenting", name: "Parenting", symbol: "♡", color: "green" },
  { id: "career", name: "Career growth", symbol: "↗", color: "blue" },
  { id: "workplace", name: "Workplace skills", symbol: "◒", color: "pink" },
  { id: "time", name: "Managing your time", symbol: "◷", color: "orange" },
  { id: "digital", name: "Digital confidence", symbol: "✦", color: "blue" },
  { id: "nature", name: "Nature", symbol: "✳", color: "green" },
  { id: "design", name: "Design", symbol: "◒", color: "pink" },
  { id: "science", name: "Science", symbol: "✦", color: "blue" },
  { id: "culture", name: "Culture", symbol: "◎", color: "orange" },
];
export const topics: Topic[] = [
  { id: "web", interest_id: "technology", name: "How the web works" },
  { id: "files", interest_id: "technology", name: "Files and formats" },
  { id: "sql-basics", interest_id: "sql", name: "SQL basics" },
  { id: "data-modelling", interest_id: "sql", name: "Data modelling" },
  { id: "teens", interest_id: "parenting", name: "Teen communication" },
  { id: "interviews", interest_id: "career", name: "Interviews" },
  { id: "feedback", interest_id: "career", name: "Feedback" },
  { id: "planning", interest_id: "career", name: "Career planning" },
  { id: "writing", interest_id: "workplace", name: "Clear writing" },
  { id: "meetings", interest_id: "workplace", name: "Meetings" },
  { id: "priorities", interest_id: "time", name: "Priorities" },
  { id: "boundaries", interest_id: "time", name: "Work and family routines" },
  { id: "privacy", interest_id: "digital", name: "Online privacy" },
  { id: "scams", interest_id: "digital", name: "Spotting scams" },
  { id: "plants", interest_id: "nature", name: "Plant life" },
  { id: "ecosystems", interest_id: "nature", name: "Ecosystems" },
  { id: "visual", interest_id: "design", name: "Visual thinking" },
  { id: "everyday", interest_id: "design", name: "Everyday design" },
  { id: "space", interest_id: "science", name: "Space" },
  { id: "physics", interest_id: "science", name: "Everyday physics" },
  { id: "language", interest_id: "culture", name: "Language" },
  { id: "history", interest_id: "culture", name: "Small histories" },
];
export const lessons: Lesson[] = [
  {
    id: "teen-listen",
    topic_id: "teens",
    title: "Start a difficult conversation by listening.",
    content:
      "When a teenager raises something difficult, give them time to speak before offering a solution. Ask an open question such as “What was that like for you?” and check your understanding. Taking their feelings seriously does not mean agreeing with every choice. It can make space for a conversation about what happened and what support would help.",
    takeaway: "Understand the situation before deciding what to say.",
  },
  {
    id: "teen-boundaries",
    topic_id: "teens",
    title: "Explain the reason behind a boundary.",
    content:
      "A useful conversation about rules includes the reason for them and a chance for your teenager to respond. Keep your language clear and avoid turning disagreement into a judgement of their character. Where appropriate, discuss what more independence would involve and review agreements together. Some safety boundaries remain necessary even when you can negotiate the details.",
    takeaway: "Be clear about the reason and open to discussing the details.",
  },
  {
    id: "teen-moment",
    topic_id: "teens",
    title: "Choose a moment when talking feels possible.",
    content:
      "Trying to resolve everything at the height of an argument can make listening harder. Allow time to calm down, then return to the conversation. An everyday moment, such as a walk, may feel less intense than a formal confrontation. Make it clear you are available to listen, and seek appropriate support if you are concerned about your teenager’s wellbeing.",
    takeaway: "A calmer moment can make room for a better conversation.",
  },
  {
    id: "interview-example",
    topic_id: "interviews",
    title: "Prepare a story, not a list of adjectives.",
    content:
      "Rather than saying “I am organised,” prepare an example that shows it. Describe the situation, your responsibility, the action you took and the result. For example, explain how you coordinated a deadline, what you changed and what happened. Keep your account accurate, including what you learned if the outcome was imperfect.",
    takeaway: "Show a skill through a specific, truthful example.",
  },
  {
    id: "interview-question",
    topic_id: "interviews",
    title: "Your questions can help you assess the role.",
    content:
      "An interview is also a chance to learn whether a job fits you. Ask what success looks like in the first few months, how the team works together, or which challenges the role will address. Choose questions that matter to your decision and listen for concrete examples. You do not need to pretend every role is the right role.",
    takeaway: "Ask something that helps you make an informed decision.",
  },
  {
    id: "feedback-specific",
    topic_id: "feedback",
    title: "Useful feedback names a behaviour.",
    content:
      "“You need to communicate better” is hard to act on. A more useful version identifies an observed behaviour, its effect and a possible next step: “The handover missed the deadline, so the next team could not plan. Could we include dates next time?” Separate what you observed from what you assume about someone’s intentions.",
    takeaway:
      "Describe the behaviour and its effect, then discuss a next step.",
  },
  {
    id: "career-evidence",
    topic_id: "planning",
    title: "Keep a small record of your work.",
    content:
      "A work record can make a review or application easier to prepare. Note the problem you worked on, your contribution, the outcome and what you learned. Include feedback where you have permission to retain it, and do not copy confidential material into personal files. A few notes each week can be more reliable than trying to remember a year later.",
    takeaway:
      "Record contributions while they are fresh, without taking confidential data.",
  },
  {
    id: "email-next-step",
    topic_id: "writing",
    title: "An email should make the next step obvious.",
    content:
      "Put the purpose near the start, include only the context the reader needs, and end with a clear request. “Please confirm which option you prefer by Thursday” is easier to act on than “Thoughts?” Use a descriptive subject and check whether the recipient has enough information to answer. Clear writing respects the reader’s time.",
    takeaway: "Tell the reader what you need and when you need it.",
  },
  {
    id: "meeting-decision",
    topic_id: "meetings",
    title: "Give a meeting a job to do.",
    content:
      "Before inviting people, identify the outcome: a decision, a plan or a problem to resolve. Share the question and any preparation in advance. At the end, record what was decided, who owns each action and when it is due. If the aim is only to pass on information, a short written update may be enough.",
    takeaway: "Name the outcome, then leave with owners and next steps.",
  },
  {
    id: "priority-one",
    topic_id: "priorities",
    title: "Separate an urgent request from an important goal.",
    content:
      "An urgent task has time pressure; an important task contributes to a meaningful outcome. Some tasks are both. When your list grows, note deadlines and consequences, then choose what needs attention first. If competing requests exceed your capacity, ask the people involved to agree the trade-off instead of silently promising everything.",
    takeaway: "Prioritising includes making trade-offs visible.",
  },
  {
    id: "buffer-time",
    topic_id: "priorities",
    title: "Leave room for the work between the work.",
    content:
      "A calendar full of back-to-back tasks assumes transitions take no time. In practice, travel, preparation, interruptions and finishing notes also use time. Leave a buffer around commitments and review what actually took longer than expected. Treat a plan as something to adjust, rather than proof you should have fitted everything in.",
    takeaway: "Plan for transitions as well as the tasks themselves.",
  },
  {
    id: "family-handover",
    topic_id: "boundaries",
    title: "A short handover can reduce repeated questions.",
    content:
      "When sharing family responsibilities, make the next step clear: what needs doing, who is doing it and when. A shared note might cover pickup arrangements or what is needed for tomorrow. Keep sensitive information private and update the note when plans change. The point is a shared understanding, not a perfect household system.",
    takeaway:
      "Make responsibility explicit rather than relying on assumptions.",
  },
  {
    id: "passwords",
    topic_id: "privacy",
    title: "A unique password limits a stolen password’s reach.",
    content:
      "If the same password is used everywhere, a breach at one service can put other accounts at risk. Use a different password for each account, and consider a reputable password manager to store them. Turn on multifactor authentication where available and keep recovery options up to date. Never send a password or one-time login code to someone who asks for it.",
    takeaway: "Protect each account with its own credentials.",
  },
  {
    id: "scam-pause",
    topic_id: "scams",
    title: "Urgency is a reason to pause and check.",
    content:
      "A message demanding immediate payment or a login code may be trying to stop you thinking. Do not rely on the sender’s display name or a link in the message. Contact the organisation using its official website or a number you already trust. If you have shared financial details, contact your bank promptly through a trusted channel.",
    takeaway: "Verify through a separate, trusted route before acting.",
  },
  {
    id: "privacy-sharing",
    topic_id: "privacy",
    title: "Check the audience before sharing a family photo.",
    content:
      "Before posting, consider who can see the image and whether it reveals a school, address or location. Ask family members before sharing images of them, and involve children in age-appropriate conversations about privacy. Check account settings, but remember that a private audience can still copy an image. You can choose to share less or use a smaller trusted group.",
    takeaway: "Think about the person pictured as well as the audience.",
  },
  {
    id: "web-request",
    topic_id: "web",
    title: "Opening a page starts a conversation.",
    content:
      "When you open a website, your browser requests resources from a server. The server sends responses such as HTML, stylesheets and JavaScript. The browser combines them into the page you see. A page can make several requests, and a cached resource may be reused instead of downloaded again.",
    takeaway:
      "A webpage is assembled from resources, not sent as a finished screenshot.",
  },
  {
    id: "html-css-js",
    topic_id: "web",
    title: "Three web languages have different jobs.",
    content:
      "HTML describes content and structure, CSS controls presentation, and JavaScript adds behaviour. A save button may be represented in HTML, styled with CSS and connected to an action by JavaScript. These jobs work together, but keeping them understandable separately makes a page easier to maintain.",
    takeaway: "Structure, presentation and behaviour each have a role.",
  },
  {
    id: "browser-storage",
    topic_id: "web",
    title: "A browser save is tied to a site.",
    content:
      "Local storage keeps small pieces of data in a browser for a particular website origin. Our app saves lesson IDs there instead of sending them to a server. Another browser or device does not automatically receive those IDs. Clearing site data can remove them, and moving to a different site address can mean a separate storage area.",
    takeaway: "A local save is useful, but it is not cross-device sync.",
  },
  {
    id: "https",
    topic_id: "web",
    title: "HTTPS protects the connection.",
    content:
      "HTTPS encrypts information travelling between your browser and a website and helps authenticate the server through a certificate. It does not guarantee that everything the website says is trustworthy. A scam website can also use HTTPS. Check the address and the organisation as well as the connection indicator.",
    takeaway:
      "An encrypted connection and a trustworthy claim are different things.",
  },
  {
    id: "cache",
    topic_id: "web",
    title: "A cache is a reusable copy.",
    content:
      "A cache stores a copy of a resource so it can be used again without fetching or calculating it each time. This can speed up loading. The trade-off is freshness: a copy may become outdated, so systems use expiry times or validation rules. When a website appears unchanged, caching is one possible explanation, not the only one.",
    takeaway: "Caching trades repeated work for the need to manage freshness.",
  },
  {
    id: "csv",
    topic_id: "files",
    title: "A CSV is a table written as text.",
    content:
      "A comma-separated values file represents rows as lines and fields with separators. For example, id,name could be a header, followed by nature,Nature. Real CSV files need quoting rules when a field contains commas or line breaks. CSV is handy for simple exchange, but it does not by itself enforce types, relationships or uniqueness.",
    takeaway: "A CSV carries values, not the rules of a database.",
  },
  {
    id: "json",
    topic_id: "files",
    title: "JSON can describe a small connected record.",
    content:
      "JSON represents values using objects, arrays, strings, numbers, booleans and null. A lesson object might have an id, a topic_id and a title. The topic_id can refer to a separate topic object, but JSON itself does not check that the topic exists. Your application or a database has to enforce that relationship.",
    takeaway: "A reference in a file needs a rule somewhere to keep it valid.",
  },
  {
    id: "lossless",
    topic_id: "files",
    title: "Compression can keep everything or discard detail.",
    content:
      "Lossless compression allows the original data to be reconstructed exactly. Lossy compression removes some information to reduce file size further, as many photo and audio formats do. A smaller file is not automatically worse: the appropriate choice depends on whether exact recovery or a compact representation matters more.",
    takeaway: "Choose a format according to what must be preserved.",
  },
  {
    id: "word-context",
    topic_id: "language",
    title: "Context can change what a word means.",
    content:
      "The word “bank” can refer to a financial institution or the side of a river. Readers usually resolve the meaning from nearby words and the situation. When writing instructions, avoid relying on an ambiguous term if a clearer phrase is available. Context helps, but explicit wording can reduce unnecessary guessing.",
    takeaway:
      "Read the surrounding words; write with fewer hidden assumptions.",
  },
  {
    id: "active-writing",
    topic_id: "language",
    title: "A sentence can show who does the action.",
    content:
      "“The team approved the plan” puts the actor before the action. “The plan was approved” leaves the actor unstated. Both can be useful, but active wording often makes responsibilities clearer in instructions. Passive wording can suit situations where the action or result matters more than who performed it.",
    takeaway: "Choose the wording that makes the important information clear.",
  },
  {
    id: "false-friends",
    topic_id: "language",
    title: "Similar-looking words can mislead a learner.",
    content:
      "Words in different languages can look alike but have different meanings. These are often called false friends. For example, French “actuellement” usually means “currently,” rather than the English “actually.” When a familiar-looking word seems odd in a sentence, check its meaning in context instead of assuming it matches your own language.",
    takeaway: "Resemblance is a clue, not a translation guarantee.",
  },
  {
    id: "evaporation",
    topic_id: "physics",
    title: "Water can evaporate without boiling.",
    content:
      "Some molecules at the surface of liquid water have enough energy to escape into the air. That is evaporation, and it can happen below the boiling point. Airflow and a larger exposed surface can help a puddle dry by moving water vapour away and giving more molecules access to the surface.",
    takeaway:
      "Evaporation happens at a surface; boiling happens throughout a liquid.",
  },
  {
    id: "metal-cold",
    topic_id: "physics",
    title: "Metal can feel colder at the same temperature.",
    content:
      "A metal spoon and a wooden spoon in the same room can be at similar temperatures. Metal often feels colder because it transfers heat away from your warmer hand faster. Your sensation responds to heat flow, not simply an object’s temperature. This is why touch alone is a poor thermometer.",
    takeaway: "What feels cold depends partly on how quickly heat moves.",
  },
  {
    id: "sound",
    topic_id: "physics",
    title: "Sound needs something to travel through.",
    content:
      "Sound is a vibration that travels through a medium such as air, water or a solid. In air, changes in pressure carry the disturbance from its source to your ear. In a vacuum there is no medium to carry ordinary sound waves. Space scenes with loud explosions are therefore using sound for storytelling.",
    takeaway:
      "Sound travels through matter; ordinary sound cannot cross a vacuum.",
  },
  {
    id: "seasons",
    topic_id: "space",
    title: "Seasons follow a tilt, not just distance.",
    content:
      "Earth’s axis is tilted relative to its orbit. As Earth travels around the Sun, each hemisphere receives different angles and durations of sunlight during the year. When the northern hemisphere tilts towards the Sun, it has longer days and more direct sunlight while the southern hemisphere has winter.",
    takeaway:
      "Opposite hemispheres have opposite seasons because of Earth’s tilt.",
  },
  {
    id: "sql-select",
    topic_id: "sql-basics",
    title: "SELECT asks which columns you want.",
    content:
      "In a relational database, a table stores rows with named columns. SELECT title FROM lessons; asks for the title column from every row in the lessons table. It reads data rather than changing it. Choose named columns when possible so the result clearly describes what your application needs.",
    takeaway: "SELECT chooses columns; FROM chooses the table.",
  },
  {
    id: "sql-where",
    topic_id: "sql-basics",
    title: "WHERE narrows the rows, not the columns.",
    content:
      "SELECT title FROM lessons WHERE topic_id = 'plants'; returns titles only for lessons whose topic_id matches plants. SELECT defines the columns and WHERE tests each row. In production code, pass user input as query parameters instead of joining it into SQL text. The example uses a fixed value solely to explain filtering.",
    takeaway:
      "A query can choose both what to show and which records to include.",
  },
  {
    id: "sql-join",
    topic_id: "sql-basics",
    title: "A JOIN follows a relationship between tables.",
    content:
      "SELECT lessons.title, topics.name FROM lessons JOIN topics ON lessons.topic_id = topics.id; pairs lessons with their matching topics. It is an inner join, so unmatched lessons are left out of the result. We store the topic name once in topics and use its ID to connect the lesson, rather than copying that name into every lesson.",
    takeaway:
      "JOIN reads connected records together without duplicating their stored details.",
  },
  {
    id: "sql-key",
    topic_id: "data-modelling",
    title: "A primary key identifies one record.",
    content:
      "A primary key uniquely identifies each row and cannot be null. In our planned interests table, id is the primary key; a display name can change while the ID stays the same. A topic’s interest_id is a foreign key referring to that ID. The foreign-key constraint checks that a non-null reference points to an existing interest.",
    takeaway: "Primary keys identify; foreign keys connect.",
  },
  {
    id: "sql-junction",
    topic_id: "data-modelling",
    title: "A save is a relationship, not a copy of a lesson.",
    content:
      "The planned saved_lessons table connects user_id and lesson_id. One user can save many lessons, and one lesson can be saved by many users. A unique constraint on the pair prevents duplicate saves by the same person. Unsaving removes the relationship row; it does not delete the lesson for everyone else.",
    takeaway: "A junction table records a many-to-many relationship.",
  },
  {
    id: "sql-null",
    topic_id: "data-modelling",
    title: "NULL means no assigned value.",
    content:
      "Our planned topics.interest_id allows NULL. With ON DELETE SET NULL, deleting an interest retains its topics but clears their reference to that interest. The lessons still point to their topics. To find unassigned topics, use WHERE interest_id IS NULL, not = NULL: SQL uses special rules for unknown values.",
    takeaway:
      "Nullable relationships can preserve useful records when a parent is removed.",
  },
  {
    id: "trees",
    topic_id: "plants",
    title: "A tree is building itself out of air.",
    content:
      "Most of a tree’s dry mass comes from carbon dioxide in the air, not from the soil. During photosynthesis, leaves use sunlight to combine carbon dioxide and water into sugars. The tree uses those sugars for energy and as building material for wood, roots and leaves. Soil still supplies essential minerals, but the carbon in a wooden chair once floated in the atmosphere.",
    takeaway: "Wood is, in a very real sense, captured air.",
  },
  {
    id: "space-design",
    topic_id: "visual",
    title: "Empty space does a lot of work.",
    content:
      "Negative space is the area around and between elements in a design. Giving a heading room makes it easier to spot; separating groups helps us understand which items belong together. You can try it on a shopping list: add a blank line between produce and pantry items. Nothing was added to the list, but its structure became clearer.",
    takeaway: "Space is a tool for organising attention.",
  },
  {
    id: "moon",
    topic_id: "space",
    title: "We all see the same side of the Moon.",
    content:
      "The Moon rotates once on its axis in about the same time it takes to orbit Earth. This synchronisation is called tidal locking. It means roughly the same hemisphere always faces us, even though the Moon does rotate. Its far side gets sunlight too: “far side” describes its direction from Earth, not permanent darkness.",
    takeaway: "The far side of the Moon is not the dark side.",
  },
  {
    id: "words",
    topic_id: "language",
    title: "Languages are always borrowing.",
    content:
      "English borrowed “piano” from Italian, “ballet” from French and “kindergarten” from German. When people trade, travel and share ideas, words travel with them. Borrowed words may gradually change their pronunciation or meaning in their new language. A language’s vocabulary is a record of contact, rather than a sealed collection.",
    takeaway: "A familiar word can hold a history of exchange.",
  },
  {
    id: "fungi",
    topic_id: "ecosystems",
    title: "The forest has a recycling crew.",
    content:
      "Fungi break down dead leaves and wood by releasing enzymes outside their bodies. They then absorb some of the smaller molecules produced. This decomposition helps return nutrients to the ecosystem, where other organisms can use them. Without decomposers such as fungi and bacteria, dead material would accumulate and nutrients would stay locked away.",
    takeaway: "Decay is part of how an ecosystem renews itself.",
  },
  {
    id: "handles",
    topic_id: "everyday",
    title: "A good handle explains itself.",
    content:
      "An affordance is an action an object makes possible. A handle affords pulling; a flat plate can support pushing. Visible cues, called signifiers, help people notice those possibilities. A door becomes confusing when its cues suggest the wrong action. Good design makes the intended use easy to discover without a separate instruction sheet.",
    takeaway: "Look for the clues an object gives you about using it.",
  },
  {
    id: "sky",
    topic_id: "physics",
    title: "Why the sky saves blue for daytime.",
    content:
      "Sunlight contains many wavelengths. Molecules in the atmosphere scatter shorter wavelengths more strongly than longer ones, sending blue light towards us from many directions. At sunset, sunlight takes a longer path through the air. More of the shorter wavelengths are scattered out of that direct path, leaving warmer reds and oranges.",
    takeaway: "The colour changes because the light’s path changes.",
  },
  {
    id: "paper",
    topic_id: "history",
    title: "Paper changed who could keep a record.",
    content:
      "Papermaking developed in China and spread across Asia, then into the Middle East and Europe over centuries. Compared with some earlier writing materials, paper could be made in large quantities from plant fibres. Together with later printing methods, it helped make records, books and correspondence more widely available. An everyday sheet is part of a long history of shared knowledge.",
    takeaway: "An ordinary material can reshape how ideas travel.",
  },
  {
    id: "seeds",
    topic_id: "plants",
    title: "Seeds have more than one travel plan.",
    content:
      "Plants cannot walk to a new home, but their seeds can travel. Dandelion seeds catch air with fine hairs. Burrs hitch a ride on fur, while fruits can attract animals that carry or eat them. These different structures help seeds spread away from the parent plant, where they may find light, water and space to grow.",
    takeaway: "A seed’s shape often reveals how it travels.",
  },
  {
    id: "contrast",
    topic_id: "visual",
    title: "Contrast helps you find the important bit.",
    content:
      "Contrast is a noticeable difference: light against dark, large beside small, or bold next to regular text. Designers use it to build a visual hierarchy so readers can find headings, actions and details. If everything is equally bold, the hierarchy disappears. A useful test is to squint at a page and notice what still stands out.",
    takeaway: "Emphasising fewer things makes each one clearer.",
  },
  {
    id: "orbits",
    topic_id: "space",
    title: "An orbit is a very long fall.",
    content:
      "Gravity pulls an orbiting satellite towards Earth. At the same time, the satellite moves sideways fast enough that Earth’s surface curves away beneath it. It keeps falling without reaching the ground. Astronauts in orbit float because they and their spacecraft are falling together, not because gravity has vanished.",
    takeaway: "Orbiting means falling around a planet.",
  },
  {
    id: "alphabet",
    topic_id: "language",
    title: "An alphabet is a compact idea.",
    content:
      "Alphabetic writing systems use a relatively small set of symbols to represent speech sounds. Other systems may represent syllables or meaningful units, and many combine approaches. No system captures every detail of spoken language. Writing is a practical set of conventions that a community learns to turn marks into meaning.",
    takeaway: "Writing systems organise language in different ways.",
  },
];
export function topicFor(lesson: Lesson) {
  return topics.find((t) => t.id === lesson.topic_id)!;
}
export function interestFor(lesson: Lesson) {
  return interests.find((i) => i.id === topicFor(lesson).interest_id);
}
