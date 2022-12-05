import { faker } from '@faker-js/faker';

let timesCalled = 0;
const pluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

const TOTAL = 100;

const fakeUsers = Array.from({ length: TOTAL }).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.image.avatar(),
  phone: faker.phone.number(),
  lastLogin: faker.date.soon(2),
}));

/**
 * getUsers
 * @param {string | undefined} query
 * @param {number | undefined} limit
 * @returns {Promise<{lastName: string, lastLogin: Date, name: string, id: string, avatar: string, phone: string}[]>}
 */
export const getUsers = ({ query, limit } = {}) => {
  timesCalled++;

  const users = fakeUsers
    .filter(({ name, lastName }) =>
      query ? `${name} ${lastName}`.toLowerCase().search(query.toLowerCase()) !== -1 : true,
    )
    .slice(0, limit ?? 100);

  console.log(
    `%cOH! you called the users API (${pluralize(timesCalled, 'time')})`,
    'background: yellow; color: #000; padding: 1rem; display: block',
  );

  return new Promise((resolve) => setTimeout(() => resolve(users), 2000));
};
