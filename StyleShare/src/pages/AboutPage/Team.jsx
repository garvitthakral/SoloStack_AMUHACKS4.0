import React from "react";

const Team = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section: App Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-500">
            The Idea Behind StyleShare
          </h2>
          <p className="text-gray-300 text-lg">
            StyleShare was born from a simple yet powerful thought — what if
            everyone, regardless of their situation, had the dignity to choose
            what they wear? Instead of handing over used clothes, we envisioned
            a platform where donors could upload items and anyone in need could
            browse, select, and receive clothing — just like shopping, but free
            and full of dignity.
          </p>
        </div>

        {/* Section: Developer Story */}
        <div className="flex gap-6">
          <div className="w-4/12">
            <img
              src="https://res.cloudinary.com/dtntjxdio/image/upload/v1743102536/founder_vnrtiz.jpg"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="w-8/12">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Meet the Developer — Garvit Thakral
            </h2>
            <p className="text-gray-400 text-base mb-4">
              I'm Garvit, a passionate and curious developer who’s been deeply
              interested in coding and creating meaningful applications for the
              past 1.5 years. I thrive on solving real-world problems through
              tech, and I’m constantly exploring the MERN stack to bring my
              ideas to life.
            </p>
            <p className="text-gray-400 text-base mb-4">
              StyleShare is my first solo hackathon project — built completely
              from scratch using React, Tailwind, Express, MongoDB, and
              JWT-based authentication. From backend structure to frontend logic
              and design, I crafted every piece with the goal of making donation
              feel like a choice, not charity.
            </p>
            <p className="text-gray-400 text-base">
              I believe technology is most impactful when it makes someone’s
              life feel better. StyleShare is just the start — I’m learning,
              building, and growing with every line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
