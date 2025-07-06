const projects = [
  {
    title: "Perosnal Portfolio",
    description: "An interactive 3D personal portfolio using Three.js, GSAP, and scroll animations.",
    longDescription:
      "This portfolio website is a fully custom-crafted digital showcase designed to reflect my creative and technical capabilities as a full-stack developer. Built with React, GSAP, and Tailwind CSS, it features immersive scroll animations, horizontal project showcases, animated skill reveal, and a 3D-inspired aesthetic. The hero section includes dynamic name loops, background icon animations, and a strong typographic layout, while each section — from experience to contact — is styled for clarity and impact. The site includes a smooth scroll loader, responsive layout, and project modals for deep dives into my work. Designed for recruiters, collaborators, and clients, the website combines frontend artistry with structured backend-ready scalability.",
    image: "/images/portfolio.png",
    tech: ["React", "Three.js", "GSAP"],
    live: "https://vaibhavportfoli0.netlify.app/",
    code: "https://github.com/vaibhavmehta04/PersonalPortfolio"
  },
  {
    title: "Twitter Clone",
    description: "A full-featured Twitter clone with authentication, posting, and real-time feed updates.",
    longDescription:
      "Designed and deployed a scalable full-stack Twitter clone leveraging React, Node.js, and MongoDB, supporting user authentication, tweet publishing, and follower management with 100% mobile responsiveness. Implemented secure JWT-based authentication and modular RESTful API architecture, enhancing maintainability and performance by 40%, and alignment with industry-standard security practices",
    image: "/images/twitter.png",
    tech: ["React", "Mongo-DB", "Tailwind","JWT", "Express", "Node.js"],
    live: "https://twitter-clone-link.com",
    code: "https://github.com/yourgithub/twitter-clone"
  },
{
  title: "Vaibhav Granites India",
  description: "A modern, animated website for Vaibhav Granites India showcasing their legacy, product catalogue, and brand identity using advanced scroll animations and dynamic content management.",
  longDescription:
    "The Vaibhav Granites India website is a fully responsive, modern web experience built to reflect the elegance and legacy of the brand. With over two decades of craftsmanship in the natural stone industry, this website is designed to highlight their story, showcase their extensive product catalogue, and attract both domestic and international clients. The landing page features smooth scroll-based animations powered by GSAP, creating an immersive storytelling experience. A dynamic horizontal scroll “About Us” section highlights the company’s journey, vision, and core values through well-structured content and visuals. The Catalogue section is fully dynamic, allowing the admin to upload product details and images via a secure Admin Panel. Products are fetched from a connected MongoDB database, and the images are hosted efficiently via Cloudinary, ensuring fast load times and scalability. Additional components like responsive navigation, WhatsApp integration, and refined UI/UX design make the site intuitive and visually impactful across all devices.",
  image: "/images/vaibhav_granite.png", // Make sure this image exists in public/images
  tech: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "React Router", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "Cloudinary", "JWT", "Vite"]
,
  live: "https://vaibhavgranites.netlify.app/", // replace with your actual live link
  code: "https://github.com/vaibhavmehta04/vaibhav-granites" // optional or keep private
},
{
  title: "AI-Powered Resume Builder",
  description: "A sleek and customizable resume builder with live preview, multiple templates, smart formatting, and PDF export — built for modern job seekers.",
  longDescription:
    "A modern, dynamic Resume Builder web app that allows users to create professional resumes with live preview, multiple template options, and smart formatting. Users can fill in forms, auto-capitalize key fields, validate inputs, and download resumes as PDFs.",
  image: "/images/resumeBuilder.png", // Add a placeholder image
  tech: [ "OpenAI API", "React", "Tailwind CSS", "DaisyUI", "Framer Motion", "html2pdf.js", "LocalStorage"]
,
  live: "https://vaibhavresumebuilder.netlify.app/",
  code: "https://github.com/vaibhavmehta04/ResumeBuilder"
},
{
  title: "DailyDesk-To-Do Dashboard",
  description: "A modern, responsive task management dashboard that helps users organize their daily activities with ease and efficiency.",
  longDescription:
    `The To-Do Dashboard is a productivity-focused web application designed with a clean and intuitive interface. It allows users to seamlessly add, manage, and track tasks in a centralized dashboard. The application includes essential features such as a recent tasks panel, task statistics, an integrated calendar, and a notes section — all wrapped in a minimal, elegant UI.

Built for speed and clarity, the app ensures smooth user interaction, responsive design across devices, and a satisfying visual hierarchy. Perfect for students, professionals, or anyone looking to stay on top of their schedule in style.`,
  image: "/images/image.png", // Add a clean dashboard placeholder
  tech: ["React", "Tailwind CSS", "DaisyUI", "Framer Motion", "React Icons", "React Router", "Git", "GitHub"]
,
  live: "https://to-do-dashboard.netlify.app/",
  code: "https://github.com/vaibhavmehta04/To-Do-Dashboard"
}



  // Add more projects here...
];

export default projects;
