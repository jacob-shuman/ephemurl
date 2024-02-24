// Custom Events
export const URL_UPDATE_EVENT = "ephemurl:url-update";
export type UrlUpdateEventDetail = { url: string };

export const PALETTE_TOGGLE_EVENT = "ephemurl:palette-toggle";
export type PaletteToggleEvent = { opened: boolean };

// DEPRECRATED
export const PARAM_UPDATE_EVENT = "ephemurl:param-update";
export type ParamUpdateEventDetail<Params> = { url: string; params: Params };

// Projects
export interface Project {
  name: string;
  icon: string;
  status: "ready" | "unplanned" | "planned";
  url?: string;
  repo?: string;
}

export const tools: Project[] = [
  {
    name: "countdown",
    icon: "tabler:time-duration-5",
    url: "https://countdown.ephm.app",
    repo: "jacob-shuman/ephemurl-countdown",
    status: "unplanned",
  },
  {
    name: "spotify_comparator",
    icon: "tabler:brand-spotify",
    url: "https://spotifycomparator.ephm.app",
    repo: "jacob-shuman/ephemurl-spotifycomparator",
    status: "unplanned",
  },
  {
    name: "pomodoro",
    icon: "tabler:time-duration-30",
    url: "https://pomodoro.ephm.app",
    repo: "jacob-shuman/ephemurl-pomodoro",
    status: "unplanned",
  },
  {
    name: "clock",
    icon: "tabler:clock-hour-7",
    url: "https://clock.ephm.app",
    repo: "jacob-shuman/ephemurl-clock",
    status: "unplanned",
  },
  {
    name: "themes",
    icon: "tabler:palette",
    url: "https://themes.ephm.app",
    repo: "jacob-shuman/ephemurl-themes",
    status: "unplanned",
  },
  {
    name: "stopwatch",
    icon: "tabler:alarm",
    url: "https://stopwatch.ephm.app",
    repo: "jacob-shuman/ephemurl-stopwatch",
    status: "unplanned",
  },
  {
    name: "tracker",
    icon: "tabler:clipboard-list",
    url: "https://tracker.ephm.app",
    repo: "jacob-shuman/ephemurl-tracker",
    status: "unplanned",
  },
  {
    name: "weather",
    icon: "tabler:cloud",
    url: "https://weather.ephm.app",
    repo: "jacob-shuman/ephemurl-weather",
    status: "unplanned",
  },
  {
    name: "notes",
    icon: "tabler:pencil",
    url: "https://notes.ephm.app",
    repo: "jacob-shuman/ephemurl-notes",
    status: "unplanned",
  },
  {
    name: "todo",
    icon: "tabler:list",
    url: "https://todo.ephm.app",
    repo: "jacob-shuman/ephemurl-todo",
    status: "unplanned",
  },
  {
    name: "calculator",
    icon: "tabler:calculator",
    url: "https://calculator.ephm.app",
    repo: "jacob-shuman/ephemurl-calculator",
    status: "unplanned",
  },
  {
    name: "spreadsheet",
    icon: "tabler:file-spreadsheet",
    url: "https://spreadsheet.ephm.app",
    repo: "jacob-shuman/ephemurl-spreadsheet",
    status: "unplanned",
  },
  {
    name: "bip39",
    icon: "tabler:wall",
    url: "https://bip39.ephm.app",
    repo: "jacob-shuman/ephemurl-bip39",
    status: "unplanned",
  },
  {
    name: "speedometer",
    icon: "tabler:car",
    url: "https://speedometer.ephm.app",
    repo: "jacob-shuman/ephemurl-speedometer",
    status: "unplanned",
  },
  {
    name: "compass",
    icon: "tabler:compass",
    url: "https://compass.ephm.app",
    repo: "jacob-shuman/ephemurl-compass",
    status: "unplanned",
  },
  {
    name: "level",
    icon: "tabler:scale",
    url: "https:/level.ephm.app",
    repo: "jacob-shuman/ephemurl-level",
    status: "unplanned",
  },
  {
    name: "dice",
    icon: "tabler:dice",
    url: "https:/dice.ephm.app",
    repo: "jacob-shuman/ephemurl-dice",
    status: "unplanned",
  },
  {
    name: "calendar_event",
    icon: "tabler:calendar-event",
    url: "https:/calendarevent.ephm.app",
    repo: "jacob-shuman/ephemurl-calendarevent",
    status: "unplanned",
  },
];

export const games: Project[] = [
  {
    name: "tic_tac_toe",
    icon: "tabler:grid-3x3",
    url: "https://tictactoe.ephm.app",
    repo: "jacob-shuman/ephemurl-tictactoe",
    status: "unplanned",
  },
  {
    name: "connect_4",
    icon: "tabler:circle",
    url: "https://connect4.ephm.app",
    repo: "jacob-shuman/ephemurl-connect4",
    status: "unplanned",
  },
  {
    name: "battleship",
    icon: "tabler:ship",
    url: "https://battleship.ephm.app",
    repo: "jacob-shuman/ephemurl-battleship",
    status: "unplanned",
  },
  {
    name: "forehead_game",
    icon: "tabler:mood-smile",
    url: "https://foreheadgame.ephm.app",
    repo: "jacob-shuman/ephemurl-foreheadgame",
    status: "unplanned",
  },
  {
    name: "mastermind",
    icon: "tabler:password",
    url: "https://mastermind.ephm.app",
    repo: "jacob-shuman/ephemurl-mastermind",
    status: "unplanned",
  },
  {
    name: "wordle",
    icon: "tabler:book-2",
    url: "https://wordle.ephm.app",
    repo: "jacob-shuman/ephemurl-wordle",
    status: "unplanned",
  },
  {
    name: "chess",
    icon: "tabler:chess-knight",
    url: "https://chess.ephm.app",
    repo: "jacob-shuman/ephemurl-chess",
    status: "unplanned",
  },
  {
    name: "chess_clock",
    icon: "tabler:chess-queen",
    url: "https://chessclock.ephm.app",
    repo: "jacob-shuman/ephemurl-chessclock",
    status: "unplanned",
  },
  {
    name: "checkers",
    icon: "tabler:coins",
    url: "https://checkers.ephm.app",
    repo: "jacob-shuman/ephemurl-checkers",
    status: "unplanned",
  },
  {
    name: "memory",
    icon: "tabler:layout-grid",
    url: "https://memory.ephm.app",
    repo: "jacob-shuman/ephemurl-memory",
    status: "unplanned",
  },
  {
    name: "minesweeper",
    icon: "tabler:bomb",
    url: "https://minesweeper.ephm.app",
    repo: "jacob-shuman/ephemurl-minesweeper",
    status: "unplanned",
  },
  {
    name: "sudoku",
    icon: "tabler:grid-4x4",
    url: "https://minesweeper.ephm.app",
    repo: "jacob-shuman/ephemurl-minesweeper",
    status: "unplanned",
  },
];

export const modules: Project[] = [
  {
    name: "db",
    icon: "tabler:database",
    repo: "jacob-shuman/ephemurl-db",
    status: "unplanned",
  },
];
