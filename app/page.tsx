import * as React from "react";
import { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Matthew Ilejay',

}
export default function Home() {
  return (
    <div className={` flex flex-col transition animateIn`}>
    <div className="flex flex-col justify-center items-center self-stretch mt-16 px-16 py-8 max-md:px-5">
    <div className="flex max-md:flex-col gap-20 max-w-full mb-12 ">
          <Link href="https://www.linkedin.com/in/matthew-ilejay-8403441ab/" className="text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </Link>
          <a href="https://github.com/trilejay" className="text-black">
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
          <a href="mailto:milejay14@gmail.com" className="text-blue-500">
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </a>
          <a href="tel:+16616457503" className="text-blue-800">
            <FontAwesomeIcon icon={faPhone} size="4x" />
          </a>
        </div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="flex max-md:flex-col gap-10  max-w-full">
        <div className="flex flex-col w-full max-md:w-[50%] lg:ml-32">
          <div className="flex flex-col self-stretch my-auto text-xl  text-slate-800 max-w-full">
            <div className="text-9xl font-bold">
              Hi, I'm Matt,
            </div>
            <div className="text-4xl tracking-normal leading-[60px] text-indigo-800 mt-12 w-[90%]">
            an aspiring Software Engineer with a background in Public Health and Biostatistics.
            </div>
            <div className="text-2xl mt-40 italic">
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
              Full-stack development
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-12 text-slate-900 mt-8 w-[80%]">
              My internship at Pinear provided me with valuable experience in front-end development. Following Figma design handoffs, and adhering to <strong>Agile</strong> and <strong>Scrum</strong> principles, I led the development of the front-end of an informational website, ensuring responsiveness by utilizing 
               Tailwind <strong>breakpoints</strong>, <strong>media queries</strong>, <strong>relative sizing</strong>, and <strong>flexboxes</strong>.
             <br>
             </br>
             <br>
             </br>
             I also have experience with back-end development in areas such as <strong>Express.js</strong>, <strong>Node.js</strong>, <strong>HTTP</strong>, <strong>form handling</strong>, and <strong>routing</strong>.
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">TypeScript</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Next.js</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Tailwind CSS</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Ghost CMS</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Git</button>
              </div>
              <div className="flex flex-wrap gap-12 mb-8">
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Express.js</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Node.js</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">HTTP</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Form Handling</button>
                <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Routing</button>
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
              After my internship, I wanted to learn more about <strong>cloud services</strong>, so I downloaded a dataset of the 50,000 best selling products on Amazon, stored it into an <strong>S3 bucket</strong>, and connected it to 
              <strong> Amazon Quicksight</strong> to create data visualizations.
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-12 text-slate-900 mt-4 w-[75%]">
              Oh, and I built this portfolio and hosted it using <strong>CloudFront</strong>, <strong>AWS Amplify,</strong><strong> S3 buckets</strong>, and <strong>Route 53.</strong> 
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
              I then wanted to learn more about <strong>databases</strong>, so I decided to make an <strong>automated ETL pipeline</strong> using Python.
              I fetched, parsed, and transformed raw JSON data from a free API, created a <strong>MySQL database</strong>, and stored the transformed data into that database using
              <strong> SQLAlchemy</strong>.
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
              Through my time learning, I really put emphasis on understanding the fundamentals of programming, including <strong>data structures, memory allocation, time complexity, algorithms, OOP, types, functions, and debugging. </strong>
              Some other languages I am proficient at include C, C++, and JavaScript.
              </div>
            </div>
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-32">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
              <div className="text-4xl">
               <strong>That's all... for now!</strong>
              </div>
              <div className="text-xl tracking-normal leading-[40px] mb-24 text-slate-900 mt-8 w-[75%]">
              Thanks for making it this far! I plan to expand my knowledge by participating in hackathons, tech conferences, grinding out leetcode, and building more things. Thanks for reading my portolio! :)
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>

  );
}
