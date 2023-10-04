import { normalize, schema } from 'normalizr';

// Define the notification schema
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const notificationsSchema = [notification];

export function notificationsNormalizer(data) {
  return normalize(data, notificationsSchema);
}
