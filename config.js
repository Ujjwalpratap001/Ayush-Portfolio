// ONLY edit the text between the quotes "..." in this file. Do not delete commas, brackets or braces.

const CONFIG = {
  name: "Ayush Patel",
  title: "Artificial Intelligence and Machine Learning",
  intro: "I turn ideas into digital experiences through code, creativity, and continuous learning.",
  about: "Curious Mind. Creative Builder.\n\nI'm Ayush Patel, a CSE student at GLA University specializing in Data Science. I enjoy coding, building projects, solving problems, and exploring new technologies to create meaningful digital experiences.",
  availability: "Open to internships",   // leave "" to hide this label
  photo: "photo.png",                     // upload a photo and write its file name, e.g. "photo.jpg"

  githubUser: "ayushpatel9617",
  leetcodeUser: "Ayushpatel396",
  linkedin: "https://www.linkedin.com/in/ayush-patel-01ba22380/",   // full profile link; leave "" to hide the LinkedIn section
  linkedinPhoto: "",   // LinkedIn does not allow live photos. Upload a photo and write its file name. If empty, "photo" above is used.

  // Shown if LeetCode live data is slow or down. Update now and then.
  leetcodeBackup: { total: 93, easy: 74, medium: 19, hard: 0 },

  phone: "+918817156433",     // with country code, no spaces
  whatsapp: "918817156433",   // country code + number, NO + sign
  email: "ayushpatel961748@gmail.com",
  resumeFile: "",   // upload your resume with exactly this name

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
    "Tools": ["Git", "GitHub", "VS Code"]
  },
  learning: ["Skill you are learning now"],

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
    { title: "AI TOOLS WORKSHOP", issuer: "be10x", year: "2026", file: "certificate1.png" },
    { title: "Python Essentials 1", issuer: "Cisco Networking Academy / Python Institute", year: "2026", file: "certificate2.png" },
    { title: "Python Essentials 2", issuer: "Cisco Networking Academy", year: "2026", file: "certificate3.png" },
    { title: "Get Started with Databricks for Generative AI", issuer: "Databricks", year: "2026", file: "certificate4.png" },
    { title: "Get Started with SQL Analytics and BI on Databricks", issuer: "Databricks", year: "2026", file: "certificate5.png" },
   
  ]
};
