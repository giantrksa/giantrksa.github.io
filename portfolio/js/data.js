// ============================================================
// PORTFOLIO CONTENT — Single source of truth
// Dr. Gian Antariksa
// ------------------------------------------------------------
// EDIT CONTENT HERE. Everything on the page (stats, education,
// experience, publications, skills, projects, awards, contact)
// is generated from the objects below. No HTML editing needed.
// ============================================================

export const profile = {
  name: "Dr. Gian Antariksa",
  shortName: "Gian Antariksa",
  credential: "Ph.D.",
  tagline: "AI Expert & Data Scientist",
  role: "Data Scientist @ Philip Morris International · LLM Systems Architect · AI Research Scientist",
  location: "Jakarta · Busan · Austin · Global Collaborations",
  availability: "Available for Collaboration",
  resume: "resume/Resume_Gian.pdf",
  // Hero pills
  pills: [
    "LLM Fine-Tuning",
    "Advanced RAG Systems",
    "Model Context Protocol",
    "Agentic AI",
    "MLOps & Solution Architecture",
  ],
  description:
    "Ph.D. in Industrial Data Science with 9+ years of expertise architecting production-scale LLM " +
    "systems, advanced Retrieval-Augmented Generation (RAG) platforms, and fine-tuning methodologies " +
    "(LoRA, QLoRA, RLHF). Specializing in Model Context Protocol integration, multi-agent orchestration, " +
    "chain-of-thought reasoning, and enterprise LLM deployment with sophisticated prompt engineering " +
    "and model optimization techniques.",
  note:
    "Currently driving data-driven innovation as Data Scientist at <strong>Philip Morris " +
    "International (PMI)</strong>, developing ML solutions for consumer analytics, demand forecasting, " +
    "and commercial intelligence.",
  photo: "img/GIAN_VIEW_move.jpeg",
};

// Hero counters — keep numbers consistent everywhere via these.
export const stats = [
  { value: 20, label: "Publications", suffix: "+" },
  { value: 9, label: "Years Experience", suffix: "+" },
  { value: 200, label: "Citations", suffix: "+" },
];

export const about = {
  paragraphs: [
    "Over the past nine years, I have architected and deployed <strong>production-scale Large Language " +
      "Model systems, advanced Retrieval-Augmented Generation (RAG) platforms, and fine-tuned LLMs</strong> " +
      "using cutting-edge techniques including LoRA, QLoRA, and RLHF. My expertise spans <strong>end-to-end " +
      "LLM engineering</strong>—from data ingestion and vector database optimization to model fine-tuning, " +
      "agentic AI orchestration, and serverless deployment architectures on AWS and GCP.",
    "I hold a <strong>Ph.D. in Industrial Data Science and Engineering</strong> from Pusan National " +
      "University &amp; Pukyong National University (Joint Degree, QS &lt;500) with an outstanding CGPA of " +
      "<strong>4.15/4.50</strong>. My dissertation pioneered machine learning approaches for geological " +
      "interpretation, while my current work at <strong>Philip Morris International (PMI)</strong> focuses " +
      "on consumer analytics, demand forecasting, and AI-powered commercial intelligence at scale.",
    "Professionally, I have <strong>nine+ years of diverse experience</strong> designing AI solution " +
      "architectures that reduce operational costs by up to 60% through intelligent LLM routing, automated " +
      "reasoning systems, and explainable AI frameworks. My work spans <strong>banking, mining, " +
      "transportation, semiconductor, manufacturing, pharmaceuticals, FMCG, media, and oil &amp; gas</strong>" +
      "—delivering measurable business value through sophisticated AI engineering and MLOps practices.",
    "My research contributions include <strong>20+ peer-reviewed publications</strong> in IEEE Transactions, " +
      "Journal of Applied Geophysics, and Transportation Research, with <strong>200+ research citations</strong>, " +
      "focusing on advanced deep learning, explainable AI, and novel LLM applications. I've won multiple AI " +
      "hackathons and received prestigious scholarships including the NRF BK-21 South Korea Scholarship, " +
      "demonstrating both theoretical rigor and practical implementation excellence.",
  ],
  highlights: [
    {
      icon: "🎯",
      title: "Expertise Areas",
      items: [
        "Advanced RAG Systems & Vector Database Optimization",
        "LLM Fine-Tuning (LoRA, QLoRA, RLHF, Instruction Tuning)",
        "Model Context Protocol & Agentic AI Frameworks",
        "Chain-of-Thought Reasoning & Prompt Engineering",
        "Serverless LLM Deployment & MLOps at Scale",
        "Explainable AI & Model Interpretability",
      ],
    },
    {
      icon: "🏆",
      title: "Key Achievements",
      items: [
        "1st Place - Busan Shipbuilding Hackathon 2021",
        "3rd Place - Daewoong Big Data Hackathon 2021",
        "20+ Peer-Reviewed Publications",
        "200+ Research Citations",
        "Government Scholarship Awardee (2018-2023)",
      ],
    },
  ],
};

