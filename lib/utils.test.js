import {
  WIN,
  LOSE,
  TIE,
  ROCK,
  PAPER,
  SCISSORS,
  playRockPaperScissors,
  LIZARD,
  SPOCK,
  playRockPaperScissorsLizardSpock,
} from "./utils";

describe("test playRockPaperScissors", () => {
  test("user pick rock", () => {
    expect(playRockPaperScissors(ROCK, ROCK)).toBe(TIE);
    expect(playRockPaperScissors(ROCK, PAPER)).toBe(LOSE);
    expect(playRockPaperScissors(ROCK, SCISSORS)).toBe(WIN);
  });

  test("user pick paper", () => {
    expect(playRockPaperScissors(PAPER, ROCK)).toBe(WIN);
    expect(playRockPaperScissors(PAPER, PAPER)).toBe(TIE);
    expect(playRockPaperScissors(PAPER, SCISSORS)).toBe(LOSE);
  });

  test("user pick scissors", () => {
    expect(playRockPaperScissors(SCISSORS, ROCK)).toBe(LOSE);
    expect(playRockPaperScissors(SCISSORS, PAPER)).toBe(WIN);
    expect(playRockPaperScissors(SCISSORS, SCISSORS)).toBe(TIE);
  });
});

describe("test playRockPaperScissorsLizardSpock", () => {
  test("user pick rock", () => {
    expect(playRockPaperScissorsLizardSpock(ROCK, ROCK)).toBe(TIE);
    expect(playRockPaperScissorsLizardSpock(ROCK, PAPER)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(ROCK, SCISSORS)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(ROCK, LIZARD)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(ROCK, SPOCK)).toBe(LOSE);
  });

  test("user pick paper", () => {
    expect(playRockPaperScissorsLizardSpock(PAPER, ROCK)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(PAPER, PAPER)).toBe(TIE);
    expect(playRockPaperScissorsLizardSpock(PAPER, SCISSORS)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(PAPER, LIZARD)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(PAPER, SPOCK)).toBe(WIN);
  });

  test("user pick scissors", () => {
    expect(playRockPaperScissorsLizardSpock(SCISSORS, ROCK)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(SCISSORS, PAPER)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(SCISSORS, SCISSORS)).toBe(TIE);
    expect(playRockPaperScissorsLizardSpock(SCISSORS, LIZARD)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(SCISSORS, SPOCK)).toBe(LOSE);
  });

  test("user pick lizard", () => {
    expect(playRockPaperScissorsLizardSpock(LIZARD, ROCK)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(LIZARD, PAPER)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(LIZARD, SCISSORS)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(LIZARD, LIZARD)).toBe(TIE);
    expect(playRockPaperScissorsLizardSpock(LIZARD, SPOCK)).toBe(WIN);
  });

  test("user pick spock", () => {
    expect(playRockPaperScissorsLizardSpock(SPOCK, ROCK)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(SPOCK, PAPER)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(SPOCK, SCISSORS)).toBe(WIN);
    expect(playRockPaperScissorsLizardSpock(SPOCK, LIZARD)).toBe(LOSE);
    expect(playRockPaperScissorsLizardSpock(SPOCK, SPOCK)).toBe(TIE);
  });
});
