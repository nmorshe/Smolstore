import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

const apiEndPoint = '/api/products';

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(baseURL + apiEndPoint);
  const products = await response.json();
  return products;
}

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
