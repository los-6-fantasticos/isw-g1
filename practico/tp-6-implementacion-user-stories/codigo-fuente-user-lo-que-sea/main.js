$('#imageImport').bind('change', function() {
    var max = 5                                    // Defined by US 5MB
        actualSize = this.files[0].size/1024/1024; // Do division to convert to MB
    console.log(actualSize);
    if(actualSize > max)
    {
        alert(`El archivo excede el maximo de ${max}MB, con un total de ${actualSize}MB`    );
        this.value = "";
    }
});
