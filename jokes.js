const joke_arr = [
  'A young Jewish kid goes up to his Jewish dad and says ” Dad can I borrow $5 dollars"?\nThe dad is shocked and says "$4 dollars? What do you need $3 dollars for"?\n Why do blacks wear white gloves? So they don\'t bite their fingers eating tootsie rolls.',

  "A senior citizen called her husband during his drive home.“Herman, I just heard on the news that there's a car going the wrong way on Interstate 90. Please be careful!”Herman replied, “It's not just one car. There's hundreds of them!”",

  "Q: What's the difference between a shopping trolley and a University vice chancellor?\nA: You fill them both up with as much food and alcohol you can, but it's only the shopping\ntrolley that has a mind of its own.",

  "Q. How do you catch a polar bear?\nA. You cut a hole in the ice and you put peas all round the edge and when the polar bear\ncomes along and stops for a pea, you kick it in the ice hole.\n\nWhy do Marxists like fruit infusions?\nBecause all proper tea is theft!\nWhat was born to succeed?\nA budgie with a blunt beak.",

  `Q: Why should you never iron a four leaf clover?\n
A: You should never press your luck!\n
What lies on the bottom of the ocean and shakes?\n
A nervous wreck.
`,

  `Q: Why do Blondes wear padded shoulders?\n
A: So they don't get a concussion while bobbing their from head side to\n
side as they are saying “I don't know?” whenever you ask them a\n
question.`,

  `Q: Why should you keep a blonde on the job 7 days a week?\n
A: So you don't have to retrain them every Monday.\n
`,
  `Q: What do you call a blonde with 1/2 a brain?\n
A: Gifted.
`,
  `Q: What did the blonde say when she found out she was pregnant?\n
A: I hope it's mine!!!
`,
  `Q: How can you tell if a blonde has been using your lawn mower?\n
A: The green “Welcome” mat is ripped all to shreds.\n
`,
  `Q: What did the blondes mom say before she left for a date?\n
A: If your not in bed by 10, come home!!!!\n
`,
  `Q: Why did the blonde climb the glass wall?\n
A: To see what's on the other side.\n
`,
  `Q: What do you call 2 blondes in a freezer?\n
A: Frosted flakes.\n
`,
  `Q: How do blondes commit suicide?\n
A: They put spikes on their shoulder pads.\n
`,
  `Q: Why are blondes like turtles?\n
A: When on their back, their screwed.
`,
  `Q: How do you confuse a blonde?\n
A: Give her a pack of M&M's and tell her to put them in\n
alphabetical order.\n
`,
  `Q: What is a brunettes mating call?\n
A: Have all the blonde's gone home?\n
`,
  `Q: What is a brunettes mating call?\n
A: Have all the blonde's gone home?\n
`,
  `Q: What does a blonde say first thing in the morning?\n
A: Are all you guys on the same team?\n
`,
  `Q: What do you call a blonde who has dyed her hair black?\n
A: Artificial intelligence.\n
`,
  `Q: How many blondes does it take to make chocolate chip cookies?\n
A: 100 - 1 to stir and 99 to peel the M&Ms.\n
`,
  `Q: How can you tell when a blonde has used your computer?\n
A: Whiteout all over the screen\n
`,
  `Q: How can you tell if she has been back to the computer?\n
A: Writing on the whiteout.\n
`,
];

const random = () => {
  const random = Math.floor(Math.random() * joke_arr.length);
  return joke_arr[random];
};

const text = document.getElementById("joke_text");
const btn = document.getElementById("joke");

btn.addEventListener("click", () => {
  text.innerHTML = random();
});
