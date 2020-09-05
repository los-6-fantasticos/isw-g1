var luhnChk = (function (arr) {
    return function (ccNum) {
        var
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;

        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }

        return sum && sum % 10 === 0;
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

function is_luhn_valid(cardNumber) {
    if (!luhnChk(cardNumber) === true) {
        alert("Credit card number is invalid.");
    }
}

$('#needs-validation').submit(function (event) {
    if (this.checkValidity() === false) {
        console.log("entro");
        event.preventDefault();
        event.stopPropagation();
        var ele = this.getElementsByTagName("input")
        for (var i = 0; i < ele.length; i++) {
            var msg = "", reason = ele[i].validity;
            if (reason.valueMissing) {
                msg = ele[i].getAttribute("data-value-missing");
            } else if (reason.patternMismatch) {
                msg = ele[i].getAttribute("data-pattern-mismatch");
            } else if (ele[i].getAttribute("id") === "cc-number") {
                var creditCardNumber = $('input[name="cc-number"]').val();

                is_luhn_valid(creditCardNumber);
            }
            ele[i].nextElementSibling.innerText = msg;
        }
    }
    this.classList.add('was-validated');
});