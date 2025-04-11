export function setupCounter(element) {

  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    console.log("current value", counter)
    element.innerHTML = `count is ${count}`
  }

  element.addEventListener('click', () => {
    console.log("old value", counter)
    setCounter(counter + 1)
  })

  setCounter(counter)
}
