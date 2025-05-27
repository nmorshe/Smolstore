const apiEndPoint = '/api/products';

export async function getProducts() {

  try {
    const baseUrl = process.env.HOST_URL;
    const response = await fetch(baseUrl + apiEndPoint, { cache: 'no-store' });
    const products = await response.json();

    if (!Array.isArray(products)) {
      console.log("Array error: ", products);
      console.error('Invalid data format:', products);
      return [];
    }

    return products;
  }

  catch (err){
    console.error('Error fetching products:', err);
    return [];
  }

}