const input = document.getElementById("search-input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

// Debounce function
function debounce(fn, delay) {
  let timer;

  return function (...arg) {
    clearInterval(timer);

    timer = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}

const textWithDebouncing = debounce((text) => {
  debounceText.innerHTML = text;
}, 500);

input.addEventListener("input", (e) => {
  defaultText.innerHTML = e.target.value;
  textWithDebouncing(e.target.value);
});
