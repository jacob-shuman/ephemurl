export const PARAM_UPDATE_EVENT = "ephemurl:param-update";

export type Params = {
  theme: "dark" | "light" | "system" | "system-dark";
};

export type ParamUpdateEventDetail<Params> = { url: string; params: Params };

export interface Project {
  name: string;
  icon: string;
  status: "ready" | "planned";
  url?: string;
  repo?: string;
}

export const tools: Project[] = [
  {
    name: "countdown",
    icon: "tabler:time-duration-5",
    url: "https://countdown.ephm.app",
    repo: "jacob-shuman/ephemurl-countdown",
    status: "planned",
  },
  {
    name: "pomodoro",
    icon: "tabler:time-duration-30",
    url: "https://pomodoro.ephm.app",
    repo: "jacob-shuman/ephemurl-pomodoro",
    status: "planned",
  },
  {
    name: "clock",
    icon: "tabler:clock-hour-7",
    url: "https://clock.ephm.app",
    repo: "jacob-shuman/ephemurl-clock",
    status: "planned",
  },
  {
    name: "stopwatch",
    icon: "tabler:alarm",
    url: "https://stopwatch.ephm.app",
    repo: "jacob-shuman/ephemurl-stopwatch",
    status: "planned",
  },
  {
    name: "tracker",
    icon: "tabler:clipboard-list",
    url: "https://tracker.ephm.app",
    repo: "jacob-shuman/ephemurl-tracker",
    status: "planned",
  },
  {
    name: "weather",
    icon: "tabler:cloud",
    url: "https://weather.ephm.app",
    repo: "jacob-shuman/ephemurl-weather",
    status: "planned",
  },
  {
    name: "notes",
    icon: "tabler:pencil",
    url: "https://notes.ephm.app",
    repo: "jacob-shuman/ephemurl-notes",
    status: "planned",
  },
  {
    name: "todo",
    icon: "tabler:list",
    url: "https://todo.ephm.app",
    repo: "jacob-shuman/ephemurl-todo",
    status: "planned",
  },
  {
    name: "calculator",
    icon: "tabler:calculator",
    url: "https://calculator.ephm.app",
    repo: "jacob-shuman/ephemurl-calculator",
    status: "planned",
  },
  {
    name: "spreadsheet",
    icon: "tabler:file-spreadsheet",
    url: "https://spreadsheet.ephm.app",
    repo: "jacob-shuman/ephemurl-spreadsheet",
    status: "planned",
  },
  {
    name: "bip39",
    icon: "tabler:wall",
    url: "https://bip39.ephm.app",
    repo: "jacob-shuman/ephemurl-bip39",
    status: "planned",
  },
  {
    name: "speedometer",
    icon: "tabler:car",
    url: "https://speedometer.ephm.app",
    repo: "jacob-shuman/ephemurl-speedometer",
    status: "planned",
  },
  {
    name: "compass",
    icon: "tabler:compass",
    url: "https://compass.ephm.app",
    repo: "jacob-shuman/ephemurl-compass",
    status: "planned",
  },
  {
    name: "level",
    icon: "tabler:scale",
    url: "https:/level.ephm.app",
    repo: "jacob-shuman/ephemurl-level",
    status: "planned",
  },
  {
    name: "dice",
    icon: "tabler:dice",
    url: "https:/dice.ephm.app",
    repo: "jacob-shuman/ephemurl-dice",
    status: "planned",
  },
  {
    name: "calendar_event",
    icon: "tabler:calendar-event",
    url: "https:/calendarevent.ephm.app",
    repo: "jacob-shuman/ephemurl-calendarevent",
    status: "planned",
  },
];

export const games: Project[] = [
  {
    name: "tic_tac_toe",
    icon: "tabler:grid-3x3",
    url: "https://tictactoe.ephm.app",
    repo: "jacob-shuman/ephemurl-tictactoe",
    status: "planned",
  },
  {
    name: "connect_4",
    icon: "tabler:circle",
    url: "https://connect4.ephm.app",
    repo: "jacob-shuman/ephemurl-connect4",
    status: "planned",
  },
  {
    name: "battleship",
    icon: "tabler:ship",
    url: "https://battleship.ephm.app",
    repo: "jacob-shuman/ephemurl-battleship",
    status: "planned",
  },
  {
    name: "forehead_game",
    icon: "tabler:mood-smile",
    url: "https://foreheadgame.ephm.app",
    repo: "jacob-shuman/ephemurl-foreheadgame",
    status: "planned",
  },
  {
    name: "mastermind",
    icon: "tabler:password",
    url: "https://mastermind.ephm.app",
    repo: "jacob-shuman/ephemurl-mastermind",
    status: "planned",
  },
  {
    name: "wordle",
    icon: "tabler:book-2",
    url: "https://wordle.ephm.app",
    repo: "jacob-shuman/ephemurl-wordle",
    status: "planned",
  },
  {
    name: "chess",
    icon: "tabler:chess-knight",
    url: "https://chess.ephm.app",
    repo: "jacob-shuman/ephemurl-chess",
    status: "planned",
  },
  {
    name: "chess_clock",
    icon: "tabler:chess-queen",
    url: "https://chessclock.ephm.app",
    repo: "jacob-shuman/ephemurl-chessclock",
    status: "planned",
  },
  {
    name: "checkers",
    icon: "tabler:coins",
    url: "https://checkers.ephm.app",
    repo: "jacob-shuman/ephemurl-checkers",
    status: "planned",
  },
  {
    name: "memory",
    icon: "tabler:layout-grid",
    url: "https://memory.ephm.app",
    repo: "jacob-shuman/ephemurl-memory",
    status: "planned",
  },
  {
    name: "minesweeper",
    icon: "tabler:bomb",
    url: "https://minesweeper.ephm.app",
    repo: "jacob-shuman/ephemurl-minesweeper",
    status: "planned",
  },
  {
    name: "sudoku",
    icon: "tabler:grid-4x4",
    url: "https://minesweeper.ephm.app",
    repo: "jacob-shuman/ephemurl-minesweeper",
    status: "planned",
  },
];

export const modules: Project[] = [
  {
    name: "db",
    icon: "tabler:database",
    repo: "jacob-shuman/ephemurl-db",
    status: "planned",
  },
];
