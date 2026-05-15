"use client";

import { useEffect, useRef, useState } from "react";
// ─── Star Field ────────────────────────────────────────────────
function StarField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3, alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.003 + 0.001, phase: Math.random() * Math.PI * 2,
    }));
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const a = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill();
      });
      t++; animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

// ─── Fade-in Section ───────────────────────────────────────────
function Section({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

// ─── Animated Counter ──────────────────────────────────────────
function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      let start = 0; const end = parseInt(value); const step = Math.ceil(end / (1400 / 16));
      const t = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(t); } else setCount(start); }, 16);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Tag Pill ──────────────────────────────────────────────────
function Tag({ children, accent = false }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 999,
      fontSize: 13, fontWeight: 500, letterSpacing: "0.01em",
      border: accent ? "1px solid rgba(167,139,250,0.6)" : "1px solid rgba(255,255,255,0.12)",
      background: accent ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.05)",
      color: accent ? "#c4b5fd" : "rgba(255,255,255,0.75)",
    }}>{children}</span>
  );
}

// ─── Interest Card ─────────────────────────────────────────────
function InterestCard({ icon, title, desc, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Section delay={delay}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
        padding: "28px 24px", borderRadius: 16, cursor: "default", position: "relative", overflow: "hidden",
        border: hovered ? "1px solid rgba(167,139,250,0.5)" : "1px solid rgba(255,255,255,0.08)",
        background: hovered ? "rgba(139,92,246,0.1)" : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)", transition: "all 0.3s ease",
      }}>
        {hovered && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />}
        <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: hovered ? "#c4b5fd" : "rgba(255,255,255,0.9)", marginBottom: 8, transition: "color 0.3s" }}>{title}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{desc}</div>
      </div>
    </Section>
  );
}

