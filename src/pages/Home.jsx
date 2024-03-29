import ShopBanner from "../components/ShopBanner";
import productArray from "../components/productArray";
import EventBanner from "../components/EventBanner";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <ShopBanner productArray={productArray} />
      <EventBanner />
      <Footer />
    </>
  )
}

