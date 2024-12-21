import * as React from "react";
import { NavItem } from "./NavItem";
import { InterestButton } from "./InterestButton";
import { ContactInfoItem } from "./ContactInfoItem";
import { FooterLink } from "./FooterLink";

const navItems = [
  { text: "PROJECTS", href: "/projects" },
  { text: "CODELABS", href: "/codelabs" },
  { text: "WORK CULTURE", href: "/culture" },
  { text: "CONTACT", href: "/contact" },
];

const interests = [
  { text: "iOS Dev", isActive: true },
  { text: "Android", isActive: false },
  { text: "ML", isActive: false },
  { text: "Full Stack", isActive: false },
  { text: "System Design", isActive: false },
  { text: "Other", isActive: false },
];

const contactInfo = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fdf093ccc4b53490f9d89a3829403aab10343181a957df0ad548014f996a7d1?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62",
    text: "gdgfisk2k25@gmail.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/75d8f9ee0fc901af0fc28abc29daca23069c7a130ebe54f0101e6d471e49bbba?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62",
    text: "1000 17th Ave N, Nashville, TN",
  },
];

const footerLinks = [
  { text: "Terms", href: "/terms" },
  { text: "Privacy", href: "/privacy" },
  { text: "Conditions", href: "/conditions" },
];

export const ContactPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pb-10 rounded-3xl border-solid bg-slate-900 border-[3px] border-stone-50 border-opacity-30 max-md:px-5">
      <nav className="flex gap-5 justify-between items-start max-w-full text-lg font-semibold text-white w-[812px]">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c87191abe732eae573be24fc50d36b18a9ad66d28f2a636cde98bcac3f42af1?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[4.17] w-[196px]"
        />
      </nav>

      <main className="self-end mt-16 w-full max-w-[1236px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-5xl font-bold text-zinc-100 max-md:text-4xl">
                Let's discuss <br />
                on something cool together
              </h1>
              <div className="flex flex-col mt-16 text-xl font-medium text-white max-md:mt-10 max-md:max-w-full">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={index} {...info} />
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <form className="flex overflow-hidden flex-col px-12 pt-12 pb-20 mx-auto w-full text-xl font-semibold bg-black rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-center text-white max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[604px]">
                  <label className="mb-6">I'm interested in...</label>
                  <div className="flex flex-wrap gap-4">
                    {interests.map((interest, index) => (
                      <InterestButton key={index} {...interest} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col w-full gap-16 mt-16 max-md:mt-10">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-transparent border-b border-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-transparent border-b border-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Message Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-transparent border-b border-white"
                      placeholder="Message Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="sr-only">
                      Brief description
                    </label>
                    <textarea
                      id="description"
                      className="w-full bg-transparent border-b border-white"
                      placeholder="Brief description of your Idea (if any)"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="flex gap-4 items-center self-start px-16 py-6 mt-14 text-center rounded-2xl text-zinc-100 max-md:px-5 max-md:mt-10"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/41716a93c1bd0273a257ff096057b7833fc51da3a164a8fa5848d97a4aa736f6?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </div>
      </main>

      <section className="flex flex-col items-center px-20 pt-12 pb-28 mt-60 max-w-full text-white rounded-[35px] w-[984px] max-md:px-5 max-md:pb-24 max-md:mt-10">
        <div className="flex flex-col mb-0 ml-2.5 max-w-full w-[561px] max-md:mb-2.5">
          <h2 className="mr-3 text-3xl font-medium leading-none uppercase max-md:mr-2.5 max-md:max-w-full">
            Subscribe to our Newsletter
          </h2>
          <p className="self-center mt-4 text-base tracking-wider leading-none text-center max-md:max-w-full">
            Receive info about any of our recent projects and new deployments
          </p>
          <form className="flex flex-wrap gap-3 pl-20 mt-4 text-center whitespace-nowrap rounded-[35px] max-md:pl-5">
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="subscribe-email"
              placeholder="example@gmail.com"
              className="my-auto text-base font-light tracking-wider leading-none bg-transparent"
            />
            <button
              type="submit"
              className="px-9 py-4 text-xl font-medium leading-tight rounded-none max-md:px-5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="w-full max-w-[1195px]">
        <nav className="flex gap-10 mt-44 max-w-full text-2xl font-semibold leading-tight text-center text-white w-[814px] max-md:mt-10">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </nav>

        <hr className="shrink-0 mt-4 max-w-full h-px border border-white border-solid" />

        <div className="flex gap-10 items-start mt-3 w-full">
          <div className="flex gap-10 mt-1.5">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} {...link} />
            ))}
          </div>

          <p className="grow shrink self-stretch text-sm font-light tracking-wider text-center text-white w-[423px] max-md:max-w-full">
            © 2025 Google Developers' Group - Fisk All Rights Reserved
          </p>

          <div className="flex gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1931238f19e29dd4c14cc481abddd4e3cb3e2ecef66f2e1141bb409bbc2a448?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
              alt="Social Media Icon 1"
              className="object-contain shrink-0 aspect-[1.19] w-[19px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d20f585a3366c66a85b2f850bc2a5495784a9caf51c89e423ac388ad717c926?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
              alt="Social Media Icon 2"
              className="object-contain shrink-0 w-4 aspect-square"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
