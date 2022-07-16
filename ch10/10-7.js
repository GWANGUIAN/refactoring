for (const p of people) {
  if (p === 'Don') {
    sendAlert();
    break;
  }
}

if(people.includes('Don')) {
  sendAlert();
}