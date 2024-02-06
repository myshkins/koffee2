import ShopBanner from "../components/ShopBanner";
import productArray from "../components/productArray";
import EventBanner from "../components/EventBanner";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <ShopBanner productArray={productArray} />
      <EventBanner />
    </>
  )
}