export const education = [
  {
    badge: "Ph.D.",
    badgeClass: "phd",
    period: "2020 – 2023",
    degree: "Ph.D. Industrial Data Science and Engineering",
    school: "Pusan National University & Pukyong National University (Joint Degree)",
    gpa: "CGPA: 4.15/4.50 | QS Ranking <500",
    details: [
      { label: "Dissertation", text: "Geological Interpretation and Prediction for Hydrocarbon Exploration using Machine Learning-Based Approaches" },
      { label: "Advisor", text: "Prof. Jihwan Lee" },
    ],
    courses: ["Deep Learning & Machine Learning", "Reinforcement Learning", "Industrial Data Analytics"],
  },
  {
    badge: "M.Eng.",
    badgeClass: "masters",
    period: "2018 – 2020",
    degree: "M.Eng. Engineering Physics",
    school: "Pukyong National University, South Korea",
    gpa: "CGPA: 4.45/4.50",
    details: [
      { label: "Thesis", text: "Study on Ultraviolet-A of CaSiO3:Ce3+" },
      { label: "Advisor", text: "Prof. Jong Su Kim" },
    ],
    courses: ["Thin Film Technology", "Powder Technology", "Spectroscopy & Electroluminescence"],
  },
  {
    badge: "B.Sc.",
    badgeClass: "bachelors",
    period: "2012 – 2016",
    degree: "B.Sc. Physics",
    school: "Diponegoro University, Indonesia",
    gpa: "CGPA: 3.33/4.00",
    details: [
      { label: "Thesis", text: "Porosity and Water Saturation Analysis in the Integration of Petrophysics and Multi-attribute Seismic for Reservoir Characterization" },
      { label: "Advisor", text: "Prof. Tony Yulianto" },
    ],
    courses: ["Quantum Physics", "Artificial Intelligence", "Statistical Physics"],
  },
];

