import { test, expect, assertType } from 'vitest'
import { z } from 'zod'
import { cities } from './cities'

const CitySchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const CitiesSchema = z.array(CitySchema)

test('ensure data complies to schema', () => {
  expect(CitiesSchema.parse(cities())).not.toBeNull()
})

assertType<z.infer<typeof CitiesSchema>>(cities())
