import data from './data.json'

export type City = { name: string; url: string }

export const cities = () => {
  return data as City[]
}
