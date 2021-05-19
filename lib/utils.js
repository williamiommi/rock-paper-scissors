export const WIN = "w";
export const LOSE = "l";
export const TIE = "t";

export const ROCK = {
  id: 0,
  name: "Rock",
  flag: "/icon-rock.svg",
};

export const PAPER = {
  id: 1,
  name: "Paper",
  flag: "/icon-paper.svg",
};

export const SCISSORS = {
  id: 2,
  name: "Scissors",
  flag: "/icon-scissors.svg",
};

export const LIZARD = {
  id: 3,
  name: "Lizard",
  flag: "/icon-lizard.svg",
};

export const SPOCK = {
  id: 4,
  name: "Spock",
  flag: "/icon-spock.svg",
};

export const ROCK_PAPER_SCISSORS = [
  [TIE, LOSE, WIN],
  [WIN, TIE, LOSE],
  [LOSE, WIN, TIE],
];

export const ROCK_PAPER_SCISSORS_LIZARD_SPOCK = [
  [TIE, LOSE, WIN, WIN, LOSE],
  [WIN, TIE, LOSE, LOSE, WIN],
  [LOSE, WIN, TIE, WIN, LOSE],
  [LOSE, WIN, LOSE, TIE, WIN],
  [WIN, LOSE, WIN, LOSE, TIE],
];

const play = (type, user, house) => type[user.id][house.id];

export const playRockPaperScissors = (user, house) =>
  play(ROCK_PAPER_SCISSORS, user, house);
export const playRockPaperScissorsLizardSpock = (user, house) =>
  play(ROCK_PAPER_SCISSORS_LIZARD_SPOCK, user, house);
