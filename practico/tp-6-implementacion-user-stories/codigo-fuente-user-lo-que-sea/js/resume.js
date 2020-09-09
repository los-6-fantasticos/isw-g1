document.getElementById("data").innerHTML=`
<b>Se solicitó:</b> ${localStorage.getItem("valRequest")}<br>
<b>Se inserto imagen:</b> ${localStorage.getItem("valImage")}<br>
<b>Local de compra:</b> ${localStorage.getItem("valFrom")}<br>
<b>Referencia:</b> ${localStorage.getItem("valFromReference")}<br>
<b>Lugar de envio:</b> ${localStorage.getItem("valTo")}<br>
<b>Referencia:</b> ${localStorage.getItem("valToReference")}<br>
<b>Se envia:</b> ${localStorage.getItem("valDeliver")}<br>
<b>Pago:</b> ${localStorage.getItem("valPayment")}<br>
`