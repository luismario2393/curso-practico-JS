// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioFinal = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioFinal;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;
    
    const InputDiscount = document.getElementById('InputDiscount');
    const discountValue = InputDiscount.value;

    const resultado = precioConDescuento(priceValue, discountValue)

    const texto = document.getElementById('resultado');
    texto.innerText = `El precio con descuento es ${resultado}`;

}

