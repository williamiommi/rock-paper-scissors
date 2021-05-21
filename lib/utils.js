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

export const ROCK_PAPER_SCISSORS = [ROCK, PAPER, SCISSORS];
export const ROCK_PAPER_SCISSORS_LIZARD_SPOCK = [
  ROCK,
  PAPER,
  SCISSORS,
  LIZARD,
  SPOCK,
];

const ROCK_PAPER_SCISSORS_BOARD = [
  [TIE, LOSE, WIN],
  [WIN, TIE, LOSE],
  [LOSE, WIN, TIE],
];

const ROCK_PAPER_SCISSORS_LIZARD_SPOCK_BOARD = [
  [TIE, LOSE, WIN, WIN, LOSE],
  [WIN, TIE, LOSE, LOSE, WIN],
  [LOSE, WIN, TIE, WIN, LOSE],
  [LOSE, WIN, LOSE, TIE, WIN],
  [WIN, LOSE, WIN, LOSE, TIE],
];

const play = (type, user, house) => type[user.id][house.id];

export const playRockPaperScissors = (user, house) =>
  play(ROCK_PAPER_SCISSORS_BOARD, user, house);
export const playRockPaperScissorsLizardSpock = (user, house) =>
  play(ROCK_PAPER_SCISSORS_LIZARD_SPOCK_BOARD, user, house);

const getPoints = (localStorageItem) => {
  let currentPoints = window.localStorage.getItem(localStorageItem);
  return currentPoints ? parseInt(currentPoints) : 0;
};

const POINTS_GAME_CLASSIC = "pointsGameClassic";
const POINTS_GAME_BONUS = "pointsGameBonus";

export const setWin = (isClassicGame) => {
  const localStorageItem = isClassicGame ? POINTS_GAME_CLASSIC : POINTS_GAME_BONUS;
  let currentPoints = getPoints(localStorageItem);
  window.localStorage.setItem(localStorageItem, ++currentPoints);
};

export const getPointsGameClassic = () => {
  return getPoints(POINTS_GAME_CLASSIC);
};

export const getPointsGameBonus = () => {
  return getPoints(POINTS_GAME_BONUS);
};

const getPickByPosition = (number) => {
  switch (number) {
    case ROCK.id:
      return ROCK;
    case PAPER.id:
      return PAPER;
    case SCISSORS.id:
      return SCISSORS;
    case LIZARD.id:
      return LIZARD;
    case SPOCK.id:
      return SPOCK;
    default:
      return null;
  }
};

export const getHousePick = (isClassicGame) => {
  const number = Math.floor(Math.random() * (isClassicGame ? 3 : 5));
  const pick = getPickByPosition(number);
  return pick;
};

export const getWinner = (userPick, housePick, isClassicGame) => {
  const board = isClassicGame ? ROCK_PAPER_SCISSORS_BOARD : ROCK_PAPER_SCISSORS_LIZARD_SPOCK_BOARD;
  return board[userPick.id][housePick.id];
}