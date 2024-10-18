"use client";
import Nav from "./components/Nav";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import "@fontsource/raleway";
import PageSection from "./components/PageSection";
import ProfilePic from "./images/Profile Pic (September 2024).jpg";
import Coding from "./images/me-coding-express.jpg";
import SnowDay from "./images/snow.jpg";
import PersonalPhotography from "./images/personal-photography-3.jpg";
import UTRGVGrad from "./images/UTRGV Grad Photo May 2023.jpg";
import STCGrad from "./images/STC Grad Photo May 2019.jpg";
import AECHSGrad from "./images/AECHS Grad Photo May 2019.jpg";
import DatingWebApp from "./images/dating-web-app-sample.png";
import PersonalWebsiteReact from "./images/personal-website-react-sample.png";
import CVWebsite from "./images/cv-website-sample.jpg";
import FPI from "./images/food-pantry-inventory-sample.jpg";
import AIChatbot from "./images/ai-chatbot-sample.jpg";
import BrainflashAI from "./images/brainflash-sample.jpg";
import RateTeachAI from "./images/rateteachai-sample.jpg";
import IncludiTripLogo from "./images/includitrip-logo.png";
import Link from "next/link";
import SkillLabel from "./components/SkillLabel";
import Footer from "./components/Footer";
import ViewProjectBtn from "./components/ViewProjectBtn";

