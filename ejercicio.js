// h = RC(Lado * B/2)

function altura (lado1, lado2, base) {
    
    if(lado1 === lado2) {

        const baseMedia = base / 2;
        const alturaT  = Math.sqrt((lado1*lado1) - (baseMedia*baseMedia));

        return alturaT;

    } else {

        console.log('No es un triangulo isósceles');
    }
}
