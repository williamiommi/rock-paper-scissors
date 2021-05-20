export const WIN = "w";
export const LOSE = "l";
export const TIE = "t";

export const ROCK = {
  id: 0,
  name: "Rock",
  img: "/images/icon-rock.svg",
  border: "border-rock-dark",
  bg: "bg-rock-light",
};

export const PAPER = {
  id: 1,
  name: "Paper",
  img: "/images/icon-paper.svg",
  border: "border-paper-dark",
  bg: "bg-paper-light",
};

export const SCISSORS = {
  id: 2,
  name: "Scissors",
  img: "/images/icon-scissors.svg",
  border: "border-scissors-dark",
  bg: "bg-scissors-light",
};

export const LIZARD = {
  id: 3,
  name: "Lizard",
  img: "/images/icon-lizard.svg",
  border: "border-lizard-dark",
  bg: "bg-lizard-light",
};

export const SPOCK = {
  id: 4,
  name: "Spock",
  img: "/images/icon-spock.svg",
  border: "border-spock-dark",
  bg: "bg-spock-light",
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

const getPoints = (localStorageItem) => {
  let currentPoints = window.localStorage.getItem(localStorageItem);
  return currentPoints ? parseInt(currentPoints) : 0;
};

const setWin = (localStorageItem) => {
  let currentPoints = getPoints(localStorageItem);
  window.localStorage.setItem(localStorageItem, currentPoints++);
};

const POINTS_GAME_CLASSIC = "pointsGameClassic";
const POINTS_GAME_BONUS = "pointsGameBonus";

export const getPointsGameClassic = () => {
  return getPoints(POINTS_GAME_CLASSIC);
};

export const setWinGameClassic = () => {
  setWin(POINTS_GAME_CLASSIC);
  return getPointsGameClassic();
};

export const getPointsGameBonus = () => {
  return getPoints(POINTS_GAME_BONUS);
};

export const setWinGameBonus = () => {
  setWin(POINTS_GAME_BONUS);
  return getPointsGameBonus();
};
