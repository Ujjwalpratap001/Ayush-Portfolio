// ONLY edit the text between the quotes "..." in this file. Do not delete commas, brackets or braces.

const CONFIG = {
  name: "Your Client Name",
  title: "Software Developer",
  intro: "Write one or two lines about what you build and what you love working on.",
  about: "Write 3 to 4 lines about yourself: who you are, what you study or work on, and what you want to do next.",
  availability: "Open to internships",   // leave "" to hide this label
  photo: "",                              // upload a photo and write its file name, e.g. "photo.jpg"

  githubUser: "client-github-username",
  leetcodeUser: "client-leetcode-username",
  linkedin: "",                           // full link, e.g. "https://www.linkedin.com/in/username/"; leave "" to hide

  // Shown if LeetCode live data is slow or down. Update now and then.
  leetcodeBackup: { total: 0, easy: 0, medium: 0, hard: 0 },

  phone: "+919999999999",     // with country code, no spaces
  whatsapp: "919999999999",   // country code + number, no + sign
  email: "name@example.com",
  resumeFile: "resume.pdf",   // upload your resume with exactly this name

  // Turn any section off by changing true to false
  features: {
    about: true,
    github: true,
    leetcode: true,
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

  // Projects: copy one block to add a new project. Leave live or code as "" if not available yet.
  projects: [
    {
      name: "Project name",
      description: "One or two lines about what this project does.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "",
      live: "",
      code: "",
      status: "In progress"
    }
  ],

  // To add a certificate: upload the image into the "certificates" folder,
  // then copy one block below, paste it after the last one, and change the text.
  certificates: [
    { title: "Certificate name 1", issuer: "Issued by", year: "2026", file: "certificates/cert1.jpg" },
    { title: "Certificate name 2", issuer: "Issued by", year: "2026", file: "certificates/cert2.jpg" }
  ]
};
