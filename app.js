// Listas de pronombres, adjetivos y sustantivos
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// Función para generar y mostrar todas las combinaciones posibles de dominios
function generateDomains() {
    // Recorrer cada pronombre
    for (let p of pronoun) {
        // Recorrer cada adjetivo
        for (let a of adj) {
            // Recorrer cada sustantivo
            for (let n of noun) {
                // Concatenar y formar el nombre de dominio
                let domain = `${p}${a}${n}.com`;
                // Imprimir el dominio en la consola
                console.log(domain);
            }
        }
    }
}

// Llamar a la función para generar los dominios
generateDomains();