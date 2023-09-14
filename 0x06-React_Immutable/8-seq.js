import { Seq, fromJS } from 'immutable';

function printBestStudents(grades) {
  const immutableGrades = fromJS(grades);

  const filteredStudents = Seq(immutableGrades).map((student) => {
    const score = student.get('score');
    if (score >= 70) {
      return student.update('firstName', (firstName) => firstName.charAt(0).toUpperCase() + firstName.slice(1))
                    .update('lastName', (lastName) => lastName.charAt(0).toUpperCase() + lastName.slice(1));
    }
    return student;
  });

  const result = filteredStudents.toJS();

  console.log(result);
}

