'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Updated Education Data
const Education = [
  {
    title: "Kean University",
    location: "Union, NJ",
    period: "2023 - 2026",
    gpa: "3.76 / 4.00 GPA",
    honor: "Magna Cum Laude",
    degree: "Bachelor of Science in Computer Science",
    honors: [
      "Fall 25 Dean's Honor List",
      "Spring 25 Dean's Honor List",
      "Fall 24 Dean's Honor List",
      "Fall 23 Dean's Honor List",
    ],
  },
  {
    title: "Brookdale Community College",
    location: "Lincroft, NJ",
    period: "2021 - 2023",
    honors: [
      "Fall 22 Dean's Honor List",
      "Fall 21 Dean's Honor List",
    ],
  },
];

const Skills = [
  {
    title: "Languages",
    description: "Programming languages used for application development and data processing.",
    tech: [
      { name: "Python", icon: null, color: "#000000" },
      { name: "JavaScript", icon: null, color: "#000000" },
      { name: "TypeScript", icon: null, color: "#000000" },
      { name: "SQL", icon: null, color: "#000000" },
      { name: "PL/SQL", icon: null, color: "#000000" },
      { name: "HTML", icon: null, color: "#000000" },
      { name: "CSS", icon: null, color: "#000000" },
    ],
    image: '/skills/python_stock.jpg'
  },
  {
    title: "Framework & Libraries",
    description: "Frameworks and libraries used to build responsive web applications, user interfaces, and machine learning solutions.",
    tech: [
      { name: "React", icon: null, color: "#000000" },
      { name: "Next.js", icon: null, color: "#000000" },
      { name: "FastAPI", icon: null, color: "000000"},
      { name: "Playwright", icon: null, color: "#000000" },
      { name: "Pydantic", icon: null, color: "#000000" },
      { name: "SQLAlchemy", icon: null, color: "#000000" },
      { name: "PyTorch", icon: null, color: "#000000" },
      { name: "torchvision", icon: null, color: "#000000" },
      { name: "scikit-learn", icon: null, color: "#000000" },
      { name: "Pandas", icon: null, color: "#000000" },
      { name: "Tailwind CSS", icon: null, color: "#000000" },
      { name: "Framer Motion", icon: null, color: "#000000" },
    ],
    image: '/skills/PyTorch_stock.webp'
  },
  {
    title: "Databases",
    description: "Database technologies used for data storage, organization, and querying.",
    tech: [
      { name: "PostgreSQL", icon: null, color: "#000000" },
      { name: "MySQL", icon: null, color: "#000000" },
      { name: "SQLite", icon: null, color: "#000000" },
      { name: "REST APIs", icon: null, color: "#000000" },
      { name: "Alembic", icon: null, color: "#000000" },
    ],
    image: '/skills/MySQL_stock.png'
  },
  {//Tools & Platforms: GitHub, Vercel, Hugging Face Datasets 
    title: "Tools & Platforms",
    description: "Development tools and platforms used for version control, deployment, and machine learning resources.",
    tech: [
      { name: "Git", icon: null, color: "#000000" },
      { name: "GitHub", icon: null, color: "#000000" },
      { name: "Postman", icon: null, color: "#000000" },
      { name: "Vercel", icon: null, color: "#000000" },
      { name: "Hugging Face Datasets", icon: null, color: "#000000" },
      { name: "Docker", icon: null, color: "#000000" },
      { name: "Docker Compose", icon: null, color: "#000000" },
      { name: "pytest", icon: null, color: "#000000" },
      { name: "GitHub Actions", icon: null, color: "#000000" },
      { name: "Ruff", icon: null, color: "#000000" },
      { name: "n8n", icon: null, color: "#000000" },
      { name: "AWS EC2/RDS", icon: null, color: "#000000" },
    ],
    image: '/skills/GitHub.png'
  },
];


