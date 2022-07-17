// 예제 1
function getTotalOutstanding() {
  return customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill() {

}

// 예제 2
export function alertForMiscreant(people) {
  const miscreant = findMiscreant(people);
  if (miscreant !== '') {
    setOffAlarms(alarm, miscreant);
  }
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
