function recomendarProducto(edad, esMiembro, historialCompras) {
    // Desestructuramos las propiedades de historialCompras (tecnología y moda)
    const { technologia, moda } = historialCompras;

    // Comprobamos si cumple las condiciones para un "Producto de alta tecnología"
    if (technologia >= 5 && esMiembro || (technologia >= 3 && !esMiembro) || (edad >= 25 && edad <= 40) || (edad >= 18 && edad <= 30 && moda >= 2)) {
        return "Producto de alta tecnología";  // Si cumple alguna condición, se recomienda un producto de alta tecnología
    }
    // Si no se cumple la primera condición, comprobamos si debe recomendarse un "Producto de moda"
    else if (moda >= 3) {
        return "Producto de moda";  // Si se compraron 3 o más productos de moda, se recomienda un producto de moda
    } else {
        return "Producto genérico";  // Si no cumple ninguna de las condiciones anteriores, se recomienda un producto genérico
    }
}

// Ejemplos de uso:
console.log(recomendarProducto(22, true, { technologia: 6, moda: 1 })); // "Producto de alta tecnología"
console.log(recomendarProducto(29, false, { technologia: 2, moda: 3 })); // "Producto de moda"
console.log(recomendarProducto(45, false, { technologia: 1, moda: 0 })); // "Producto genérico"
