import type { CollectionSchema } from 'deepspace/schema'

const teamRead = { read: true, create: true, update: 'own' as const, delete: 'own' as const }

export const signalroomSchemas: CollectionSchema[] = [
  {
    name: 'rooms',
    columns: [
      { name: 'title', storage: 'text', interpretation: 'plain' },
      { name: 'slug', storage: 'text', interpretation: 'plain' },
      { name: 'status', storage: 'text', interpretation: 'plain' },
      { name: 'ownerId', storage: 'text', interpretation: 'plain' },
    ],
    permissions: { viewer: teamRead, member: teamRead, admin: { read: true, create: true, update: true, delete: true } },
  },
  {
    name: 'decisions',
    columns: [
      { name: 'roomId', storage: 'text', interpretation: 'plain' },
      { name: 'title', storage: 'text', interpretation: 'plain' },
      { name: 'context', storage: 'text', interpretation: 'plain' },
      { name: 'owner', storage: 'text', interpretation: 'plain' },
      { name: 'status', storage: 'text', interpretation: 'plain' },
      { name: 'priority', storage: 'text', interpretation: 'plain' },
      { name: 'createdBy', storage: 'text', interpretation: 'plain' },
    ],
    permissions: { viewer: teamRead, member: teamRead, admin: { read: true, create: true, update: true, delete: true } },
  },
]
