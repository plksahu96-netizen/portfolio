export const profile = {
  name: "Palak Sahu",
  title: "AI Engineer",
  tagline:
    "Building intelligent systems that solve real-world problems. Specializing in machine learning, deep learning, and NLP.",
  location: "Jabalpur, India",
  email: "plksahu@email.com",
  phone: "+91 7999520180",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const experience = [
  {
    period: "2024 — Present",
    role: "AI Engineer",
    company: "TechCorp AI",
    description:
      "Building production ML systems for computer vision and NLP. Architecting scalable data pipelines and deploying models using PyTorch, TensorFlow, and cloud infrastructure.",
    skills: ["Python", "PyTorch", "TensorFlow", "AWS", "Docker"],
  },
  {
    period: "2023 — 2024",
    role: "Machine Learning Engineer",
    company: "DataDriven Inc",
    description:
      "Developed recommendation systems and predictive models. Improved model accuracy by 35% through feature engineering and hyperparameter optimization.",
    skills: ["Python", "Scikit-learn", "Pandas", "SQL", "MLflow"],
  },
  {
    period: "2022 — 2023",
    role: "Data Scientist",
    company: "Analytics Startup",
    description:
      "Built end-to-end ML pipelines for customer churn prediction and sentiment analysis. Created dashboards and automated reporting systems.",
    skills: ["Python", "NLP", "Tableau", "PostgreSQL", "Git"],
  },
];

export const projects = [
  {
    title: "Neural Image Captioning",
    description:
      "Vision-language model that generates natural descriptions for images using attention mechanisms and transformer architecture.",
    tools: ["PyTorch", "Transformers", "CUDA", "Flask"],
    link: "#",
  },
  {
    title: "Conversational AI Assistant",
    description:
      "Fine-tuned LLM for domain-specific question answering with RAG implementation for knowledge retrieval.",
    tools: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    link: "#",
  },
  {
    title: "Real-time Object Detection",
    description:
      "Edge-optimized YOLO model for real-time detection on embedded devices with custom training pipeline.",
    tools: ["YOLO", "TensorRT", "OpenCV", "Python"],
    link: "#",
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "Multi-language sentiment classifier trained on social media data with BERT fine-tuning.",
    tools: ["Hugging Face", "BERT", "SpaCy", "Docker"],
    link: "#",
  },
  {
    title: "Time Series Forecasting",
    description:
      "LSTM and Transformer-based models for financial market prediction with backtesting framework.",
    tools: ["TensorFlow", "Keras", "Pandas", "NumPy"],
    link: "#",
  },
  {
    title: "MLOps Pipeline",
    description:
      "End-to-end ML infrastructure with automated training, versioning, deployment, and monitoring.",
    tools: ["MLflow", "Kubernetes", "Airflow", "Prometheus"],
    link: "#",
  },
];

export const skills = {
  "Machine Learning": [
    "Deep Learning",
    "Neural Networks",
    "Computer Vision",
    "NLP",
    "Reinforcement Learning",
    "Time Series",
  ],
  "Frameworks & Tools": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Hugging Face",
    "LangChain",
    "OpenCV",
  ],
  "Programming": ["Python", "SQL", "JavaScript", "Bash", "R", "C++"],
  "MLOps & Cloud": [
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "MLflow",
    "Weights & Biases",
  ],
};

export const articles = [
  {
    slug: "transformer-architecture-deep-dive",
    title: "Transformer Architecture: A Deep Dive",
    excerpt:
      "Understanding attention mechanisms and how transformers revolutionized NLP and beyond.",
    date: "2026-04-18",
    readTime: 8,
    categories: ["Deep Learning", "NLP"],
  },
  {
    slug: "fine-tuning-llms-efficiently",
    title: "Fine-tuning LLMs Efficiently",
    excerpt:
      "Practical techniques for adapting large language models to domain-specific tasks with limited compute.",
    date: "2026-04-10",
    readTime: 6,
    categories: ["LLM", "Tutorial"],
  },
  {
    slug: "building-production-ml-systems",
    title: "Building Production ML Systems",
    excerpt:
      "From Jupyter notebooks to scalable deployments — lessons learned shipping ML to production.",
    date: "2026-03-28",
    readTime: 10,
    categories: ["MLOps", "Engineering"],
  },
];
