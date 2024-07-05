import * as React from "react";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center self-stretch mt-24 px-16 py-8 max-md:px-5">
        <Head>
        <link rel="icon" href="/M.jpeg" />
        </Head>
      <div className="flex max-md:flex-col gap-10  max-w-full">
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
        <div className="ml-10 max-md:pt-20 flex flex-col w-full mt-12">
          <div className="aspect-w-1 aspect-h-1 ">
          <img
                loading="lazy"
                src="/IMG_2384.jpg"  // Adjust the path based on your directory structure
                alt="Profile Image"
                className="object-cover w-full h-full rounded-[10%]"
                style={{ maxWidth: "80%", width: "80%" }}
              />
          </div>
        </div>
      </div>

      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-32">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-5xl font-bold">
              Front-end development
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-12 text-slate-900 mt-8 w-[80%]">
              During my most recent internship, I collaborated with designers on Figma, followed Hi-Fi prototypes, and built the front-end of a website following a mobile-first design system.
              This was my first time following <em>Agile</em> and <em>Scrum</em> principles.
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">TypeScript</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Next.js</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Tailwind CSS</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Ghost CMS</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Git</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-12">
            <iframe
              src="https://unionize101.org"  // Replace with your website URL
              title="Website Preview"
              className="w-full h-full"
              style={{ maxWidth: "95%", height: "800px", border: "none" }}
            />
          </div>
      </div>

      {/* Start of AWS Deployment */}
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-32">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-5xl font-bold">
               AWS Cloud Services
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
              After my internship, I wanted to learn more about <em>cloud services</em>, so I downloaded a dataset of the 50,000 best selling products on Amazon, stored it into an <em>S3 bucket</em>, and connected it to 
              <em> Amazon Quicksight</em> to create data visualizations.
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-12 text-slate-900 mt-4 w-[75%]">
              Oh, and I built this portfolio and hosted it using <em>CloudFront</em>, <em>AWS Amplify,</em><em> S3 buckets</em>, and <em>Route 53.</em> 
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">S3</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Route 53</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">CloudFront</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Amazon Quicksight</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">AWS Amplify</span>
              </div>
            </div>
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-24">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-5xl font-bold">
              Databases and ETL Pipelines
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-12 text-slate-900 mt-8 w-[75%]">
              I then wanted to learn more about <em>databases</em>, so I decided to make an <em>automated ETL pipeline</em> using Python.
              I fetched, parsed, and transformed raw JSON data from a free API, created a <em>MySQL database</em>, and stored the transformed data into that database using
              <em> SQLAlchemy</em>.
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
              <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Python</span>
              <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">MySQL</span>
              <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">SQLAlchemy</span>
              </div>
            </div>
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-32">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-5xl font-bold">
               Programming Fundamentals
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
              Through general coursework and self-learning, I put emphasis on really hammering down the fundamentals of programming, including <em>data structures, algorithms, OOP, types, functions, and debugging.</em>
              </div>
            </div>
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-32">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-4xl">
               <em>That's all... for now!</em>
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
              Thanks for making it this far! I plan to expand my knowledge by participating in hackathons, grinding out leetcode, and doing personal projects.
              My next goal is to learn more about machine learning through free resources and projects. Thanks for reading my portolio! :)
              </div>
            </div>
          </div>
      </div>
    </div>


  );
}
