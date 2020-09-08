$('#imageImport').bind('change', function() {
    const max = 5;                             // Defined by US 5MB
    let actualSize = this.files[0].size/1024/1024; // Do division to convert to MB
    console.log(actualSize);
    if(actualSize > max)
    {
        alert(`El archivo excede el maximo de ${max}MB, con un total de ${actualSize}MB`    );
        this.value = "";
    }
});

$(function() {
    $('#inputRecibirlo').on('change', function() {
        $(this).find("option:selected").each(function(){
            let optionValue = $(this).attr("value");
            console.log(optionValue);
            if(optionValue == "ofyh"){
                $("#fyh").show();
            } else{
                $("#fyh").hide();
            }
        });
    });
    $('#input-payment').on('change', function() {
        $(this).find("option:selected").each(function(){
            let optionValue = $(this).attr("value");
            console.log(optionValue);
            if(optionValue == "cash"){
                $("#cash").show("");
                $("#data-form").attr('action', './done.html');
            } else{
                $("#cash").hide();
				$("#data-form").attr('action', './pay-page.html');
            }
        });
    });
});