const Projects = [
  {
    title: "Residential Clothing Automation Platform",
    description:
      "Full-stack order-management platform for residential clothing providers, featuring inventory automation, approval workflows, PostgreSQL persistence, and n8n-based external order intake.",
    bullets: [
      "Built a Python and FastAPI REST API with Pydantic validation for catalog, inventory, resident, order, approval, and fulfillment workflows; enforced per-order budgets, price snapshots, and partial-fulfillment rules.",
      "Designed relational data models with SQLAlchemy and Alembic, including idempotency safeguards that prevent duplicate writes during request retries.",
      "Automated inventory reservation and warehouse-task creation, and built a protected n8n workflow that transforms friendly product labels into validated SKUs and creates draft orders through the API.",
      "Developed a lightweight JavaScript operational frontend; wrote 71+ pytest tests; and configured Ruff, GitHub Actions, Docker Compose, and AWS EC2/RDS deployment.",
    ],
    tech: [
      { name: "Python", icon: null, color: "#000000" },
      { name: "FastAPI", icon: null, color: "#000000" },
      { name: "Pydantic", icon: null, color: "#000000" },
      { name: "PostgreSQL", icon: null, color: "#000000" },
      { name: "SQLAlchemy", icon: null, color: "#000000" },
      { name: "Alembic", icon: null, color: "#000000" },
      { name: "Docker", icon: null, color: "#000000" },
      { name: "Docker Compose", icon: null, color: "#000000" },
      { name: "pytest", icon: null, color: "#000000" },
      { name: "GitHub Actions", icon: null, color: "#000000" },
      { name: "Ruff", icon: null, color: "#000000" },
      { name: "n8n", icon: null, color: "#000000" },
      { name: "AWS EC2/RDS", icon: null, color: "#000000" },
    ],
    image: "/architecture-diagram.svg",
    links: {
      GitHub_ResidentialClothingAutomation:
        "https://github.com/TylerHarnish5/residential-clothing-automation",
    },
  },
  {
    title: "Harbor & Pine Outfitters — QA & Test Automation Project",
    description:
      "Hands-on software QA and test automation project for a Flask e-commerce application, combining requirements-based manual testing, automated regression coverage, API and database validation, cross-browser testing, and continuous integration.",
    bullets: [
      "Executed manual black-box, functional, acceptance, regression, boundary, and negative testing across authentication, product search, cart management, checkout, and order history; documented defects and retested fixes.",
      "Built a 16-test automated regression suite spanning UI/end-to-end, integration, and unit testing with pytest and Playwright, using reusable fixtures, parameterization, mocking, and Page Object Model structure.",
      "Tested HTTP/API behavior with Python Requests and Postman and validated persisted order data with SQL and SQLite, including authentication, session state, redirects, cart validation, shipping calculations, and order totals.",
      "Automated critical defect regressions with Playwright, verified selected UI flows across Chromium, Firefox, and WebKit, and configured GitHub Actions CI to run the regression suite on pushes and pull requests.",
    ],
    tech: [
      { name: "Python", icon: null, color: "#000000" },
      { name: "pytest", icon: null, color: "#000000" },
      { name: "Playwright", icon: null, color: "#000000" },
      { name: "Postman", icon: null, color: "#000000" },
      { name: "Python Requests", icon: null, color: "#000000" },
      { name: "SQL", icon: null, color: "#000000" },
      { name: "SQLite", icon: null, color: "#000000" },
      { name: "GitHub Actions", icon: null, color: "#000000" },
      { name: "Flask", icon: null, color: "#000000" },
    ],
    image: "/playwright_chromium_stock.png",
    links: {
      github: "https://github.com/TylerHarnish5/qa-career-simulation",
    },
  },
  {
    title: "TrashNet Waste Image Classification Using Deep Learning",
    description:
      "Deep learning image classification project that identifies waste across six material categories using transfer learning with ResNet18.",
    bullets: [
      "Trained a transfer-learning image classification model on 5,054 TrashNet images across cardboard, glass, metal, paper, plastic, and trash categories.",
      "Tuned a pretrained ResNet18 model and evaluated a deeper classifier head using batch normalization, ReLU activation, and dropout.",
      "Achieved 95.65% test accuracy and conducted an ablation study comparing the baseline model, architectural modification, and weight-decay regularization.",
    ],
    tech: [
      { name: "Python", icon: null, color: "#000000" },
      { name: "PyTorch", icon: null, color: "#000000" },
      { name: "torchvision", icon: null, color: "#000000" },
      { name: "ResNet18", icon: null, color: "#000000" },
      { name: "Pandas", icon: null, color: "#000000" },
      { name: "Matplotlib", icon: null, color: "#000000" },
      { name: "Hugging Face Datasets", icon: null, color: "#000000" },
    ],
    image: "/waste-image_stock.png",
    links: {
      colab:
        "https://colab.research.google.com/drive/15ibUzovZwcCwy_JtKk8G6oy3fLqBX4Hd?usp=sharing",
    },
  },

  {
    title: "Portfolio Web Application (This Website)",
    description:
      "Responsive personal portfolio built with a component-based architecture to present projects, skills, and education.",
    bullets: [
      "Implemented animated and interactive UI components with Framer Motion and optimized layouts for desktop and mobile devices.",
      "Deployed the application to Vercel with continuous integration from GitHub to support rapid updates and version control.",
    ],
    tech: [
      { name: "Next.js", icon: null, color: "#000000" },
      { name: "React", icon: null, color: "#61DAFB" },
      { name: "TypeScript", icon: null, color: "#000000" },
      { name: "Tailwind CSS", icon: null, color: "#000000" },
      { name: "Framer Motion", icon: null, color: "#000000" },
      { name: "Vercel", icon: null, color: "#000000" },
    ],
    image: "/thispage_stock.png",
    links: {
      live: "https://tylerharnish5.github.io", 
      githubPortfolio: "https://github.com/TylerHarnish5/TylerHarnish5.github.io",
    },
  },
  {
    title: "Emotion Detection Using Machine Learning (NLP) — Group Project",
    description:
      "Multiclass emotion classification using TF-IDF features and machine learning models trained on labeled tweet data.",
    bullets: [
      "Preprocessed and analyzed a dataset of 40,000 labeled tweets to perform multiclass emotion classification across 13 sentiment categories.",
      "Extracted numerical features from text using TF-IDF and trained machine learning models including Logistic Regression and Support Vector Machine.",
      "Achieved approximately 85% accuracy using SVM on a reduced dataset, demonstrating effective model selection under computational constraints.",
    ],
    tech: [
      { name: "Python", icon: null, color: "#000000" },
      { name: "Pandas", icon: null, color: "#000000" },
      { name: "scikit-learn", icon: null, color: "#000000" },
      { name: "TF-IDF", icon: null, color: "#000000" },
      { name: "Logistic Regression", icon: null, color: "#000000" },
      { name: "SVM", icon: null, color: "#000000" },
    ],
    image: "/tempML_stock.webp",
    links: {
      github: "", // optional
    },
  },
];