// Experience. `projects` is optional; when present, an expandable
// "View details" section is rendered. Use plain text; the renderer escapes it.
export const experience = [
  {
    current: true,
    icon: "🏢",
    title: "Data Scientist",
    org: "Philip Morris International (PMI), Indonesia",
    period: "Mar 2026 – Present",
    badge: "Current Position",
    summary:
      "Drive data-driven innovation within PMI's commercial and operational divisions. Develop and deploy " +
      "machine learning solutions to optimize business processes, consumer analytics, and supply chain " +
      "intelligence. Leverage advanced AI and cloud technologies to generate actionable insights at scale.",
    highlights: [
      "📊 Consumer Analytics & Segmentation",
      "📈 Demand Forecasting",
      "☁️ AWS Cloud Intelligence",
      "🤖 NLP & Market Intelligence",
    ],
    toggleLabel: "Key Projects",
    projects: [
      {
        title: "Consumer Behaviour Analytics & Segmentation Platform",
        body: [
          { label: "Architecture", text: "End-to-end consumer segmentation framework leveraging unsupervised learning (K-Means, DBSCAN, Gaussian Mixture Models) combined with RFM analytics and AutoML pipelines. Integrate real-time behavioral data streams to enable dynamic segment updating." },
        ],
        impact: "Enable precise targeting and personalization strategies, improving campaign ROI and consumer retention",
      },
      {
        title: "Demand Forecasting & Supply Chain Optimization",
        body: [
          { label: "Architecture", text: "Multi-horizon demand forecasting system using ensemble deep learning models (LSTM, Temporal Fusion Transformers, Prophet) with automatic hyperparameter tuning. Developed inventory optimization algorithms to minimize stockouts and reduce holding costs." },
        ],
        impact: "Improve forecast accuracy and supply chain efficiency, reducing operational costs",
      },
      {
        title: "Commercial Performance Intelligence Dashboard",
        body: [
          { label: "Architecture", text: "Serverless ETL pipelines on AWS (Lambda, Glue, Athena, S3) for consolidating multi-source commercial data. Interactive Plotly/Dash dashboards for real-time sales and distribution monitoring." },
        ],
        impact: "Accelerate decision-making with near-real-time business intelligence for commercial leadership",
      },
      {
        title: "AI-Powered Market Intelligence & NLP Analytics",
        body: [
          { label: "Architecture", text: "NLP pipeline for sentiment analysis and topic modeling on consumer feedback and trade data using fine-tuned transformer models (BERT, RoBERTa) and BERTopic. Integrated LLM-based summarization for automated insight generation." },
        ],
        impact: "Reduce manual analysis effort and surface actionable market signals faster",
      },
    ],
  },
  {
    icon: "💼",
    title: "Senior Data Scientist",
    org: "PT. Mitra Solusi Telematika, Indonesia",
    period: "May 2024 – Feb 2026",
    summary:
      "Leading advanced LLM engineering initiatives, architecting production-scale RAG systems, and " +
      "developing sophisticated multi-agent AI frameworks with serverless deployment architectures on AWS. " +
      "Specializing in model optimization, intelligent routing systems, and cost-effective LLM operations at " +
      "enterprise scale.",
    highlights: [
      "🤖 Agentic AI & RAG Systems",
      "⚡ 60% LLM Cost Reduction",
      "☁️ AWS Serverless Architecture",
      "🎯 90%+ HR Automation",
    ],
    toggleLabel: "Detailed Projects",
    projects: [
      {
        title: "L2 SAP Incident Ticket Solutions using Agentic AI",
        body: [
          { label: "Architecture", text: "Designed and deployed end-to-end serverless multi-agent AI system on AWS Lambda with event-driven architecture. Implemented RAG pipeline using FAISS vector database for incident knowledge retrieval, integrated with GPT-4 and Claude for reasoning. Built experimental AI personas with chain-of-thought prompting and ReACT (Reasoning + Acting) framework for automated L2 incident resolution." },
          { label: "Technical Stack", text: "LangChain for agent orchestration, Amazon Bedrock for LLM inference, AWS Lambda for serverless compute, DynamoDB for state management, EventBridge for workflow orchestration, custom embedding models for semantic search across SAP documentation." },
        ],
        impact: "2% reduction in L2 vendor budget (~$40K annually), 35% faster incident resolution time",
      },
      {
        title: "CV Screening & Talent Pooling RAG-Powered AI Agent",
        body: [
          { label: "Architecture", text: "Built production RAG system with advanced document parsing (PyPDF2, Unstructured), semantic chunking strategies, and multi-vector retrieval. Implemented fine-tuned BERT embeddings for resume understanding and GPT-4 with structured output parsing for candidate evaluation. Developed talent scoring algorithm using ensemble methods combining LLM reasoning with traditional ML classifiers." },
          { label: "Technical Stack", text: "LlamaIndex for document ingestion, Pinecone vector database, fine-tuned sentence-transformers for domain-specific embeddings, FastAPI for API gateway, LangSmith for LLM observability and evaluation, custom prompt templates with few-shot learning examples." },
        ],
        impact: "90%+ reduction in HR assessment effort, 3-day to 2-hour screening time, 95% candidate matching accuracy",
      },
      {
        title: "Intelligent LLM Router with Model Context Protocol Integration",
        body: [
          { label: "Architecture", text: "Developed sophisticated LLM routing system using semantic classification and query complexity analysis. Implemented Model Context Protocol (MCP) for standardized tool integration, enabling dynamic model selection (GPT-4, Claude, Gemini, local Llama models via Ollama) based on query type, security requirements, and cost optimization. Built middleware layer for data governance, PII detection, and compliance enforcement before LLM invocation." },
          { label: "Technical Stack", text: "Custom routing classifier using fine-tuned DistilBERT, MCP server implementation, LangChain for multi-provider abstraction, Redis for caching and rate limiting, Prometheus + Grafana for cost tracking and performance monitoring, AWS Secrets Manager for API key management." },
        ],
        impact: "60% reduction in LLM costs ($18K/month savings), <100ms routing latency, 99.9% uptime SLA",
      },
      {
        title: "Serverless Data Platform with ML Pipeline Orchestration (AWS)",
        body: [
          { label: "Architecture", text: "End-to-end ETL/ELT platform using AWS Step Functions for orchestration, Lambda for compute, Glue for data cataloging, and Athena for analytics. Integrated MLflow for experiment tracking, automated model retraining pipelines, and real-time feature engineering with Kinesis Data Streams." },
        ],
        impact: "70% reduction in infrastructure costs, real-time insights for Finance/Mining/IoT domains",
      },
    ],
  },
  {
    icon: "🔬",
    title: "Postdoctoral Research Fellow",
    org: "Texas State University, USA",
    period: "Jan 2024 – May 2024",
    summary:
      "Led advanced AI research developing novel LLM applications for transportation safety. Pioneered " +
      "integration of large language models with traditional ML workflows, published in IEEE Transactions. " +
      "All projects funded by NHCRP & TXST.",
    highlights: [
      "📊 BERTopic + LLAMA-2 Integration",
      "🏆 IEEE TITS Publication",
      "🔍 XAI + AutoML Pipeline",
      "💡 Novel Tabular-to-Image Method",
    ],
    toggleLabel: "Research Details",
    projects: [
      {
        title: "AutoML with Explainable AI for Pedestrian Crash Severity Prediction",
        body: [
          { label: "Research Innovation", text: "Developed automated machine learning pipeline integrating SHAP, LIME, and Integrated Gradients for model interpretability. Implemented feature engineering automation and hyperparameter optimization using Optuna. Published in IEEE TITS (Q1 journal, IF: 8.5)." },
          { label: "Impact", text: "95% prediction accuracy, 70% reduction in analysis time, policy recommendations adopted by transportation agencies." },
        ],
      },
      {
        title: "Novel Tabular-to-Image Transformation for Deep Learning Classification",
        body: [
          { label: "Research Innovation", text: "Pioneered methodology converting tabular crash data into image representations for CNN-based classification. Leveraged transfer learning from pre-trained Vision Transformers (ViT) achieving superior performance over traditional tabular methods." },
          { label: "Impact", text: "40% faster inference, 12% accuracy improvement, novel approach for tabular ML problems." },
        ],
      },
      {
        title: "Advanced Topic Modeling: BERTopic with LLAMA-2 Integration for Narrative Analysis",
        body: [
          { label: "Architecture", text: "Integrated BERTopic clustering with LLAMA-2 (7B parameter model) for automated topic representation and insight generation from crash narratives. Implemented custom fine-tuning pipeline with domain-specific instruction tuning on transportation safety corpus. Developed hierarchical topic modeling with dynamic topic evolution tracking." },
          { label: "Technical Implementation", text: "Fine-tuned sentence-transformers for embedding generation, UMAP for dimensionality reduction, HDBSCAN for clustering, LLAMA-2 with LoRA fine-tuning for topic labeling and narrative summarization. Built end-to-end pipeline with MLflow tracking and automated evaluation metrics." },
          { label: "Impact", text: "Uncovered 23 distinct crash pattern clusters, identified 5 novel risk factors, generated actionable policy recommendations adopted by state DOT." },
        ],
      },
      {
        title: "Marijuana-Related Crash Analysis using Advanced NLP & LLM Reasoning",
        body: [
          { label: "Architecture", text: "Applied zero-shot and few-shot learning with GPT-4 for crash narrative classification, combined with BERTopic for unsupervised pattern discovery. Implemented chain-of-thought prompting for causal reasoning and counterfactual analysis." },
          { label: "Impact", text: "First comprehensive LLM-based analysis of marijuana-involved crashes, findings presented to NHCRP, influenced safety policy discussions." },
        ],
      },
    ],
  },
  {
    icon: "⚙️",
    title: "AI Engineer",
    org: "INEEJI, South Korea",
    period: "Sept 2023 – Jan 2024",
    summary:
      "Developed novel algorithms and end-to-end AI product applications for various industries. Built " +
      "comprehensive XAI platform with anomaly detection, deployed on GCP with CUDA for high-performance " +
      "computing. Product sold to companies in South Korea and Japan.",
    highlights: ["🏭 Industrial XAI Solution", "🚀 GCP + CUDA Deployment", "📈 Multi-Company Sales"],
    toggleLabel: "Project Details",
    projects: [
      {
        title: "INFINITE OPTIMAL SERIES™",
        body: [
          { text: "Industrial Process Efficiency Optimization with XAI. Developed Deep Learning-based Anomaly Detection (USAD, Anomaly Transformers) with advanced XAI (Kernel SHAP, Integrated Gradient, LIME). Built AutoML with automatic preprocessing and hyperparameter tuning. Deployed on GCP with CUDA for multi-user support." },
        ],
        impact: "Sold to multiple companies in South Korea and Japan",
      },
    ],
  },
  {
    icon: "📦",
    title: "Product Data Science Specialist",
    org: "PT. Cybertrend Intrabuana, Indonesia (Remote)",
    period: "Aug 2021 – May 2024",
    summary:
      "Architected and deployed enterprise AI product suite including advanced RAG systems, deep learning " +
      "solutions, and production ML platforms sold to 30+ companies across Indonesia & Southeast Asia. " +
      "Specialized in end-to-end LLM engineering and scalable ML deployment.",
    highlights: [
      "🤖 CybertrendGPT™ RAG Platform",
      "🏢 30+ Enterprise Clients",
      "💰 80% Support Cost Reduction",
      "⚡ Real-Time ML Solutions",
    ],
    toggleLabel: "Product Suite",
    projects: [
      {
        title: "CybertrendGPT™ - Enterprise RAG Platform",
        body: [
          { label: "Architecture", text: "Production-grade Retrieval-Augmented Generation system with multi-stage retrieval pipeline. Implemented hybrid search combining dense (FAISS) and sparse (BM25) retrieval, semantic chunking with overlap optimization, and reranking using cross-encoders. Fine-tuned embeddings models (sentence-transformers) on domain-specific corpora for improved retrieval accuracy." },
          { label: "LLM Integration", text: "Built unified interface supporting multiple LLM providers (OpenAI GPT-3.5/4, HuggingFace models with quantization). Implemented context window management, streaming responses, and prompt template optimization. Developed custom guardrails for hallucination detection and fact-checking." },
          { label: "Technical Stack", text: "LangChain for orchestration, Weaviate/Chroma for vector storage, FastAPI backend, React frontend, Docker containerization, Redis caching layer, monitoring with W&B, A/B testing framework for prompt evaluation." },
          { label: "Business Value", text: "Sold to 15+ enterprises, 80% reduction in customer support costs, 3-5x faster information retrieval vs. traditional search, 92% user satisfaction score." },
        ],
      },
      {
        title: "CtrendVision™ for Retail - ML Platform with Time Series Forecasting",
        body: [
          { label: "Technical Implementation", text: "Automated customer segmentation using ensemble clustering (K-Means + DBSCAN + Gaussian Mixture). Implemented advanced forecasting with Prophet for seasonality, LSTM/GRU/BiLSTM for short-term predictions, and Transformer models (Temporal Fusion Transformers) for multi-horizon forecasting. Built AutoML pipeline with hyperparameter optimization using Optuna." },
          { label: "Business Value", text: "25% increase in customer retention, 30% improvement in inventory planning accuracy." },
        ],
      },
      {
        title: "CtrendMax™ for Manufacturing - Real-Time Anomaly Detection with XAI",
        body: [
          { label: "Deep Learning Architecture", text: "Implemented USAD (UnSupervised Anomaly Detection) and Anomaly Transformers with attention mechanisms. Integrated comprehensive XAI layer (SHAP, LIME, Integrated Gradients, attention visualization) for explainable predictions. Real-time inference on streaming sensor data with <50ms latency." },
          { label: "Business Value", text: "40% reduction in false alarms, 98% anomaly detection rate, prevented $500K+ in equipment failures." },
        ],
      },
      {
        title: "CtrendMax™ for Banking - Credit Scoring & Churn Prediction Platform",
        body: [
          { label: "Technical Implementation", text: "Deep neural network ensemble for credit scoring with adversarial training for fairness. AutoML pipeline (AutoGluon + FLAML) for churn prediction with automated feature engineering and model selection. Implemented model monitoring and drift detection with continuous retraining pipeline." },
          { label: "Business Value", text: "15% improvement in credit approval accuracy, 22% reduction in customer churn." },
        ],
      },
    ],
  },
  {
    icon: "🧪",
    title: "AI Scientist and Developer",
    org: "Business Analytics Lab, Pukyong National University, South Korea",
    period: "Sept 2020 – Aug 2023",
    summary:
      "Researched novel ML algorithms for industrial applications including explainable anomaly detection " +
      "for maritime systems, deep learning for geological prediction, and self-supervised seismic denoising. " +
      "Published 6+ peer-reviewed papers funded by NRF Korean Government.",
    highlights: ["📄 6+ Journal Publications", "🛳️ Maritime AI Systems", "🔬 Deep Learning Research"],
  },
  {
    icon: "💊",
    title: "Data Scientist",
    org: "Daewoong Pharmaceuticals, South Korea",
    period: "Feb 2021 – Feb 2023",
    summary:
      "Developed end-to-end AI applications for pharmaceutical industry optimization including energy " +
      "consumption prediction using deep learning, automatic drug discovery pipelines, and real-time HVAC " +
      "anomaly detection with explainable AI. Received project scholarship and achievement certificate.",
    highlights: ["💊 Drug Discovery AI", "⚡ Energy Optimization", "🏆 Project Scholarship"],
  },
  {
    icon: "🔬",
    title: "Semiconductor Researcher",
    org: "Inorganic Semiconductor Lab, Pukyong National University, South Korea",
    period: "Aug 2018 – Aug 2020",
    summary:
      "Conducted technical synthesis, fabrication, and measurement of semiconductor devices. Performed " +
      "economic feasibility studies for R&D projects. All work funded by NRF Korean Government and published " +
      "in peer-reviewed journals.",
    highlights: ["🔬 Semiconductor Fabrication", "📄 Journal Publications", "🇰🇷 NRF Funded Research"],
  },
  {
    icon: "🛢️",
    title: "Competency Engineer",
    org: "Medco E&P Natuna, Indonesia",
    period: "Jan 2018 – Jun 2018",
    summary:
      "Responsible for managing production workflows, manpower performance analysis, and schedule " +
      "optimization for upstream oil & gas projects.",
    highlights: ["🛢️ Oil & Gas", "📊 Performance Analysis"],
  },
  {
    icon: "🏦",
    title: "Relationship Manager",
    org: "Commonwealth Bank, Indonesia",
    period: "Jan 2017 – Nov 2017",
    summary:
      "Specialized in credit analysis, financial consulting, and asset management. Developed tailored " +
      "strategies ensuring effective risk management for high-value clients.",
    highlights: ["💰 Credit Analysis", "📈 Asset Management"],
  },
];

