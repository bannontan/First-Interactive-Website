const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < iterations) {
                return event.target.dataset.value1[index];
            }

            return letters[Math.floor(Math.random() * 26)];
        }).join("");
        
        
        if (iterations >= event.target.dataset.value1.length) clearInterval(interval);

        iterations += 1 / 2;
    }, 30);

    event.target.onmouseout = () => { // Trigger animation reversal on mouseout
        let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < iterations) {
                return event.target.dataset.value2[index];
            }

            return letters[Math.floor(Math.random() * 26)];
        }).join("");
        
        
        if (iterations >= event.target.dataset.value2.length) clearInterval(interval);

        iterations += 1 / 2;
    }, 30);

    };
}