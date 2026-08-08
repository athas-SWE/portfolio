import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "C#",
    ".NET CORE",
    "NestJS",
    "Razor",
    "Node Js",
    "Azure",
    "Microsoft Power Platform",
    "Agentic AI",
    "LLM",
    "MSSQL",
    "MongoDB",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
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
            Dynamic Full-stack Developer with 3+ years of experience . Proficient in technologies including .Net, Nodejs,
            React, SQL, NoSQL, and Azure. Recognized for proactive problem-solving, adeptly resolving critical
            production incidents, effectively managing projects, and mentoring junior teams. Experienced in software
            integrations, and maintaining diverse systems and technologies seamlessly. Skilled in fostering strong
            stakeholder relationships through excellent communication, presentation, and negotiation abilities. Committed
            to delivering cutting-edge software solutions while staying updated on emerging technology trends.
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
                  <em>Software Engineer - INNOV8Fusion Pvt Ltd</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=INNOV8Fusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Feb 2025 - Present <br />
                - Built three full-scale systems: an HRM platform (.NET/C#,
                MySQL, Entity Framework) and NestJS/TypeScript REST APIs on GCP
                for a CSE broker platform and an onboarding platform.
                <br />- Delivered RESTful APIs, RBAC, secure auth, biometric
                fingerprint attendance, audit trails, and change-tracking
                middleware for HRM compliance and data integrity.
                <br />- Developed broker platform features: admin CMS, live CSE
                market data, paper trading, portfolio/order management, JWT
                auth, Prisma ORM, cloud storage, and WhatsApp/Facebook
                integrations.
                <br />- Implemented CI/CD with Docker, Terraform, and Cloud
                Build across dev/staging/prod, plus Swagger/OpenAPI, Jest tests,
                and automated DB migrations.
              </li>
              <br />
              <li>
                <strong className="text-blue-400">
                  <em>Software Engineer - IOM Lanka</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=IOM Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Aug 2024 - Jan 2025 <br />
                - Developed banking solutions (EDM, CRM, DMS) using .NET/C# and
                MSSQL with engineering best practices.
                <br />- Architected and implemented solutions following SOLID
                principles across the full SDLC.
                <br />- Built workflows using Microsoft Power Apps.
              </li>
              <br />
              <li>
                <strong className="text-blue-400">
                  <em>Software Engineer - Titum</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=Titum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Aug 2023 - Aug 2024 <br />
                - Built ecommerce solutions with React, .NET/C#, and MSSQL.
                <br />- Developed scalable REST APIs and collaborated on QA
                plans and verification procedures.
                <br />- Conducted bug analysis and optimized database design and
                queries for performance and scalability.
                <br />
                Key Projects: LuckyHR Solution, RTS Intercom, CAPI, Ecommerce
                Platform, BizX ERP.
              </li>
              <br />
              <li>
                <strong className="text-blue-400">
                  <em>Software Developer Intern - Amana Bank IT</em>
                </strong>
                <a
                  href="https://maps.google.com/?q=Amana Bank Sri Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-300 hover:underline"
                >
                  📍
                </a>
                <br />* Dec 2022 - Aug 2023 <br />
                - Built responsive UIs with PHP, Bootstrap, JavaScript, and
                jQuery.
                <br />- Worked on .NET/C# banking apps with MSSQL and MVC.
                <br />- Contributed to AWS-based CI/CD and DevOps.
                <br />
                Key Projects: HRIS, Banking Applications, Data Management
                System.
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
