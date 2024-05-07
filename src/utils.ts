import type { Range } from './config'

export function getRandomNumber({ min, max }: Range): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
