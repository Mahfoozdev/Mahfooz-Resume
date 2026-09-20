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
  "Full Stack Software Engineer specializing in Laravel, MERN, and Agentic AI, with experience building scalable web applications, fintech platforms, SaaS products, and AI-powered solutions. Skilled in React, Next.js, Laravel, Node.js, PostgreSQL, MongoDB, and LLM technologies, with a strong focus on backend architecture, APIs, real-time systems, and intelligent automation. Passionate about turning complex business requirements into high-performance, production-ready software.",
  projects: [
  {
    name: "PayTime",
    desc: "A fintech payroll management platform for managing employee salary data throughout the fiscal year. Built payroll generation, salary slips, allowances, custom allowances, EOBI, PF, UPF, schemes, attendance management, and automated attendance-based salary deductions based on configurable company rules.",
    link: "https://app.paytime.pk/",
  },
  {
    name: "Compito",
    desc: "A marketplace platform connecting customers with skilled workers and service providers. Built user profiles, customer-worker communication, service requests, offers, payment workflows, location-based features using Google Maps and Geoapify, and real-time interactions.",
    link: "https://compito.uk/",
  },
  {
    name: "UPCS",
    desc: "A location-sharing web application that enables users to save precise locations using postcode-based pinpoints and share them for accurate navigation and location discovery. Integrated mapping, location services, and third-party APIs for reliable location-based functionality.",
    link: "",
  },
  {
    name: "You Rent",
    desc: "A UK property marketplace for discovering, searching, and filtering property listings, exploring locations, and interacting with property deals. Built advanced Google Maps and location-based functionality, including map-driven property discovery and 3D location visualization.",
    link: "https://yourent.uk/",
  },
  {
    name: "MetaX Exchange",
    desc: "A fintech and banking application for managing user accounts and financial workflows. Developed user registration, authentication, account functionality, backend APIs, business logic, and interactive interfaces using Laravel, Vue.js, and Inertia.js.",
    link: "https://metaxexchange.com/",
  },
  {
    name: "Darbul Umrah",
    desc: "A travel and Umrah management platform for companies to manage Umrah and Hajj services, trips, agents, routes, transport companies, and business operations. Built workflows for trip management, agent coordination, transportation, invoicing, service slips, and operational documents.",
    link: "https://darbulumrah.com/",
  },
],
coreCompetencies: {
  frontend:
    "React.js, Next.js, Vue.js, JavaScript (ES6+), TypeScript, Redux, Redux Toolkit, TanStack Query, React Hooks, Inertia.js, Tailwind CSS, HTML5, CSS3, Responsive UI",

  backend:
    "Laravel, PHP, Node.js, Express.js, REST APIs, WebSockets, Laravel Reverb, Laravel Echo, Pusher, JWT, OAuth, Authentication, Authorization (RBAC), API Integrations",

  database:
    "PostgreSQL, MySQL, MongoDB, Redis, pgvector, Prisma ORM, Mongoose, TypeORM, Laravel Eloquent, Database Design, Data Modeling, Query Optimization, Indexing, Transactions",

  aiEngineering:
    "AI Agents, LLM Applications, RAG, n8n, Ollama, LLM APIs, Embeddings, Vector Search, pgvector, Tool Calling, AI Workflows, LLM Integration, AI Automation",

  cloudDevops:
    "AWS, GCP, Docker, Linux, Ubuntu, Git, GitHub, GitHub Actions, CI/CD, Production Deployment, Server Administration, Environment Configuration, SSL, Reverse Proxy",

  engineering:
    "Software Architecture, Full-Stack Development, SaaS Development, Fintech Development, Real-Time Systems, Payment Integrations, API Design, Debugging, Testing, Performance Optimization, Code Reviews, Agile"
},
    skills1:
  "React.js, Next.js, Node.js, Express.js, Laravel, PHP, Python, Vue.js, JavaScript (ES6+), TypeScript, Redux.js, Redux Toolkit, React Hooks, Inertia.js, REST API Development, Responsive Web Development, Component-Based Architecture, State Management, MongoDB, PostgreSQL, MySQL, SQL, Relational & Non-Relational Databases, Database Design, Database Management, Deployment Pipelines Query Optimization, AWS, VPS, Ubuntu, Linux, Git, GitHub, DevOps, CI/CD, JWT Authentication",
    skills2:
      "  Agile methodologies, Cloud architecture, Full stack development, Software development, Linux, RBAC (Role-Based Access Control), Prisma ORM, Mongoose, TypeORM, SSR, CSR, NextAuth, Firebase Auth, Supabase Auth, Strict Type Safety, Generics, Interfaces, Layered Architecture, Controllers Services Data Access Layer, Environment Variables, Production Logs, Edge-Case Handling, Real-Time Features, Stripe Integration, ERP & SaaS Development, Problem Solving, Debugging, Unit Testing, Code Reviews, Agile Development, Indexing, Transactions, Docker, OAuth2, API Security",

  experience1: {
    role: "Lead Software Engineer",
    period: "08/2025 – Present",
    company: "Softech Solutions UK",
    location: "Lahore, Pakistan",
    details:
      "Led the end-to-end development of production-grade full-stack, fintech, SaaS, and AI-powered applications using React.js, TypeScript, Laravel, PHP, and PostgreSQL.\nDesigned and implemented scalable RESTful APIs and backend services with Laravel, including authentication, authorization, validation, business logic, database operations, and third-party integrations.\nBuilt production-ready frontend applications using React.js and TypeScript with reusable component architecture, responsive interfaces, API integration, and modern frontend practices.\nImplemented real-time communication and live application features using Laravel Reverb, Laravel Echo, Pusher, and WebSockets.\nIntegrated payment gateways including Cybersource, Stripe, and HBL Payment Gateway for secure payment and transaction workflows.\nWorked on PayTime, a fintech payroll platform for managing employee salary data throughout the fiscal year, payroll generation, salary slips, allowances, custom allowances, EOBI, PF, UPF, schemes, and attendance management.\nImplemented attendance-based salary deductions in PayTime according to configurable company rules and payroll workflows.\nBuilt the PayTime AI chatbot using n8n, Ollama, PostgreSQL, pgvector, embeddings, vector search, and Retrieval-Augmented Generation (RAG) for context-aware responses and AI-powered business workflows.\nDesigned AI agent workflows using n8n and Ollama, integrating LLM processing, data retrieval, vector search, backend services, automation, and multi-step processing.\nLed development of Compito, a marketplace connecting customers with skilled workers, including profiles, communication, service requests, offers, payment workflows, and real-time interactions.\nIntegrated Geoapify and Google Maps for location-based features, mapping, geographic search, and marketplace functionality.\nLed technical decisions, architecture, database modeling, debugging, optimization, code reviews, and production delivery across multiple projects.",
  },

  experience2: {
    role: "Software Engineer",
    period: "09/2024 – 08/2025",
    company: "MetaX Payments Ltd",
    location: "Lahore, Pakistan",
    details:
      "Developed fintech, banking, and full-stack web applications using Laravel, Vue.js, Inertia.js, React.js, Node.js, Express.js, MongoDB, MySQL, and modern web technologies.\nWorked on MetaX Exchange, a fintech and banking application, implementing user registration, authentication, account workflows, and core application functionality.\nDeveloped secure backend services and RESTful APIs using Laravel, including authentication, validation, business logic, database operations, and reusable service components.\nBuilt responsive frontend interfaces using Vue.js and Inertia.js, integrating frontend workflows with Laravel backend services.\nDeveloped MERN stack applications using React.js, Node.js, Express.js, and MongoDB for various business and product requirements.\nBuilt blog platforms and administrative panels with content management, user management, configuration, settings, and admin workflows.\nDesigned and maintained MySQL and MongoDB data structures, CRUD operations, relationships, validation, and application data workflows.\nIntegrated third-party APIs, payment services, real-time functionality, and external platforms into production applications.\nImplemented reusable frontend components, authentication flows, forms, business workflows, and full-stack application features.\nParticipated in debugging, testing, performance optimization, code reviews, and production issue resolution throughout the development lifecycle.",
  },

  experience3: {
    role: "Full Stack Developer",
    period: "01/2024 – 08/2024",
    company: "TP Solutions",
    location: "Lahore, Pakistan",
    details:
      "Led the development of multiple full-stack web applications using Next.js, React.js, TypeScript, PostgreSQL, Prisma, and modern web technologies.\nBuilt a comprehensive School Management System supporting administrative workflows, user management, academic operations, and business processes.\nDeveloped an Amazon Labeling web application with custom workflows and interfaces for managing labeling-related operations.\nDesigned and implemented PostgreSQL database schemas and Prisma data models with a focus on data integrity, maintainability, and efficient application workflows.\nDeveloped reusable frontend components, responsive interfaces, backend APIs, authentication flows, and business logic across multiple applications.\nIntegrated frontend applications with backend services and implemented end-to-end features across UI, APIs, databases, and business workflows.\nHandled debugging, performance optimization, technical problem-solving, and production delivery throughout the software development lifecycle.\nCollaborated with teams and stakeholders to translate business requirements into scalable and maintainable software solutions.",
  },

  experience4: {
    role: "Full Stack Developer",
    period: "05/2023 – 12/2023",
    company: "Natrix Coders",
    location: "Lahore, Pakistan",
    details:
      "Developed and maintained responsive web applications and business websites based on client and project requirements.\nImplemented frontend interfaces, reusable components, responsive layouts, forms, interactive functionality, and third-party integrations.\nWorked across application development, debugging, maintenance, and optimization to deliver reliable web solutions.\nCollaborated with senior developers and team members to translate business requirements into practical and maintainable software features.\nWorked on frontend-backend integration, API consumption, application workflows, and database-driven functionality across multiple projects.\nParticipated in debugging, testing, issue resolution, performance improvements, and ongoing application maintenance.\nUsed Git-based development workflows and contributed to collaborative development and production updates.\nSupported the software development lifecycle from feature implementation and debugging through deployment and maintenance.",
  },

    education: {
      degree: "Bachelor of Science: Computer Science",
      // date: "01/2025",
      school: "University Of The Punjab",
      location: "Lahore, Pakistan",
    },
    personalInfoTitle: "Full Stack MERN Developer | React.js • Node.js • Express.js • TypeScript • MySQL • MongoDB • AWS • Docker",
    languages:
      " English (Professional Working Proficiency), Urdu (Professional Working Proficiency)",
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  // Handle projects[index].field
  const projectMatch = name.match(/^projects\.(\d+)\.(name|desc|link)$/);

  if (projectMatch) {
    const index = Number(projectMatch[1]);
    const field = projectMatch[2] as "name" | "desc" | "link";

    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((project, i) =>
        i === index
          ? {
              ...project,
              [field]: value,
            }
          : project
      ),
    }));

    return;
  }

  // Handle nested objects like experience1.role
  if (name.includes(".")) {
    const [parent, child] = name.split(".");

    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...(prev[parent as keyof typeof prev] as object),
        [child]: value,
      },
    }));

    return;
  }

  // Normal fields
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
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
    Skills
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
       Agentic AI & LLM Eng.
      </label>
      <Textarea
        name="coreCompetencies.engineering"
        value={formData.coreCompetencies.aiEngineering}
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
              <div className="space-y-2  border-gray-300">
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

               {/* work experience 4 */}

               <div className="space-y-4">
                <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
                  Work Experience 4
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Role"
                    name="experience1.role"
                    value={formData.experience4.role}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Period"
                    name="experience1.period"
                    value={formData.experience4.period}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Company"
                    name="experience1.company"
                    value={formData.experience4.company}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Location"
                    name="experience1.location"
                    value={formData.experience4.location}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  placeholder="Details"
                  name="experience1.details"
                  value={formData.experience4.details}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>

              {/* Projects */}
