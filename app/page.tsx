import * as React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center self-stretch mt-32 px-24 py-8 max-md:px-5">
      <div className="flex max-md:flex-col gap-20  max-w-full">
        {/* Left Column (Introduction) */}
        <div className="flex flex-col w-full max-md:w-[50%] lg:ml-32">
          <div className="flex flex-col self-stretch my-auto text-xl  text-slate-800 max-w-full">
            <div className="text-9xl font-bold">
              Hi, I'm Matt,
            </div>
            <div className="text-4xl tracking-normal leading-[60px] text-indigo-800 mt-12 w-[90%]">
              an aspiring Software Engineer with a background in Biostatistics.
            </div>
            <div className="text-2xl mt-20 italic">
              Scroll to see what I've learned so far.
              </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="ml-20 max-md:pt-20 flex flex-col w-full  ">
          <div className="aspect-w-1 aspect-h-1 ">
          <img
                loading="lazy"
                src="/IMG_2384.jpg"  // Adjust the path based on your directory structure
                alt="Profile Image"
                className="object-cover w-full h-full rounded-[10%]"
                style={{ maxWidth: "70%", width: "70%" }}
              />
          </div>
        </div>
      </div>

      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-72">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-6xl font-bold">
                Front-end development.
              </div>
              <div className="text-2xl tracking-normal leading-[50px] mb-12 text-slate-900 mt-8 w-[75%]">
              During my most recent internship, I collaborated with designers on Figma, followed Hi-Fi prototypes, and built the front-end of a website following a mobile-first design system.
              This was my first time following <em>Agile</em> and <em>Scrum</em> principles.
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <button className="bg-blue-500 text-white rounded-full px-6 py-2">TypeScript</button>
                <button className="bg-gray-800 text-white rounded-full px-6 py-2">Next.js</button>
                <button className="bg-teal-500 text-white rounded-full px-6 py-2">Tailwind CSS</button>
                <button className="bg-gray-900 text-white rounded-full px-6 py-2">Ghost CMS</button>
                <button className="bg-orange-600 text-white rounded-full px-6 py-2">Git</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-12">
            <iframe
              src="https://unionize101.org"  // Replace with your website URL
              title="Website Preview"
              className="w-full h-full"
              style={{ maxWidth: "80%", height: "800px", border: "none" }}
            />
          </div>
      </div>

      {/* Start of AWS Deployment */}
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-72">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-6xl font-bold">
               AWS Cloud Services.
              </div>
              <div className="text-2xl tracking-normal leading-[50px] mb-12 text-slate-900 mt-8 w-[75%]">
              During my most recent internship, I collaborated with designers on Figma, followed Hi-Fi prototypes, and built the front-end of a website following a mobile-first design system.
              This was my first time following <em>Agile</em> and <em>Scrum</em> principles!
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <button className="bg-blue-500 text-white rounded-full px-6 py-2">TypeScript</button>
                <button className="bg-gray-800 text-white rounded-full px-6 py-2">Next.js</button>
                <button className="bg-teal-500 text-white rounded-full px-6 py-2">Tailwind CSS</button>
                <button className="bg-gray-900 text-white rounded-full px-6 py-2">Ghost CMS</button>
                <button className="bg-orange-600 text-white rounded-full px-6 py-2">Git</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-12">
            <iframe
              src="https://unionize101.org"  // Replace with your website URL
              title="Website Preview"
              className="w-full h-full"
              style={{ maxWidth: "80%", height: "800px", border: "none" }}
            />
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-72">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-6xl font-bold">
               Joe Mama's Cloud Service.
              </div>
              <div className="text-2xl tracking-normal leading-[50px] mb-12 text-slate-900 mt-8 w-[75%]">
              During my most recent internship, I collaborated with Joe
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <button className="bg-blue-500 text-white rounded-full px-6 py-2">TypeScript</button>
                <button className="bg-gray-800 text-white rounded-full px-6 py-2">Next.js</button>
                <button className="bg-teal-500 text-white rounded-full px-6 py-2">Tailwind CSS</button>
                <button className="bg-gray-900 text-white rounded-full px-6 py-2">Ghost CMS</button>
                <button className="bg-orange-600 text-white rounded-full px-6 py-2">Git</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-12">
            <iframe
              src="https://unionize101.org"  // Replace with your website URL
              title="Website Preview"
              className="w-full h-full"
              style={{ maxWidth: "80%", height: "800px", border: "none" }}
            />
          </div>
      </div>
    </div>


  );
}
