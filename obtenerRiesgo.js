/**
Modificar la función para mejorar el performance
*/

function obtenerRiesgo(Resultado) {
    let ResultadoPorcentaje = "";
    let ResultadoNombre = "";
    switch (Resultado) {
        case 0:
            ResultadoPorcentaje = '< 10%';
            ResultadoNombre = 'Riesgo bajo';
            //$('#ucRiesgoCardiovascular_evolucion_resultado' + i).text('');
            //$('#ucRiesgoCardiovascular_evolucion_porcentaje' + i).text('< 10%');
            break;
        case 1:
            ResultadoPorcentaje = '10% a < 20%';
            ResultadoNombre = 'Riesgo moderado';
            //$("#ucRiesgoCardiovascular_evolucion_resultado" + i).text('Riesgo moderado');
            //$("#ucRiesgoCardiovascular_evolucion_porcentaje" + i).text('10% a < 20%');
            break;
        case 2:
            ResultadoPorcentaje = '20% a 30%';
            ResultadoNombre = 'Riesgo alto';
            //$("#ucRiesgoCardiovascular_evolucion_resultado" + i).text('Riesgo alto');
            //$("#ucRiesgoCardiovascular_evolucion_porcentaje" + i).text('20% a 30%');
            break;
        case 3:
            ResultadoPorcentaje = '30% a < 40%';
            ResultadoNombre = 'Riesgo muy alto';
            //$("#ucRiesgoCardiovascular_evolucion_resultado" + i).text('Riesgo muy alto');
            //$("#ucRiesgoCardiovascular_evolucion_porcentaje" + i).text('30% a < 40%');
            break;
        case 4:
            ResultadoPorcentaje = '>= 40%';
            ResultadoNombre = 'Riesgo extremadamente alto';
            //$("#ucRiesgoCardiovascular_evolucion_resultado" + i).text('Riesgo extremadamente alto');
            //$("#ucRiesgoCardiovascular_evolucion_porcentaje" + i).text('>= 40%');
            break;
        default:
            break;
    }
    return "<span>" + ResultadoPorcentaje + "   " + ResultadoNombre + "</span>";
}