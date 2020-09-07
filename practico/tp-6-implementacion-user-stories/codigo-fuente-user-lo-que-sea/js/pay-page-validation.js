function checkCardNumber(number) {
    var sumTable = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
    ],
        sum = 0,
        flip = 0,
        i;

    for (i = number.length - 1; i >= 0; i--) {
        sum += sumTable[flip++ & 0x1][parseInt(number.charAt(i), 10)];
    }

    return sum % 10 === 0;
}


function is_luhn_valid(creditCardNumber) {
    let cardNumber = creditCardNumber.value;
    const msg = "No es un numero VISA valido.";
    if (!checkCardNumber(cardNumber) === true) {
        creditCardNumber.setCustomValidity(msg);
        return msg;
    }else{
        creditCardNumber.setCustomValidity("");
        return "";
    }
}

$('#needs-validation').submit(function (event) {
    let creditCardNumber,
        elements,
        msg,
        reason;
    if (this.checkValidity() === false) {
        console.log("entro");
        event.preventDefault();
        event.stopPropagation();
        elements = this.getElementsByTagName("input");
        for (var i = 0; i < elements.length; i++) {
            msg = "", reason = elements[i].validity;
            if (reason.valueMissing) {
                msg = elements[i].getAttribute("data-value-missing");
            } else if (reason.patternMismatch) {
                msg = elements[i].getAttribute("data-pattern-mismatch");
            } else if (elements[i].getAttribute("id") === "cc-number") {
                msg = is_luhn_valid(elements[i]);
            }
            elements[i].nextElementSibling.innerText = msg;
        }
    }
    this.classList.add('was-validated');
});