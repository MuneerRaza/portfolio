export const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publication", label: "Publication" },
  { id: "education", label: "Education" },
  { id: "techstack", label: "Tech Stack" },
  { id: "achievements", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "REDLUMB",
    location: "Remote — Dubai, UAE",
    period: "May 2026 — Present",
    points: [
      "Building AI agentic integration workflows into mobile apps — embedding autonomous agents for in-app automation and intelligent user experiences",
      "Designing agent-tool orchestration and evaluation pipelines for production LLM features shipped to end users",
    ],
  },
  {
    role: "Associate ML Engineer",
    company: "Softec Worldwide (Vidizmo)",
    location: "Karachi, Pakistan",
    period: "May 2025 — Apr 2026",
    points: [
      "Designed and built multi-agent workflow systems using LangGraph with dynamic routing and parallel pipelines",
      "Deployed open-source LLMs (Qwen, Llama) locally using vLLM with Flash Attention for production inference",
      "Evaluated LLM translation pipelines using COMET and SacreBLEU metrics across 10+ language pairs",
      "Built MCP (Model Context Protocol) clients and servers enabling tool-use capabilities for AI agents",
      "Set up MLflow experiment tracking for multi-GPU distributed training and YOLO-based MLOps pipelines",
    ],
  },
  {
    role: "AI Research Intern",
    company: "AITeC, National Center of Physics",
    location: "Islamabad, Pakistan",
    period: "Jul — Aug 2024",
    points: [
      "Collected and annotated a semi-supervised drowsiness detection dataset; benchmarked multiple CNN architectures including ResNet, EfficientNet, and MobileNet",
      "Developed a custom YOLO+RNN pipeline for real-time drowsiness monitoring from video streams with temporal awareness",
    ],
  },
  {
    role: "Teaching Assistant & Lab Assistant",
    company: "FAST-NUCES",
    location: "Karachi, Pakistan",
    period: "Fall 2023, Spring 2025",
    points: [
      "TA for Deep Learning for Perception — graded assignments, conducted office hours, assisted 60+ students with PyTorch implementations",
      "Lab Assistant for Programming Fundamentals — guided freshmen through C language labs, debugging sessions, and exam preparation",
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Archiva AI",
    tag: "Document Reasoning Agent",
    description: "An AI agent that reasons across entire document corpora without embeddings or vector databases. Uses structured extraction and direct LLM reasoning for zero-noise retrieval.",
    tech: ["FastAPI", "Supabase", "Pydantic AI", "PostgreSQL"],
    link: "https://github.com/MuneerRaza/archiva-ai",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=Archiva+AI",
  },
  {
    title: "IntelliFlow AI",
    tag: "Multi-Agent Orchestration",
    description: "Multi-agent orchestration platform built with LangGraph. Features dynamic routing between specialized agents, parallel pipeline execution, and Qdrant+BGE hybrid retrieval.",
    tech: ["LangGraph", "FastAPI", "MongoDB", "Qdrant"],
    link: "https://github.com/MuneerRaza/intelliflow-ai",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=IntelliFlow+AI",
  },
  {
    title: "CognifootAI",
    tag: "Medical AI (FYP)",
    description: "Final Year Project. Automated diabetic foot ulcer detection system with 98% accuracy. Features LLM-powered explainability for clinical reports and human-in-the-loop feedback for model refinement.",
    tech: ["PyTorch", "Explainable AI", "HITL"],
    link: "https://github.com/MuneerRaza/CognifootAI",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=CognifootAI",
  },
  {
    title: "Accounting AI",
    tag: "Mobile App + AI",
    description: "Cross-platform mobile app that extracts invoice data using OCR and LLM-based named entity recognition. Generates interactive finance dashboards from scanned receipts.",
    tech: ["Flutter", "SQLite", "OCR", "LLM"],
    link: "https://github.com/MuneerRaza/accounting_ai",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=Accounting+AI",
  },
  {
    title: "Gray2Color AE",
    tag: "Image Colorization",
    description: "Transformer-based autoencoder that colorizes grayscale images. Achieves 25.03 dB PSNR and 0.94 SSIM on standard benchmarks, outperforming traditional CNN approaches.",
    tech: ["PyTorch", "Transformers"],
    link: "https://github.com/MuneerRaza/Gray2Color_AE",
    image: "https://placehold.co/800x500/1a1a1a/fe9004?text=Gray2Color+AE",
  },
];

