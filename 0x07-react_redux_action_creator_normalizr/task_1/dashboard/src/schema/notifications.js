import { schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export { user, message, notification };