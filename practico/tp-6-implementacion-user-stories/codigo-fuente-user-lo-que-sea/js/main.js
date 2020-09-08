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
                $("#cashInput").prop("required", true);
                $("#data-form").attr('action', './done.html');
            } else{
				$("#data-form").attr('action', './pay-page.html');
                $("#cashInput").prop("required", false);
                $("#cash").hide();
            }
        });
    });
});
