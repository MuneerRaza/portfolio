export const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publication", label: "Publication" },
  { id: "techstack", label: "Tech Stack" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    role: "Associate ML Engineer",
    company: "Softec Worldwide (Vidizmo)",
    location: "Karachi, Pakistan",
    period: "May 2025 — Present",
    points: [
      "Multi-agent workflow designer using LangGraph",
      "Deployed open-source LLMs with vLLM and Flash Attention",
      "LLM translation pipeline evaluation with COMET/SacreBLEU",
      "Built MCP clients and servers for tool use",
      "MLflow experiment tracking with multi-GPU training and YOLO MLOps",
    ],
  },
  {
    role: "AI Research Intern",
    company: "AITeC, National Center of Physics",
    location: "Islamabad, Pakistan",
    period: "Jul — Aug 2024",
    points: [
      "Built semi-supervised drowsiness dataset and benchmarked CNN architectures",
      "Developed custom YOLO+RNN pipeline for real-time video monitoring",
    ],
  },
  {
    role: "Teaching Assistant & Lab Assistant",
    company: "FAST-NUCES",
    location: "Karachi, Pakistan",
    period: "Fall 2023, Spring 2025",
    points: [
      "Teaching Assistant for Deep Learning for Perception",
      "Lab Assistant for Programming Fundamentals",
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Archiva AI",
    tag: "Document Reasoning Agent",
    description: "AI agent reasoning across document corpora. Zero retrieval noise, no embeddings.",
    tech: ["FastAPI", "Supabase", "Pydantic AI", "PostgreSQL"],
    link: "https://github.com/MuneerRaza/archiva-ai",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=Archiva+AI",
  },
  {
    title: "IntelliFlow AI",
    tag: "Multi-Agent Orchestration",
    description: "LangGraph orchestration with dynamic routing, parallel pipelines, Qdrant+BGE retrieval.",
    tech: ["LangGraph", "FastAPI", "MongoDB", "Qdrant"],
    link: "https://github.com/MuneerRaza/intelliflow-ai",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=IntelliFlow+AI",
  },
  {
    title: "CognifootAI",
    tag: "Medical AI (FYP)",
    description: "Diabetic foot detection with LLM explainability, HITL feedback. 98% accuracy.",
    tech: ["PyTorch", "Explainable AI", "HITL"],
    link: "https://github.com/MuneerRaza/CognifootAI",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=CognifootAI",
  },
  {
    title: "Accounting AI",
    tag: "Invoice Manager",
    description: "OCR + LLM NER extraction with interactive finance dashboards.",
    tech: ["Flutter", "SQLite", "OCR", "LLM"],
    link: "https://github.com/MuneerRaza/accounting_ai",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=Accounting+AI",
  },
  {
    title: "Gray2Color AE",
    tag: "Image Colorization",
    description: "Transformer Autoencoder achieving 25.03 dB PSNR, 0.94 SSIM.",
    tech: ["PyTorch", "Transformers"],
    link: "https://github.com/MuneerRaza/Gray2Color_AE",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=Gray2Color+AE",
  },
  {
    title: "RADAR-Net",
    tag: "Publication",
    description: "Diffusion-transformer for raindrop removal. IACMC 2025. PSNR 25.44, SSIM 0.8532.",
    tech: ["PyTorch", "Diffusion", "Attention"],
    link: "https://www.researchgate.net/publication/394032739",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=RADAR-Net",
  },
];

export const OTHER_PROJECTS = [
  { title: "URL Detection", link: "https://github.com/MuneerRaza" },
  { title: "ESP32 Control", link: "https://github.com/MuneerRaza" },
  { title: "Stoxact", link: "https://github.com/MuneerRaza" },
  { title: "Interview Curriculum", link: "https://github.com/MuneerRaza" },
  { title: "Skill Chat", link: "https://github.com/MuneerRaza" },
  { title: "Topic Modeling", link: "https://github.com/MuneerRaza" },
];

