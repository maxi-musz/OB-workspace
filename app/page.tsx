
import { products } from "@/data/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import WorkspacePricing from "./components/Pricing";
import ProductCard from "./components/products/ProductCard";
export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner/>
          <div className="text-center mt-12 mb-12">
            <div>
              <h1 className="font-extrabold">Available Subscription Plans</h1>
            </div>
            <div className="text-slate-500">Select the best subscription plan suitable for you from among the below cheap subscription plans</div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product}/>
          })}
        </div> 
        </div>
      </Container>
    </div>
  )
}
