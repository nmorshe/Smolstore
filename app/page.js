import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";
<<<<<<< HEAD
import { getProducts } from "@/lib/getProducts";
=======

const apiEndPoint = '/api/products';

export async function getProducts() {
  const baseURL = process.env.HOST_URL;
  const response = await fetch(baseURL + apiEndPoint);
  const products = await response.json();
  return products;
}
>>>>>>> 4259b9a19bc0d922acd1ae9976f1a26d850fea60

const Home = async () => {

  const products = await getProducts();
  
  let planner = null;
  let stickers = [];

  for (let product of products){
    if (product.name === 'Medieval Dragon Month Planner'){
      planner = product;
      continue;
    }

    stickers.push(product);
  }

  return (
    <>

      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}

export default Home;
