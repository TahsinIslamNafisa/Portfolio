import { useState } from 'react';
import {
    FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiAward,
    FiGithub, FiLinkedin, FiArrowRight, FiExternalLink, FiMenu, FiX
} from 'react-icons/fi';
import './App.css';

// ===== EDIT YOUR DATA HERE =====
const profile = {
    name: "Tahsin Islam Nafisa",
    title: "CSE Student",
    tagline: "Driven by curiosity, continuous learning, and a passion for technology and innovation.",
    email: "tahsinislamnafisa0812@gmail.com",
    github: "https://github.com/TahsinIslamNafisa",
    linkedin: "https://linkedin.com/in/tahsin-islam-nafisa-589442287",
};

const aboutText = "I'm a Computer Science student passionate about exploring different areas of technology, with a strong interest in software development, machine learning, artificial intelligence, computer vision, natural language processing, and data science. I enjoy building clean, functional applications, exploring emerging technologies, and conducting research to solve real-world problems through innovative and practical solutions. I'm always eager to learn, experiment, and expand my knowledge across different fields of Computer Science.";

const education = [
    { level: "BSC in CSE:", institution: "International Islamic University Chittagong" },
    { level: "HSC:", institution: "Ispahani Public School and College" },
    { level: "SSC:", institution: "Bangladesh Mahila Samity Girls' High School and College" },
];
const certifications = {
    courses: [
        { name: "Full Stack Web Development with JavaScript (Mern)", issuer: "OSTAD"},
        { name: "Machine Learning with Python", issuer: "IICT, CUET under EDGE" },
    ],
    seminars: [
        { name: "Graphics Design", issuer: "BYSDO" },
        { name: "JavaScript", issuer: "OSTAD" },
        { name: "Cyber Security & Ethical Hacking", issuer: "OSTAD" },
        { name: "Public Speaking & Debate Workshop", issuer: "IIUC" },
        { name: "Fundamentals of C++ Programming", issuer: "Phitron" },
    ],
    volunteering: [
        { name: "IIUC Intra University Datathon", issuer: "IIUC Developers & Entrepreneurs Society" },
        { name: "IIUC CSE FEST 2026", issuer: "IIUC Computer CLub" },
        { name: "IIUC Inter University Programming Contest", issuer: "IIUC Competitive Programming Society" },
        { name: "6h Convocation", issuer: "IIUC" },
        { name: "Research Workshop", issuer: "IIUC Computer CLub" },

        { name: "Idea Generation Competition - IIUC CSE FEST 2026 (1st Runners-up) ", issuer: "IEEE CS SBC IIUC" },
        { name: "ICT Olympiad (Quarter Final Round) ", issuer: "ICT Olympiad Bangladesh" },
    ],
};

const stats = [
    { label: "Projects", value: "2+" },
    { label: "Technologies", value: "8+" },
    { label: "Years Learning", value: "4+" },
];

