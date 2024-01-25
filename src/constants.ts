export interface Project {
  name: string;
  icon: string;
  inDevelopment: boolean;
  url?: string;
  repo?: string;
}

export const tools: Project[] = [
  {
    name: "countdown",
    icon: "tabler:time-duration-30",
    url: "https://countdown.ephm.app",
    repo: "jacob-shuman/ephemurl-countdown",
    inDevelopment: true,
  },
  {
    name: "clock",
    icon: "tabler:clock-hour-7",
    url: "https://clock.ephm.app",
    repo: "jacob-shuman/ephemurl-clock",
    inDevelopment: true,
  },
  {
    name: "stopwatch",
    icon: "tabler:alarm",
    url: "https://stopwatch.ephm.app",
    repo: "jacob-shuman/ephemurl-stopwatch",
    inDevelopment: true,
  },
  {
    name: "tracker",
    icon: "tabler:clipboard-list",
    url: "https://tracker.ephm.app",
    repo: "jacob-shuman/ephemurl-tracker",
    inDevelopment: false,
  },
  {
    name: "weather",
    icon: "tabler:cloud",
    url: "https://weather.ephm.app",
    repo: "jacob-shuman/ephemurl-weather",
    inDevelopment: false,
  },
  {
    name: "notes",
    icon: "tabler:pencil",
    url: "https://notes.ephm.app",
    repo: "jacob-shuman/ephemurl-notes",
    inDevelopment: false,
  },
  {
    name: "todo",
    icon: "tabler:list",
    url: "https://todo.ephm.app",
    repo: "jacob-shuman/ephemurl-todo",
    inDevelopment: false,
  },
  {
    name: "calculator",
    icon: "tabler:calculator",
    url: "https://calculator.ephm.app",
    repo: "jacob-shuman/ephemurl-calculator",
    inDevelopment: false,
  },
  {
    name: "spreadsheet",
    icon: "tabler:file-spreadsheet",
    url: "https://spreadsheet.ephm.app",
    repo: "jacob-shuman/ephemurl-spreadsheet",
    inDevelopment: false,
  },
];

export const games: Project[] = [
  {
    name: "tic_tac_toe",
    icon: "tabler:grid-3x3",
    url: "https://tictactoe.ephm.app",
    repo: "jacob-shuman/ephemurl-tictactoe",
    inDevelopment: false,
  },
  {
    name: "connect_4",
    icon: "tabler:circle",
    url: "https://connect4.ephm.app",
    repo: "jacob-shuman/ephemurl-connect4",
    inDevelopment: false,
  },
  {
    name: "battleship",
    icon: "tabler:ship",
    url: "https://battleship.ephm.app",
    repo: "jacob-shuman/ephemurl-battleship",
    inDevelopment: false,
  },
  {
    name: "forehead_game",
    icon: "tabler:mood-smile",
    url: "https://foreheadgame.ephm.app",
    repo: "jacob-shuman/ephemurl-foreheadgame",
    inDevelopment: false,
  },
  {
    name: "mastermind",
    icon: "tabler:password",
    url: "https://mastermind.ephm.app",
    repo: "jacob-shuman/ephemurl-mastermind",
    inDevelopment: false,
  },
  {
    name: "wordle",
    icon: "tabler:book-2",
    url: "https://wordle.ephm.app",
    repo: "jacob-shuman/ephemurl-wordle",
    inDevelopment: false,
  },
  {
    name: "chess",
    icon: "tabler:chess-knight",
    url: "https://chess.ephm.app",
    repo: "jacob-shuman/ephemurl-chess",
    inDevelopment: false,
  },
  {
    name: "checkers",
    icon: "tabler:coins",
    url: "https://checkers.ephm.app",
    repo: "jacob-shuman/ephemurl-checkers",
    inDevelopment: false,
  },
  {
    name: "memory",
    icon: "tabler:layout-grid",
    url: "https://memory.ephm.app",
    repo: "jacob-shuman/ephemurl-memory",
    inDevelopment: false,
  },
];

export const modules: Project[] = [
  {
    name: "db",
    icon: "tabler:database",
    repo: "jacob-shuman/ephemurl-db",
    inDevelopment: true,
  },
];
