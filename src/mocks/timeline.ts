import { IProject } from '@interfaces/Timeline';

export const PROJECTS_TO_USERS: IProject[] = [
  {
    id: 1,
    name: 'Polishop',
    startDate: new Date('2021-8-1'),
    endDate: new Date('2021-8-31'),
    users: [
      {
        id: 1,
        name: 'Geovani A.',
        color: '#5ce9e2',
        associations: [
          {
            id: 1,
            color: '#5ce9e2',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-6'),
          },
          {
            id: 2,
            color: '#5ce9e2',
            start: new Date('2021-8-9'),
            end: new Date('2021-8-13'),
          },
        ],
      },
      {
        id: 2,
        name: 'Guilherme F.',
        color: '#006E98',
        associations: [
          {
            id: 3,
            color: '#006E98',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-31'),
          },
        ],
      },
      {
        id: 3,
        name: 'Lucas B.',
        color: '#FF8800',
        associations: [
          {
            id: 3,
            color: '#FF8800',
            start: new Date('2021-8-8'),
            end: new Date('2021-8-13'),
          },
          {
            id: 4,
            color: '#FF8800',
            start: new Date('2021-8-16'),
            end: new Date('2021-8-20'),
          },
        ],
      },
      {
        id: 4,
        name: 'Jhonatan C.',
        color: '#9C27B0',
        associations: [
          {
            id: 5,
            color: '#9C27B0',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-20'),
          },
        ],
      },
      {
        id: 5,
        name: 'Bruno F.',
        color: '#FFC566',
        associations: [
          {
            id: 6,
            color: '#FFC566',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-6'),
          },
          {
            id: 7,
            color: '#FFC566',
            start: new Date('2021-8-9'),
            end: new Date('2021-8-13'),
          },
        ],
      },
      {
        id: 6,
        name: 'Victor V.',
        color: '#3F51B8',
        associations: [
          {
            id: 8,
            color: '#3F51B8',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-31'),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Devstream',
    startDate: new Date('2021-8-1'),
    endDate: new Date('2021-8-31'),
    users: [
      {
        id: 7,
        name: 'Geovani A.',
        color: '#5ce9e2',
        associations: [
          {
            id: 9,
            color: '#5ce9e2',
            start: new Date('2021-8-8'),
            end: new Date('2021-8-13'),
          },
          {
            id: 10,
            color: '#5ce9e2',
            start: new Date('2021-8-16'),
            end: new Date('2021-8-20'),
          },
        ],
      },
      {
        id: 8,
        name: 'Guilherme F.',
        color: '#006E98',
        associations: [
          {
            id: 11,
            color: '#006E98',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-31'),
          },
        ],
      },
      {
        id: 9,
        name: 'Lucas B.',
        color: '#FF8800',
        associations: [
          {
            id: 11,
            color: '#FF8800',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-6'),
          },
          {
            id: 12,
            color: '#FF8800',
            start: new Date('2021-8-9'),
            end: new Date('2021-8-13'),
          },
        ],
      },
      {
        id: 10,
        name: 'Jhonatan C.',
        color: '#9C27B0',
        associations: [
          {
            id: 13,
            color: '#9C27B0',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-20'),
          },
        ],
      },
      {
        id: 11,
        name: 'Bruno F.',
        color: '#FFC566',
        associations: [
          {
            id: 14,
            color: '#FFC566',
            start: new Date('2021-8-8'),
            end: new Date('2021-8-13'),
          },
          {
            id: 15,
            color: '#FFC566',
            start: new Date('2021-8-16'),
            end: new Date('2021-8-20'),
          },
        ],
      },
      {
        id: 12,
        name: 'Victor V.',
        color: '#3F51B8',
        associations: [
          {
            id: 16,
            color: '#3F51B8',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-31'),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Teste',
    startDate: new Date('2021-8-1'),
    endDate: new Date('2021-8-31'),
    users: [
      {
        id: 13,
        name: 'Victor V.',
        color: '#3F51B8',
        associations: [
          {
            id: 17,
            color: '#3F51B8',
            start: new Date('2021-8-9'),
            end: new Date('2021-8-31'),
          },
        ],
      },
      {
        id: 14,
        name: 'Victor V.',
        color: '#FFC566',
        associations: [
          {
            id: 18,
            color: '#FFC566',
            start: new Date('2021-8-1'),
            end: new Date('2021-8-13'),
          },
        ],
      },
    ],
  },
];
