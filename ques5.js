// Implement debounce function

const btn = document.getElementById("btn");

function debounceFunc(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };

}

btn.addEventListener("click",debounceFunc(() => {
    console.log("button is clicked");
  }, 2000)
);