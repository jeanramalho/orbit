import { db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  await db.insert(goals).values([
    { title: 'acordar cedo', desiredWeeklyFrequency: 5 },
    { title: 'exercicio', desiredWeeklyFrequency: 3 },
    { title: 'meditar', desiredWeeklyFrequency: 2 },
  ])
}

seed()
