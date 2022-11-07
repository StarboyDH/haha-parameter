// input
const laughMe = document.querySelector('.laugh-me');
// Haha types
const rollingLaughingFace = document.querySelector('.rolling-laughing-face');
const laughingTearlyFace = document.querySelector('.laughing-tearly-face');
const smilingFace = document.querySelector('.smiling-face');
const arabicLaughter = document.querySelector('.arabic-laughter');
const hahaLaughter = document.querySelector('.haha-laughter');

let myLaughs = 0;
function laughing() {
  if (myLaughs % 5 === 0) {
    rollingLaughingFace.innerText =
      '\u{1F923}' + '\u{1F923}'.repeat(myLaughs / 5);
  }
  if (myLaughs % 3 === 0) {
    laughingTearlyFace.innerText =
      '\u{1F602}' + '\u{1F602}'.repeat(myLaughs / 3);
  }
  if (myLaughs % 2 === 0) {
    smilingFace.innerText = '\u{1F606}' + '\u{1F606}'.repeat(myLaughs / 2);
  }
  arabicLaughter.innerText = 'هههه' + 'هههه'.repeat(myLaughs);
  hahaLaughter.innerText = 'Haha' + 'haha'.repeat(myLaughs);

  if (myLaughs <= 34) myLaughs++;
}

laughMe.addEventListener('click', () => {
  laughing();
});
