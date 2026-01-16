function calculate(operation) {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c;

    if (operation === "+") {
        c = a + b;
    } else if (operation === "-") {
        c = a - b;
    } else if (operation === "*") {
        c = a * b;
    } else if (operation === "/") {
        c = b !== 0 ? a / b : "Cannot divide by zero";
    }

    document.getElementById("result").innerText = c;
}