<div className="space-y-4">
  <h3 className="text-sm font-bold border-b pb-1 text-slate-700">
    Projects
  </h3>

  {formData.projects.map((project, index) => (
    <div
      key={index}
      className="space-y-3 rounded-lg border border-slate-200 p-4"
    >
      <h4 className="text-xs font-bold uppercase text-slate-500">
        Project {index + 1}
      </h4>

      <Input
        placeholder="Project Name"
        name={`projects.${index}.name`}
        value={project.name}
        onChange={handleInputChange}
      />

      <Textarea
        placeholder="Project Description"
        name={`projects.${index}.desc`}
        value={project.desc}
        onChange={handleInputChange}
        className="min-h-[100px]"
      />

      <Input
        placeholder="Project Link"
        name={`projects.${index}.link`}
        value={project.link}
        onChange={handleInputChange}
      />
    </div>
  ))}
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
            <div className=" mb-4 ">
              <h1 className="text-2xl font-bold uppercase tracking-wider ">
                {formData.fullName}
              </h1>
              
                    {/* <div className="w-full flex items-center justify-center font-semibold"> <p className="mb-2 text-[13px] w-[80%]">{formData.personalInfoTitle}</p></div> */}
              <div className=" border-b border-gray-400 py-1 mb-1 text-[10px]">
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
              <h2 className=" font-bold mb-1 border-b border-gray-400 pb-1 text-[12px] uppercase">
                 Summary
              </h2>
              <p className="text-justify whitespace-pre-line">
                {formData.summary}
              </p>
            </div>

           

            {/* Core Competencies */}
