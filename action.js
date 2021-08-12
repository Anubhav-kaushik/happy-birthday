let one = document.querySelector('#first');
let two = document.querySelector('#second');
let three = document.querySelector('#third');
let four = document.querySelector('#fourth');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function action() {
    const allEle = [one, two, three, four];
    const times = [5000, 5000, 5000, 5000];

    for (let i = 0; i < allEle.length; i++) {
        i.classList.toggle('hide');
        await sleep(times[i]);
    }

}