const numbers = [...document.querySelectorAll('.number')];

const count = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    console.log(initialValue);
    el.textContent = `${initialValue}+`;
  }, 1);
};

numbers.forEach((number) => {
  count(number);
});
