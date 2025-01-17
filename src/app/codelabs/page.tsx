import { CodelabsShowComponent, Nav, Footer } from "@/components";
import { Codelab, CodelabsPageResponse } from "@/types/codelabs";
import { LoadingSkeleton } from "@/components";
import { Suspense } from "react";
import { getCachedCodelabsData } from "@/actions/codelab/getCachedCodelabsData";

export default async function Codelabs() {
  // Fetch cached codelabs data (server-side logic)
  const codelabsPageResponse: CodelabsPageResponse = await getCachedCodelabsData();
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex-1 overflow-y-auto scrollable-content pt-[10vh]">
        <div className="w-[80vw] mx-auto flex flex-col sm:flex-row flex-wrap gap-[10vh] justify-center mb-20">
          {codelabsPageResponse.codelabs.map((codelab: Codelab) => (
            <Suspense key={codelab.id} fallback={<LoadingSkeleton />}>
              <CodelabsShowComponent codelab={codelab} />
            </Suspense>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}