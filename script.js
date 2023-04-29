let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.dataset.btnval;
        if (value !== undefined) {
            screen.value += value;
        }
    })
})

equal.addEventListener("click", (e) => {
    if (screen.value === '') {
        screen.value = "NO Value";
    }
    else {
        let ans = eval(screen.value);
        screen.value = ans;
        console.log(ans);
    }
})

clear.addEventListener('click', () => {
    screen.value = "";
})