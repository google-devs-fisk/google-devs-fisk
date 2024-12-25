import { Nav, Footer} from "@/components";
export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <Nav />
    <div className="flex-1 overflow-y-auto scrollable-content mt-8">
    <p>Any other content goes here</p>
    <Footer />
    </div>
  </div>
  );
}
