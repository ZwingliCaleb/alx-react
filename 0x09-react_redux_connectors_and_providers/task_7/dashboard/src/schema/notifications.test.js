import { getAllNotificationsByUser } from './notifications';
import { normalize } from 'normalizr';
import { user, message, notificationSchema } from './notifications';

const userId = '5debd764a7c57c7839d722e9';

// Expected data for the specified user ID
const expectedData = [
  {
    "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
    "isRead": true,
    "type": "urgent",
    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
    "isRead": false,
    "type": "urgent",
    "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
  }
];

// The expected IDs
const expectedIds = [
  "5debd76480edafc8af244228",
  "5debd764507712e7a1307303",
  "5debd76444dd4dafea89d53b",
  "5debd76485ee4dfd1284f97b",
  "5debd7644e561e022d66e61a",
  "5debd7644aaed86c97bf9d5e",
  "5debd76413f0d5e5429c28a0",
  "5debd7642e815cd350407777",
  "5debd764c1127bc5a490a4d0",
  "5debd7646ef31e0861ec1cab",
  "5debd764a4f11eabef05a81d",
  "5debd764af0fdd1fc815ad9b",
  "5debd76468cb5b277fd125f4",
  "5debd764de9fa684468cdc0b",
];

// user data for the specified user ID
const expectedUserData = {
  age: 25,
  email: 'poole.sanders@holberton.nz',
  id: '5debd764a7c57c7839d722e9',
  name: { first: 'Poole', last: 'Sanders' },
  picture: 'http://placehold.it/32x32',
};

// message data with the specified guid
const expectedMessageData = {
  guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
  isRead: false,
  type: "default",
  value: "Cursus risus at ultrices mi.",
};

// Expected notification data with the specified ID
const expectedNotificationData = {
  author: "5debd764f8452ef92346c772",
  context: "3068c575-d619-40af-bf12-dece1ee18dd3",
  id: "5debd7642e815cd350407777",
};

test('getAllNotificationsByUser returns expected data for user with ID 5debd764a7c57c7839d722e9', () => {
  const result = getAllNotificationsByUser(userId);

  expect(result).toEqual(expect.arrayContaining(expectedData));
});

test('getAllNotificationsByUser returns expected IDs for user with ID 5debd764a7c57c7839d722e9', () => {
  const result = getAllNotificationsByUser(userId);

  const normalizedExpectedIds = normalize(expectedIds, [notificationSchema]).entities.notifications;
  const resultIds = Object.keys(result.entities.notifications);

  expect(resultIds).toEqual(expect.arrayContaining(Object.keys(normalizedExpectedIds)));
});

test('getAllNotificationsByUser returns expected user data for user with ID 5debd764a7c57c7839d722e9', () => {
  const result = getAllNotificationsByUser(userId);

  const normalizedExpectedUserData = normalize(expectedUserData, user).entities.users;
  const userById = result.entities.users[userId];

  expect(userById).toEqual(normalizedExpectedUserData[userId]);
});

test('getAllNotificationsByUser returns expected message data with guid efb6c485-00f7-4fdf-97cc-5e12d14d6c41', () => {
  const result = getAllNotificationsByUser(userId);

  const normalizedExpectedMessageData = normalize(expectedMessageData, message).entities.messages;
  const messageByGuid = result.entities.messages[expectedMessageData.guid];

  expect(messageByGuid).toEqual(normalizedExpectedMessageData[expectedMessageData.guid]);
});

test('getAllNotificationsByUser returns expected notification data with ID 5debd7642e815cd350407777', () => {
  const result = getAllNotificationsByUser(userId);

  const normalizedExpectedNotificationData = normalize(expectedNotificationData, notification).entities.notifications;
  const notificationById = result.entities.notifications[expectedNotificationData.id];

  expect(notificationById).toEqual(normalizedExpectedNotificationData[expectedNotificationData.id]);
});
