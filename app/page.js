import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";
import { getProducts } from "@/lib/getProducts";

export const dynamic = 'force-dynamic';

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
