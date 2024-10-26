'use client';
import * as React from "react";
import { Metadata } from 'next';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

export default function Home() {
  const [isFullStackVisible, setIsFullStackVisible] = React.useState(false);

  const toggleFullStack = () => {
    setIsFullStackVisible(!isFullStackVisible);
};
const [isDatabasesVisible, setIsDatabasesVisible] = React.useState(false);

const toggleDatabases = () => {
  setIsDatabasesVisible(!isDatabasesVisible);
};

const [isDataStructuresVisible, setIsDataStructuresVisibile] = React.useState(false);

const toggleDataStructures = () => {
  setIsDataStructuresVisibile(!isDataStructuresVisible);
};

const [isAWSVisible, setIsAWSVisibile] = React.useState(false);

const toggleAWS = () => {
  setIsAWSVisibile(!isAWSVisible);
};

const [isMLVisible, setIsMLVisible] = React.useState(false);

const toggleML = () => {
  setIsMLVisible(!isMLVisible);
};

const [isExtraVisible, setIsExtraVisible] = React.useState(false);

const toggleExtra = () => {
  setIsExtraVisible(!isExtraVisible);
};


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
            <div className="text-9xl font-bold ">
              Hi, I'm Matt!
            </div>
            <div className="text-4xl tracking-normal leading-[60px] text-indigo-800 mt-12 w-[90%]">
            I'm an aspiring Software Engineer set to graduate with a B.S in CS from Oregon State University in December 2025.
            </div>
            <div className="text-2xl mt-40 italic">
             Click each topic to see what I've learned so far!
            </div>
          </div>
        </div>
        <div className="ml-10 max-md:pt-20 flex flex-col w-full mt-12">
          <div className="aspect-w-1 aspect-h-1 ">
          <img
                loading="lazy"
                src="/IMG_3099.jpg"  
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
            <div className="text-5xl font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-600" onClick={toggleDataStructures}>
              Data Structures & Algorithms
              </div>
              {isDataStructuresVisible && (
              <div className="text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
              <p>
                Throughout my studies, I've developed a strong foundation in key concepts and practical implementations in data structures & algorithms:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Fundamental Data Structures:</strong> Gained hands-on experience with core data structures such as dynamic arrays, linked lists, binary search trees (BST), AVL trees, hash maps, and min heaps. Understanding their properties and use cases allowed me to choose the most appropriate structure for different applications.
                </li>
                <li>
                  <strong>Implementation:</strong> I created Python implementations of several fundamental data structures, each equipped with methods for common operations, including:
                  <ul className="list-disc pl-5">
                    <li>The <strong>DynamicArray</strong> class includes methods to resize, append, insert, remove, slice, merge, map, filter, reduce, and find mode.</li>
                    <li>The <strong>BST</strong> class implements methods for adding, removing, checking containment, and finding minimum and maximum values.</li>
                    <li>The <strong>AVLTree</strong> class maintains balanced tree properties through rotation during insertions and deletions.</li>
                    <li>The <strong>LinkedList</strong> class supports operations for insertion, deletion, and traversal.</li>
                    <li>The <strong>HashMap</strong> class facilitates adding, removing, and retrieving key-value pairs.</li>
                    <li>The <strong>MinHeap</strong> class allows for efficient minimum extraction and heapification.</li>
                  </ul>
                </li>
                <li>
                  <strong>Algorithm Design:</strong> Explored various algorithm design techniques, including divide and conquer, dynamic programming, and greedy algorithms, enabling me to tackle complex problems systematically and develop efficient solutions.
                </li>
                <li>
                  <strong>Time and Space Complexity:</strong> Learned to analyze the efficiency of algorithms using Big O notation, helping me evaluate their performance in terms of time and space requirements, which is vital for optimizing code and ensuring scalability.
                </li>
                <li>
                  <strong>Sorting and Searching Algorithms:</strong> Implemented and compared various sorting algorithms (e.g., quicksort, mergesort, bubblesort) and searching techniques (e.g., binary search), essential for manipulating and retrieving data efficiently.
                </li>
              </ul>
            </div>
            
              )}
            </div>
          </div>
      </div>



  <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
  <div className="flex flex-col w-full mt-10 ">
    <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
      {/* Clickable title */}
      <div
        className="text-5xl font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-600"
        onClick={toggleFullStack}
      >
        Full-stack Development
      </div>

      {/* Dropdown content */}
      {isFullStackVisible && (
        <div className="text-xl tracking-normal leading-[40px] mb-12 text-slate-900 mt-8 w-[80%] transition-all duration-500 ease-in-out">
          <p>
          During my internship at a small startup, I gained valuable experience in front-end development. I led the development of a responsive informational website that was use by over 10 company clients, translating Figma design handoffs into functional code using Next.js, TypeScript, HTML, and Tailwind CSS. I ensured the website’s responsiveness by employing Tailwind breakpoints, media queries, relative sizing, and flexbox layouts while adhering to Agile and Scrum methodologies within a collaborative team of designers, marketers, and engineers.
          </p>
          <br />
          <p>
          In addition to my front-end experience, I have hands-on experience in back-end development with Node.js, Express.js, and JavaScript. This includes handling HTTP requests, managing form submissions, and implementing routing for RESTful APIs. I also developed a full-stack web application utilizing Flask and React, which features web scraping with BeautifulSoup4. Furthermore, I built a personal portfolio website that employed MongoDB for data management and efficient CRUD operations.
          </p>

          {/* Skills section */}
          <div className="flex flex-wrap gap-12 mb-8 mt-8">
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">TypeScript</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">JavaScript</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">Next</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">React</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">TailwindCSS</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">Node</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">Express</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">Flask</button>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600 transition">Git</button>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
      

      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-10">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full ">
              <div className="text-5xl font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-600" onClick={toggleDatabases}>
               Databases
              </div>
              {isDatabasesVisible && (
              <div className="transition-all duration-500 ease-in-out text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
                Throughout my studies and projects, I've gained a solid understanding of databases, particularly in the context of SQL and relational database management systems. Some key concepts I've learned include:
                <ul className="list-disc ml-6 mt-4">
                  <li><strong>Database Fundamentals:</strong> I learned about the structure of databases, including tables, rows, and columns, and the importance of primary and foreign keys in establishing relationships between tables.</li>
                  <li><strong>SQL:</strong> I became proficient in SQL fundamentals, enabling me to perform CRUD operations within a database. This includes understanding complex queries, joins, and subqueries to manipulate and retrieve data effectively.</li>
                  <li><strong>Database Design:</strong> I applied the principles of database normalization, ensuring that data is organized efficiently to minimize redundancy and improve data integrity. I applied these principles while designing schemas for my projects.</li>
                  <li><strong>Integration with Applications:</strong> I applied my database knowledge in projects, integrating databases with web applications by creating backend databases and using MongoDB, MySQL, and PostgreSQL to store data.</li>
                  <li><strong>REST API Implementation</strong> I developed RESTful APIs that connected front-end applications to the backend databases. This involved using frameworks like Express.js to create endpoints for data retrieval and manipulation, allowing seamless communication between the client and server.</li>
                </ul>
             
              
              <div className="flex flex-wrap gap-12 mt-8  mb-8">
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">SQL</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">PostgreSQL</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">MongoDB</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">MySQL</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">REST APIs</span>
              </div>
              </div>
              )}
            </div>
          </div>
      </div>

      {/* Start of AWS Deployment */}
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-10">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
            <div className="text-5xl font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-600" onClick={toggleAWS}>
               AWS Cloud Services
              </div>
              {isAWSVisible && (
              <div className="text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
              After my internship, I wanted to learn more about <strong>cloud services</strong>, so I downloaded a dataset of the 50,000 best selling products on Amazon, stored it into an <strong>S3 bucket</strong>, and connected it to 
              <strong> Amazon Quicksight</strong> to create data visualizations. I also hosted this portfolio using <strong>CloudFront</strong>, <strong>AWS Amplify,</strong><strong> S3 buckets</strong>, and <strong>Route 53. </strong> 
               ... until Amazon started charging me and I had to switch to Vercel.
              
              <div className="flex flex-wrap gap-12 mt-8 mb-8">
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">AWS</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Quicksight</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">S3</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Amplify</span>
                <span className="bg-blue-500 text-white rounded-full px-6 py-2 cursor-default hover:bg-blue-600">Route53</span>
              </div>
              </div>
              )}
            </div>
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-10">
            <div className="flex flex-col self-stretch my-auto text-xl text-slate-800 max-w-full">
            <div className="text-5xl font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-600" onClick={toggleML}>
              Machine Learning
              </div>
              {isMLVisible && (
              <div className="text-xl tracking-normal leading-[40px] mb-2 text-slate-900 mt-8 w-[75%]">
              <p>
              I’ve recently begun the Machine Learning course by Andrew Ng on Coursera, where I’ve started learning the fundamentals, including regression and classification. This course has provided me with a strong foundation for understanding how machine learning models make predictions from data. In addition to this, I plan to take a machine learning course in the Spring as part of my undergraduate studies at Oregon State University, where I’ll continue to build on these skills and explore more complex techniques such as deep learning and neural networks!
              </p>
            </div>
            
              )}
            </div>
          </div>
      </div>
      <div className="max-md:pt-20 flex flex-col w-full lg:ml-60">
        <div className="flex flex-col w-full mt-32">
            <div className="text-5xl font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-600">
              <div className="text-4xl" onClick={toggleExtra}>
               <strong>Extracurriculars!</strong>
              </div>
              {isExtraVisible && (
              <div className="text-xl tracking-normal leading-[40px] mb-24 text-slate-900 mt-8 w-[75%]">
              I recently won 2nd place in the TEDxSouthCentralLA Hackathon, where I developed a policy-driven solution to improve sustainable transportaiton within LA.
              Also, I just got my CodePath certification, where I solved leetcode type problems, in groups, exclusively in Python.
              Thanks for reading! :)
              </div>
              )}
            </div>
          </div>
      </div>
    </div>
    </div>

  );
}