export default function Home() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Personal Website Page",
    });
  }, []);

  return (
    <div className="bg-[#020c27] font-['Raleway'] items-center justify-items-center min-h-screen w-full">
      <main className="flex flex-col items-center sm:items-start max-sm:mt-[0vh] text-white">
        <Nav />
        <PageSection id="home">
          <section className="grid grid-cols-2 max-sm:grid-cols-1 w-full">
            <span className="text-center space-y-2 flex items-center flex-col">
              <img
                alt="Ruben Arevalo"
                src={ProfilePic.src}
                className="w-[250px] h-[250px] object-contain rounded-full"
              />
              <br></br>
              <h1 className="text-3xl font-bold uppercase tracking-wider">
                Ruben Arevalo
              </h1>
              <p className="text-lg font-thin tracking-wide">
                Software Engineer
              </p>
            </span>
            <span className="text-center space-y-2 flex flex-col items-center justify-center">
              <ul className="list-none space-y-5 max-sm:space-y-2 max-sm:mt-10">
                <li className="p-3 pl-5 pr-5 rounded-xl border-2 border-solid border-white">
                  <Link href="https://rubenarevalo.com">View Resume</Link>
                </li>
                <li className="p-3 pl-5 pr-5 rounded-xl border-2 border-solid border-white">
                  <Link href="#about">About Me</Link>
                </li>
                <li className="p-3 pl-5 pr-5 rounded-xl border-2 border-solid border-white">
                  <Link href="mailto:ruben.c.arevalo@gmail.com">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </span>
          </section>
        </PageSection>
        <PageSection id="about">
          <section className="grid grid-cols-2 max-sm:grid-cols-1 w-full">
            <span className="text-center space-y-2 flex items-start justify-center flex-col">
              <h1 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
                About Me
              </h1>
              <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                My name is Ruben Arevalo, and I am a software engineer from
                McAllen, Texas.
              </p>
              <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                As someone who has been coding for the past 7 years since my
                junior year of high school back in 2017, I have learned a lot of
                lessons along the way, and have taken a keen interest in
                software development.
              </p>
              <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                More recently, I have also taken an interest in integrating
                generative AI into products to help improve and streamline
                processes, such as determining which clothes fit best for you
                for a date when using a dating app, or determining how many
                calories you should consume a day when using a calorie tracker.
              </p>
              <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                I strive to improve and learn new lessons every day, as well as
                continuously hone my craft in programming so that I can apply
                what I learned into finding solutions for real-world problems.
              </p>
            </span>
            <span className="text-center space-y-2 grid grid-cols-2 place-items-center max-sm:mt-24 max-sm:mb-24">
              <img
                src={Coding.src}
                alt="Ruben Arevalo Coding"
                className="w-[300px] h-[300px] object-cover rounded-lg"
              />
              <img
                src={SnowDay.src}
                alt="Ruben Arevalo Snow Day 2017"
                className="w-[300px] h-[300px] object-cover rounded-lg"
              />
              <img
                src={PersonalPhotography.src}
                alt="Ruben Arevalo Photography 1"
                className="w-[300px] h-[300px] object-cover rounded-lg"
              />
            </span>
          </section>
        </PageSection>
        <hr className="bg-slate-50 pt-1 w-full"></hr>
        <PageSection id="education">
          <section className="grid grid-cols-1 max-sm:grid-cols-1 w-full max-sm:space-y-10">
            <h1 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
              Education
            </h1>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5">
              <span className="flex flex-col items-left justify-center space-y-5">
                <h1 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                  <i>The University of Texas - Rio Grande Valley</i>
                  <br></br>
                  <i className="font-thin">August 2019 - May 2023</i>
                </h1>
                <p className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 text-lg">
                  I earned by Bachelor of Science in Computer Engineering from
                  the University of Texas - Rio Grande Valley in May 2023, with
                  my concentration focusing on software development.
                </p>
              </span>
              <span className="flex flex-col items-center justify-center">
                <img
                  src={UTRGVGrad.src}
                  className="w-[300px] h-[300px] object-cover rounded-lg"
                />
              </span>
            </span>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5">
              <span className="flex flex-col items-left justify-center space-y-5">
                <h1 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                  <i>Achieve Early College High School</i>
                  <br></br>
                  <i className="font-thin">August 2015 - May 2019</i>
                </h1>
                <p className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 text-lg">
                  I earned my high school diploma in May 2019 from Achieve Early
                  College High School after graduating with an associate's
                  degree in computer science weeks prior.
                </p>
              </span>
              <span className="flex flex-col items-center justify-center">
                <img
                  src={AECHSGrad.src}
                  className="w-[300px] h-[300px] object-cover rounded-lg"
                />
              </span>
            </span>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5">
              <span className="flex flex-col items-left justify-center space-y-5">
                <h1 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                  <i>South Texas College</i>
                  <br></br>
                  <i className="font-thin">August 2015 - May 2019</i>
                </h1>
                <p className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 text-lg">
                  I earned my Associate of Science in Computer Science from
                  South Texas College in May 2019--a few weeks before graduating
                  from high school.
                </p>
              </span>
              <span className="flex flex-col items-center justify-center">
                <img
                  src={STCGrad.src}
                  className="w-[300px] h-[300px] object-cover rounded-lg"
                />
              </span>
            </span>
          </section>
        </PageSection>
        <hr className="bg-slate-50 pt-1 w-full"></hr>
        <PageSection id="experience">
          <section className="grid grid-cols-1 max-sm:grid-cols-1 w-full max-sm:space-y-10 space-y-12">
            <h1 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
              Experience
            </h1>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5">
              <span className="flex flex-col items-left justify-center space-y-5">
                <h1 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                  <i>Independent Software Developer</i>
                  <br></br>
                  <i className="font-thin">Self-employed</i>
                  <br></br>
                  <i className="font-thin">May 2023 - Present</i>
                </h1>
              </span>
              <ul className="flex flex-col items-left justify-between space-y-5 text-lg">
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Coordinating with a team of 3 to develop and enhance a web
                  application initiated during previous Headstarter SWE
                  fellowship that generates travel itineraries for individuals
                  with disabilities, currently with 27+ users.
                </li>
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Investing 25 hours/week on average refining knowledge in
                  software development, using best practices, and learning new
                  technologies.
                </li>
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Debugging and optimizing current projects using strategies
                  such as code refactoring and run time analysis.
                </li>
              </ul>
            </span>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5">
              <span className="flex flex-col items-left justify-center space-y-5">
                <h1 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                  <p>
                    <i>Software Engineer Fellow</i>, Headstarter AI
                  </p>
                  <i className="font-thin">Remote</i>
                  <br></br>
                  <i className="font-thin">July 2024 - September 2024</i>
                </h1>
              </span>
              <ul className="flex flex-col items-left justify-between space-y-5 text-lg">
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Built and deployed 5 AI projects using React, Next.js,
                  Firebase, Clerk, and Vercel, incorporating best software
                  engineering practices such as CI/CD for regression detection
                  and iterative deployment.
                </li>
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Collaborated with and led a team of 3 to build and deploy a
                  SaaS product that generates flashcards based on a given topic
                  using the OpenAI API.
                </li>
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Developed a RAG-based project with a team of 3 using the
                  OpenAI API and Pinecone that generates responses based on a
                  provided dataset.
                </li>
              </ul>
            </span>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5">
              <span className="flex flex-col items-left justify-center space-y-5">
                <h1 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                  <p>
                    <i>Retail Salesperson</i>, Walgreens
                  </p>
                  <i className="font-thin">McAllen, Texas</i>
                  <br></br>
                  <i className="font-thin">December 2022 - March 2023</i>
                </h1>
              </span>
              <ul className="flex flex-col items-left justify-between space-y-5 text-lg">
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Guided 20-25 customers/week on average with product questions
                  or related concerns.
                </li>
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Restocked sold out products in respective bays to maintain
                  inventory levels.
                </li>
                <li className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16">
                  Displayed products in the promotional section of the store to
                  help drive sales.
                </li>
              </ul>
            </span>
            <br></br>
            <span className="flex flex-row items-center justify-center text-center">
              <p className="text-xl font-[900] max-sm:ml-10 max-sm:mr-10">
                For more past experiences, visit my{" "}
                <a
                  href="https://www.linkedin.com/in/rchrisarevalo/"
                  target="_none"
                  className="text-blue-700 underline"
                >
                  LinkedIn profile
                </a>
                !
              </p>
            </span>
          </section>
        </PageSection>
        <hr className="bg-slate-50 pt-1 w-full"></hr>
        <PageSection id="projects">
          <section className="grid grid-cols-1 max-sm:grid-cols-1 w-full">
            <h1 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
              Projects
            </h1>
            <br></br>
            <span className="grid grid-cols-2 max-sm:grid-cols-1 items-center w-full space-y-5 max-sm:space-y-32">
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={IncludiTripLogo.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">IncludiTrip</h1>
                <i className="font-thin text-lg">August 2024 - Present</i>
                <p className="text-lg">
                  A project <b>currently in development</b> and in the{" "}
                  <b>general public beta stage</b>, the purpose of this product
                  is to generate personalized itineraries--a feature currently
                  in the works--for people with disabilities and who are looking
                  to travel. Generative AI is used to analyze information such
                  as travel dates, budget range, and destination to provide them
                  with suggested destinations, hotels, and information on
                  accessibility resources that the destinations may offer to
                  accommodate their needs.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="Next.js" />
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="TypeScript" />
                  <SkillLabel skillName="Tailwind" />
                  <SkillLabel skillName="Groq API" />
                  <SkillLabel skillName="Booking.com API" />
                  <SkillLabel skillName="Google Firebase" />
                </span>
                <ViewProjectBtn link="https://includitrip.com/" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={RateTeachAI.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">RateTeach AI</h1>
                <i className="font-thin text-lg">August 2024</i>
                <p className="text-lg">
                  Based and inspired by the concept used by the RateMyProfessor
                  website, this AI-powered web application was built utilizing
                  the concepts of retrieval augmented generation--also known as
                  RAG--utilizing Python, Jupyter Notebook, and Pinecone, to
                  store data embeddings in a vector database to use as an
                  external source of information to provide personalized and
                  accurate responses.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="Next.js" />
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="TypeScript" />
                  <SkillLabel skillName="Tailwind" />
                  <SkillLabel skillName="Pinecone" />
                  <SkillLabel skillName="OpenAI API" />
                  <SkillLabel skillName="Jupyter Notebook" />
                  <SkillLabel skillName="Python" />
                </span>
                <ViewProjectBtn link="https://ai-rmp-lemon.vercel.app/" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={BrainflashAI.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">BrainflashAI</h1>
                <i className="font-thin text-lg">August 2024</i>
                <p className="text-lg">
                  Built by me and my team of 3, this AI-powered flashcard app
                  takes in a user prompt--whether it'd be a series of lecture
                  notes, bullet points, or a question asked by the user--and
                  transforms its content into easy-to-use flashcards, helping
                  those using the product better memorize, understand, and
                  retain concepts better and more efficiently.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="Next.js" />
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="Tailwind" />
                  <SkillLabel skillName="Google Firebase" />
                  <SkillLabel skillName="Clerk" />
                  <SkillLabel skillName="OpenAI API" />
                  <SkillLabel skillName="TypeScript" />
                </span>
                <ViewProjectBtn link="https://brainflashai.com/" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={AIChatbot.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">AI Chatbot</h1>
                <i className="font-thin text-lg">August 2024</i>
                <p className="text-lg">
                  Based on an early prototype of a hackathon project, which
                  became the precursor to our final project, IncludiTrip, this
                  AI chatbot project was built by me and my team of 3, with the
                  Groq API being integrated with a system prompt that will help
                  the user receive suggested travel destinations based on
                  relevant information, such as travel dates, budget range,
                  destination (city and state), etc.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="Next.js" />
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="Google Firebase" />
                  <SkillLabel skillName="TypeScript" />
                  <SkillLabel skillName="Groq API" />
                  <SkillLabel skillName="Tailwind" />
                </span>
                <ViewProjectBtn link="https://wanderai-chatbot.vercel.app/" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={FPI.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">FoodPantryInventory</h1>
                <i className="font-thin text-lg">July 2024 - August 2024</i>
                <p className="text-lg">
                  One of the first AI-powered websites I built, this website
                  revolves around storing items and the quantity of said item in
                  a database. Furthermore, generative AI was incorporated to
                  generate a list of 5 suggested recipes based on the current
                  items stored in the pantry.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="Next.js" />
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="TypeScript" />
                  <SkillLabel skillName="Tailwind" />
                  <SkillLabel skillName="Google Firebase" />
                  <SkillLabel skillName="Material UI" />
                  <SkillLabel skillName="OpenAI API" />
                </span>
                <ViewProjectBtn link="https://foodpantryinventory-ai.vercel.app/" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={DatingWebApp.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">Dating Web App</h1>
                <i className="font-thin text-lg">June 2023 - Present</i>
                <p className="text-lg">
                  I am currently building a dating web application based on a
                  model helps promote self-esteem and laying down the proper
                  foundation for a successful future relationship between two
                  people.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="CSS" />
                  <SkillLabel skillName="TypeScript" />
                  <SkillLabel skillName="FastAPI" />
                  <SkillLabel skillName="Express.js" />
                  <SkillLabel skillName="PostgreSQL" />
                </span>
                <ViewProjectBtn link="https://rchrisarevalo-dev.onrender.com/portfolio" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={PersonalWebsiteReact.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">
                  Personal Website (React)
                </h1>
                <i className="font-thin text-lg">July 2021 - September 2021</i>
                <p className="text-lg">
                  Before making my landing page, I built a personal website that
                  would display information about me, provide announcements to
                  those visiting the site, display works, and allow people to
                  contact me for questions.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="React" />
                  <SkillLabel skillName="CSS" />
                  <SkillLabel skillName="React Bootstrap" />
                  <SkillLabel skillName="FastAPI" />
                </span>
                <ViewProjectBtn link="https://rchrisarevalo-dev.onrender.com" />
              </span>
              <span className="flex flex-col ml-16 mr-16 max-sm:ml-10 max-sm:mr-10 items-left text-left justify-start space-y-2">
                <img
                  src={CVWebsite.src}
                  className="w-[500px] h-[500px] object-cover items-center rounded-2xl"
                  alt="Ruben Arevalo Dating Web App Sample"
                />
                <br></br>
                <h1 className="text-3xl font-[900]">CV Website</h1>
                <i className="font-thin text-lg">June 2021 - July 2021</i>
                <p className="text-lg">
                  One of my first websites, I built this website using only HTML
                  and CSS. This website contains basic, but important details
                  about my background, such as who I am, my education, my work
                  experience, what software projects I built, etc.
                </p>
                <br></br>
                <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                  <SkillLabel skillName="HTML" />
                  <SkillLabel skillName="CSS" />
                </span>
                <ViewProjectBtn link="https://rchrisarevalo.github.io/cv-website" />
              </span>
            </span>
          </section>
        </PageSection>
        <Footer />
      </main>
    </div>
  );
}
