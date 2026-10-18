// ONLY edit the text between the quotes "..." in this file. Do not delete commas or brackets.

const CONFIG = {
  name: "Your Client Name",
  title: "Full Stack Developer",
  about: "Write 2 to 3 lines about yourself here. Who you are, what you build, and what you are learning right now.",
  photo: "", // optional: upload a photo and write its file name, e.g. "photo.jpg"

  githubUser: "https://leetcode.com/u/Ayushpatel396/",
  leetcodeUser: "client-leetcode-username",

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
    certificates: true,
    resume: true,
    contact: true
  },

  // To add a certificate: upload the image into the "certificates" folder,
  // then copy one block below, paste it after the last one, and change the text.
  certificates: [
    { title: "Certificate name 1", issuer: "Issued by", year: "2026", file: "certificates/cert1.jpg" },
    { title: "Certificate name 2", issuer: "Issued by", year: "2026", file: "certificates/cert2.jpg" }
  ]
};
