export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge () {
    return Math.min(...people.map(person => person.age));
  }

  function totalSalary () {
    return people.reduce((total, person) => total + person.salary, 0);
  }
}
