import { CodelabsShowComponent, Nav, Footer } from "@/components";
import { CodelabsPageResponse, Codelab } from "@/types/codelabs";

// This is test data and will be removed in future
export const codelabsPageResponse: CodelabsPageResponse = {
    codelabs: [
      {
        id: "codelab-1",
        screenshotUrl: "/images/placeholders/codelabs-placeholder1.png",
        gcsUrl: "this is iframe bucked url",
        title: "Introduction to TypeScript",
        keyLearnings: [
          { content: "Understand basic TypeScript types", icon: "📚🛠️" },
          { content: "Learn how to define interfaces and types" },
          { content: "Work with TypeScript in a project", icon: "🚀☁️" },
        ],
        releasedDate: "2024-01-01",
        author: "John Doe",
      },
      {
        id: "codelab-2",
        screenshotUrl: "/images/placeholders/home-placeholder2.png",
        gcsUrl: "this is iframe bucket url",
        title: "Advanced React Patterns",
        keyLearnings: [
            { content: "Implement", icon: "💻🔧" },
            { content: "Understand", icon: "🧠📘" },
            { content: "Explore React context and hooks", icon: "⚛️🔍" },
            { content: "More Dev", icon: "🛠️🚀" }
          ],
        releasedDate: "2023-12-15",
      },
    ],
  };
export default function Codelabs() {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex-1 overflow-y-auto scrollable-content p-[10vh]">
        <div className="w-[80vw] mx-auto flex flex-col sm:flex-row flex-wrap gap-[10vh] justify-center mb-20">
          {codelabsPageResponse.codelabs.map((codelab: Codelab) => (
            <CodelabsShowComponent key={codelab.id} codelab={codelab} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}