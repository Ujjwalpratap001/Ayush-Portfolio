// ONLY edit the text between the quotes "..." in this file. Do not delete commas, brackets or braces.

const CONFIG = {
  name: "Ayush Patel",
  title: "Artificial Intelligence and Machine Learning",
  intro: "I turn ideas into digital experiences through code, creativity, and continuous learning. From building web applications to exploring data science and AI, I enjoy creating solutions that solve real problems.",
  about: "Curious Mind. Creative Builder. Future Engineer.\n\nI'm Ayush Patel, a Computer Science Engineering student at GLA University, specializing in Data Science. I'm passionate about software development, problem-solving, and exploring how technology can transform ideas into useful digital products.\n\nMy journey revolves around learning by building: developing projects, strengthening my programming fundamentals, practicing data structures and algorithms, and experimenting with modern technologies.\n\nFrom creating web platforms like GLA ExamPrep to developing creative digital projects like Wallora, I enjoy taking ideas from concept to implementation and continuously improving them along the way.\n\nI'm currently focused on growing as a software developer, expanding my knowledge of data science and AI, and connecting with people who share a passion for technology and innovation.\n\nMy goal: Build meaningful products, solve challenging problems, and turn curiosity into real-world impact.",
  availability: "Open to internships",   // leave "" to hide this label
  photo: "photo.jpg",                              // upload a photo and write its file name, e.g. "photo.jpg"

  githubUser: "ayushpatel9617",
  leetcodeUser: "Ayushpatel396",
  linkedin: "https://www.linkedin.com/in/ayush-patel-01ba22380/",   // full profile link; leave "" to hide the LinkedIn section
  linkedinPhoto: "linkedin_photo.jpg",   // LinkedIn does not allow live photos. Upload a photo and write its file name. If empty, "photo" above is used.

  // Shown if LeetCode live data is slow or down. Update now and then.
  leetcodeBackup: { total: 93, easy: 74, medium: 19, hard: 0 },

  phone: "+918817156433",     // with country code, no spaces
  whatsapp: "+918817156433",   // country code + number, no + sign
  email: "ayushpatel961748@gmail.com",
  resumeFile: "resume.pdf",   // upload your resume with exactly this name

  // Turn any section off by changing true to false
  features: {
    about: true,
    github: true,
    leetcode: true,
    linkedin: true,
    projects: true,
    skills: true,
    certificates: true,
    resume: true,
    contact: true
  },

  // Skills: edit the names. Add a new group by copying one line.
skills: {
  "Languages": ["Java", "Python", "C"],
  "Frontend": ["HTML", "CSS", "JavaScript"],
  "Databases": ["Firebase", "Firestore"],
  "Data Science": ["NumPy", "Pandas", "Data Analysis", "Data Visualization"],
  "Tools": ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Google Colab"]
},

learning: [
  "Data Structures and Algorithms (DSA)",
  "Advanced Java",
  "Python for Data Science",
  "Machine Learning",
  "Exploratory Data Analysis (EDA)",
  "Full-Stack Web Development"
]

  // Projects: copy one block to add a new project.
  // Leave live or code as "" until the real link is ready. The button stays disabled.
  projects: [
    {
      name: "GLA ExamPrep",
      description: "A free subject-wise quiz and exam preparation platform for GLA University students.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: "",
      live: "",
      code: "",
      status: "In progress"
    },
    {
      name: "Wallora",
      description: "A wallpaper discovery and sharing platform with categories, image uploads and downloads, and Google sign-in.",
      tech: [],
      image: "",
      live: "",
      code: "",
      status: "Add status"
    }
  ],

  // To add a certificate: upload the image into the "certificates" folder,
  // then copy one block below, paste it after the last one, and change the text.
  certificates: [
    { title: "AI TOOLS WORKSHOP", issuer: "be 10X", year: "2026", file: "certificate1.jpg" },
    { title: "Certificate name 2", issuer: "Issued by", year: "2026", file: "certificate2.jpg" }
  ]
};
