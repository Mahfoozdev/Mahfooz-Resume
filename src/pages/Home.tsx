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
    summary:
      "I am a results-driven Full Stack Software Engineer with 3+ years of production experience building scalable SaaS and enterprise-grade web applications using TypeScript, React.js, Next.js, Node.js, Express.js, and Laravel. Strong expertise in backend architecture, RESTful API development, authentication systems, database schema design, cloud deployment, and production-grade engineering practices.\n\nExperienced in developing high-performance frontend applications with React.js and Next.js while implementing secure, scalable backend systems using Node.js, Express.js, and Laravel. Proficient in PostgreSQL, MongoDB, Prisma ORM, Mongoose, and TypeORM with deep understanding of data integrity, query optimization, and scalable database design.\n\nSkilled in AWS, DigitalOcean, Linux server management, Docker, CI/CD pipelines, and production deployment workflows. Hands-on experience integrating third-party APIs including Stripe and OpenAI, implementing RBAC authorization systems, WebSockets, and real-time application features.\n\nStrong engineering mindset focused on edge-case handling, production stability, clean architecture, strict type safety, performance optimization, and end-to-end feature ownership. Adept at collaborating with cross-functional teams, conducting code reviews, mentoring junior developers, and delivering maintainable production-ready software solutions.\n\nExperienced in designing layered backend architectures using Controllers, Services, and Data Access patterns with strong focus on strict type safety, RBAC authorization systems, edge-case handling, and production stability.",
    skills1:
      "Nodejs, Laravel, PHP, Python, React.js, Vue.js, Next.js, PostgreSQL, MongoDB, MySQL, SQL, Relational & Non Relational Databases, JavaScript, TypeScript, Docker, AWS, VPS, Express.js ,Git and GitHub, DevOps, Ubuntu, Redux.js, Inertia.js, ERP & SaaS,Databases management, DevOps practices, Problem solving ",
    skills2:
      "  Agile methodologies, Cloud architecture, Full stack development, Software development, Linux, RBAC (Role-Based Access Control), Prisma ORM, Mongoose, TypeORM, SSR, CSR, NextAuth, Firebase Auth, Supabase Auth, Strict Type Safety, Generics, Interfaces, Layered Architecture, Controllers Services Data Access Layer, Environment Variables, Production Logs, Failure Scenarios, Edge-Case Handling, Real-Time Features, Stripe Integration, Deployment Pipelines",
    experience1: {
      role: "Software Engineer",
      period: "08/2025 to Current",
      company: "Softech UK",
      location: "Lahore, Pakistan",
      details:
        "Architected and developed scalable SaaS and enterprise-grade applications using TypeScript, React.js, Next.js, Node.js, Express.js, and Laravel.\nDesigned and implemented secure RESTful APIs with strict validation, layered backend architecture, and RBAC authorization systems.\nBuilt production-ready frontend applications using React.js and Next.js with optimized SSR and CSR rendering strategies.\nDeveloped scalable backend services using Node.js and Laravel with focus on performance optimization, edge-case handling, and production stability.\nManaged PostgreSQL, MongoDB, and MySQL databases including schema design, indexing, query optimization, and ORM integration using Prisma ORM, Mongoose, and TypeORM.\nIntegrated third-party APIs including Stripe and OpenAI services while implementing secure authentication systems using NextAuth and JWT authentication.\nImplemented real-time application features using WebSockets and event-driven architectures.\nManaged AWS and DigitalOcean deployments, Linux server administration, environment variables, CI/CD pipelines, and production deployment workflows.\nDebugged production logs, monitored application performance, and resolved critical issues in live production environments.\nConducted rigorous pull request reviews and collaborated with engineering teams to deliver scalable software solutions.",
    },
    experience2: {
      role: "Software Engineer",
      period: "08/2023 to 07/2025",
      company: "MetaX Payments Ltd",
      location: "Lahore, Pakistan",
      details:
        "Led the end-to-end development of scalable web applications and enterprise-grade platforms using React.js, Next.js, Node.js, Express.js, Laravel, and TypeScript.\nDesigned and implemented responsive frontend interfaces with React.js, Vue.js, and Tailwind CSS, delivering optimized and seamless user experiences across devices.\nEngineered secure backend architectures with RESTful APIs, authentication systems, and layered application structures for scalable enterprise solutions.\nDesigned and optimized MongoDB and MySQL database schemas with focus on scalability, normalization, data integrity, and high-performance query execution.\nImplemented ORM-based database management using Laravel Eloquent ORM and Mongoose to streamline scalable backend operations.\nIntegrated third-party services, payment gateway APIs, WebSocket-based real-time features, and external system integrations into production applications.\nCollaborated with engineering teams and stakeholders to translate business requirements into production-ready technical solutions.\nConducted code reviews to ensure adherence to coding standards, maintainability, performance optimization, and software engineering best practices.\nParticipated in cloud deployment workflows, Linux server management, production environment configuration, and application monitoring.\nEnsured application stability, handled failure scenarios, and implemented secure software engineering practices across enterprise and SaaS platforms.",
    },
    experience3: {
      role: "Junior Software Developer",
      period: "10/2022 to 07/2023",
      company: "Natrix Coders",
      location: "Lahore, Pakistan",
      details:
        "Developed responsive frontend interfaces using React.js, Vue.js, Tailwind CSS, HTML5, and CSS3, delivering modern and user-friendly web experiences.\nAssisted in backend development using Node.js and Express.js for internal tools and scalable web applications.\nWorked with RESTful APIs, database operations, and frontend-backend integrations within production-grade environments.\nCollaborated with senior engineers to implement scalable application features and enhance overall user experience and application performance.\nParticipated in debugging, testing, code reviews, and software quality assurance processes to maintain application stability and code quality.\nUtilized Git, GitHub, and Agile development methodologies while gaining hands-on experience in full-stack software engineering workflows.",
    },
    education: {
      degree: "Bachelor of Science: Computer Science",
      date: "01/2025",
      school: "University Of The Punjab",
      location: "Lahore, Pakistan",
    },
    personalInfoTitle: "Full Stack Software Engineer | TypeScript Backend Specialist | React.js Next.js Node.js | PostgreSQL MongoDB | AWS Linux DevOps",
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

              {/* Personal Info Title */}
              <div className="space-y-2">
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
                  <strong>WWW:</strong> {formData.website} |
                </p>
                <p>
                  <strong>WWW:</strong> {formData.github1} |{" "}
                  <strong>WWW:</strong> {formData.github2}
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

            {/* Skills */}
            <div className="mb-4">
              <h2 className="text-center font-bold mb-2 border-t border-b border-gray-400 py-1 text-[12px] uppercase">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-x-8 pl-4">
                <ul className="list-disc pl-5 space-y-0.5">
                  {formData.skills1.split(",").map((s, i) => (
                    <li key={i}>{s.trim()}</li>
                  ))}
                </ul>
                <ul className="list-disc pl-5 space-y-0.5">
                  {formData.skills2.split(",").map((s, i) => (
                    <li key={i}>{s.trim()}</li>
                  ))}
                </ul>
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
