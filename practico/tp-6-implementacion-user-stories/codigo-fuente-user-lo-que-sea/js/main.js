$(function(){
    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let isoStr = new Date(Date.now() - tzoffset).toISOString();
    localStorage.clear();
    $("#dateTimeDeliver").attr("min", isoStr.substring(0,isoStr.length-8))
});

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
    let date,
        datestring;
    localStorage.setItem("valRequest", $("#request").val());
    if($("#imageImport").val()==""){
        localStorage.setItem("valImage", "No");
    }else{
        localStorage.setItem("valImage", "Si");
    }
    localStorage.setItem("valFrom", $("#fromStreet").val() + " " + $("#fromNumber").val() + ", " + $("#fromCity").val());
    if($("#fromReference").val()!==""){
        localStorage.setItem("valFromReference", "<b>Referencia:</b> " + $("#fromReference").val() + "<br>");
    }else{
        localStorage.setItem("valFromReference","")
    }
    localStorage.setItem("valTo", $("#toStreet").val() + " " + $("#toNumber").val() + ", " + $("#toCity").val());
    if($("#toReference").val()!=""){
        localStorage.setItem("valToReference", "<b>Referencia:</b> " + $("#toReference").val() + "<br>");
    }else{
        localStorage.setItem("valToReference","")
    }
    if($('#inputRecibirlo').val() == "ofyh"){
        date = new Date($("#dateTimeDeliver").val());
        datestring = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        localStorage.setItem("valDeliver", datestring);
    }else{
        localStorage.setItem("valDeliver", "Lo antes posible");
    }
    if($('#inputPayment').val() == "cash"){
        localStorage.setItem("valPayment", "efectivo: $" + $("#cashInput").val());
    }else{
        localStorage.setItem("valPayment", "Tarjeta");
    }


});

