export const personalInfo = {
  name: "Dhinakar S",
  role: "Information Security Intern & AI/ML Engineer",
  tagline: "Bridging Artificial Intelligence with Cybersecurity & VAPT. Applying machine learning for intrusion detection and securing modern digital infrastructure.",
  status: "Information Security Intern @ Net Access India Limited",
  location: "Pudukottai, Tamil Nadu, India",
  phone: "+91 86105 71102",
  phoneRaw: "8610571102",
  email: "dhinakardhinakar0123@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhinakar-s-090058364",
  linkedinUsername: "dhinakar-s-090058364",
  github: "https://github.com",
  bio: `Motivated Computer Science student specialising in Artificial Intelligence and Machine Learning, seeking an entry-level opportunity in cybersecurity. Interested in applying foundational knowledge of network security, web application security, vulnerability assessment and VAPT to help identify and understand security risks. Currently gaining practical exposure as an Information Security Intern at Net Access India Limited, and eager to strengthen technical skills while contributing to a security-focused team.`,
  strengths: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Adaptability"],
  stats: [
    { label: "Current Role", value: "InfoSec Intern", suffix: "Net Access", icon: "Shield" },
    { label: "Specialization", value: "AI / ML & VAPT", suffix: "B.E. CSE", icon: "Cpu" },
    { label: "Diploma CGPA", value: "7.2", suffix: "Mother Teresa", icon: "Award" },
    { label: "Key Security Tools", value: "5+", suffix: "Hands-on", icon: "Terminal" },
  ]
};

export const coreDomains = [
  {
    id: "vapt-fundamentals",
    title: "VAPT & Vulnerability Assessment",
    code: "SEC-01",
    icon: "ShieldAlert",
    shortDesc: "Foundational understanding of vulnerability identification, risk categorization, and penetration testing methodologies.",
    deliverables: [
      "Vulnerability Identification & Risk Assessment",
      "VAPT Concept Application & Testing Scenarios",
      "Security Flaw Impact Analysis",
      "Remediation Reporting & Mitigation"
    ],
    standard: "OWASP Top 10"
  },
  {
    id: "web-security",
    title: "Web Application Security",
    code: "SEC-02",
    icon: "GlobeLock",
    shortDesc: "Exploring common web application vulnerabilities, authentication safeguards, and secure request-response workflows.",
    deliverables: [
      "OWASP Top 10 Web Vulnerabilities",
      "HTTP/HTTPS Header & SSL/TLS Analysis",
      "Session Handling & Token Inspection",
      "Web Application Security Testing"
    ],
    standard: "OWASP ASVS"
  },
  {
    id: "network-security",
    title: "Network Security & Traffic Analysis",
    code: "SEC-03",
    icon: "Network",
    shortDesc: "Deep packet inspection, protocol enumeration, and network baseline analysis using Wireshark and Nmap.",
    deliverables: [
      "TCP/IP, DNS & OSI Model Architecture",
      "Packet Capture & Wireshark Protocol Analysis",
      "Port & Service Scanning via Nmap",
      "Network Anomaly & Traffic Baseline Checks"
    ],
    standard: "TCP/IP & OSI"
  },
  {
    id: "ai-cybersecurity",
    title: "AI & Machine Learning for Cyber Defense",
    code: "SEC-04",
    icon: "Cpu",
    shortDesc: "Designing neural networks (CNN & LSTM) and blockchain mechanisms to detect network intrusions and guarantee tamper-proof logs.",
    deliverables: [
      "CNN & LSTM Network Intrusion Detection",
      "Blockchain-based Immutable Security Logging",
      "Predictive Machine Learning Modeling",
      "Deep Learning Feature Extraction"
    ],
    standard: "AI-Sec Architecture"
  }
];

