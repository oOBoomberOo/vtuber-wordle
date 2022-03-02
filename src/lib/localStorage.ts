import CryptoJS from "crypto-js";

const gameStateKey = 'gameState'
const highContrastKey = 'highContrast'

type StoredGameState = {
  guesses: string[]
  solution: string
  salt?: number
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  const solution = CryptoJS.AES.encrypt(gameState.solution, `${gameState.salt}`).toString();
  const hashedGameState = { ...gameState, solution, version: '2' };
  localStorage.setItem(gameStateKey, JSON.stringify(hashedGameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)

  if (state) {
    const result = JSON.parse(state) as any
    const solution = CryptoJS.AES.decrypt(result.solution, `${result.salt}`).toString(CryptoJS.enc.Utf8)

    if (!result.version) {
      localStorage.removeItem(gameStateKey);
      return null;
    }

    return { guesses: result.guesses, solution, salt: result.salt } as StoredGameState
  }

  return null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const setStoredIsHighContrastMode = (isHighContrast: boolean) => {
  if (isHighContrast) {
    localStorage.setItem(highContrastKey, '1')
  } else {
    localStorage.removeItem(highContrastKey)
  }
}

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey)
  return highContrast === '1'
}
