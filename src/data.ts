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
  { id: "nature", name: "Nature", symbol: "✳", color: "green" },
  { id: "design", name: "Design", symbol: "◒", color: "pink" },
  { id: "science", name: "Science", symbol: "✦", color: "blue" },
  { id: "culture", name: "Culture", symbol: "◎", color: "orange" },
];
export const topics: Topic[] = [
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
