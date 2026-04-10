import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Shield,
  Database,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Languages,
  FileText,
  Gamepad2
} from "lucide-react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-white mb-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 font-mono text-sm uppercase tracking-widest"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-emerald-500 mt-4"
    />
  </div>
);

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
    {name}
  </span>
);

export default function App() {
  const skills = {
    languages: ["Java", "Python", "HTML5", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "SQL", "Bash"],
    tools: ["Tableau", "Excel", "MySQL", "Docker", "Kubernetes", "Git", "GitHub"],
    platforms: ["Linux", "Jupyter Notebook", "VS Code", "IntelliJ IDEA"],
    specialized: ["Cybersecurity", "Data Science", "Machine Learning"],
    soft: ["Leadership", "Event Management", "Public Speaking", "Time Management"]
  };

  const experiences = [
    {
      title: "ServiceNow Virtual Intern",
      company: "ServiceNow / AICTE / SmartBridge",
      period: "Feb 2026 – Present",
      location: "Remote",
      points: [
        "Learned the fundamentals of the ServiceNow platform including ITSM, workflow automation, and enterprise service operations.",
        "Worked with ServiceNow tools for building workflows, managing incidents, and automating business processes.",
        "Gained hands-on experience with enterprise service management platforms used by global organizations."
      ]
    },
    {
      title: "AI/ML Intern",
      company: "Google for Developers / EduSkills / AICTE",
      period: "Jul 2024 – Sep 2024",
      location: "Remote",
      points: [
        "Completed a 10-week virtual internship focused on Artificial Intelligence and Machine Learning concepts.",
        "Learned machine learning algorithms, data preprocessing techniques, and AI development workflows.",
        "Successfully completed the internship program supported by Google for Developers under the India Edu Program."
      ]
    }
  ];

  const projects = [
    {
      title: "3D Puzzle Game",
      subtitle: "3D Escape Game Inspired by Portal",
      description: "A 3D puzzle game inspired by 'Portal', where players must escape rooms by solving physics-based puzzles and performing parkour before the timer expires.",
      tech: ["Unity", "C#", "Blender"],
      icon: <Gamepad2 className="w-5 h-5 text-purple-400" />,
      link: "https://github.com/2303A51751/3d-escape-game"
    },
    {
      title: "AI Voice Bridge",
      subtitle: "Real-Time Multilingual Customer Support Platform",
      description: "Built a web platform enabling real-time voice communication between users speaking different languages using AI translation. Implemented WebRTC audio streaming with speech-to-text, translation, and text-to-speech pipelines.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      link: "https://github.com/chunchucharith"
    },
    {
      title: "Lumina Luxe Rides",
      subtitle: "Car Rental Web Application",
      description: "Developed a car rental website to simplify vehicle booking and browsing. Implemented responsive UI with HTML, CSS, and JavaScript including navigation bars, vehicle listings, and booking interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      link: "https://2303a51751.github.io/Lumina-luxe-rides/"
    }
  ];

  const certifications = [
    { name: "Ethical Hacking Virtual Internship", date: "Mar 2026", issuer: "Eduskills", link: "https://www.linkedin.com/posts/charith-chunchu-17b4512bb_cybersecurity-ethicalhacking-internship-activity-7436259432507977732-IIUx?utm_source=share&utm_medium=member_android&rcm=ACoAAEzGPK8B7wIrKrqpecsKcoeYKT06vEbWodw" },
    { name: "Oracle Certified Foundations Associate", date: "Dec 2025", issuer: "Oracle", link: "https://www.linkedin.com/posts/charith-chunchu-17b4512bb_im-proud-to-share-that-i-have-earned-activity-7428711178320863232-7Gek?utm_source=share&utm_medium=member_android&rcm=ACoAAEzGPK8B7wIrKrqpecsKcoeYKT06vEbWodw" },
    { name: "AWS Academy Graduate – Cloud Foundations", date: "Oct 2025", issuer: "AWS", link: "https://www.linkedin.com/posts/charith-chunchu-17b4512bb_aws-cloudcomputing-awsacademy-activity-7438178482272190464-CfTJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzGPK8B7wIrKrqpecsKcoeYKT06vEbWodw" },
    { name: "CCNA: Introduction to Networks", date: "Nov 2024", issuer: "Cisco", link: "https://www.linkedin.com/posts/charith-chunchu-17b4512bb_cisco-ccna-networking-share-7438174091347398656-OVx4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzGPK8B7wIrKrqpecsKcoeYKT06vEbWodw" }
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">CC<span className="text-emerald-500">.</span></span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
                  Computer Science Student
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  Chunchu <span className="text-gradient">Charith</span>
                </h1>
                <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
                  B.Tech student at SR University specializing in Computer Science and Engineering.
                  Passionate about AI/ML, Cybersecurity, and building scalable full-stack applications.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="mailto:charithch2006@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                    <Mail className="w-4 h-4" />
                    Hire Me
                  </a>
                  <a href="/MY_resume.pdf" download="Charith_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 glass text-white font-bold rounded-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all">
                    <FileText className="w-4 h-4" />
                    Resume
                  </a>
                  <div className="flex items-center gap-2">
                    <a href="https://github.com/2303A51751" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/charith-chunchu-17b4512bb" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass p-2 relative z-10">
                <img
                  src="/MY_Pro_Photo.png"
                  alt="Chunchu Charith"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-24 mb-32">
          <section>
            <SectionHeader title="Education" subtitle="Academic Journey" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-16 h-16 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">SR University</h3>
              <p className="text-emerald-400 font-medium mb-4">B.Tech in Computer Science & Engineering</p>
              <div className="flex justify-between text-sm text-zinc-500 mb-4">
                <span>Warangal, India</span>
                <span>2023 – 2027</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800 text-zinc-400">CGPA: 9.1</span>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Operating Systems", "Data Structures", "Algorithms", "AI", "ML", "Networks", "Cybersecurity", "Databases"].map(course => (
                  <span key={course} className="text-[10px] px-2 py-0.5 bg-zinc-900/50 rounded text-zinc-500 border border-zinc-800/50">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="experience">
            <SectionHeader title="Experience" subtitle="Professional Growth" />
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l border-zinc-800"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="mb-1 flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-emerald-400 text-sm font-medium mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-sm text-zinc-400 flex gap-2">
                        <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <SectionHeader title="Featured Projects" subtitle="Building Solutions" />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl group hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-zinc-500 font-medium">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-900 text-zinc-500 rounded border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Skills & Expertise" subtitle="Technical Arsenal" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(s => (
                  <div key={s}>
                    <SkillBadge name={s} />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...skills.tools, ...skills.platforms].map(s => (
                  <div key={s}>
                    <SkillBadge name={s} />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Specialized</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.specialized.map(s => (
                  <div key={s}>
                    <SkillBadge name={s} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32">
          <SectionHeader title="Certifications" subtitle="Verified Skills" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl group hover:border-emerald-500/30 transition-all flex flex-col h-full"
              >
                <Award className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white mb-1 leading-tight">{cert.name}</h3>
                <p className="text-xs text-zinc-500 mb-4">{cert.issuer}</p>
                <span className="text-[10px] font-mono text-emerald-500/70 mb-6">{cert.date}</span>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-emerald-400 transition-colors">
                    View Credential <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="glass p-12 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-emerald-500/5 to-transparent pointer-events-none" />
            <SectionHeader title="Get In Touch" subtitle="Let's Connect" />
            <p className="text-zinc-400 max-w-lg mx-auto mb-12">
              Currently looking for new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <a href="mailto:charithch2006@gmail.com" className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">charithch2006@gmail.com</span>
              </a>
              <a href="tel:+916302559916" className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+91 6302559916</span>
              </a>
            </div>

            <div className="mt-16 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/charith-chunchu-17b4512bb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com/2303A51751" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://leetcode.com/u/Charith45/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                <Code2 className="w-4 h-4" /> LeetCode
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-xs text-zinc-600 font-mono">
          &copy; 2026 CHUNCHU CHARITH. BUILT WITH REACT & MOTION.
        </p>
      </footer>
    </div>
  );
}
