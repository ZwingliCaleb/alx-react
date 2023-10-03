import { schema, normalize } from 'normalizr';

// Define a schema entity for courses
const courseSchema = new schema.Entity('courses');

// Create a function to normalize the data
const coursesNormalizer = (data) => {
  return normalize(data, [courseSchema]);
};

export default coursesNormalizer;