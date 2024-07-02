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
    name: "badge",
    icon: "tabler:badge",
    url: "https://badge.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/badge",
      label: "badge",
    },
  },
  {
    name: "counter",
    icon: "tabler:plus-minus",
    url: "https://counter.ephm.app",
    status: "ready",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/counter",
      label: "counter",
    },
  },
  {
    name: "qr",
    icon: "tabler:qrcode",
    url: "https://qr.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/qr",
      label: "qr",
    },
  },
  {
    name: "countdown",
    icon: "tabler:time-duration-5",
    url: "https://countdown.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/countdown",
      label: "countdown",
    },
  },
  {
    name: "coin_flip",
    icon: "tabler:coin-filled",
    url: "https://coinflip.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/coinflip",
      label: "coinflip",
    },
  },
  {
    name: "spotify_comparator",
    icon: "tabler:brand-spotify",
    url: "https://spotifycomparator.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/spotifycomparator",
      label: "spotifycomparator",
    },
  },
  {
    name: "golf_scorecard",
    icon: "tabler:golf",
    url: "https://golfscorecard.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/golfscorecard",
      label: "golfscorecard",
    },
  },
  {
    name: "teleprompter",
    icon: "tabler:device-desktop",
    url: "https://teleprompter.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/teleprompter",
      label: "teleprompter",
    },
  },
  {
    name: "pomodoro",
    icon: "tabler:time-duration-30",
    url: "https://pomodoro.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/pomodoro",
      label: "pomodoro",
    },
  },
  {
    name: "clock",
    icon: "tabler:clock-hour-7",
    url: "https://clock.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/clock",
      label: "clock",
    },
  },
  {
    name: "hacker_news",
    icon: "tabler:news",
    url: "https://hackernews.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/hackernews",
      label: "hackernews",
    },
  },
  {
    name: "themes",
    icon: "tabler:palette",
    url: "https://themes.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/themes",
      label: "themes",
    },
  },
  {
    name: "stopwatch",
    icon: "tabler:alarm",
    url: "https://stopwatch.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/stopwatch",
      label: "stopwatch",
    },
  },
  {
    name: "tracker",
    icon: "tabler:clipboard-list",
    url: "https://tracker.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/tracker",
      label: "tracker",
    },
  },
  {
    name: "weather",
    icon: "tabler:cloud",
    url: "https://weather.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/weather",
      label: "weather",
    },
  },
  {
    name: "notes",
    icon: "tabler:pencil",
    url: "https://notes.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/notes",
      label: "notes",
    },
  },
  {
    name: "todo",
    icon: "tabler:list",
    url: "https://todo.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/todo",
      label: "todo",
    },
  },
  {
    name: "calculator",
    icon: "tabler:calculator",
    url: "https://calculator.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/calculator",
      label: "calculator",
    },
  },
  {
    name: "spreadsheet",
    icon: "tabler:file-spreadsheet",
    url: "https://spreadsheet.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/spreadsheet",
      label: "spreadsheet",
    },
  },
  {
    name: "bip39",
    icon: "tabler:wall",
    url: "https://bip39.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/bip39",
      label: "bip39",
    },
  },
  {
    name: "speedometer",
    icon: "tabler:car",
    url: "https://speedometer.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/speedometer",
      label: "speedometer",
    },
  },
  {
    name: "compass",
    icon: "tabler:compass",
    url: "https://compass.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/compass",
      label: "compass",
    },
  },
  {
    name: "level",
    icon: "tabler:scale",
    url: "https:/level.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/level",
      label: "level",
    },
  },
  {
    name: "dice",
    icon: "tabler:dice",
    url: "https://dice.ephm.app",
    status: "ready",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/dice",
      label: "dice",
    },
  },
  {
    name: "calendar_event",
    icon: "tabler:calendar-event",
    url: "https://calendarevent.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/calendarevent",
      label: "calendarevent",
    },
  },
  {
    name: "chess_clock",
    icon: "tabler:chess-queen",
    url: "https://chessclock.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/chessclock",
      label: "chessclock",
    },
  },
];

export const games: Project[] = [
  {
    name: "rock_paper_scissors",
    icon: "tabler:scissors",
    url: "https://rockpaperscissors.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/rockpaperscissors",
      label: "rockpaperscissors",
    },
  },
  {
    name: "tic_tac_toe",
    icon: "tabler:grid-3x3",
    url: "https://tictactoe.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/tictactoe",
      label: "tictactoe",
    },
  },
  {
    name: "connect_4",
    icon: "tabler:circle",
    url: "https://connect4.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/connect4",
      label: "connect4",
    },
  },
  {
    name: "battleship",
    icon: "tabler:ship",
    url: "https://battleship.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/battleship",
      label: "battleship",
    },
  },
  {
    name: "forehead_game",
    icon: "tabler:mood-smile",
    url: "https://foreheadgame.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/foreheadgame",
      label: "foreheadgame",
    },
  },
  {
    name: "mastermind",
    icon: "tabler:password",
    url: "https://mastermind.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/mastermind",
      label: "mastermind",
    },
  },
  {
    name: "word_game",
    icon: "tabler:book-2",
    url: "https://wordgame.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/wordgame",
      label: "word_game",
    },
  },
  {
    name: "chess",
    icon: "tabler:chess-knight",
    url: "https://chess.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/chess",
      label: "chess",
    },
  },
  {
    name: "checkers",
    icon: "tabler:coins",
    url: "https://checkers.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/checkers",
      label: "checkers",
    },
  },
  {
    name: "memory",
    icon: "tabler:layout-grid",
    url: "https://memory.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/memory",
      label: "memory",
    },
  },
  {
    name: "minesweeper",
    icon: "tabler:bomb",
    url: "https://minesweeper.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/minesweeper",
      label: "minesweeper",
    },
  },
  {
    name: "sudoku",
    icon: "tabler:grid-4x4",
    url: "https://minesweeper.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/minesweeper",
      label: "minesweeper",
    },
  },
  {
    name: "virtual_pet",
    icon: "tabler:cat",
    url: "https://virtualpet.ephm.app",
    status: "unplanned",
    repo: {
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/apps/virtualpet",
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
      url: "https://github.com/jacob-shuman/ephemurl/tree/main/shared/db",
      label: "db",
    },
  },
];
