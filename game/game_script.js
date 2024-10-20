let score = 0;
const pont = document.getElementById("score");
const elemento = document.getElementById("elemento");
elemento.setAttribute("style", "color: transparent;");

function calvanizador() {
    score += 1;
    document.getElementById("score").textContent = score + " Vezes";
    elemento.setAttribute("style", "color: var(--primary-color);");
    pont.setAttribute("style", "position: absolute; transform: translateX(10px); font-size: 2.2rem;");
}

function descalvanizador() {
    pont.setAttribute("style", "font-size: 2.0rem;");
}