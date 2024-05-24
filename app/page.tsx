
import { products } from "@/data/products";
import Container from "./components/Container";
import WorkspacePricing from "./components/Pricing";
import ProductCard from "./components/products/ProductCard";
import PricingSection from "./components/Home/Pricing/PricingSection";
import Header from "./components/Header/Header";
import Amenities from "./components/Home/Amenities/Amenities";
export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          {/* <HomeBanner/> */}
          <Header/>
          
          <Amenities/>
          <PricingSection/>
        </div>
      </Container>
    </div>
  )
}
