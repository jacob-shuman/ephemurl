// Custom Events
export const PALETTE_TOGGLE_EVENT = "ephemurl:palette-toggle";
export type PaletteToggleEvent = { opened: boolean };

// Projects
export interface Project {
  name: string;
  icon: string;
  url?: string;
  repo?: { url: string; label: string };
  status: "ready" | "unplanned" | "planned";
}

export const tools: Project[] = [
  {
    name: "counter",
    icon: "tabler:plus-minus",
    url: "https://counter.ephm.app",
    status: "planned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/counter",
      label: "counter",
    },
  },
  {
    name: "countdown",
    icon: "tabler:time-duration-5",
    url: "https://countdown.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/countdown",
      label: "countdown",
    },
  },
  {
    name: "spotify_comparator",
    icon: "tabler:brand-spotify",
    url: "https://spotifycomparator.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/spotifycomparator",
      label: "spotifycomparator",
    },
  },
  {
    name: "teleprompter",
    icon: "tabler:device-desktop",
    url: "https://teleprompter.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/teleprompter",
      label: "teleprompter",
    },
  },
  {
    name: "pomodoro",
    icon: "tabler:time-duration-30",
    url: "https://pomodoro.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/pomodoro",
      label: "pomodoro",
    },
  },
  {
    name: "clock",
    icon: "tabler:clock-hour-7",
    url: "https://clock.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/clock",
      label: "clock",
    },
  },
  {
    name: "hacker_news",
    icon: "tabler:news",
    url: "https://hackernews.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/hackernews",
      label: "hackernews",
    },
  },
  {
    name: "themes",
    icon: "tabler:palette",
    url: "https://themes.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/themes",
      label: "themes",
    },
  },
  {
    name: "stopwatch",
    icon: "tabler:alarm",
    url: "https://stopwatch.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/stopwatch",
      label: "stopwatch",
    },
  },
  {
    name: "tracker",
    icon: "tabler:clipboard-list",
    url: "https://tracker.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/tracker",
      label: "tracker",
    },
  },
  {
    name: "weather",
    icon: "tabler:cloud",
    url: "https://weather.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/weather",
      label: "weather",
    },
  },
  {
    name: "notes",
    icon: "tabler:pencil",
    url: "https://notes.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/notes",
      label: "notes",
    },
  },
  {
    name: "todo",
    icon: "tabler:list",
    url: "https://todo.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/todo",
      label: "todo",
    },
  },
  {
    name: "calculator",
    icon: "tabler:calculator",
    url: "https://calculator.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/calculator",
      label: "calculator",
    },
  },
  {
    name: "spreadsheet",
    icon: "tabler:file-spreadsheet",
    url: "https://spreadsheet.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/spreadsheet",
      label: "spreadsheet",
    },
  },
  {
    name: "bip39",
    icon: "tabler:wall",
    url: "https://bip39.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/bip39",
      label: "bip39",
    },
  },
  {
    name: "speedometer",
    icon: "tabler:car",
    url: "https://speedometer.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/speedometer",
      label: "speedometer",
    },
  },
  {
    name: "compass",
    icon: "tabler:compass",
    url: "https://compass.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/compass",
      label: "compass",
    },
  },
  {
    name: "level",
    icon: "tabler:scale",
    url: "https:/level.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/level",
      label: "level",
    },
  },
  {
    name: "dice",
    icon: "tabler:dice",
    url: "https:/dice.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/dice",
      label: "dice",
    },
  },
  {
    name: "calendar_event",
    icon: "tabler:calendar-event",
    url: "https:/calendarevent.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/calendarevent",
      label: "calendarevent",
    },
  },
];

export const games: Project[] = [
  {
    name: "tic_tac_toe",
    icon: "tabler:grid-3x3",
    url: "https://tictactoe.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/tictactoe",
      label: "tictactoe",
    },
  },
  {
    name: "connect_4",
    icon: "tabler:circle",
    url: "https://connect4.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/connect4",
      label: "connect4",
    },
  },
  {
    name: "battleship",
    icon: "tabler:ship",
    url: "https://battleship.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/battleship",
      label: "battleship",
    },
  },
  {
    name: "forehead_game",
    icon: "tabler:mood-smile",
    url: "https://foreheadgame.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/foreheadgame",
      label: "foreheadgame",
    },
  },
  {
    name: "mastermind",
    icon: "tabler:password",
    url: "https://mastermind.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/mastermind",
      label: "mastermind",
    },
  },
  {
    name: "wordle",
    icon: "tabler:book-2",
    url: "https://wordle.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/wordle",
      label: "wordle",
    },
  },
  {
    name: "chess",
    icon: "tabler:chess-knight",
    url: "https://chess.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/chess",
      label: "chess",
    },
  },
  {
    name: "chess_clock",
    icon: "tabler:chess-queen",
    url: "https://chessclock.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/chessclock",
      label: "chessclock",
    },
  },
  {
    name: "checkers",
    icon: "tabler:coins",
    url: "https://checkers.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/checkers",
      label: "checkers",
    },
  },
  {
    name: "memory",
    icon: "tabler:layout-grid",
    url: "https://memory.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/memory",
      label: "memory",
    },
  },
  {
    name: "minesweeper",
    icon: "tabler:bomb",
    url: "https://minesweeper.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/minesweeper",
      label: "minesweeper",
    },
  },
  {
    name: "sudoku",
    icon: "tabler:grid-4x4",
    url: "https://minesweeper.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/minesweeper",
      label: "minesweeper",
    },
  },
  {
    name: "virtual_pet",
    icon: "tabler:cat",
    url: "https://virtualpet.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/virtualpet",
      label: "virtualpet",
    },
  },
];

export const modules: Project[] = [
  {
    name: "db",
    icon: "tabler:database",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/projects/db",
      label: "db",
    },
  },
];