// Publications. `url` is optional (omit when no link is available).
export const publications = [
  {
    year: 2026,
    title: "Image-Based Crash Severity Analysis: Transforming Tabular Data Using Convolutional Neural Networks",
    authors: "S. Somvanshi, <strong>G. Antariksa</strong>, S. Das, J. Liu, A. Hossain",
    venue: "IEEE Access",
    tags: ["Deep Learning", "CNN", "Transportation"],
    url: "https://doi.org/10.1109/ACCESS.2026.3526217",
  },
  {
    year: 2026,
    title: "AI-driven swarm USV operations: A comprehensive bibliometric and analytical review",
    authors: "N. Hamid, <strong>G. Antariksa</strong>, W. Dharmawan, G. Jati, H. Saleh, S. El Ferik",
    venue: "Advanced Engineering Informatics",
    tags: ["AI", "Swarm Robotics", "Review"],
    url: "https://doi.org/10.1016/j.aei.2025.103972",
  },
  {
    year: 2025,
    title: "Automated and Explainable Artificial Intelligence to Enhance Prediction of Pedestrian Injury Severity",
    authors: "<strong>G. Antariksa</strong>, R. Tamakloe, J. Liu, S. Das",
    venue: "IEEE Transactions on Intelligent Transportation Systems",
    tags: ["AI", "Transportation", "XAI"],
    url: "https://doi.org/10.1109/TITS.2025.3526212",
  },
  {
    year: 2025,
    title: "Comparative Analysis of Advanced AI-based Object Detection Models for Pavement Marking Quality Assessment",
    authors: "<strong>G. Antariksa</strong>, R. Chakraborty, S. Somvanshi, S. Das, M. Jalayer, D.R. Patel, et al.",
    venue: "2025 IEEE Conference on Artificial Intelligence (CAI)",
    tags: ["Computer Vision", "Object Detection", "AI"],
    url: "https://doi.org/10.1109/CAI59869.2025",
  },
  {
    year: 2025,
    title: "Revealing equity gaps in pedestrian crash data through explainable artificial intelligence clustering",
    authors: "J. Liu, <strong>G. Antariksa</strong>, S. Somvanshi, S. Das",
    venue: "Transportation Research Part D: Transport and Environment",
    tags: ["XAI", "Clustering", "Transportation"],
    url: "https://doi.org/10.1016/j.trd.2024.104538",
  },
  {
    year: 2025,
    title: "XAI-driven contamination for self-supervised denoising with pixel-level anomaly detection in seismic data",
    authors: "<strong>G. Antariksa</strong>, A. Koeshidayatullah, S. Das, J. Lee",
    venue: "Journal of Applied Geophysics",
    tags: ["XAI", "Deep Learning", "Geophysics"],
    url: "https://doi.org/10.1016/j.jappgeo.2025.105723",
  },
  {
    year: 2024,
    title: "A survey on deep tabular learning",
    authors: "S. Somvanshi, S. Das, S.A. Javed, <strong>G. Antariksa</strong>, A. Hossain",
    venue: "arXiv preprint arXiv:2410.12034",
    tags: ["Deep Learning", "Survey", "Tabular Data"],
    url: "https://arxiv.org/abs/2410.12034",
  },
  {
    year: 2024,
    title: "Enhanced balanced-generative adversarial networks to predict pedestrian injury types",
    authors: "S. Somvanshi, <strong>G. Antariksa</strong>, S. Das",
    venue: "Available at SSRN 4847615",
    tags: ["GAN", "Deep Learning"],
  },
  {
    year: 2023,
    title: "Deep sequence model-based approach to well log data imputation and petrophysical analysis",
    authors: "<strong>G. Antariksa</strong>, R. Muammar, A. Nugraha, J. Lee",
    venue: "Journal of Applied Geophysics",
    tags: ["Deep Learning", "LSTM", "Oil & Gas"],
    url: "https://doi.org/10.1016/j.jappgeo.2023.105213",
  },
  {
    year: 2023,
    title: "White electroluminescence from Ce³⁺-doped bi-phase calcium silicate in metal-oxide-semiconductor structure",
    authors: "M.M. Afandi, <strong>G. Antariksa</strong>, J. Kim",
    venue: "Thin Solid Films",
    tags: ["Semiconductors", "Materials Science"],
    url: "https://doi.org/10.1016/j.tsf.2022.139630",
  },
  {
    year: 2023,
    title: "Improving Geological Interpretation and Prediction for Hydrocarbon Exploration using ML-Based Approaches",
    authors: "<strong>G. Antariksa</strong>",
    venue: "Ph.D. Thesis, Pukyong National University",
    tags: ["Thesis", "Machine Learning", "Geophysics"],
  },
  {
    year: 2022,
    title: "Performance evaluation of machine learning-based classification with rock-physics analysis in Tarakan Basin",
    authors: "<strong>G. Antariksa</strong>, R. Muammar, J. Lee",
    venue: "Journal of Petroleum Science and Engineering",
    tags: ["Machine Learning", "Classification", "Geophysics"],
    url: "https://doi.org/10.1016/j.petrol.2021.109250",
  },
  {
    year: 2022,
    title: "White electroluminescence from cross relaxation-free CaSiO₃:Tb³⁺ film on silicon wafer",
    authors: "H. Jung, M.M. Afandi, <strong>G. Antariksa</strong>, J. Park, J. Kim",
    venue: "Journal of Luminescence",
    tags: ["Semiconductors", "Materials"],
    url: "https://doi.org/10.1016/j.jlumin.2022.119177",
  },
  {
    year: 2022,
    title: "Blue-green tunable electroluminescence from Y₂SiO₅:Tb³⁺ phosphor",
    authors: "M.M. Afandi, <strong>G. Antariksa</strong>, H. Kang, T. Kang, J. Kim",
    venue: "Journal of Luminescence",
    tags: ["Semiconductors", "Optics"],
    url: "https://doi.org/10.1016/j.jlumin.2022.119201",
  },
  {
    year: 2021,
    title: "Explainable anomaly detection framework for maritime main engine sensor data",
    authors: "D. Kim, <strong>G. Antariksa</strong>, M.P. Handayani, S. Lee, J. Lee",
    venue: "Sensors",
    tags: ["XAI", "Anomaly Detection", "IoT"],
    url: "https://doi.org/10.3390/s21155200",
  },
  {
    year: 2021,
    title: "Anomaly detection in vessel sensors data with unsupervised learning technique",
    authors: "M.P. Handayani, <strong>G. Antariksa</strong>, J. Lee",
    venue: "2021 International Conference on Electronics, Information, and Communication (ICEIC)",
    tags: ["Unsupervised Learning", "Sensors"],
  },
];

