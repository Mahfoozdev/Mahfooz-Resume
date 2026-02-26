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
    phone: "03207802041",
    email: "mahfoozdoit@gmail.com",
    website: "https://mahfooz-dwv2.vercel.app/",
    github1: "https://github.com/Mahfoozdev",
    github2: "https://github.com/MahfoozMinit",
    summary:
      "I am a results-driven Full-Stack Software Engineer who turns complex ideas into practical, high-impact software solutions. I specialize in developing scalable web applications using Node.js, JavaScript, and TypeScript on the backend, along with Python frameworks such as Django and Flask, and PHP with Laravel for enterprise-grade systems.\n\nOn the frontend, I build responsive and high-performance user interfaces using React.js, Vue.js, and Next.js, ensuring seamless user experiences and optimized rendering strategies. I design and implement RESTful APIs, handle state management efficiently, and follow modern component-driven architecture principles.\n\nMy expertise includes working with relational and NoSQL databases such as PostgreSQL, MySQL, and MongoDB, focusing on optimized queries, efficient indexing, and scalable data modeling. I also manage cloud deployments and infrastructure using AWS, Docker, and VPS environments, applying DevOps best practices to ensure security, maintainability, and reliable CI/CD workflows.",
    skills1:
      "Nodejs, Laravel, PHP, Python, React.js, Vue.js, Next.js, PostgreSQL, MongoDB, MySQL, SQL, Relational & Non Relational Databases, JavaScript, TypeScript, Docker, AWS, VPS, Express.js",
    skills2:
      "Git and GitHub, DevOps, Ubuntu, Redux.js, Inertia.js, ERP & SaaS, Web Application Development, Custom Website Development, Cloud deployment, Databases management, DevOps practices, Problem solving, Agile methodologies, Cloud architecture, Full stack development, Software development, Linux",
    experience1: {
      role: "Software Engineer",
      period: "08/2025 to Current",
      company: "Softech UK",
      location: "Lahore, Pakistan",
      details:
        "I currently work as a Full Stack Software Engineer at Softech UK, where I design and develop end-to-end software solutions, including enterprise applications, ERP systems, and SaaS platforms tailored to a wide range of business requirements.\nMy work spans the entire technology stack, using modern tools and frameworks such as Python, Node.js, TypeScript, JavaScript, PHP, Laravel, React, and Next.js. This allows me to create intuitive, responsive front-end experiences while architecting secure and scalable back-end systems. I have extensive experience working here with relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB, ensuring effective data modeling, seamless integrations, and optimized performance.\nCollaborated with cross-functional teams to gather user requirements and specifications.\nConducted code reviews to ensure quality and adherence to best practices.\nParticipated in daily stand-up meetings to discuss project progress and challenges.",
    },
    experience2: {
      role: "Software Engineer",
      period: "12/2022 to 07/2025",
      company: "MetaX Payments Ltd",
      location: "Lahore, Pakistan",
      details:
        "Led the end-to-end development of modern web applications, delivering seamless and responsive user experiences using React.js, Vue.js, and Tailwind CSS.\nDesigned and implemented robust server-side systems with Node.js and Laravel, supporting the successful delivery of Enterprise, SaaS products and Exchange Platforms.\nParticipated in regular meetings with stakeholders to discuss project progress, changes, challenges.\nAnalyzed user requirements to develop software solutions and created technical specifications.\nConducted code reviews to ensure adherence to coding standards and best practices.\nUtilized variety of engineering languages to develop web applications.",
    },
    education: {
      degree: "Bachelor of Science: Computer Science",
      date: "01/2025",
      school: "University Of The Punjab",
      location: "Lahore, Pakistan",
    },
    personalInfoTitle: "Full Stack Software Engineer",
    languages:
      "Urdu, English (Professional Working Proficiency), Urdu (Professional Working Proficiency)",
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
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold uppercase tracking-wider mb-2">
                {formData.fullName}
              </h1>
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

            {/* Personal Information */}
            <div className="mb-4">
              <h2 className="text-center font-bold mb-2 border-t border-b border-gray-400 py-1 text-[12px] uppercase">
                Personal Information
              </h2>
              <p>Title: {formData.personalInfoTitle}</p>
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
