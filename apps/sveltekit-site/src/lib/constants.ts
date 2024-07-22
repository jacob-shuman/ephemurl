import {
	IconAlarmFilled,
	IconBadgeFilled,
	IconBombFilled,
	IconBook2,
	IconBrandSpotify,
	IconCalculatorFilled,
	IconCalendarEvent,
	IconCar,
	IconCat,
	IconChessKnightFilled,
	IconChessQueenFilled,
	IconCircleFilled,
	IconCircleLetterB,
	IconClipboardList,
	IconClockHour7,
	IconCloudFilled,
	IconCoinFilled,
	IconCoins,
	IconCompassFilled,
	IconDatabase,
	IconDeviceDesktop,
	IconDiceFilled,
	IconFileSpreadsheet,
	IconGolf,
	IconGrid3x3,
	IconGrid4x4,
	IconLayoutGrid,
	IconList,
	IconMoodSmileFilled,
	IconNews,
	IconPalette,
	IconPassword,
	IconPencil,
	IconPlusMinus,
	IconProgressCheck,
	IconQrcode,
	IconScale,
	IconScissors,
	IconShip,
	IconTimeDuration30,
	IconTimeDuration5,
	IconWall
} from '@tabler/icons-svelte';

// Projects
export interface Project {
	name: string;
	icon?: typeof IconBadgeFilled;
	url?: string;
	repo?: { url: string; label: string };
	status: 'ready' | 'unplanned' | 'planned';
}

export const tools: Project[] = [
	{
		name: 'badge',
		icon: IconBadgeFilled,
		url: 'https://badge.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/badge',
			label: 'badge'
		}
	},
	{
		name: 'counter',
		icon: IconPlusMinus,
		url: 'https://counter.ephm.app',
		status: 'ready',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/counter',
			label: 'counter'
		}
	},
	{
		name: 'qr',
		icon: IconQrcode,
		url: 'https://qr.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/qr',
			label: 'qr'
		}
	},
	{
		name: 'countdown',
		icon: IconTimeDuration5,
		url: 'https://countdown.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/countdown',
			label: 'countdown'
		}
	},
	{
		name: 'coin_flip',
		icon: IconCoinFilled,
		url: 'https://coinflip.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/coinflip',
			label: 'coinflip'
		}
	},
	{
		name: 'spotify_comparator',
		icon: IconBrandSpotify,
		url: 'https://spotifycomparator.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/spotifycomparator',
			label: 'spotifycomparator'
		}
	},
	{
		name: 'golf_scorecard',
		icon: IconGolf,
		url: 'https://golfscorecard.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/golfscorecard',
			label: 'golfscorecard'
		}
	},
	{
		name: 'teleprompter',
		icon: IconDeviceDesktop,
		url: 'https://teleprompter.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/teleprompter',
			label: 'teleprompter'
		}
	},
	{
		name: 'pomodoro',
		icon: IconTimeDuration30,
		url: 'https://pomodoro.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/pomodoro',
			label: 'pomodoro'
		}
	},
	{
		name: 'clock',
		icon: IconClockHour7,
		url: 'https://clock.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/clock',
			label: 'clock'
		}
	},
	{
		name: 'password_meter',
		icon: IconProgressCheck,
		url: 'https://passwordmeter.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/passwordmeter',
			label: 'passwordmeter'
		}
	},
	{
		name: 'hacker_news',
		icon: IconNews,
		url: 'https://hackernews.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/hackernews',
			label: 'hackernews'
		}
	},
	{
		name: 'themes',
		icon: IconPalette,
		url: 'https://themes.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/themes',
			label: 'themes'
		}
	},
	{
		name: 'stopwatch',
		icon: IconAlarmFilled,
		url: 'https://stopwatch.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/stopwatch',
			label: 'stopwatch'
		}
	},
	{
		name: 'tracker',
		icon: IconClipboardList,
		url: 'https://tracker.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/tracker',
			label: 'tracker'
		}
	},
	{
		name: 'weather',
		icon: IconCloudFilled,
		url: 'https://weather.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/weather',
			label: 'weather'
		}
	},
	{
		name: 'notes',
		icon: IconPencil,
		url: 'https://notes.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/notes',
			label: 'notes'
		}
	},
	{
		name: 'todo',
		icon: IconList,
		url: 'https://todo.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/todo',
			label: 'todo'
		}
	},
	{
		name: 'calculator',
		icon: IconCalculatorFilled,
		url: 'https://calculator.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/calculator',
			label: 'calculator'
		}
	},
	{
		name: 'spreadsheet',
		icon: IconFileSpreadsheet,
		url: 'https://spreadsheet.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/spreadsheet',
			label: 'spreadsheet'
		}
	},
	{
		name: 'bip39',
		icon: IconWall,
		url: 'https://bip39.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/bip39',
			label: 'bip39'
		}
	},
	{
		name: 'speedometer',
		icon: IconCar,
		url: 'https://speedometer.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/speedometer',
			label: 'speedometer'
		}
	},
	{
		name: 'compass',
		icon: IconCompassFilled,
		url: 'https://compass.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/compass',
			label: 'compass'
		}
	},
	{
		name: 'level',
		icon: IconScale,
		url: 'https:/level.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/level',
			label: 'level'
		}
	},
	{
		name: 'dice',
		icon: IconDiceFilled,
		url: 'https://dice.ephm.app',
		status: 'ready',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/dice',
			label: 'dice'
		}
	},
	{
		name: 'calendar_event',
		icon: IconCalendarEvent,
		url: 'https://calendarevent.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/calendarevent',
			label: 'calendarevent'
		}
	},
	{
		name: 'chess_clock',
		icon: IconChessQueenFilled,
		url: 'https://chessclock.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/chessclock',
			label: 'chessclock'
		}
	}
];