export const TECH_STACK = [
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "OpenCV", icon: "SiOpencv" },
      { name: "HuggingFace", icon: "SiHuggingface" },
      { name: "scikit-learn", icon: "SiScikitlearn" },
      { name: "NumPy", icon: "SiNumpy" },
      { name: "Pandas", icon: "SiPandas" },
    ],
  },
  {
    category: "LLM & Agents",
    items: [
      { name: "LangChain", icon: "SiLangchain" },
      { name: "LangGraph", icon: "SiLangchain" },
      { name: "LlamaIndex", icon: "SiLlama" },
      { name: "Ollama", icon: "SiOllama" },
      { name: "spaCy", icon: "SiSpacy" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "SiJavaCustom" },
      { name: "Dart", icon: "SiDart" },
      { name: "C#", icon: "SiCsharpCustom" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Flask", icon: "SiFlask" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Streamlit", icon: "SiStreamlit" },
      { name: "Pydantic", icon: "SiPydantic" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Docker", icon: "SiDocker" },
      { name: "MLflow", icon: "SiMlflow" },
      { name: "Git", icon: "SiGit" },
      { name: "Linux", icon: "SiLinux" },
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "AI FEST 4.0 ML/DS",
    result: "Winner",
    image: "https://placehold.co/400x533/121212/fe9004?text=AI+FEST+Winner",
  },
  {
    title: "IBA ProBattle NLP",
    result: "Winner",
    image: "https://placehold.co/400x533/121212/fe9004?text=IBA+ProBattle+Winner",
  },
  {
    title: "IBA Datathon",
    result: "Runner-Up",
    image: "https://placehold.co/400x533/121212/fe9004?text=IBA+Datathon",
  },
  {
    title: "Developer's Day DS",
    result: "Runner-Up",
    image: "https://placehold.co/400x533/121212/fe9004?text=DevDay+Runner+Up",
  },
  {
    title: "Softec AI Qualifier",
    result: "3rd Place",
    image: "https://placehold.co/400x533/121212/fe9004?text=Softec+3rd",
  },
  {
    title: "Batch Rank 3rd / 60",
    result: "Cum Laude",
    image: "https://placehold.co/400x533/121212/fe9004?text=Batch+Rank+3rd",
  },
  {
    title: "Rector's List",
    result: "Fall 2024",
    image: "https://placehold.co/400x533/121212/fe9004?text=Rectors+List",
  },
  {
    title: "1st Position Fall 2024",
    result: "BS AI",
    image: "https://placehold.co/400x533/121212/fe9004?text=1st+Position",
  },
];

export const CERTIFICATES = [
  { title: "Dean's List Fall 2021", image: "https://placehold.co/400x300/121212/ffffff?text=Deans+List+F21" },
  { title: "Dean's List Spring 2022", image: "https://placehold.co/400x300/121212/ffffff?text=Deans+List+S22" },
  { title: "Dean's List Spring 2024", image: "https://placehold.co/400x300/121212/ffffff?text=Deans+List+S24" },
  { title: "Rector's List Certificate", image: "https://placehold.co/400x300/121212/ffffff?text=Rectors+List+Cert" },
  { title: "IEEE DS Bootcamp", image: "https://placehold.co/400x300/121212/ffffff?text=IEEE+Bootcamp" },
  { title: "Star Performer (TLC)", image: "https://placehold.co/400x300/121212/ffffff?text=Star+Performer" },
  { title: "Coders Cup 2021", image: "https://placehold.co/400x300/121212/ffffff?text=Coders+Cup" },
  { title: "ProCom App Dev Head", image: "https://placehold.co/400x300/121212/ffffff?text=ProCom+AppDev" },
  { title: "Grand Debate 2022", image: "https://placehold.co/400x300/121212/ffffff?text=Grand+Debate" },
  { title: "Softec AI Cert", image: "https://placehold.co/400x300/121212/ffffff?text=Softec+AI" },
  { title: "Math Olympiad", image: "https://placehold.co/400x300/121212/ffffff?text=Math+Olympiad" },
  { title: "Speed Programming", image: "https://placehold.co/400x300/121212/ffffff?text=Speed+Programming" },
];
