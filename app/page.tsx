import Nav from "./components/Nav";
import "@fontsource/raleway";
import PageSection from "./components/PageSection";
import ProfilePic from "./images/Profile Pic (September 2024).jpg";
import Coding from "./images/me-coding-express.jpg";
import SnowDay from "./images/snow.jpg";
import PersonalPhotography from "./images/personal-photography-3.jpg";
import UTRGVGrad from "./images/UTRGV Grad Photo May 2023.jpg";
import STCGrad from "./images/STC Grad Photo May 2019.jpg";
import AECHSGrad from "./images/AECHS Grad Photo May 2019.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-cyan-950 font-['Raleway'] items-center justify-items-center min-h-screen w-full">
      <main className="flex flex-col items-center sm:items-start max-sm:mt-[0vh]">
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
                  <Link href="./docs/Arevalo, Ruben - Resume (September 2024).pdf">
                    View Resume
                  </Link>
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
            <span className="flex flex-row items-center justify-center text-center">
              <p className="text-xl font-[900]">
                For more past job experiences, visit my{" "}
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
          <section className="grid grid-cols-1 max-sm:grid-cols-1 w-full max-sm:space-y-10 space-y-12">
            <h1 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
              Projects
            </h1>
          </section>
        </PageSection>
      </main>
    </div>
  );
}