<div className="space-y-4">



            

            {/* Work Experience */}
            <div className="mb-4">
              <h2 className=" font-bold mb-2  border-b border-gray-400 py-1 text-[12px] uppercase">
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
                <div className="mb-3">
                <div className="flex justify-between font-bold">
                  <span>{formData.experience4.role}</span>
                  <span>{formData.experience4.period}</span>
                </div>
                <div className="flex justify-between font-bold mb-1">
                  <span>{formData.experience4.company}</span>
                  <span>{formData.experience4.location}</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-justify">
                  {renderBulletList(formData.experience4.details)}
                </ul>
              </div>
            </div>
{/* Projects */}
<div className="mb-4">
  <h2 className="font-bold mb-2 border-b border-gray-400 py-1 text-[12px] uppercase">
    Projects
  </h2>

  <div className="space-y-3">
    {formData.projects.map((project, index) => (
      <div key={index}>
        <div className="flex justify-between font-bold">
          <span>{project.name}</span>

          {project.link && (
            <span className="font-normal text-[9px]">
              {project.link}
            </span>
          )}
        </div>

        <p className="text-justify">
          {project.desc}
        </p>
      </div>
    ))}
  </div>
</div>
            {/* Education and Training */}
            <div className="mb-4">
              <h2 className=" font-bold mb-2  border-b border-gray-400 py-1 text-[12px] uppercase">
                Education
              </h2>
              <div className="flex justify-between font-bold">
                <span>{formData.education.degree}</span>
                {/* <span>{formData.education.date}</span> */}
              </div>
              <div className="flex justify-between font-bold">
                <span className="font-normal italic">
                  {formData.education.school}
                </span>
                <span>{formData.education.location}</span>
              </div>
            </div>

           {/* Core Competencies - ATS Friendly */}
<div className="mb-4">
  <h2 className=" font-bold mb-2 border-b border-gray-400 py-1 text-[12px] uppercase">
    Skills
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
         Agentic AI & LLM Eng.:
      </label>
      <p className="text-md">{formData.coreCompetencies.aiEngineering}</p>
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

            {/* Languages */}
            <div>
              <h2 className=" font-bold mb-2  border-b border-gray-400 py-1 text-[12px] uppercase">
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
