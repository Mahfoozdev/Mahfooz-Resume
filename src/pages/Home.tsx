import { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { pdf } from "@react-pdf/renderer";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Printer, Download, Sparkles } from "lucide-react";
import ResumePDF from "./ResumePDF";

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [selectedFont, setSelectedFont] = useState<
    "Times New Roman" | "Arial" | "Calibri"
  >("Times New Roman");
  const [formData, setFormData] = useState({
    fullName: "MUHAMMAD MAHFOOZ UL HAQ",
    location: "Lahore Pakistan",
    phone: "03207803941",
    email: "mahfoozdoit@gmail.com",
    website: "https://mahfooz-dwv2.vercel.app/",
    github1: "https://github.com/Mahfoozdev",
    github2: "https://github.com/MahfoozMindit",
    linkedIn: "https://www.linkedin.com/in/muhammad-mahfooz-ul-haq-09391b411",
    summary:
  "Full Stack Software Engineer with 3+ years of professional experience designing, developing, and deploying scalable SaaS and enterprise-grade web applications using React.js, Next.js, Node.js, Express.js, Laravel, TypeScript, JavaScript (ES6+), and PHP. Strong expertise in backend architecture, RESTful API development, authentication and authorization systems, database schema design, cloud deployment, and production-grade software engineering practices.\n\nExperienced in developing high-performance, responsive frontend applications using React.js, Next.js, React Hooks, and component-based architecture while building secure, scalable backend systems with Node.js, Express.js, and Laravel. Proficient in MySQL, PostgreSQL, MongoDB, Prisma ORM, Mongoose, TypeORM, and Laravel Eloquent ORM with extensive experience in database design, normalization, indexing, query optimization, transactions, and data integrity.\n\nSkilled in AWS, DigitalOcean, Docker, Linux server administration, Ubuntu, CI/CD pipelines, Git, GitHub, and production deployment workflows. Hands-on experience integrating third-party APIs including Stripe, OpenAI, payment gateways, WebSockets, and implementing JWT authentication, RBAC authorization, OAuth2, and real-time application features.\n\nStrong engineering mindset focused on clean architecture, layered application design, strict type safety, performance optimization, debugging, testing, code reviews, edge-case handling, production stability, and end-to-end feature ownership. Experienced in collaborating with cross-functional Agile teams to deliver secure, maintainable, scalable, and production-ready software solutions.",
      coreCompetencies: {
  frontend: "React.js, Next.js, JavaScript, TypeScript, Redux Toolkit, React Query (TanStack Query), React Hooks, HTML5, CSS3",
  backend: "Node.js, Express.js, Inertia.js, Laravel, REST APIs, JWT, OAuth2, Python, Django, FastAPI",
  database: "MySQL, MongoDB, PostgreSQL, Prisma ORM, Mongoose, TypeORM,Redis,Firestore",
  cloudDevops: "AWS, Docker, CI/CD, Linux, Ubuntu, Git, GitHub",
  engineering: "Debugging, Testing, Performance Optimization, Code Reviews, Agile"
},
    skills1:
  "React.js, Next.js, Node.js, Express.js, Laravel, PHP, Python, Vue.js, JavaScript (ES6+), TypeScript, Redux.js, Redux Toolkit, React Hooks, Inertia.js, REST API Development, Responsive Web Development, Component-Based Architecture, State Management, MongoDB, PostgreSQL, MySQL, SQL, Relational & Non-Relational Databases, Database Design, Database Management, Deployment Pipelines Query Optimization, AWS, VPS, Ubuntu, Linux, Git, GitHub, DevOps, CI/CD, JWT Authentication",
    skills2:
      "  Agile methodologies, Cloud architecture, Full stack development, Software development, Linux, RBAC (Role-Based Access Control), Prisma ORM, Mongoose, TypeORM, SSR, CSR, NextAuth, Firebase Auth, Supabase Auth, Strict Type Safety, Generics, Interfaces, Layered Architecture, Controllers Services Data Access Layer, Environment Variables, Production Logs, Edge-Case Handling, Real-Time Features, Stripe Integration, ERP & SaaS Development, Problem Solving, Debugging, Unit Testing, Code Reviews, Agile Development, Indexing, Transactions, Docker, OAuth2, API Security",
   experience1: {
  role: "Software Engineer",
  period: "08/2025 – Present",
  company: "Softech Solutions",
  location: "Lahore, Pakistan",
  details:
    "Architected and developed scalable SaaS and enterprise-grade web applications using React.js, Next.js, Node.js, Express.js, Laravel, TypeScript, JavaScript (ES6+), and PHP.\nDesigned and implemented secure, scalable RESTful APIs with authentication, authorization (RBAC), JWT, input validation, and API security best practices.\nBuilt production-ready frontend applications using React.js and Next.js with reusable component architecture, React Hooks, state management, SSR, CSR, and responsive UI development.\nDeveloped scalable backend services using Node.js, Express.js, and Laravel with focus on asynchronous programming, business logic implementation, performance optimization, and production stability.\nDesigned, optimized, and maintained MySQL, PostgreSQL, and MongoDB databases including schema design, normalization, indexing, transactions, query optimization, and ORM integration using Prisma ORM, TypeORM, Mongoose, and Laravel Eloquent ORM.\nIntegrated third-party APIs including Stripe, OpenAI, payment gateways, and external services while implementing secure authentication using JWT, NextAuth, and OAuth-based workflows.\nImplemented real-time application features using WebSockets and event-driven architectures to enhance user experience and system responsiveness.\nManaged AWS and DigitalOcean deployments, Linux server administration, Docker containers, environment configuration, CI/CD pipelines, and automated production deployment workflows.\nMonitored production environments, analyzed application logs, debugged critical issues, optimized application performance, and ensured high system availability.\nCollaborated with cross-functional teams using Git and Agile methodologies, conducted pull request reviews, mentored junior developers, and maintained high code quality through debugging, testing, and engineering best practices.",
},

experience2: {
  role: "Software Engineer",
  period: "08/2023 to 07/2025",
  company: "MetaX Payments Ltd",
  location: "Lahore, Pakistan",
  details:
    "Led the end-to-end development of scalable enterprise web applications using React.js, Next.js, Node.js, Express.js, Laravel, TypeScript, JavaScript, and PHP.\nDesigned and developed responsive, cross-browser compatible frontend interfaces using React.js, Vue.js, Tailwind CSS, HTML5, CSS3, reusable components, and modern frontend development practices.\nEngineered secure backend applications using Node.js, Express.js, and Laravel by developing scalable RESTful APIs, authentication systems, RBAC authorization, and layered application architecture.\nDesigned and optimized MySQL and MongoDB databases with focus on schema design, normalization, indexing, transactions, data integrity, and high-performance query optimization.\nImplemented ORM-based database management using Laravel Eloquent ORM and Mongoose to develop maintainable, scalable, and efficient backend systems.\nIntegrated third-party APIs, payment gateway services, WebSocket-based real-time communication, and external enterprise platforms into production applications.\nCollaborated with engineering teams, product managers, QA engineers, and stakeholders using Git and Agile methodologies to deliver production-ready software solutions.\nConducted code reviews, debugging, testing, performance optimization, and application monitoring while following software engineering best practices.\nParticipated in AWS and Linux-based deployment workflows, Docker environments, CI/CD pipelines, production releases, and infrastructure configuration.\nEnsured application reliability by implementing secure authentication, authorization, error handling, failure recovery, logging, and production support processes.",
},

experience3: {
  role: "Junior Software Developer",
  period: "10/2022 to 07/2023",
  company: "Natrix Coders",
  location: "Lahore, Pakistan",
  details:
    "Developed responsive and user-friendly frontend interfaces using React.js, Vue.js, HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS following modern frontend development practices.\nAssisted in backend development using Node.js and Express.js by building RESTful APIs, implementing business logic, and integrating frontend applications with backend services.\nWorked with MySQL and MongoDB databases, performing CRUD operations, query optimization, schema updates, and frontend-backend data integration.\nCollaborated with senior software engineers to develop reusable components, responsive UI features, API integrations, and scalable application functionality.\nParticipated in debugging, testing, code reviews, issue resolution, and software quality assurance to improve application stability and maintainability.\nUtilized Git, GitHub, and Agile development methodologies while contributing to collaborative full-stack software engineering workflows.\nAssisted in implementing authentication, authorization, validation, secure coding practices, and REST API integrations across multiple projects.\nSupported deployment activities, environment configuration, bug fixing, and continuous improvements throughout the software development lifecycle.",
},
    education: {
      degree: "Bachelor of Science: Computer Science",
      date: "01/2025",
      school: "University Of The Punjab",
      location: "Lahore, Pakistan",
    },
    personalInfoTitle: "Full Stack MERN Developer | React.js • Node.js • Express.js • TypeScript • MySQL • MongoDB • AWS • Docker",
    languages:
      " English (Professional Working Proficiency), Urdu (Professional Working Proficiency)",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as object),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePrint = () => window.print();

  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(
        <ResumePDF formData={formData} fontChoice={selectedFont} />,
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${formData.fullName.replace(/\s+/g, "_")}_Resume.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert(
        "Failed to generate PDF. Please try using the Print option instead.",
      );
    }
  };
  const renderBulletList = (text: string) => {
    return text
      .split("\n")
      .filter((line) => line.trim())
      .map((line, i) => (
        <li key={i}>
          {line.trim().startsWith("•")
            ? line.trim().substring(1).trim()
            : line.trim()}
        </li>
      ));
  };

  return (
    <div className="min-h-screen bg-slate-50 print:bg-white flex flex-col items-center">
      {/* Sidebar Controls - Hidden on Print */}
      <div className="w-full max-w-7xl mt-8 mb-8 px-4 flex flex-col md:flex-row gap-8 print:hidden">
        <div className="flex-1 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Mahfooz Resume Editor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  PDF Font Style
                </label>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value as any)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Arial">Arial</option>
                  <option value="Calibri">Calibri</option>
                </select>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Button
                  size="sm"
                  onClick={handlePrint}
                  variant="outline"
                  className="  border-2"
                >
                  <Printer className="mr-2 h-5 w-5" />
                  Print / Save Browser PDF
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg font-bold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Direct PDF
                </Button>
              </div>

              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
                  Contact & Links
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Full Name
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                   {/* Personal Information */}
         
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Location
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Email
                    </label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Portfolio Link
                    </label>
                    <Input
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Github Link 1
                    </label>
                    <Input
                      name="github1"
                      value={formData.github1}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Github Link 2
                    </label>
                    <Input
                      name="github2"
                      value={formData.github2}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
  <label className="text-xs font-semibold uppercase text-slate-500">
    LinkedIn Link
  </label>
  <Input
    name="linkedIn"
    value={formData.linkedIn}
    onChange={handleInputChange}
  />
