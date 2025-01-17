import React from 'react';

const Landing = () => {
  return (
    <div
      className="pt-40 inset-0 z-10 pl-40 flex flex-col items-start h-screen bg-[url('/images/placeholders/home-placeholder1.png')] bg-cover bg-center bg-no-repeat text-white bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%), url('/images/placeholders/home-placeholder1.png')",
      }}
    >
      <h1 className="uppercase text-6xl font-bold mb-5">Google Devs</h1>
      <h2 className="primary-heading text-5xl font-bold mb-5">Fisk University</h2>
      <h5 className="capitalize text-lg secondary-color">
        Come together to identify problems, conceptualize
      </h5>
      <h5 className="capitalize text-lg mb-12">
        coding ideas, and find the answers.
      </h5>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-pink-400 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Landing;
