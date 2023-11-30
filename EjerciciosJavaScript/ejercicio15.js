const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

function listaCamisetaProductos(param) {
  param.forEach(product => {
    if (product.includes('Camiseta')) {
      console.log(product);
    }
  });
}
listaCamisetaProductos(products);