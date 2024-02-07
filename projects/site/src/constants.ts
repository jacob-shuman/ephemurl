// import { construct } from "radash";
// TODO: consider replacing valibot with typebox for performance (https://github.com/sinclairzx81/typebox?tab=readme-ov-file)
import * as v from "valibot";
import { buildPalette } from "./theme";

export const ThemeModeSchema = v.fallback(
  v.picklist(["light", "dark", "system", "system-dark"] as const),
  "system-dark"
);

export type ThemeMode = v.Input<typeof ThemeModeSchema>;

export const ThemePropsSchema = v.object({
  fg: v.object({
    100: v.string(),
    200: v.string(),
    300: v.string(),
    400: v.string(),
    500: v.string(),
  }),
  bg: v.object({
    100: v.string(),
    200: v.string(),
    300: v.string(),
    400: v.string(),
    500: v.string(),
  }),
});

export type ThemeProps = v.Input<typeof ThemePropsSchema>;

export const ThemeSchema = v.object({
  borderRadius: v.string(),
  mode: ThemeModeSchema,
  light: ThemePropsSchema,
  dark: ThemePropsSchema,

  fg: v.object({
    100: v.string(),
    200: v.string(),
    300: v.string(),
    400: v.string(),
    500: v.string(),
  }),
  bg: v.object({
    100: v.string(),
    200: v.string(),
    300: v.string(),
    400: v.string(),
    500: v.string(),
  }),
});

export const ParamsSchema = v.object({
  theme: ThemeSchema,
});
export type Params = v.Input<typeof ParamsSchema>;

export const RawParamsSchema = v.transform(
  v.object({
    "theme-border-radius": v.fallback(v.string(), "0.5rem"),
    "theme-mode": v.fallback(
      v.picklist(["light", "dark", "system", "system-dark"] as const),
      "system-dark"
    ),

    "theme-fg": v.optional(v.string()),
    "theme-bg": v.optional(v.string()),

    "theme-fg-light": v.fallback(v.string(), "#007BFF"),
    "theme-bg-light": v.fallback(v.string(), "#FFFFFF"),

    "theme-fg-dark": v.fallback(v.string(), "#007BFF"),
    "theme-bg-dark": v.fallback(v.string(), "#000000"),
  }),
  (p) => {
    const fg = buildPalette(p["theme-fg"] ?? p["theme-fg-light"], 5);
    const fgDark = buildPalette(p["theme-fg"] ?? p["theme-fg-dark"], 5);

    const bg = buildPalette(p["theme-bg"] ?? p["theme-bg-light"], 5);
    const bgDark = buildPalette(p["theme-bg"] ?? p["theme-bg-dark"], 5);

    return {
      theme: {
        borderRadius: p["theme-border-radius"],
        mode: p["theme-mode"],
        light: { fg: { ...fg }, bg: { ...bg } },
        dark: { fg: { ...fgDark }, bg: { ...bgDark } },

        fg,
        bg,
      },
    } as Params;
  }
  // construct(
  //   Object.fromEntries(
  //     Object.entries(x).map(([k, v]) => [k.replaceAll("-", "."), v]),
  //   ),
  // ) as v.Input<typeof ParamsSchema>,
);

// Custom Events
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
