"use client";

import { Badge } from "@/components/ui/badge";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  ChevronDown,
  Code,
  ExternalLink,
  Github,
  GraduationCap,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Seeded random function for consistent animations
const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Technology icons mapping
const techIcons = {
  JavaScript: "/icons/javascript.svg",
  React: "/icons/react.svg",
  "React Native Expo": "/icons/react-native.svg",
  "Next.js": "/icons/nextjs.svg",
  MongoDB: "/icons/mongodb.svg",
  Prisma: "/icons/prisma.svg",
  "Express.js": "/icons/express.svg",
  Flask: "/icons/flask.svg",
  PHP: "/icons/php.svg",
  MySQL: "/icons/mysql.svg",
  "Aws s3": "/icons/amazon-s3.svg",
  Springboot: "/icons/springboot.svg",
  Java: "/icons/java.svg",
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  const navSections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "memberships", label: "Contact" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "memberships"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Lifeline-angel",
      url: "https://lifeline-angel.vercel.app/",
      description:
        "Healthcare platform with dataset contributions and QA testing",
    },
    // {
    //   title: "Invoice Web Application",
    //   url: "https://invoicingap.vercel.app/",
    //   description:
    //     "Create, manage, and track invoices and clients with this full-stack app—featuring responsive UI, PDF exports, and seamless CRUD operations.",
    //   tech: "Next.js, MongoDB, Prisma",
    // },
    {
      title: "Juntos",
      url: "https://expo.dev/accounts/angeloyocoryocor/projects/Juntos/builds/44318ac0-805b-4ff2-b30a-21e172ec1074",
      description:
        "Post, connect, and engage in real-time with this full-stack social media platform.",
      tech: "React Native Expo, MongoDB, Express.js, Aws s3",
    },
    {
      title: "Twnkln",
      url: "https://mytodo-fe.vercel.app/",
      description: "Todo app to add, track, and store tasks.",
      tech: "React, MongoDB, Express.js",
    },
    {
      title: "Marketplace backend",
      url: "https://github.com/ycrangelo/MarketPlace-Backend.git",
      description:
        "A peer-to-peer (P2P) marketplace backend where users act as buyers or sellers and negotiate transactions directly",
      tech: "Springboot, Java, MySQL",
    },
    {
      title: "Employee Information System",
      url: "https://playing-nine.vercel.app/",
      description: "Complete employee management system",
      tech: "Next.js, MongoDB, Prisma",
    },
    {
      title: "Inventory-Purchase Order System",
      url: "https://github.com/ycrangelo/IS-purchase-Order-System.git",
      description:
        "inventory and purchase order system to track stock and manage orders.",
      tech: "Flask, MySQL",
    },
    // {
    //   title: "Console Portfolio",
    //   url: "https://sudoycrangelo.vercel.app/",
    //   description:
    //     "My second portfolio is inspired by a command-line console interface",
    //   tech: "Next.js",
    // },
    {
      title: "VeriSure",
      url: "https://veri-sure.vercel.app/",
      description:
        "Encrypt, store, and share data securely with Incryption’s advanced protection technology.",
      tech: "React",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "React Native Expo",
    "Next.js",
    "MongoDB",
    "Prisma",
    "Express.js",
    "Flask",
    "PHP",
    "MySQL",
    "Aws s3",
    "Springboot",
    "Java"
  ];

  const education = [
    {
      school: "University of Cabuyao",
      period: "2021 – 2025",
      degree: "BS in Computer Science",
    },
    {
      school: "Our Lady of Assumption College",
      period: "2019 – 2021",
      degree: "ICT Track",
    },
    {
      school: "Gulod National High School",
      period: "2015 – 2019",
      degree: "ICT",
    },
    {
      school: "Mamatid Elementary School",
      period: "2007 – 2015",
      degree: "Elementary Education",
    },
  ];

  const memberships = [
    "Association of Computer Science Students",
    "AWS Cloud Club – University of Cabuyao",
    // "Filipino Web Development Peers",
  ];

  // Generate heart positions using seeded random
  const hearts = Array.from({ length: 6 }).map((_, i) => ({
    left: seededRandom(i) * 100 + "%",
    top: seededRandom(i + 100) * 100 + "%",
    animationDelay: `${seededRandom(i + 200) * 10}s`,
    animationDuration: `${4 + seededRandom(i + 300) * 4}s`,
  }));

  return (
    <>
      {/* <Head>
        <link rel="icon" href="/icongel.ico" />
      </Head> */}
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative">
        {/* Background gradient overlay with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-gradient-to-br from-pink-100/20 via-transparent to-purple-100/20 pointer-events-none"
        />

        {/* Floating Hearts Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {hearts.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.2,
                scale: 1,
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4 + seededRandom(i + 300) * 4,
                repeat: Infinity,
                delay: seededRandom(i + 200) * 10,
              }}
              className="absolute"
              style={{
                left: h.left,
                top: h.top,
              }}
            >
              <Heart className="text-pink-200" size={16 + i * 4} />
            </motion.div>
          ))}
        </div>

        {/* Navigation with animation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-b border-pink-100/50 z-50 transition-all duration-300 hover:bg-white/80"
        >
          <div className="container mx-auto px-6 py-2">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={16} />
                </div>
                {navSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`capitalize text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === section.id
                        ? "text-pink-600"
                        : "text-gray-600 hover:text-pink-500"
                    }`}
                  >
                    {section.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full ${
                        activeSection === section.id ? "w-full" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section with animations */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative"
          >
            <motion.div
              className="relative mb-12"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-56 h-56 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                <Image
                  src="/picpic.jpg"
                  alt="Angelo Yocor"
                  width={224}
                  height={226}
                  className="object-cover border-1 border-black w-full h-full"
                />
              </div>
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Star
                  className="absolute top-4 right-1/3 text-yellow-400"
                  size={28}
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  className="absolute bottom-4 left-1/3 text-pink-400"
                  size={24}
                />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
            >
              Yocor, Angelo T.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-pink-600 mb-8 font-medium"
            >
              Computer Science Graduate | Software Developer | Backend Developer
              | Passionate About Web & Mobile Apps
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-600 mb-12"
            >
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Github className="text-pink-500" size={20} />
                <span>ycrangelo</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Phone className="text-pink-500" size={20} />
                <span>09569785437</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Mail className="text-pink-500" size={20} />
                <span>yocorangelo13@gmail.com</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13tLcHDOlNeeBtigBncNuEF-9_uZk7fFd/view?usp=sharing",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View my CV
                <ChevronDown className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Main Content Grid Layout with animations */}
        <div className="max-w-7xl mx-auto px-4">
          {/* About & Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 py-24"
          >
            {/* About Section */}
            <section id="about" className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 pointer-events-none rounded-3xl" />
              <div className="relative">
                <h2 className="text-5xl font-bold text-gray-800 mb-8">
                  About Me
                  <Heart
                    className="inline-block ml-3 text-pink-500 animate-pulse"
                    size={40}
                  />
                </h2>
                <Card className="bg-white/80 backdrop-blur-lg border-pink-100/50 shadow-2xl rounded-3xl transform hover:scale-[1.02] transition-all duration-500">
                  <CardContent className="p-12">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To apply my skills in software development and contribute
                      to impactful tech projects
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative py-20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-white/60 to-purple-100/40 pointer-events-none rounded-3xl" />
              <div className="relative">
                <h2 className="text-5xl font-bold text-center text-gray-800 mb-2">
                  Technical Skills
                  <Code className="inline-block ml-3 text-pink-500" size={40} />
                </h2>
                <p className="text-center text-lg text-gray-500 mb-10">
                  Technologies I use most often
                </p>
                <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-2xl rounded-3xl mx-auto max-w-4xl">
                  <CardContent className="p-12 bg-transparent">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          animate={{
                            y: [0, -8, 0, 8, 0],
                            transition: {
                              duration: 3 + (index % 3),
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                          whileHover={{
                            scale: 1.15,
                            rotate: -8 + Math.random() * 16,
                            boxShadow: `0 0 0 8px ${
                              index % 2 === 0 ? "#ec4899AA" : "#a78bfaAA"
                            },
                            ${
                              skill === "JavaScript"
                                ? "0 0 0 16px #F7DF1E55"
                                : skill === "React" || skill === "React Native"
                                ? "0 0 0 16px #61DAFB55"
                                : skill === "Next.js"
                                ? "0 0 0 16px #33333355"
                                : skill === "MongoDB"
                                ? "0 0 0 16px #13AA5255"
                                : skill === "Prisma"
                                ? "0 0 0 16px #2D374855"
                                : skill === "Express.js"
                                ? "0 0 0 16px #0005"
                                : skill === "Unity"
                                ? "0 0 0 16px #0005"
                                : skill === "Flask"
                                ? "0 0 0 16px #0005"
                                : skill === "PHP"
                                ? "0 0 0 16px #777BB455"
                                : skill === "MySQL"
                                ? "0 0 0 16px #4479A155"
                                : skill === "amazon"
                                ? "0 0 0 16px #33333355"
                                : ""
                            }`,
                            y: -16,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                          className={`w-20 h-20 relative bg-transparent rounded-2xl shadow-lg p-4 flex items-center justify-center border-2 transition-all duration-300
                          ${
                            index % 2 === 0
                              ? "border-pink-300"
                              : "border-purple-300"
                          }
                          hover:border-pink-500 focus:border-pink-500`}
                        >
                          <Image
                            src={techIcons[skill as keyof typeof techIcons]}
                            alt={skill}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </motion.div>

          {/* Experience & Education Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 py-24"
          >
            {/* Experience Section */}
            <section id="experience" className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 pointer-events-none rounded-3xl" />
              <div className="relative">
                <h2 className="text-5xl font-bold text-gray-800 mb-8">
                  Experience
                  <Briefcase
                    className="inline-block ml-3 text-pink-500"
                    size={40}
                  />
                </h2>
                <Card className="bg-white/80 backdrop-blur-lg border-pink-100/50 shadow-2xl rounded-3xl transform hover:scale-[1.02] transition-all duration-500">
                  <CardContent className="p-12">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                          Internship at Texwipe Asia Advanced Molding Company,
                          Inc.
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-2 text-lg mb-6"
                        >
                          Feb – Apr 2025
                        </Badge>
                        <ul className="text-gray-700 space-y-4 text-lg">
                          <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full" />
                            <span>
                              Developed backend modules using PHP, MySQL, and
                              Flask
                            </span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full" />
                            <span>Worked on 3D model development in Unity</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full" />
                            <span>
                              Collaborated with cross-functional teams on
                              various projects
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 pointer-events-none rounded-3xl" />
              <div className="relative">
                <h2 className="text-5xl font-bold text-gray-800 mb-8">
                  Education
                  <GraduationCap
                    className="inline-block ml-3 text-pink-500"
                    size={40}
                  />
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card
                      key={index}
                      className="bg-white/80 backdrop-blur-lg border-pink-100/50 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                              {edu.school}
                            </h3>
                            <p className="text-pink-600 font-medium text-lg">
                              {edu.degree}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-2 text-lg mt-4 md:mt-0"
                          >
                            {edu.period}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>

          {/* Projects Section */}
          <section id="projects" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 pointer-events-none rounded-3xl" />
            <div className="relative">
              <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
                Featured Projects
                <Star className="inline-block ml-3 text-pink-500" size={40} />
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-lg border-pink-100/50 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <h3 className="text-2xl font-semibold text-gray-800">
                            {project.title}
                          </h3>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110"
                            >
                              <ExternalLink size={24} />
                            </a>
                          )}
                        </div>
                        <p className="text-gray-600 text-lg mb-6">
                          {project.description}
                        </p>
                        {project.tech && (
                          <div className="flex flex-wrap gap-3">
                            {project.tech.split(", ").map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full"
                              >
                                <Image
                                  src={
                                    techIcons[tech as keyof typeof techIcons]
                                  }
                                  alt={tech}
                                  width={16}
                                  height={16}
                                  className="object-contain"
                                />
                                <span className="text-sm text-gray-700">
                                  {tech}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Memberships Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="memberships"
            className="py-24 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 pointer-events-none rounded-3xl" />
            <div className="relative">
              <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
                Memberships
                <Users className="inline-block ml-3 text-pink-500" size={40} />
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {memberships.map((membership, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 backdrop-blur-lg border-pink-100/50 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                          <Award className="text-white" size={28} />
                        </div>
                        <span className="text-xl font-medium text-gray-800">
                          {membership}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Footer with animation */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-lg"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="https://github.com/ycrangelo"
                className="text-gray-600 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/angelo-yocor-0885aa254"
                className="text-gray-600 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.instagram.com/angeloinyourheart"
                className="text-gray-600 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <Instagram size={28} />
              </a>
            </div>
            <p className="text-gray-600 text-lg flex items-center justify-center">
              Made with{" "}
              <Heart className="text-pink-500 mx-2 animate-pulse" size={20} />{" "}
              by Angelo
            </p>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