export const skillsArsenal = {
  categories: [
    {
      name: "Security Tools & Environments",
      icon: "Shield",
      tools: [
        { name: "Burp Suite", level: 85, tag: "Web Proxy & Interception" },
        { name: "Nmap", level: 90, tag: "Network Scanning & Mapping" },
        { name: "Wireshark", level: 88, tag: "Network Traffic Analysis" },
        { name: "Nessus", level: 82, tag: "Vulnerability Scanning" },
        { name: "Kali Linux", level: 90, tag: "Primary Security OS" },
      ]
    },
    {
      name: "Cybersecurity & Networking",
      icon: "Network",
      tools: [
        { name: "VAPT Fundamentals", level: 88, tag: "Assessment Concept" },
        { name: "OWASP Top 10", level: 86, tag: "Web App Vulnerabilities" },
        { name: "TCP/IP, DNS & HTTP/HTTPS", level: 92, tag: "Core Protocols" },
        { name: "OSI 7-Layer Model", level: 90, tag: "Network Architecture" },
        { name: "Network Traffic Analysis", level: 85, tag: "Packet Inspection" },
      ]
    },
    {
      name: "Programming & Databases",
      icon: "Terminal",
      tools: [
        { name: "Python", level: 90, tag: "Scripting & ML Development" },
        { name: "Java", level: 80, tag: "Object-Oriented Development" },
        { name: "SQL", level: 84, tag: "Relational Queries & DB" },
        { name: "Linux / Bash", level: 88, tag: "System Administration" },
        { name: "Windows", level: 92, tag: "Enterprise Environment" },
      ]
    },
    {
      name: "AI, Machine Learning & Libraries",
      icon: "Cpu",
      tools: [
        { name: "NumPy & Pandas", level: 88, tag: "Data Analysis & Prep" },
        { name: "Scikit-learn", level: 85, tag: "Supervised Learning" },
        { name: "TensorFlow & Keras", level: 82, tag: "Deep Learning (CNN/LSTM)" },
        { name: "OpenCV", level: 80, tag: "Computer Vision" },
        { name: "Flask", level: 82, tag: "API & Backend Microservices" },
      ]
    }
  ]
};