</div>

{/* Core Competencies */}
<div className="space-y-4">
  <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
    Core Competencies
  </h3>

  <div className="grid grid-cols-1 gap-4">

    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase text-slate-500">
        Frontend
      </label>
      <Textarea
        name="coreCompetencies.frontend"
        value={formData.coreCompetencies.frontend}
        onChange={handleInputChange}
      />
    </div>

    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase text-slate-500">
        Backend
      </label>
      <Textarea
        name="coreCompetencies.backend"
        value={formData.coreCompetencies.backend}
        onChange={handleInputChange}
      />
    </div>

    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase text-slate-500">
        Database
      </label>
      <Textarea
        name="coreCompetencies.database"
        value={formData.coreCompetencies.database}
        onChange={handleInputChange}
      />
    </div>

    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase text-slate-500">
        Cloud & DevOps
      </label>
      <Textarea
        name="coreCompetencies.cloudDevops"
        value={formData.coreCompetencies.cloudDevops}
        onChange={handleInputChange}
      />
    </div>

    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase text-slate-500">
        Engineering
      </label>
      <Textarea
        name="coreCompetencies.engineering"
        value={formData.coreCompetencies.engineering}
        onChange={handleInputChange}
      />
    </div>

  </div>
</div>

              {/* Personal Info Title */}
              <div className="space-y-2 border-t border-gray-300">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  Personal Information Title
                </label>
                <Input
                  name="personalInfoTitle"
                  value={formData.personalInfoTitle}
                  onChange={handleInputChange}
                  placeholder="e.g. Full Stack Software Engineer"
                />
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  Professional Summary
                </label>
                <Textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  className="min-h-[150px]"
                />
              </div>

              {/* Experience 1 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
                  Work Experience 1
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Role"
                    name="experience1.role"
                    value={formData.experience1.role}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Period"
                    name="experience1.period"
                    value={formData.experience1.period}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Company"
                    name="experience1.company"
                    value={formData.experience1.company}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Location"
                    name="experience1.location"
                    value={formData.experience1.location}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  placeholder="Details"
                  name="experience1.details"
                  value={formData.experience1.details}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>
{/* work experience 2 */}
               <div className="space-y-4">
                <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
                  Work Experience 2
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Role"
                    name="experience1.role"
                    value={formData.experience2.role}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Period"
                    name="experience1.period"
                    value={formData.experience2.period}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Company"
                    name="experience1.company"
                    value={formData.experience2.company}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Location"
                    name="experience1.location"
                    value={formData.experience2.location}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  placeholder="Details"
                  name="experience1.details"
                  value={formData.experience2.details}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>

              {/* work experience 3 */}

               <div className="space-y-4">
                <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
                  Work Experience 3
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Role"
                    name="experience1.role"
                    value={formData.experience3.role}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Period"
                    name="experience1.period"
                    value={formData.experience3.period}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Company"
                    name="experience1.company"
                    value={formData.experience3.company}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Location"
                    name="experience1.location"
                    value={formData.experience3.location}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  placeholder="Details"
                  name="experience1.details"
                  value={formData.experience3.details}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-500">
                    Skills Column 1
                  </label>
                  <Textarea
                    name="skills1"
                    value={formData.skills1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-500">
                    Skills Column 2
                  </label>
                  <Textarea
                    name="skills2"
                    value={formData.skills2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview / PDF Template */}
        <div
          ref={resumeRef}
          className="flex-none w-full md:w-[800px] bg-white p-10 shadow-2xl print:shadow-none print:p-0 print:m-0 h-fit"
        >
          <div className="font-sans text-[11px] leading-snug text-black">
            {/* Header */}
            <div className="text-center mb-4 ">
              <h1 className="text-2xl font-bold uppercase tracking-wider ">
                {formData.fullName}
              </h1>
              
                    <div className="w-full flex items-center justify-center font-semibold"> <p className="mb-2 text-[13px] w-[80%]">{formData.personalInfoTitle}</p></div>
              <div className="border-t border-b border-gray-400 py-1 mb-1 text-[10px]">
                <p>
                  {formData.location} | {formData.phone} | {formData.email} |{" "}
                   <strong>WWW:</strong> {formData.linkedIn}
                </p>
                <p>
                  <strong>WWW:</strong> {formData.github1} |{" "}
                  <strong>WWW:</strong> {formData.github2} | <strong>WWW:</strong> {formData.website}
                </p>
              </div>
            </div>

            {/* Personal Summary */}
            <div className="mb-4">
              <h2 className="text-center font-bold mb-1 border-b border-gray-400 pb-1 text-[12px] uppercase">
                Personal Summary
              </h2>
              <p className="text-justify whitespace-pre-line">
                {formData.summary}
              </p>
            </div>

           

            {/* Core Competencies */}
<div className="space-y-4">

{/* Core Competencies - ATS Friendly */}
<div className="mb-4">
  <h2 className="text-center font-bold mb-2 border-t border-b border-gray-400 py-1 text-[12px] uppercase">
    Core Competencies
  </h2>
  
  <div className="space-y-1">
    <div className="flex gap-2">
      <label className="text-md font-bold">
        Frontend:
      </label>
      <p className="text-md">{formData.coreCompetencies.frontend}</p>
    </div>
    
    <div className="flex gap-2">
      <label className="text-md font-bold">
        Backend:
      </label>
      <p className="text-md">{formData.coreCompetencies.backend}</p>
    </div>
    
    <div className="flex gap-2">
      <label className="text-md font-bold">
        Database:
      </label>
      <p className="text-md">{formData.coreCompetencies.database}</p>
    </div>
    
    <div className="flex gap-2">
      <label className="text-md font-bold">
        Cloud & DevOps:
      </label>
      <p className="text-md">{formData.coreCompetencies.cloudDevops}</p>
    </div>
    
    <div className="flex gap-2">
      <label className="text-md font-bold">
        Engineering:
      </label>
      <p className="text-md">{formData.coreCompetencies.engineering}</p>
    </div>
  </div>
</div>
</div>

            

            {/* Work Experience */}
            <div className="mb-4">
              <h2 className="text-center font-bold mb-2 border-t border-b border-gray-400 py-1 text-[12px] uppercase">
                Work Experience
              </h2>

              <div className="mb-3">
                <div className="flex justify-between font-bold">
                  <span>{formData.experience1.role}</span>
                  <span>{formData.experience1.period}</span>
                </div>
                <div className="flex justify-between font-bold mb-1">
                  <span>{formData.experience1.company}</span>
                  <span>{formData.experience1.location}</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-justify">
                  {renderBulletList(formData.experience1.details)}
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between font-bold">
                  <span>{formData.experience2.role}</span>
                  <span>{formData.experience2.period}</span>
                </div>
                <div className="flex justify-between font-bold mb-1">
                  <span>{formData.experience2.company}</span>
                  <span>{formData.experience2.location}</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-justify">
                  {renderBulletList(formData.experience2.details)}
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex justify-between font-bold">
                  <span>{formData.experience3.role}</span>
                  <span>{formData.experience3.period}</span>
                </div>
                <div className="flex justify-between font-bold mb-1">
                  <span>{formData.experience3.company}</span>
                  <span>{formData.experience3.location}</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-justify">
                  {renderBulletList(formData.experience3.details)}
                </ul>
              </div>
            </div>

            {/* Education and Training */}
            <div className="mb-4">
              <h2 className="text-center font-bold mb-2 border-t border-b border-gray-400 py-1 text-[12px] uppercase">
                Education and Training
              </h2>
              <div className="flex justify-between font-bold">
                <span>{formData.education.degree}</span>
                <span>{formData.education.date}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="font-normal italic">
                  {formData.education.school}
                </span>
                <span>{formData.education.location}</span>
              </div>
            </div>

           

            {/* Languages */}
            <div>
              <h2 className="text-center font-bold mb-2 border-t border-b border-gray-400 py-1 text-[12px] uppercase">
                Languages
              </h2>
              <ul className="list-disc pl-5 space-y-0.5">
                {formData.languages.split(",").map((l, i) => (
                  <li key={i}>{l.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