export const OTHER_PROJECTS = [
  { title: "URL Detection", link: "https://github.com/MuneerRaza" },
  { title: "ESP32 Control", link: "https://github.com/MuneerRaza" },
  { title: "Stoxact", link: "https://github.com/MuneerRaza" },
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
      { name: "spaCy", icon: "SiSpacy" },
    ],
  },
  {
    category: "LLM Inference",
    items: [
      { name: "vLLM", icon: "SiVllm" },
      { name: "llama.cpp", icon: "SiLlamacpp" },
      { name: "Ollama", icon: "SiOllama" },
      { name: "ExLlamaV2", icon: "SiExllama" },
      { name: "Flash Attention", icon: "SiFlashattn" },
      { name: "TensorRT-LLM", icon: "SiTensorrt" },
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
    images: ["/images/aifest-winnner.jpeg"],
  },
  {
    title: "IBA ProBattle NLP",
    result: "Winner",
    images: ["/images/iba-probattle.jpeg", "/images/probattle-nlp-iba-completion-winner.jpg"],
  },
  {
    title: "IBA Datathon",
    result: "Runner-Up",
    images: ["/images/iba-runner-up.jpeg", "/images/iba-winner.jpg"],
  },
  {
    title: "Developer's Day DS",
    result: "Runner-Up",
    images: ["/images/devday-runner-up.jpeg"],
  },
  {
    title: "Softec AI Qualifier",
    result: "3rd Place",
    images: ["/images/softec-competition-ranking-.jpeg", "/images/softec-participation.jpeg"],
  },
  {
    title: "Batch Rank 3rd",
    result: "Cum Laude",
    images: ["/images/graduation3rd-postion.jpeg", "/images/3rd-position-fast.jpeg"],
  },
  {
    title: "Rector's List",
    result: "Fall 2024",
    images: ["/images/rectorlist-award.jpg", "/images/fall24_rector_list.jpeg"],
  },
  {
    title: "1st Position Fall 2024",
    result: "BS AI",
    images: ["/images/fall24-1st-posistion.jpeg"],
  },
];

export const CERTIFICATES = [
  { title: "Dean's List Fall 2021", images: ["/images/fall21-deans-list.jpeg"] },
  { title: "Dean's List Spring 2022", images: ["/images/spring22-deans-list.jpeg"] },
  { title: "Dean's List Spring 2024", images: ["/images/spring24-deans-list.jpeg"] },
  { title: "Rector's List Certificate", images: ["/images/fall24_rector_list.jpeg"] },
  { title: "IEEE Volunteer", images: ["/images/ieee-volunteer-cert.jpeg"] },
  { title: "Star Performer (TLC)", images: ["/images/star-performer-volunteer-at-tlc-event.jpeg"] },
  { title: "Coders Cup 2024", images: ["/images/coders-cup-24-participation.jpeg"] },
  { title: "ProCom App Dev Head", images: ["/images/appdev-headprocom.jpeg", "/images/appdev.jpeg"] },
  { title: "Grand Debate 2022", images: ["/images/the-grand-debate-participation.jpeg"] },
  { title: "Softec AI Cert", images: ["/images/softec-participation.jpeg"] },
  { title: "Math Olympiad", images: ["/images/math-olampyad-participation.jpeg"] },
  { title: "Speed Programming", images: ["/images/devday-speed-programming-participation.jpeg"] },
];

// Profile photo
export const PROFILE_IMAGE = "/images/professional-profile-pciutre.jpeg";

// Extra images not yet mapped
// AKU symposium: aku-symposiym-2.jpeg, aku-symposum-1.jpeg
// AITECH internship: aitech-internship.jpeg
// FYP: fyp.jpeg
