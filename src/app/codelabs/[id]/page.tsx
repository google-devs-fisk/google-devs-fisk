import { CodelabInfoCardComponent, Nav, Footer, LoadingSkeleton } from "@/components";
import { Suspense } from "react";
import { getCachedCodelabsData } from "@/actions";
import { Codelab } from "@/types/codelabs";

// Add revalidate to trigger incremental static regeneration (ISR)
export const revalidate = 3600;  // Revalidate every 1 hour

interface CodelabInfoPageProps {
  params: Promise<{ id: string }>;
}

// Component for displaying individual codelab information
export default async function CodelabInfo({ params }: CodelabInfoPageProps) {
  const { id } = await params;
  // Fetch all codelabs to find the specific one by ID
  const codelabsPageResponse = await getCachedCodelabsData();
  const codelab = codelabsPageResponse.codelabs.find((codelab: Codelab) => codelab.id === id);
  // If the codelab is not found
  if (!codelab) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Codelab Not Found</h1>
        <p>We could not find the codelab you are looking for.</p>
      </div>
    );
  }
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex-1 overflow-y-auto scrollable-content pt-[10vh]">
        <div className="w-[80vw] mx-auto flex flex-col flex-wrap gap-[10vh] justify-center mb-20">
          <Suspense fallback={<LoadingSkeleton />}>
            <CodelabInfoCardComponent codelab={codelab} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}