const harborPineProjectTitle = "Harbor & Pine Outfitters — QA & Test Automation Project";
const harborPineImages = [
  {
    src: "/playwright_chromium_stock.png",
    alt: "Harbor & Pine checkout flow in Playwright Inspector",
  },
  {
    src: "/harbor_pine_project_automation.png",
    alt: "Harbor & Pine automated regression suite with 16 passing pytest tests",
  },
  {
    src: "/harbor_pine_project_github_actions.png",
    alt: "Harbor & Pine GitHub Actions regression workflow result",
  },
];

type SelectedProjectImage =
  | { kind: "single"; src: string; alt: string }
  | { kind: "harborPine" };

export default function Main() {
  const [selectedProjectImage, setSelectedProjectImage] =
    useState<SelectedProjectImage | null>(null);
  const [harborPineImageIndex, setHarborPineImageIndex] = useState(0);
  const [isHarborPineImageHovered, setIsHarborPineImageHovered] = useState(false);
  const isHarborPineImageEnlarged = selectedProjectImage?.kind === "harborPine";
  const selectedImage =
    selectedProjectImage?.kind === "harborPine"
      ? harborPineImages[harborPineImageIndex]
      : selectedProjectImage;

  const showPreviousHarborPineImage = () => {
    setHarborPineImageIndex(
      (index) => (index - 1 + harborPineImages.length) % harborPineImages.length,
    );
  };

  const showNextHarborPineImage = () => {
    setHarborPineImageIndex((index) => (index + 1) % harborPineImages.length);
  };

  useEffect(() => {
    if (!selectedProjectImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProjectImage(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProjectImage]);

  useEffect(() => {
    if (isHarborPineImageHovered || isHarborPineImageEnlarged) return;

    const carouselInterval = window.setInterval(showNextHarborPineImage, 4000);

    return () => window.clearInterval(carouselInterval);
  }, [isHarborPineImageEnlarged, isHarborPineImageHovered]);

  return (
    <>
      <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== EDUCATION SECTION ===== */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 scroll-mt-36"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            EDUCATION
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mb-10" />
        </motion.div>

        {/* Education Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {Education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl overflow-hidden 
                         bg-surface border border-white/10 cursor-pointer"
            >
              {/* Content Section */}
              <motion.div className="p-6 bg-surface transition duration-300">
                <h3 className="text-2xl font-bold text-content mb-1">{edu.title}</h3>
                <p className="text-content/80 mb-1 mt-2">{edu.location}</p>
                <p className="text-content/80 mb-1">{edu.period}</p>
                {edu.gpa && <p className="text-content/80 mb-1">{edu.gpa}</p>}
                {edu.honor && <p className="text-content/80 mb-1">{edu.honor}</p>}
                {edu.degree && <p className="text-content/80 mb-4">{edu.degree}</p>}

                {edu.honors && edu.honors.length > 0 && (
                  <div className="flex flex-col gap-1">
                    {edu.honors.map((honor, j) => (
                      <span key={j} className="text-content/80 text-sm border-l-4 border-primary pl-2">
                        {honor}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Spacer between sections */}
        <div className="h-20"></div>

        {/* ===== SKILLS SECTION ===== */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 scroll-mt-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            SKILLS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
          {Skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`group relative ${skill.title === "Tools & Platforms" ? "min-h-[500px]" : "h-[500px]"} rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer`}
            >
              {/* Image Section */}
              <motion.div className="h-[250px] relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div className="p-6 bg-surface transition duration-300">
                <h3 className="text-2xl font-bold text-content">{skill.title}</h3>
                <p className="text-content/80 mb-4">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 
                                 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech"
                    >
                      <span className="group-hover/tech:text-content transition-colors">{tech.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
       
        {/* Spacer between sections */}
        <div className="h-20"></div>

        {/* ===== PROJECTS SECTION ===== */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 scroll-mt-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            PROJECTS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

{/* Projects Grid */}
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
  {Projects.map((project, i) => (
    (() => {
      const isHarborPineProject = project.title === harborPineProjectTitle;
      const displayedImage = isHarborPineProject
        ? harborPineImages[harborPineImageIndex]
        : { src: project.image, alt: project.title };

      return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group relative rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
    >
      {/* Image Section */}
      <motion.div
        onMouseEnter={() => isHarborPineProject && setIsHarborPineImageHovered(true)}
        onMouseLeave={() => isHarborPineProject && setIsHarborPineImageHovered(false)}
        className="relative h-[250px] w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <button
          type="button"
          onClick={() =>
            setSelectedProjectImage(
              isHarborPineProject
                ? { kind: "harborPine" }
                : {
                    kind: "single",
                    src: displayedImage.src,
                    alt: `${project.title} project preview`,
                  },
            )
          }
          aria-label={`Open larger image for ${project.title}`}
          className="relative h-full w-full border-0 bg-transparent p-0 text-left"
        >
          <Image
            src={displayedImage.src}
            alt={displayedImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </button>

        {isHarborPineProject && (
          <>
            <button
              type="button"
              onClick={showPreviousHarborPineImage}
              aria-label="Show previous Harbor & Pine project image"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-3xl text-white/90 opacity-70 transition hover:bg-black/60 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNextHarborPineImage}
              aria-label="Show next Harbor & Pine project image"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-3xl text-white/90 opacity-70 transition hover:bg-black/60 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ›
            </button>
          </>
        )}
      </motion.div>

      {/* Content Section */}
      <motion.div className="p-6 bg-surface transition duration-300">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-content">{project.title}</h3>

          {/* Links (optional) */}
          <div className="flex flex-wrap gap-2">
            {project.links?.githubPortfolio && (
              <a
                href={project.links.githubPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/10 text-content text-sm border border-white/20
                  hover:bg-white/20 hover:border-white/40 hover:shadow-md
                  active:scale-95 transition-all duration-200
                  cursor-pointer select-none whitespace-nowrap
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                GitHub ↗
              </a>
            )}

            {project.links?.colab && (
              <a
                href={project.links.colab}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/10 text-content text-sm border border-white/20
                  hover:bg-white/20 hover:border-white/40 hover:shadow-md
                  active:scale-95 transition-all duration-200
                  cursor-pointer select-none whitespace-nowrap
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Google Colab ↗
              </a>
            )}

             {(project.links?.GitHub_ResidentialClothingAutomation || project.links?.github) && (
              <a
                href={project.links.GitHub_ResidentialClothingAutomation || project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/10 text-content text-sm border border-white/20
                  hover:bg-white/20 hover:border-white/40 hover:shadow-md
                  active:scale-95 transition-all duration-200
                  cursor-pointer select-none whitespace-nowrap
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        <p className="text-content/80 mt-2 mb-4">{project.description}</p>

        {/* Bullets */}
        {project.bullets?.length > 0 && (
          <ul className="list-disc pl-5 space-y-2 text-content/80 text-sm mb-5">
            {project.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        )}

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, j) => (
            <span
              key={j}
              className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 
                         hover:bg-surface transition-colors flex items-center gap-1.5"
            >
              <span className="transition-colors">{tech.name}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
      );
    })()
  ))}
</div>

      </div>
      </section>

      {selectedImage && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProjectImage(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-full w-full max-w-6xl items-center justify-center"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
            />
            {selectedProjectImage?.kind === "harborPine" && (
              <>
                <button
                  type="button"
                  onClick={showPreviousHarborPineImage}
                  aria-label="Show previous Harbor & Pine project image"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-3xl text-white/90 opacity-70 transition hover:bg-black/60 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNextHarborPineImage}
                  aria-label="Show next Harbor & Pine project image"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-3xl text-white/90 opacity-70 transition hover:bg-black/60 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  ›
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => setSelectedProjectImage(null)}
              aria-label="Close enlarged image"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
