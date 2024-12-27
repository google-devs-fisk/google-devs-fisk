import { CodelabInfoCardComponent, Nav, Footer } from "@/components";
import { Codelab } from "@/types/codelabs";

interface CodelabInfoPageProps {
    params: {
        id: string
    }
}

// This is test object and should be removed in future
const codelab: Codelab = {
    id: "codelab-1",
    screenshotUrl: "/images/placeholders/codelabs-placeholder1.png",
    gcsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.821795746823!2d-74.00601588437493!3d40.71277531708825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33e843f%3A0x42b5840086c2c31c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1693194205618!5m2!1sen!2sus",
    title: "Introduction to TypeScript",
    keyLearnings: [
      { content: "Understand basic TypeScript types", icon: "📚🛠️" },
      { content: "Learn how to define interfaces and types" },
      { content: "Work with TypeScript in a project", icon: "🚀☁️" },
    ],
    releasedDate: "2024-01-01",
    author: "John Doe",
}

export default function CodelabInfo({ params }: CodelabInfoPageProps) {
  // Process params here
  console.log("This page params: ", params);
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex-1 overflow-y-auto scrollable-content pt-[10vh]">
        <div className="w-[80vw] mx-auto flex flex-col flex-wrap gap-[10vh] justify-center mb-20">
            <CodelabInfoCardComponent codelab={codelab} />
        </div>
        <Footer />
      </div>
    </div>
  );
}