async function fetchData() {
  try {
  const response = await fetch('https://dummyjson.com/products/1');
  
  const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
}



fetchData();
async function fetchRandomProduct() {
  try {
    // Número aleatorio entre 1 y 100
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    
    // Modificar la URL de la solicitud fetch para incluir el ID aleatorio
    const url = `https://api.example.com/products/${randomProductId}`;
    
    // Realizar la solicitud fetch con la URL modificada
    const response = await fetch(url);
    
    // Verificar si la petición fue exitosa
    if (!response.ok) {
      throw new Error('La petición no fue exitosa');
    }
    // Extraer y convertir los datos a formato JSON
    const product = await response.json();
    
    // Imprimir el producto obtenido en la consola
    console.log('Producto aleatorio:');
    console.log(product);
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
}

// Llamar a la función para obtener un producto aleatorio
fetchRandomProduct();