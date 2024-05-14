
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import WorkspacePricing from "./components/Pricing";
export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner/>
          <WorkspacePricing/>
        </div>
      </Container>
    </div>
  )
}
