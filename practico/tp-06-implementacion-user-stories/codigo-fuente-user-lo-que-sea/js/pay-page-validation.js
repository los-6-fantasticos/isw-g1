// Takes a credit card string value and returns true on valid number
function valid_credit_card(value) {
    let nCheck = 0,
        bEven = false,
        cDigit,
        nDigit,
        n;
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    value = value.replace(/\D/g, "");

    for (n = value.length - 1; n >= 0; n--) {
        cDigit = value.charAt(n);
        nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

function is_luhn_valid(creditCardNumber) {
    let cardNumber = creditCardNumber.value;
    const msg = "No es un numero VISA valido.";
    if (!valid_credit_card(cardNumber) === true) {
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