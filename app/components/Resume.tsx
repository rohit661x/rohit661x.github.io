"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaDownload, FaBuilding, FaGraduationCap, FaCode, FaCertificate } from 'react-icons/fa';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const experience = [
    {
      company: "McMaster University - Faculty of Engineering",
      position: "Machine Learning Research Intern",
      period: "May 2025 - August 2025",
      description: "Conducted research on advanced machine learning models and their applications in financial markets.",
      achievements: [
        "Developed and implemented novel deep learning architectures for time series prediction",
        "Improved model performance by 35% through innovative feature engineering",
        "Published research findings in internal technical documentation"
      ]
    },
    {
      company: "Nexus Data Centers",
      position: "Data Engineering Intern",
      period: "April 2024 – September 2024",
      description: "Built and maintained data pipelines for large-scale financial data processing.",
      achievements: [
        "Designed ETL pipelines processing over 1TB of market data daily",
        "Optimized database queries reducing processing time by 40%",
        "Implemented real-time data validation and monitoring systems"
      ]
    },
    {
      company: "McMaster Quantitative Trading Society",
      position: "Co-President",
      period: "May 2024 – Present",
      description: "Led organization strategy and managed cross-functional teams in a technology-focused student organization.",
      achievements: [
        "Grew membership by 200% through strategic initiatives",
        "Organized technical workshops and networking events",
        "Established partnerships with industry leaders"
      ]
    },
    {
      company: "DeGroote Finance & Investment Council",
      position: "Investment Analyst",
      period: "September 2023 – April 2024",
      description: "Conducted quantitative analysis and due diligence for investment opportunities.",
      achievements: [
        "Analyzed market trends and generated investment recommendations",
        "Developed financial models for portfolio analysis",
        "Assisted in managing $100,000 investment portfolio"
      ]
    }
  ];

  const education = [
    {
      institution: "McMaster University",
      degree: "Bachelor of Science in Mathematics and Statistics",
      period: "2024 - 2027",
      description: "Transferred from Commerce to pursue advanced quantitative studies",
      achievements: [
        "Specializing in Financial Mathematics and Statistics",
        "Focus on Mathematical modeling and Statistical analysis",
        "Pursuing advanced coursework in Probability Theory and Stochastic Processes"
      ]
    },
    {
      institution: "McMaster University",
      degree: "Bachelor of Commerce, Specialized in Finance",
      period: "2022 - 2024",
      description: "Foundation in finance and business before transferring to Mathematics",
      achievements: [
        "Specialized in Financial Markets and Investment Strategy",
        "Completed core business and finance curriculum",
        "Transferred to Mathematics and Statistics program in 2024"
      ]
    }
  ];

  const skills = {
    technical: [
      { name: "Frontend Development", level: 90 },
      { name: "Backend Development", level: 85 },
      { name: "Database Management", level: 80 },
      { name: "DevOps & Cloud", level: 75 },
      { name: "System Architecture", level: 85 }
    ],
    programming: ["Python", "C++", "SQL", "Bash / Shell Scripting", "JavaScript", "TypeScript", "Java"],
    frameworks: [
      // ML & Data Science
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "NumPy",
      "Pandas",
      "Statsmodels",
      "yfinance",
      "QuantLib",
      // Web Development
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Spring Boot"
    ],
    tools: ["Git", "Docker", "AWS", "MATLAB", "Bloomberg Terminal"]
  };

  const certifications = [
    {
      name: "Bloomberg Market Concepts",
      issuer: "Bloomberg",
      date: "November 2023",
      link: "https://portal.bloombergforeducation.com/login"
    },
    {
      name: "Finance Accelerator Simulation with Morgan Stanley",
      issuer: "Amplify Me",
      date: "January 2024",
      link: "https://my.amplifyme.com/certificate/e90eecc5-199e-46c5-80c4-833509622d7b"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and qualifications in software development.
          </p>
          
          {/* Resume Preview */}
          <div className="mt-8 mb-8 relative max-w-2xl mx-auto cursor-pointer" onClick={() => setIsImageEnlarged(!isImageEnlarged)}>
            <div className={`transition-all duration-300 ${isImageEnlarged ? 'scale-150 z-50' : 'scale-100'}`}>
              <Image
                src="/images/resume/1749722581874-86355118-689d-4f9e-a1f3-e88106ccee4f_1.jpg"
                alt="Resume Preview"
                width={800}
                height={1000}
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                priority
              />
            </div>
          </div>

          <a
            href="/images/resume/1749722581874-86355118-689d-4f9e-a1f3-e88106ccee4f_1.jpg"
            download="Rohit_Suryadevara_Resume.jpg"
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="w-4 h-4" />
            Download Full Resume
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['experience', 'education', 'skills', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Experience Section */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FaBuilding className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                      <p className="text-gray-500">{job.period}</p>
                      <p className="mt-2 text-gray-600">{job.description}</p>
                      <ul className="mt-4 space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <FaGraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-green-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-500">{edu.period}</p>
                      <p className="mt-2 text-gray-600">{edu.description}</p>
                      <ul className="mt-4 space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Skills with Progress Bars */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                  <FaCode className="text-purple-600" />
                  Technical Proficiency
                </h3>
                <div className="space-y-4">
                  {skills.technical.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming Languages & Tools */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((lang, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((framework, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <FaCertificate className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                      <p className="text-gray-500">{cert.date}</p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-600 hover:text-blue-800"
                      >
                        View Certificate →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume; 