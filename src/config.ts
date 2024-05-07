export interface Range {
  min: number
  max: number
}
export const RANGES: Record<string, Range> = {
  verticalList: {
    min: 100,
    max: 1000
  },
  horizontalList: {
    min: 10,
    max: 100
  },
  randomNumber: {
    min: 0,
    max: 10000
  }
}
