import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "TypeScript ",
    "React",
    "C#",
    ".NET CORE",
    "Razor",
    "Node Js",
    "Angular",
    "Azure",
    "MSSQL",
    "MongoDB",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Kubernets",
    "Operation Tools",
    "REST APIs",
    "Testing",
    "CI/CD",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>
                      Bsc(hons) Information Technology Specialization in
                      Information Technology{" "}
                    </em>{" "}
                  </strong>
                  Srilanka Institute of Information Technology(SLIIT)
                </li>
                <br />
                <li>
                  Web Development, Cloud Computing , Mobile Application
                  Development , AI , Blogger..
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Software Engineer - IOM LANKA</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=IOM LANKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Hybrid | Aug 2024 - July 2025 <br />
                - Developed solutions using .Net/C# and MSSQL with engineering
                best practices and quality standards to meet the requirements of
                Banking Applications like EDM, CRM, DMS.
                <br />- Developed scalable REST APIs and contributed to CI/CD
                pipelines using Azure.
                <br />- Implemented solutions adhering to SOLID principles
                throughout the SDLC.
              </li>
              <br />
              <li>
                <strong className="text-blue-400">
                  <em>Software Engineer - titum</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=Titum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Remote | Aug 2023 - Aug 2024 <br />
                - Developed solutions using React, .Net/C#, and MSSQL.
                <br />- Built scalable REST APIs, collaborated on QA procedures
                and testing plans.
                <br />
                Key Projects: LuckyHR Solution, RTS Intercom, CAPI, Ecommerce
                Platform, BizX ERP system.
              </li>
              <br />
              <li>
                <strong className="text-blue-400">
                  <em>Software Engineer - Amana Bank</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=Amana Bank Sri Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Onsite | Jan 2023 - July 2024 <br />
                - Built UIs using PHP, Bootstrap, jQuery. <br />
                - Worked on .NET/C# Framework, MSSQL, and MVC for banking
                systems. <br />
                - Contributed to AWS-based CI/CD and DevOps.
                <br />
                Key Projects: HRIS, Banking Apps, Data Management System.
              </li>
              <br />
              <li>
                <strong className="text-blue-400">
                  <em>Software Developer Intern - SEUSL University</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=South Eastern University of Sri Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Onsite | Dec 2021 - May 2022 <br />
                - Assisted in developing custom software systems for the
                university. <br />- Worked on a USAID-funded project,
                contributing to implementation and testing.
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
