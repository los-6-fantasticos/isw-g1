$('#imageImport').bind('change', function() {
    const max = 5 * 1024 * 1024;                   // Defined by US 5MB convert to B
    let actualSize = this.files[0].size;
    console.log(actualSize, max);
    //replace the "Choose a file" label
    if(actualSize > max)
    {
        console.log(`El archivo excede el maximo de ${max}MB, con un total de ${actualSize}MB`);
        alert(`El archivo excede el maximo de ${max}MB, con un total de ${actualSize}MB`);
        this.value = "";
    }
    $(this).next('.custom-file-label').html(this.value);
});
$('#inputRecibirlo').on('change', function() {
    if($('#inputRecibirlo').val() == "ofyh"){
        $("#dateTimeDeliver").prop("required", true);
        $("#fyh").show();
    } else{
        $("#dateTimeDeliver").prop("required", false);
        $("#fyh").hide();
    }
});
$('#inputPayment').on('change', function() {
    if($('#inputPayment').val() == "cash"){
        $("#cash").show("");                
        $("#cashInput").prop("required", true);
        $("#dataForm").attr('action', './done.html');
    } else{
        $("#dataForm").attr('action', './pay-page.html');
        $("#cashInput").prop("required", false);
        $("#cash").hide();
    }
});

$("#dataForm").submit(function event(){
    localStorage.setItem("valRequest", $("#request").val());
    localStorage.setItem("valImage", $("#imageImport").val());
    localStorage.setItem("valFrom", $("#fromStreet").val() + " " + $("#fromNumber").val() + ", " + $("#fromCity").val());
    localStorage.setItem("valFromReference", $("#fromReference").val());
    localStorage.setItem("valTo", $("#toStreet").val() + " " + $("#toNumber").val() + ", " + $("#toCity").val());
    localStorage.setItem("valToReference", $("#toReference").val());
    if($('#inputRecibirlo').val() == "ofyh"){
        localStorage.setItem("valDeliver", "Fecha y Hora:" + $("#dateTimeDeliver").val());
    }else{
        localStorage.setItem("valDeliver", "Lo antes posible");
    }
    if($('#inputPayment').val() == "cash"){
        localStorage.setItem("valPayment", "Pago con efectivo: $" + $("#cashInput").val());
    }else{
        localStorage.setItem("valPayment", "Pago con Tarjeta");
    }


});

