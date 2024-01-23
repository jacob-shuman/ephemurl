export interface Project {
  name: string;
  icon: string;
  inDevelopment: boolean;
  url?: string;
  repo?: string;
}

export const modules: Project[] = [
  {
    name: "db",
    icon: "tabler:database",
    repo: "jacob-shuman/ephemurl-db",
    inDevelopment: true,
  },
];

export const tools: Project[] = [
  {
    name: "countdown",
    icon: "tabler:clock-hour-7",
    url: "https://countdown.ephm.appasdffdsa",
    repo: "ephemurl/ephemurl-countdown",
    inDevelopment: true,
  },
  {
    name: "tracker",
    icon: "tabler:clipboard-list",
    url: "https://tracker.ephm.app",
    inDevelopment: false,
  },
  {
    name: "weather",
    icon: "tabler:cloud",
    url: "https://weather.ephm.app",
    inDevelopment: false,
  },
  {
    name: "notes",
    icon: "tabler:pencil",
    url: "https://notes.ephm.app",
    inDevelopment: false,
  },
  {
    name: "todo",
    icon: "tabler:list",
    url: "https://todo.ephm.app",
    inDevelopment: false,
  },
  {
    name: "calculator",
    icon: "tabler:calculator",
    url: "https://calculator.ephm.app",
    inDevelopment: false,
  },
  {
    name: "spreadsheet",
    icon: "tabler:file-spreadsheet",
    url: "https://spreadsheet.ephm.app",
    inDevelopment: false,
  },
];

export const games: Project[] = [
  {
    name: "tic_tac_toe",
    icon: "tabler:grid-3x3",
    url: "https://tictactoe.ephm.app",
    inDevelopment: false,
  },
  {
    name: "connect_4",
    icon: "tabler:circle",
    url: "https://connect4.ephm.app",
    inDevelopment: false,
  },
  {
    name: "battleship",
    icon: "tabler:ship",
    url: "https://battleship.ephm.app",
    inDevelopment: false,
  },
  {
    name: "forehead_game",
    icon: "tabler:mood-smile",
    url: "https://foreheadgame.ephm.app",
    inDevelopment: false,
  },
  {
    name: "mastermind",
    icon: "tabler:password",
    url: "https://mastermind.ephm.app",
    inDevelopment: false,
  },
  {
    name: "wordle",
    icon: "tabler:book-2",
    url: "https://wordle.ephm.app",
    inDevelopment: false,
  },
];
