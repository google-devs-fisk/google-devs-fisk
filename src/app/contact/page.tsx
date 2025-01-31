import { BgGrid, DepthBlur, Footer, Nav, ContactCard, ContactNewsletter } from "@/components";
import Image from "next/legacy/image";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex-1 overflow-y-auto scrollable-content">
        <main className="relative w-screen">
          <div className="fixed inset-0 w-screen">
            <DepthBlur />
            <BgGrid />
          </div>
          <div className="relative z-10 mt-20">
            <div className="flex flex-row justify justify-around mb-10 p-4 flex-wrap">
              <div className="contact-info p-4 flex flex-col items-start justify-center">
                <p className="text-5xl font-bold pb-5 dark:text-slate-100">
                  Let's discuss <br />
                  on something <span className="text-slate-400">cool</span>
                  <br /> together
                </p>
                <div className="flex flex-row flex-wrap">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fdf093ccc4b53490f9d89a3829403aab10343181a957df0ad548014f996a7d1?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
                    alt="email"
                    height={24}
                    width={24}
                  />
                  <p className="px-3 py-5 contact-p">gdgfisk2k25@gmail.com</p>
                </div>
                <div className="flex flex-row">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d8f9ee0fc901af0fc28abc29daca23069c7a130ebe54f0101e6d471e49bbba?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
                    alt="Location"
                    height={24}
                    width={24}
                  />
                  <p className="px-3 py-5 contact-p">
                    1000 17th Ave N, Nashville, TN
                  </p>
                </div>
              </div>
              <ContactCard />
            </div>
            <ContactNewsletter />
          </div>
        </main>
        <Footer />
      </div>
    </div>
    );
};

export default Contact;
