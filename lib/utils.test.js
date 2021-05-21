import {
  WIN,
  LOSE,
  TIE,
  ROCK,
  PAPER,
  SCISSORS,
  LIZARD,
  SPOCK,
  play,
} from "./utils";

describe("test playRockPaperScissors", () => {
  test("user pick rock", () => {
    expect(play(ROCK, ROCK, true)).toBe(TIE);
    expect(play(ROCK, PAPER, true)).toBe(LOSE);
    expect(play(ROCK, SCISSORS, true)).toBe(WIN);
  });

  test("user pick paper", () => {
    expect(play(PAPER, ROCK, true)).toBe(WIN);
    expect(play(PAPER, PAPER, true)).toBe(TIE);
    expect(play(PAPER, SCISSORS, true)).toBe(LOSE);
  });

  test("user pick scissors", () => {
    expect(play(SCISSORS, ROCK, true)).toBe(LOSE);
    expect(play(SCISSORS, PAPER, true)).toBe(WIN);
    expect(play(SCISSORS, SCISSORS, true)).toBe(TIE);
  });
});

describe("test playRockPaperScissorsLizardSpock", () => {
  test("user pick rock", () => {
    expect(play(ROCK, ROCK, false)).toBe(TIE);
    expect(play(ROCK, PAPER, false)).toBe(LOSE);
    expect(play(ROCK, SCISSORS, false)).toBe(WIN);
    expect(play(ROCK, LIZARD, false)).toBe(WIN);
    expect(play(ROCK, SPOCK, false)).toBe(LOSE);
  });

  test("user pick paper", () => {
    expect(play(PAPER, ROCK, false)).toBe(WIN);
    expect(play(PAPER, PAPER, false)).toBe(TIE);
    expect(play(PAPER, SCISSORS, false)).toBe(LOSE);
    expect(play(PAPER, LIZARD, false)).toBe(LOSE);
    expect(play(PAPER, SPOCK, false)).toBe(WIN);
  });

  test("user pick scissors", () => {
    expect(play(SCISSORS, ROCK, false)).toBe(LOSE);
    expect(play(SCISSORS, PAPER, false)).toBe(WIN);
    expect(play(SCISSORS, SCISSORS, false)).toBe(TIE);
    expect(play(SCISSORS, LIZARD, false)).toBe(WIN);
    expect(play(SCISSORS, SPOCK, false)).toBe(LOSE);
  });

  test("user pick lizard", () => {
    expect(play(LIZARD, ROCK, false)).toBe(LOSE);
    expect(play(LIZARD, PAPER, false)).toBe(WIN);
    expect(play(LIZARD, SCISSORS, false)).toBe(LOSE);
    expect(play(LIZARD, LIZARD, false)).toBe(TIE);
    expect(play(LIZARD, SPOCK, false)).toBe(WIN);
  });

  test("user pick spock", () => {
    expect(play(SPOCK, ROCK, false)).toBe(WIN);
    expect(play(SPOCK, PAPER, false)).toBe(LOSE);
    expect(play(SPOCK, SCISSORS, false)).toBe(WIN);
    expect(play(SPOCK, LIZARD, false)).toBe(LOSE);
    expect(play(SPOCK, SPOCK, false)).toBe(TIE);
  });
});
