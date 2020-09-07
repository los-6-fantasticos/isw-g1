$(function() {
    // var data = ["Cordoba", "Rio Cuarto", "Villa Maria", "San Francisco", "Alta Gracia", "Rio Tercero", "La Calera"];
    $.get("https://apis.datos.gob.ar/georef/api/departamentos?provincia=14&orden=id&campos=completo&formato=json",
    function(data, status){
        console.log(data.departamentos);
        $.each(data.departamentos, function (i, depto) {
            console.log(depto.id, i);
            $("#fromCity").append($('<option>', {value: depto.nombre, text: depto.nombre}));
            $("#inputPlaceCity").append($('<option>', {value: i, text: depto.nombre}));
        });
    });
    $("#fromCity").val("Capital");
});