const skillCategories = [
    {
        category: "Programming Languages",
        items: ["C", "C++", "JavaScript", "Python", "PHP"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        category: "Backend & Database",
        items: ["Node.js", "Express.js", "MongoDB", "SQL"],
    },
    {
        category: "AI / Machine Learning",
        items: ["Machine Learning", "Deep Learning", "Computer Vision", "Artificial Intelligence"],
    },
    {
        category: "Networking",
        items: ["Network Design", "Computer Networking"],
    },
    {
        category: "Tools",
        items: ["Git Version Controlling"],
    },
];

const projects = [
    {
        title: "Email Phishing Detector",
        description: "A machine learning-based system for detecting and classifying phishing emails using email content and relevant textual features. It is also a Cyber Security based project. The project focuses on identifying suspicious patterns and distinguishing phishing emails from legitimate messages.",
        tags: ["Python", "HTML", "Dockerfile"],
        link: "https://github.com/TahsinIslamNafisa/email-phishing-detector-main",
    },
    {
        title: "IIUC Campus Networking System",
        description: "A Cisco Packet Tracer-based simulation of the International Islamic University Chittagong (IIUC) campus network. The project implements separate Male and Female Campus networks with hierarchical Core, Distribution, and Access layers for organized traffic management and network scalability.",
        tags: ["Cisco Packet Tracer"],
        link: "https://github.com/TahsinIslamNafisa/IIUC-Campus-Network-System-main",
    },
    {
        title: "User Management System",
        description: "A backend-focused user management application built with Node.js and Express.js, designed to handle user-related operations through structured server-side routes and APIs. The project demonstrates RESTful API development and backend application management.",
        tags: ["JavaScript"],
        link: "https://github.com/TahsinIslamNafisa/user-management-system",
    },
];

const navItems = [
    { id: "home", label: "Home", icon: <FiHome /> },
    { id: "about", label: "About", icon: <FiUser /> },
    { id: "skills", label: "Skills", icon: <FiCode /> },
    { id: "certifications", label: "Certifications", icon: <FiAward /> },
    { id: "portfolio", label: "Portfolio", icon: <FiBriefcase /> },
    { id: "contact", label: "Contact", icon: <FiMail /> },
];
// ===== END OF EDITABLE DATA =====

function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const goToPage = (id) => {
        setCurrentPage(id);
        setSidebarOpen(false);
    };

    return (
        <div className="layout">
            <header className="topbar">
                <div className="topbar-profile">
                    <div className="avatar-ring">
                        <img
                            src={`${import.meta.env.BASE_URL}profile.jpeg`}
                            alt={profile.name}
                            className="avatar-img"
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                    </div>
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.title}</p>
                    </div>
                </div>

                <nav className={`topbar-nav ${sidebarOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={currentPage === item.id ? "active" : ""}
                            onClick={() => goToPage(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="topbar-social">
                    <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                    <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
                </div>

                <button className="menu-btn mobile-only" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            </header>

            <main className="content">
                {currentPage === "home" && (
                    <section className="page home-page">
                        <span className="badge">Available for opportunities</span>
                        <h1>Hi, I'm <span className="gradient-text">{profile.name}</span></h1>
                        <p className="subtitle">{profile.title}</p>
                        <p className="tagline">{profile.tagline}</p>
                        <button className="btn" onClick={() => goToPage("portfolio")}>
                            View My Work <FiArrowRight />
                        </button>

                        <div className="stats-row">
                            {stats.map((stat) => (
                                <div className="stat-card" key={stat.label}>
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentPage === "about" && (
                    <section className="page">
                        <span className="eyebrow">About</span>
                        <h1>Get to know me</h1>
                        <div className="about-row">
                            
                            <p className="about-text">{aboutText}</p>
                        </div>

                        <h2 className="section-subheading">Education</h2>
                        <div className="education-list">
                            {education.map((item) => (
                                <div className="education-item" key={item.level}>
                                    <span className="education-level">{item.level}</span>
                                    <span className="education-institution">{item.institution}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentPage === "skills" && (
                    <section className="page">
                        <span className="eyebrow">Skills</span>
                        <h1>What I work with</h1>
                        {skillCategories.map((cat) => (
                            <div className="skill-category" key={cat.category}>
                                <h2 className="skill-category-title">{cat.category}</h2>
                                <div className="skill-tags">
                                    {cat.items.map((skill) => (
                                        <span className="skill-tag" key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {currentPage === "certifications" && (
                    <section className="page">
                        <span className="eyebrow">Certifications</span>
                        <h1>Courses, Workshops & Volunteering</h1>

                        <h2 className="section-subheading">Courses & Training</h2>
                        <div className="cert-list">
                            {certifications.courses.map((item, index) => (
                                <div className="cert-item" key={`course-${index}`}>
                                    <div className="cert-info">
                                        <span className="cert-name">{item.name}</span>
                                        <span className="cert-issuer">{item.issuer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="section-subheading">Workshops</h2>
                        <div className="cert-list">
                            {certifications.seminars.map((item, index) => (
                                <div className="cert-item" key={`seminar-${index}`}>
                                    <div className="cert-info">
                                        <span className="cert-name">{item.name}</span>
                                        <span className="cert-issuer">{item.issuer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="section-subheading">Volunteering & Achievements</h2>
                        <div className="cert-list">
                            {certifications.volunteering.map((item, index) => (
                                <div className="cert-item" key={`volunteer-${index}`}>
                                    <div className="cert-info">
                                        <span className="cert-name">{item.name}</span>
                                        <span className="cert-issuer">{item.issuer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentPage === "portfolio" && (
                    <section className="page">
                        <span className="eyebrow">Portfolio</span>
                        <h1>Recent work</h1>
                        <div className="projects-grid">
                            {projects.map((project) => (
                                <div className="project-card" key={project.title}>
                                    <div className="project-icon"><FiCode /></div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tags">
                                        {project.tags.map((tag) => (
                                            <span className="tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="project-link">
                                        View Project <FiExternalLink />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentPage === "contact" && (
                    <section className="page">
                        <span className="eyebrow">Contact</span>
                        <h1>Let's talk</h1>
                        <p className="about-text">Feel free to reach out for collaborations or just a friendly hello.</p>
                        <div className="contact-links">
                            <a href={`mailto:${profile.email}`} className="contact-btn">
                                <FiMail /> Email
                            </a>
                            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-btn">
                                <FiGithub /> GitHub
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-btn">
                                <FiLinkedin /> LinkedIn
                            </a>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