// ─── Tech Icon Card ────────────────────────────────────────────
function TechIcon({ slug, name, color = "#a78bfa" }) {
  const [hovered, setHovered] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} title={name} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      padding: "18px 12px", borderRadius: 14, cursor: "default",
      border: hovered ? `1px solid ${color}66` : "1px solid rgba(255,255,255,0.07)",
      background: hovered ? `${color}18` : "rgba(255,255,255,0.03)",
      transition: "all 0.25s ease",
      transform: hovered ? "translateY(-4px)" : "none",
      boxShadow: hovered ? `0 8px 24px ${color}28` : "none",
    }}>
      {!err
        ? <img src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`} alt={name} width={34} height={34}
            style={{ filter: hovered ? "none" : "grayscale(20%) opacity(0.75)", transition: "filter 0.25s" }}
            onError={() => setErr(true)} />
        : <div style={{ width: 34, height: 34, borderRadius: 8, background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color }}>{name[0]}</div>
      }
      <span style={{ fontSize: 11, fontWeight: 500, color: hovered ? "#e0d7ff" : "rgba(255,255,255,0.4)", textAlign: "center", letterSpacing: "0.02em", transition: "color 0.25s" }}>{name}</span>
    </div>
  );
}

// ─── Section Heading ───────────────────────────────────────────
function SectionHeading({ label, title, accent }) {
  return (
    <Section delay={0}>
      <div style={{ marginBottom: 40, textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: 10 }}>{label}</p>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>
          {title}{" "}<span style={{ color: "#a78bfa" }}>{accent}</span>
        </h2>
      </div>
    </Section>
  );
}

// ─── Divider ───────────────────────────────────────────────────
function Divider() {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent)", margin: "80px 0" }} />;
}

// =================== PAGE ===================
export default function AboutPage() {
  const navLinks = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "About", href: "/about", icon: "👤" },
    { label: "Projects", href: "/projects", icon: "🖥" },
    { label: "Resume", href: "/resume", icon: "📄" },
  ];

  const interests = [
    { icon: "⚙️", title: "Backend Engineering", desc: "Building robust, scalable server architectures with Django, FastAPI, and microservices patterns." },
    { icon: "🧠", title: "Artificial Intelligence", desc: "ML, Deep Learning, and Explainable AI — turning models into production-grade intelligent systems." },
    { icon: "🌐", title: "Distributed Systems", desc: "Designing fault-tolerant microservices, event-driven pipelines, and cloud-native infrastructures." },
    { icon: "🏥", title: "Healthcare AI", desc: "Multimodal ML for medical decision-support — where AI precision meets real human impact." },
  ];

  const stats = [
    { value: "3", suffix: "+", label: "Years Building" },
    { value: "10", suffix: "+", label: "Projects Shipped" },
    { value: "5", suffix: "+", label: "AI Models Integrated" },
  ];

  const goals = [
    "Architect large-scale AI-powered platforms",
    "Bridge software engineering and clinical AI",
    "Contribute to open-source distributed systems",
    "Lead intelligent healthcare decision tools",
  ];

  const techCategories = [
    {
      title: "Backend Engineering", color: "#4ade80",
      techs: [
        { slug: "java", name: "Java" },
        { slug: "springboot", name: "Spring Boot" },
        { slug: "nodedotjs", name: "Node.js" },
        { slug: "django", name: "Django" },
      ],
    },
    {
      title: "Frontend Development", color: "#60a5fa",
      techs: [
        { slug: "react", name: "React.js" },
        { slug: "nextdotjs", name: "Next.js" },
        { slug: "angular", name: "Angular" },
        { slug: "javascript", name: "JavaScript" },
        { slug: "typescript", name: "TypeScript" },
      ],
    },
    {
      title: "AI & Machine Learning", color: "#f472b6",
      techs: [
        { slug: "python", name: "Python" },
        { slug: "pytorch", name: "PyTorch" },
        { slug: "scikitlearn", name: "Scikit-learn" },
      ],
    },
    {
      title: "Databases", color: "#fb923c",
      techs: [
        { slug: "mongodb", name: "MongoDB" },
        { slug: "mysql", name: "MySQL" },
        { slug: "postgresql", name: "PostgreSQL" },
        { slug: "redis", name: "Redis" },
      ],
    },
    {
      title: "Distributed Systems", color: "#a78bfa",
      techs: [
        { slug: "apachekafka", name: "Kafka" },
        { slug: "apachespark", name: "Apache Spark" },
        { slug: "apachehadoop", name: "Hadoop" },
      ],
    },
    {
      title: "Version Control", color: "#f87171",
      techs: [
        { slug: "git", name: "Git" },
      ],
    },
  ];

  const tools = [
    { slug: "visualstudiocode", name: "VS Code" },
    { slug: "docker", name: "Docker" },
    { slug: "postman", name: "Postman" },
    { slug: "apachemaven", name: "Maven" },
    { slug: "intellijidea", name: "IntelliJ IDEA" },
    { slug: "github", name: "GitHub" },
    { slug: "trello", name: "Trello" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "rgba(178, 121, 216, 0.959);",
      color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif",
      position: "relative", overflowX: "hidden",
    }}>
      <StarField />
      <div style={{ position: "fixed", top: "10%", left: "-10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(178, 121, 216, 0.959);", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "15%", right: "-5%", width: 350, height: 350, borderRadius: "50%", background: "rgba(178, 121, 216, 0.959);", pointerEvents: "none", zIndex: 0 }} />


      {/* MAIN */}
      <main style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "130px 40px 100px" }}>

        {/* HERO */}
        <Section delay={0}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: 20 }}>ABOUT ME</p>
          <h1 style={{ fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>Know Who I Am</h1>
<p
  style={{
    fontSize: 17,
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.65)",
    maxWidth: 700,
    marginBottom: 32,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>            Hi, I am <span style={{ color: "#c4b5fd", fontWeight: 600 }}>Sid El Mrabet Malek Aya</span> — a Computer Science Engineer based in{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Sidi Bel Abbès, Algeria</span>.
            I specialize in Full-Stack Development and Artificial Intelligence, with a focus on scalable web platforms and real-world machine learning integration.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap",justifyContent: "center", alignItems: "center",  gap: 10 }}>
            <Tag accent>Full-Stack Developer</Tag>
            <Tag accent>AI Engineer</Tag>
            <Tag accent>Data Engineer </Tag>
            <Tag>ESI SBA Graduate</Tag>
            <Tag>Information Systems</Tag>
            <Tag>Web & AI Specialization</Tag>
          </div>
        </Section>

        {/* STATS */}
        <Section delay={150}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", margin: "64px 0", border: "1px solid rgba(178, 121, 216, 0.959);", borderRadius: 16, overflow: "hidden", background: "rgba(178, 121, 216, 0.959);" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid rgba(178, 121, 216, 0.959);" : "none" }}>
                <div style={{ fontSize: 42, fontWeight: 800, color: "#a78bfa", lineHeight: 1, marginBottom: 8 }}><Counter value={s.value} suffix={s.suffix} /></div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* BACKGROUND + MINDSET */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 64 }}>
          <Section delay={0}>
            <div style={{ padding: "36px 32px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(178, 121, 216, 0.959);", backdropFilter: "blur(12px)", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(178, 121, 216, 0.959);", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#c4b5fd", margin: 0 }}>Background</h2>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {["Computer Science Engineer — ESI SBA", "Specialization in Information Systems, Web & AI", "Medical AI: multimodal ML + Explainable AI platform", "Distributed microservices & academic collaboration tools"].map((text, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    <span style={{ fontSize: 10, marginTop: 5, color: "#7c3aed", flexShrink: 0 }}>◆</span>{text}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
          <Section delay={100}>
            <div style={{ padding: "36px 32px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(139,92,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚡</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#c4b5fd", margin: 0 }}>Engineering Mindset</h2>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 20 }}>
                I approach every system as a composition of clear contracts, isolated responsibilities, and measurable outcomes. I think in layers — from data pipelines to UI — and obsess over where complexity should live.
              </p>
              <div style={{ padding: "16px 20px", borderRadius: 12, borderLeft: "3px solid #7c3aed", background: "rgba(139,92,246,0.08)", fontSize: 13, color: "rgba(255,255,255,0.55)", fontStyle: "italic", lineHeight: 1.65 }}>
                "Building intelligent systems that connect software engineering with real-world AI applications."
              </div>
            </div>
          </Section>
        </div>

        {/* INTERESTS */}
        <SectionHeading label="WHAT DRIVES ME" title="Core" accent="Interests" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {interests.map((item, i) => <InterestCard key={i} {...item} delay={i * 80} />)}
        </div>

     

        <Divider />

        {/* ─── TECH STACK ─── */}
        <SectionHeading label="WHAT I BUILD WITH" title="Professional" accent="Skillset" />
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {techCategories.map((cat, ci) => (
            <Section key={ci} delay={ci * 60}>
              {/* Category label with colored accent line */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ height: 2, width: 24, borderRadius: 2, background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: cat.color, letterSpacing: "0.12em", textTransform: "uppercase" }}>{cat.title}</span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              </div>
              {/* Icon grid */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {cat.techs.map((tech, ti) => (
                  <div key={ti} style={{ flex: "0 0 calc(16.66% - 10px)", minWidth: 90 }}>
                    <TechIcon slug={tech.slug} name={tech.name} color={cat.color} />
                  </div>
                ))}
              </div>
            </Section>
          ))}
        </div>

        <Divider />

        {/* ─── TOOLS ─── */}
        <SectionHeading label="MY WORKSPACE" title="Tools" accent="I Use" />
        <Section delay={0}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {tools.map((tool, i) => (
              <div key={i} style={{ flex: "0 0 calc(14.28% - 12px)", minWidth: 100 }}>
                <TechIcon slug={tool.slug} name={tool.name} color="#a78bfa" />
              </div>
            ))}
          </div>
        </Section>

        <Divider />

      </main>
    </div>
  );
}