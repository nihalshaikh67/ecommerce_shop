import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";
import { client } from "./lib/client";
const Home = ({ products, bannerData }) => {
  // console.log(products);
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2> Best Selling Products</h2>
        <p>Speakers of many Variations</p>
        <div className="products-container">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const Bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(Bannerquery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
