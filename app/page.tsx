"use client";
import Nav from "./components/Nav";
import "@fontsource/lato";
import PageSection from "./components/PageSection";
import Coding from "./images/me-coding-express.jpg";
import SnowDay from "./images/snow.jpg";
import PersonalPhotography from "./images/personal-photography-3.jpg";
import Link from "next/link";
import SkillLabel from "./components/SkillLabel";
import Footer from "./components/Footer";
import ViewProjectBtn from "./components/ViewProjectBtn";
import useFetchInfo from "./hooks/useFetchInfo";

export default function Home() {
  const { info, loading, error } = useFetchInfo();

  return (
    <div className="bg-[#020c27] font-['Lato'] items-center justify-items-center min-h-screen w-full">
      <main className="flex flex-col items-center text-white">
        <Nav />
        {!loading ? (
          !error ? (
            <>
              <PageSection id="home">
                <section className="grid grid-cols-2 max-sm:grid-cols-1 w-full">
                  <span className="text-center space-y-2 flex items-center flex-col">
                    <img
                      alt="Ruben Arevalo"
                      src={"https://firebasestorage.googleapis.com/v0/b/ruben-arevalo.appspot.com/o/Profile%20Pic%20(November%202024).jpg?alt=media&token=a1ad3d22-3b0e-4760-9c2d-71fd4429cfef"}
                      className="w-[250px] h-[250px] object-contain rounded-full pointer-events-none"
                    />
                    <br></br>
                    <h1 className="text-4xl font-bold uppercase tracking-wider">
                      Ruben Arevalo
                    </h1>
                    <p className="text-lg font-thin tracking-wide">
                      Software Engineer
                    </p>
                  </span>
                  <span className="text-center space-y-2 flex flex-col items-center justify-center">
                    <ul className="list-none flex flex-col justify-between max-sm:space-y-2 max-sm:mt-10 w-[100%] max-sm:w-[100%] h-full text-[20px] max-sm:text-[20px]">
                      <li className="transition ease-in-out delay-75 hover:bg-white hover:text-black p-10 font-[400] uppercase tracking-widest text-[18px]">
                        <a
                          href={info.resume_link}
                          className="p-10 w-[100%]"
                          target="_blank"
                          download
                        >
                          View Resume
                        </a>
                      </li>
                      <li className="transition ease-in-out delay-75 hover:bg-white hover:text-black p-10 font-[400] uppercase tracking-widest text-[18px]">
                        <Link href="#about" className="p-10 w-[100%]">
                          About Me
                        </Link>
                      </li>
                      <li className="transition ease-in-out delay-75 hover:bg-white hover:text-black p-10 font-[400] uppercase tracking-widest text-[18px]">
                        <Link
                          href="mailto:ruben.c.arevalo@gmail.com"
                          className="p-10 w-[100%]"
                        >
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
                    <h2 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
                      About Me
                    </h2>
                    <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                      My name is Ruben Arevalo, and I am a software engineer
                      from McAllen, Texas.
                    </p>
                    <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                      As someone who has been coding for the past 7 years since
                      my junior year of high school back in 2017, I have learned
                      a lot of lessons along the way, and have taken a keen
                      interest in software development.
                    </p>
                    <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                      More recently, I have also taken an interest in
                      integrating generative AI into products to help improve
                      and streamline processes, such as determining which
                      clothes fit best for you for a date when using a dating
                      app, or determining how many calories you should consume a
                      day when using a calorie tracker.
                    </p>
                    <p className="text-lg text-left ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-[200]">
                      I strive to improve and learn new lessons every day, as
                      well as continuously hone my craft in programming so that
                      I can apply what I learned into finding solutions for
                      real-world problems.
                    </p>
                  </span>
                  <span className="text-center space-y-2 grid grid-cols-2 max-sm:grid-cols-1 place-items-center max-sm:mt-24 max-sm:mb-24">
                    <img
                      src={Coding.src}
                      alt="Ruben Arevalo Coding"
                      className="w-[300px] h-[300px] object-cover rounded-lg pointer-events-none"
                    />
                    <img
                      src={SnowDay.src}
                      alt="Ruben Arevalo Snow Day 2017"
                      className="w-[300px] h-[300px] object-cover rounded-lg pointer-events-none"
                    />
                    <img
                      src={PersonalPhotography.src}
                      alt="Ruben Arevalo Photography 1"
                      className="w-[300px] h-[300px] object-cover rounded-lg pointer-events-none"
                    />
                  </span>
                </section>
              </PageSection>
              <hr className="bg-slate-50 pt-1 w-full"></hr>
              <PageSection id="education">
                <section className="grid grid-cols-1 max-sm:grid-cols-1 w-full max-sm:space-y-10">
                  <h2 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
                    Education
                  </h2>
                  {info.education?.map((education, education_idx) => (
                    <span
                      key={`education-${education_idx}`}
                      className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5"
                    >
                      <span className="flex flex-col items-left justify-center space-y-5">
                        <h2 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                          <i>{education.school_name}</i>
                          <br></br>
                          <i className="font-thin">
                            {education.attendance_dates}
                          </i>
                        </h2>
                        <p className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 text-lg">
                          {education.description}
                        </p>
                      </span>
                      <span className="flex flex-col items-center justify-center">
                        <img
                          src={education.photo}
                          alt={`Ruben Arevalo Education ${education_idx}`}
                          className="w-[300px] h-[300px] object-cover rounded-lg pointer-events-none"
                        />
                      </span>
                    </span>
                  ))}
                </section>
              </PageSection>
              <hr className="bg-slate-50 pt-1 w-full"></hr>
              <PageSection id="experience">
                <section className="grid grid-cols-1 max-sm:grid-cols-1 w-full max-sm:space-y-10 space-y-12">
                  <h2 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
                    Experience
                  </h2>
                  {info.experience?.map((exp, idx) => (
                    <span
                      key={`exp-${idx}`}
                      className="grid grid-cols-2 max-sm:grid-cols-1 w-full space-y-5"
                    >
                      <span className="flex flex-col items-left justify-center space-y-5">
                        <h2 className="ml-16 mr-16 max-sm:ml-12 max-sm:mr-12 font-bold text-xl">
                          <i>{exp.title}</i>
                          {exp.employer.length != 0 && ","} {exp.employer}
                          <br></br>
                          <i className="font-thin">{exp.type}</i>
                          <br></br>
                          <i className="font-thin">{exp.duration}</i>
                        </h2>
                      </span>
                      <ul className="flex flex-col items-left justify-between space-y-5 text-lg">
                        {exp.responsibilities.map((res, res_idx) => (
                          <li
                            key={`${exp.title}-responsibility-${res_idx}`}
                            className="list-disc ml-5 mr-5 max-sm:ml-16 max-sm:mr-16"
                          >
                            {res}
                          </li>
                        ))}
                      </ul>
                    </span>
                  ))}
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
                  <h2 className="text-4xl font-[800] ml-16 mr-16 max-sm:ml-12 max-sm:mr-12">
                    Projects
                  </h2>
                  <br></br>
                  <span className="flex items-center justify-center">
                    <span className="grid grid-cols-2 justify-center max-sm:grid-cols-1 items-center place-items-center">
                      {info.projects.map((proj, proj_idx) => (
                        <span
                          key={`proj-${proj_idx}`}
                          className="w-full h-full max-sm:w-[85%] items-left text-left"
                        >
                          <section className="flex flex-col ml-10 mr-10 pt-10 pb-10 max-sm:ml-2 max-sm:mr-2 h-full justify-between">
                            <img
                              src={proj.image}
                              className="w-[500px] h-[500px] object-cover items-center rounded-2xl pointer-events-none"
                              alt={proj.image_alt_tag}
                            />
                            <br></br>
                            <h2 className="text-3xl font-[900]">
                              {proj.title}
                            </h2>
                            <i className="font-thin text-lg">{proj.duration}</i>
                            <p className="text-lg">{proj.description}</p>
                            <br></br>
                            <span className="max-sm:grid max-sm:grid-cols-3 flex flex-row flex-wrap">
                              {proj.skills.map((skill, skill_idx) => (
                                <SkillLabel
                                  key={`proj-${proj_idx}-skill-${skill_idx}`}
                                  skillName={skill}
                                />
                              ))}
                            </span>
                            <ViewProjectBtn link={proj.link} />
                          </section>
                        </span>
                      ))}
                    </span>
                  </span>
                </section>
              </PageSection>
            </>
          ) : (
            <span className="flex flex-col items-center justify-center h-[100vh] space-y-5">
              <h2 className="text-3xl text-center max-sm:ml-12 max-sm:mr-12">
                There was an error loading the content. <br></br> Please reload
                the page again.
              </h2>
              <button
                onClick={() => window.location.reload()}
                className="p-3 pl-7 pr-7 bg-white text-black font-[900] rounded-3xl"
              >
                Try Again
              </button>
            </span>
          )
        ) : (
          <span className="flex items-center justify-center h-[100vh]">
            <h2 className="text-3xl">Loading...</h2>
          </span>
        )}
        <Footer />
      </main>
    </div>
  );
}
