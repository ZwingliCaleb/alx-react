import { Seq, fromJS } from 'immutable';

function printBestStudents(grades) {
  const immutableGrades = fromJS(grades);

  const filteredStudents = Seq(immutableGrades)
    .filter(student => student.get('score') >= 70)
    .map(student =>
      student
        .update('firstName', firstName =>
          firstName.charAt(0).toUpperCase() + firstName.slice(1)
        )
        .update('lastName', lastName =>
          lastName.charAt(0).toUpperCase() + lastName.slice(1)
        )
    );

  filteredStudents.forEach(student => {
    const { firstName, lastName } = student.toJS();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
  });
}
