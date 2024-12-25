import { Nav, Footer, Btn} from "@/components";
export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <Nav />
    <div className="flex-1 overflow-y-auto scrollable-content mt-8">
    <p>Any other content goes here</p>
    <div className="mt-8"><Btn text="Read me" link="/projects"/></div>
    <Footer />
    </div>
  </div>
  );
}