export const games: Project[] = [
	{
		name: 'rock_paper_scissors',
		icon: IconScissors,
		url: 'https://rockpaperscissors.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/rockpaperscissors',
			label: 'rockpaperscissors'
		}
	},
	{
		name: 'tic_tac_toe',
		icon: IconGrid3x3,
		url: 'https://tictactoe.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/tictactoe',
			label: 'tictactoe'
		}
	},
	{
		name: 'connect_4',
		icon: IconCircleFilled,
		url: 'https://connect4.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/connect4',
			label: 'connect4'
		}
	},
	{
		name: 'battleship',
		icon: IconShip,
		url: 'https://battleship.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/battleship',
			label: 'battleship'
		}
	},
	{
		name: 'forehead_game',
		icon: IconMoodSmileFilled,
		url: 'https://foreheadgame.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/foreheadgame',
			label: 'foreheadgame'
		}
	},
	{
		name: 'mastermind',
		icon: IconPassword,
		url: 'https://mastermind.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/mastermind',
			label: 'mastermind'
		}
	},
	{
		name: 'word_game',
		icon: IconBook2,
		url: 'https://wordgame.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/wordgame',
			label: 'word_game'
		}
	},
	{
		name: 'chess',
		icon: IconChessKnightFilled,
		url: 'https://chess.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/chess',
			label: 'chess'
		}
	},
	{
		name: 'checkers',
		icon: IconCoins,
		url: 'https://checkers.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/checkers',
			label: 'checkers'
		}
	},
	{
		name: 'memory',
		icon: IconLayoutGrid,
		url: 'https://memory.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/memory',
			label: 'memory'
		}
	},
	{
		name: 'minesweeper',
		icon: IconBombFilled,
		url: 'https://minesweeper.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/minesweeper',
			label: 'minesweeper'
		}
	},
	{
		name: 'sudoku',
		icon: IconGrid4x4,
		url: 'https://minesweeper.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/minesweeper',
			label: 'minesweeper'
		}
	},
	{
		name: 'bingo',
		icon: IconCircleLetterB,
		url: 'https://bingo.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/bingo',
			label: 'bingo'
		}
	},
	{
		name: 'virtual_pet',
		icon: IconCat,
		url: 'https://virtualpet.ephm.app',
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/apps/virtualpet',
			label: 'virtualpet'
		}
	}
];

export const modules: Project[] = [
	{
		name: 'db',
		icon: IconDatabase,
		status: 'unplanned',
		repo: {
			url: 'https://github.com/jacob-shuman/ephemurl/tree/main/shared/db',
			label: 'db'
		}
	}
];