export const academicProjects = [
  {
    id: "proj-1",
    title: "Decentralized Intrusion Detection Using AI and Blockchain Technologies",
    category: "AI & Cybersecurity",
    badge: "Flagship Project",
    overview: "An academic innovation focused on detecting suspicious network traffic in real time using deep learning models and securing security incident logs using decentralized blockchain ledgers to prevent tampering.",
    highlights: [
      "Trained Convolutional Neural Network (CNN) and Long Short-Term Memory (LSTM) models for network intrusion classification.",
      "Engineered blockchain verification mechanisms to ensure tamper-resistant, immutable security audit logs.",
      "Developed web interface and API microservices using Flask and SQL/MongoDB.",
      "Analyzed intrusion datasets to detect port scans, DDoS patterns, and unauthorized network probing."
    ],
    technologies: ["Python", "CNN", "LSTM", "Flask", "Blockchain", "SQL", "MongoDB"],
    focus: "Intrusion Detection, Deep Learning, Log Immutability"
  },
  {
    id: "proj-2",
    title: "Crop Disease Detection Using Deep Learning",
    category: "Computer Vision & AI",
    badge: "Deep Learning Project",
    overview: "Developed a computer vision application utilizing convolutional neural networks to classify and diagnose crop leaf diseases from image data, enabling early intervention.",
    highlights: [
      "Trained deep neural network models with TensorFlow on diverse image datasets.",
      "Preprocessed images with OpenCV (filtering, resizing, data augmentation).",
      "Achieved high classification accuracy for automated plant disease identification.",
      "Integrated pipeline into a lightweight user-friendly detection workflow."
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Deep Learning"],
    focus: "Image Classification, CNNs, Image Preprocessing"
  }
];

export const internshipExperience = [
  {
    role: "Information Security Intern",
    company: "Net Access India Limited",
    period: "November 2026 – Present",
    status: "Active Internship",
    location: "India",
    responsibilities: [
      "Gaining practical exposure to information security principles and VAPT concepts.",
      "Learning vulnerability identification and assessment methodologies.",
      "Exploring network security, web application security and security testing tools (Burp Suite, Nmap, Wireshark).",
      "Developing an understanding of security weaknesses and their potential operational impact."
    ]
  }
];

export const educationList = [
  {
    institution: "Rathinam Technical Campus",
    degree: "B.E. Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    duration: "2024 – Present",
    status: "Currently Pursuing",
    badge: "Undergraduate Degree"
  },
  {
    institution: "Mother Teresa Polytechnic College",
    degree: "Diploma in Computer Technology",
    specialization: "Computer Technology & Systems",
    duration: "2019 – 2022",
    status: "Completed",
    score: "CGPA: 7.2",
    badge: "Diploma"
  },
  {
    institution: "Idhaya Matric Higher Secondary School",
    degree: "Secondary School Education",
    specialization: "General Studies",
    duration: "2018 – 2019",
    status: "Completed",
    badge: "Schooling"
  }
];

export const certificationsAndWorkshops = [
  {
    title: "EDA and Data Visualization Course in Data Science",
    issuer: "Scaler",
    date: "October 2025",
    type: "Certification",
    badgeColor: "blue",
    description: "Mastered exploratory data analysis, data storytelling, statistical distribution evaluation, and interactive visual insights using Python and visualization libraries."
  },
  {
    title: "Supervised Machine Learning Course",
    issuer: "Scaler",
    date: "May 2026",
    type: "Certification",
    badgeColor: "indigo",
    description: "Comprehensive training in classification, regression, feature engineering, cross-validation, and model optimization using Scikit-learn."
  },
  {
    title: "Data Analytics Workshop",
    issuer: "National Institute of Technology (NIT) Tiruchirappalli",
    date: "September 2025",
    type: "Workshop",
    badgeColor: "cyan",
    description: "Hands-on workshop using Python, Pandas, and data-visualization techniques to clean, transform, and analyze real-world datasets."
  }
];

export const terminalCommands = {
  help: `Available commands:
  - whoami       : Display profile summary & current role
  - intern       : View internship details at Net Access India Limited
  - education    : View degrees and academic qualifications
  - projects     : Display academic projects (DIDS & Crop Disease Detection)
  - skills       : List security, networking, and programming tools
  - certs        : List certifications from Scaler & NIT Tiruchirappalli
  - contact      : Display direct phone, email, and LinkedIn details
  - clear        : Clear terminal output`,
  whoami: `DHINAKAR S
Role      : Information Security Intern & AI/ML Engineer
Company   : Net Access India Limited (Nov 2026 – Present)
College   : Rathinam Technical Campus (B.E. CSE - AI & ML)
Location  : Pudukottai, Tamil Nadu, India`,
  intern: `INTERNSHIP EXPERIENCE:
  Company : Net Access India Limited
  Role    : Information Security Intern (Nov 2026 – Present)
  Focus   : VAPT Concepts, Network & Web Security, Vulnerability Identification`,
  education: `ACADEMIC QUALIFICATIONS:
  1. Rathinam Technical Campus: B.E. CSE (AI & ML) [2024 – Present]
  2. Mother Teresa Polytechnic College: Diploma in Computer Tech (CGPA 7.2) [2019 – 2022]
  3. Idhaya Matric Higher Secondary School [2018 – 2019]`,
  projects: `FEATURED ACADEMIC PROJECTS:
  * Decentralized Intrusion Detection Using AI and Blockchain Technologies
    - CNN + LSTM neural networks for intrusion classification & blockchain log verification.
  * Crop Disease Detection Using Deep Learning
    - TensorFlow + OpenCV deep learning image classification.`,
  skills: `TECHNICAL ARSENAL:
  [+] Security Tools : Burp Suite, Nmap, Nessus, Wireshark, Kali Linux
  [+] Cybersecurity  : VAPT Fundamentals, OWASP Top 10, Web App Security
  [+] Networking     : TCP/IP, DNS, HTTP/HTTPS, OSI Model, Traffic Analysis
  [+] Languages      : Python, Java, SQL
  [+] AI / Libraries : NumPy, Pandas, Scikit-learn, TensorFlow, OpenCV`,
  certs: `CERTIFICATIONS & WORKSHOPS:
  * EDA and Data Visualization in Data Science — Scaler (Oct 2025)
  * Supervised Machine Learning Course — Scaler (May 2026)
  * Data Analytics Workshop — NIT Tiruchirappalli (Sep 2025)`,
  contact: `CONTACT COORDINATES:
  Phone   : +91 86105 71102 (8610571102)
  Email   : dhinakardhinakar0123@gmail.com
  LinkedIn: linkedin.com/in/dhinakar-s-090058364
  Location: Pudukottai, Tamil Nadu, India`
};
