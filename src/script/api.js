async function getAdviceFromAPI() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const titleElement = document.getElementById("adviceTitleID");
    titleElement.innerText = "ADVICE #" + data.slip.id;

    const adviceTextElement = document.getElementById("adviceTextID");
    adviceTextElement.innerText = data.slip.advice;
}

function showAdvice() {
    const adviceButton = document.getElementById("adviceButton");

    adviceButton.addEventListener("click", () => {
        getAdviceFromAPI();
    }
    );

}

showAdvice();