export const scholarUrl = "https://scholar.google.com/citations?user=5BawrcEAAAAJ&hl=en";

export const skills = [
  {
    icon: "🤖",
    title: "Large Language Models & Advanced RAG Systems",
    tags: [
      "GPT-4 / GPT-4o", "Claude 3 (Opus/Sonnet/Haiku)", "Gemini Pro/Ultra", "LLaMA 2/3",
      "Mistral 7B/Mixtral", "Azure OpenAI Service", "Amazon Bedrock", "Ollama (Local LLMs)",
      "Model Context Protocol (MCP)", "Advanced RAG Architectures", "Hybrid Search (Dense + Sparse)",
      "Semantic Chunking", "Reranking & Cross-Encoders", "Multi-Vector Retrieval",
      "Vector Databases (Pinecone, Weaviate, Chroma, Qdrant, FAISS)", "Fine-Tuning (LoRA, QLoRA, PEFT)",
      "Instruction Tuning", "RLHF & DPO", "Chain-of-Thought Prompting", "ReACT Framework",
      "LangChain / LangGraph", "LlamaIndex", "Agentic AI Frameworks", "AutoGPT / BabyAGI",
      "Multi-Agent Systems", "LangSmith (LLM Observability)", "Prompt Engineering", "Few-Shot Learning",
      "Function Calling / Tool Use", "Structured Output Parsing", "Embedding Models Optimization",
      "Hallucination Detection",
    ],
  },
  {
    icon: "🧠",
    title: "Core ML & Deep Learning",
    tags: ["TensorFlow", "PyTorch", "PyTorch Lightning", "Keras", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "FastAI", "JAX", "NumPy", "Pandas", "SciPy"],
  },
  {
    icon: "🔬",
    title: "Advanced Deep Learning",
    tags: ["PINNs", "Graph Neural Networks", "Diffusion Models", "VAE", "GAN", "Meta-Learning", "Transfer Learning", "Few-Shot Learning", "Domain Adaptation"],
  },
  {
    icon: "💬",
    title: "Natural Language Processing",
    tags: ["Transformers", "BERT", "RoBERTa", "T5", "GPT", "Hugging Face", "Sentence Transformers", "spaCy", "NLTK", "Named Entity Recognition", "Sentiment Analysis"],
  },
  {
    icon: "👁️",
    title: "Computer Vision & Multimodal AI",
    tags: ["YOLO (v5-v11)", "Detectron2", "SAM", "OpenCV", "Vision Transformers", "Object Detection", "Semantic Segmentation", "Stable Diffusion", "DALL-E", "OCR"],
  },
  {
    icon: "🔍",
    title: "Explainable AI (XAI)",
    tags: ["SHAP", "LIME", "Integrated Gradients", "Attention Visualization", "Saliency Maps", "Counterfactual Explanations"],
  },
  {
    icon: "⚡",
    title: "High Performance Computing",
    tags: ["CUDA", "cuDNN", "TensorRT", "NVIDIA Triton", "Ray", "Distributed Training", "Model Parallelism", "Mixed Precision"],
  },
  {
    icon: "🚀",
    title: "MLOps & Production",
    tags: ["MLflow", "Weights & Biases", "Kubeflow", "FastAPI", "TorchServe", "Model Monitoring", "A/B Testing", "CI/CD for ML"],
  },
  {
    icon: "☁️",
    title: "Cloud Platforms & DevOps",
    tags: ["AWS SageMaker", "AWS Lambda", "AWS Bedrock", "Google Cloud Platform", "Vertex AI", "Azure ML", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: "🗄️",
    title: "Data Engineering & Databases",
    tags: ["Apache Spark", "Apache Kafka", "Apache Airflow", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Snowflake", "BigQuery"],
  },
  {
    icon: "📊",
    title: "Visualization & Analytics",
    tags: ["Plotly", "Dash", "Streamlit", "Gradio", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
  },
];

// Interactive project showcase, grouped by tab category.
export const projectCategories = [
  { id: "ai-ml", label: "AI & ML" },
  { id: "llm", label: "LLM & RAG" },
  { id: "cv", label: "Computer Vision" },
  { id: "industry", label: "Industry Solutions" },
];

export const projects = [
  {
    category: "ai-ml",
    visual: { type: "bars" },
    title: "AutoML with Explainable AI",
    desc: [
      "Developed automated machine learning pipeline with integrated XAI techniques for pedestrian crash " +
        "severity prediction. Combined SHAP, LIME, and Integrated Gradients for comprehensive model interpretability.",
    ],
    metrics: [
      { value: "95%", label: "Accuracy" },
      { value: "70%", label: "Time Saved" },
      { value: "100%", label: "Interpretable" },
    ],
    tech: ["Python", "AutoML", "SHAP", "XGBoost"],
  },
  {
    category: "llm",
    visual: { type: "chat" },
    title: "CybertrendGPT™ - Production-Scale RAG Platform with Fine-Tuning",
    desc: [
      "<strong>Advanced Architecture:</strong> Enterprise-grade RAG system featuring multi-stage retrieval " +
        "(hybrid dense + sparse search), reranking with cross-encoders, and fine-tuned embedding models for " +
        "domain adaptation. Implemented LangChain for orchestration, custom prompt templates with chain-of-thought " +
        "reasoning, and hallucination detection guardrails. Integrated Model Context Protocol (MCP) for extensible " +
        "tool integration and multi-provider LLM support (GPT-4, Claude, local models via Ollama).",
      "<strong>Fine-Tuning Pipeline:</strong> Developed end-to-end fine-tuning workflow using LoRA for efficient " +
        "adaptation of base models on proprietary corpora. Implemented instruction tuning with domain-specific " +
        "Q&A pairs and RLHF-inspired feedback loops for response quality optimization.",
    ],
    metrics: [
      { value: "80%", label: "Support Cost ↓" },
      { value: "92%", label: "User Satisfaction" },
      { value: "<150ms", label: "Retrieval Latency" },
    ],
    tech: ["LangChain", "Weaviate", "LoRA Fine-Tuning", "Cross-Encoders", "MCP", "FastAPI", "LangSmith"],
  },
  {
    category: "cv",
    visual: { type: "detect" },
    title: "Advanced Object Detection for Pavement Assessment",
    desc: [
      "Comparative analysis of state-of-the-art object detection models (YOLO v11, Detectron2) for automated " +
        "pavement marking quality assessment. Achieved real-time detection with high accuracy across diverse " +
        "lighting conditions.",
    ],
    metrics: [
      { value: "92%", label: "mAP" },
      { value: "60 FPS", label: "Processing" },
      { value: "5", label: "Models Compared" },
    ],
    tech: ["YOLO v11", "PyTorch", "OpenCV", "TensorRT"],
  },
  {
    category: "industry",
    visual: { type: "gauge" },
    title: "INFINITE OPTIMAL SERIES™",
    desc: [
      "Industrial Process Efficiency Optimization with Deep Learning-based Anomaly Detection (USAD, Anomaly " +
        "Transformers) and advanced XAI. Deployed on GCP with CUDA for multi-user cloud services. Sold to " +
        "companies in South Korea and Japan.",
    ],
    metrics: [
      { value: "40%", label: "Cost Savings" },
      { value: "98%", label: "Detection Rate" },
      { value: "24/7", label: "Monitoring" },
    ],
    tech: ["PyTorch", "SHAP", "GCP", "CUDA"],
  },
];

export const awards = [
  { cls: "gold", medal: "🥇", title: "1st Place", org: "Busan Shipbuilding Hackathon", desc: "Real-Time Ship Safety Anomaly Detection", year: "2021" },
  { cls: "bronze", medal: "🥉", title: "3rd Place", org: "Daewoong Big Data Hackathon", desc: "Sano Personal Health Assistant", year: "2021" },
  { cls: "silver", medal: "🥈", title: "2nd Place", org: "DRB Rubber Industry Hackathon", desc: "Anomaly Detection on Manufacturing", year: "2021" },
  { cls: "scholarship", medal: "🎓", title: "NRF BK-21 Scholarship", org: "South Korea Government", desc: "Full Scholarship for Graduate Studies", year: "2018 – 2023" },
  { cls: "scholarship", medal: "💼", title: "Daewoong Big Data Project", org: "Daewoong Pharmaceuticals", desc: "Project Scholarship & Certificate", year: "2021 – 2023" },
];

export const contacts = [
  { type: "email", title: "Email", text: "gian.antariksa@gmail.com", href: "mailto:gian.antariksa@gmail.com" },
  { type: "linkedin", title: "LinkedIn", text: "linkedin.com/in/antrks", href: "https://linkedin.com/in/antrks" },
  { type: "github", title: "GitHub", text: "github.com/giantrksa", href: "https://github.com/giantrksa" },
  {
    type: "phone",
    title: "Phone",
    numbers: [
      { text: "+62 811 2787-19 (IDN)", href: "tel:+6281127871919" },
      { text: "+82 10 6893 8443 (ROK)", href: "tel:+821068938443" },
    ],
  },
];

export const social = {
  scholar: scholarUrl,
  github: "https://github.com/giantrksa",
  linkedin: "https://linkedin.com/in/antrks",
  email: "mailto:gian.antariksa@gmail.com",
};
