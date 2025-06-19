const projects = [
  {
    title: "Perosnal Portfolio",
    description: "An interactive 3D personal portfolio using Three.js, GSAP, and scroll animations.",
    longDescription:
      "This portfolio website is a fully custom-crafted digital showcase designed to reflect my creative and technical capabilities as a full-stack developer. Built with React, GSAP, and Tailwind CSS, it features immersive scroll animations, horizontal project showcases, animated skill reveal, and a 3D-inspired aesthetic. The hero section includes dynamic name loops, background icon animations, and a strong typographic layout, while each section — from experience to contact — is styled for clarity and impact. The site includes a smooth scroll loader, responsive layout, and project modals for deep dives into my work. Designed for recruiters, collaborators, and clients, the website combines frontend artistry with structured backend-ready scalability.",
    image: "/images/portfolio.png",
    tech: ["React", "Three.js", "GSAP"],
    live: "https://your-portfolio-link.com",
    code: "https://github.com/yourgithub/portfolio"
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
  description: "A professional granite and marble business website with interactive animations and dynamic catalogue.",
  longDescription:
    "Vaibhav Granites India is a modern business website built to showcase premium granite and marble collections. Developed using React, GSAP, and MongoDB, it includes animated landing sections, a dynamic 'About Us' gallery powered by Cloudinary, and a product catalogue connected to a real-time database. The site emphasizes performance, trust, and seamless user experience, tailored to reflect the brand’s elegance and credibility.",
  image: "/images/vaibhav_granite.png", // Make sure this image exists in public/images
  tech: ["React", "GSAP", "MongoDB", "Cloudinary", "Framer Motion"],
  live: "https://vaibhavgranites.com", // replace with your actual live link
  code: "https://github.com/yourgithub/vaibhav-granites" // optional or keep private
},
{
  title: "AI-Powered Resume Analyzer",
  description: "An intelligent tool that analyzes resumes and gives job-fit scores using OpenAI's GPT API.",
  longDescription:
    "This project simulates a smart resume analyzer that reads PDFs, extracts key data, and compares it against job descriptions using AI. Built with React for UI and a mock backend, it includes animated transitions, keyword highlight overlays, and modal-based feedback. Designed to demo how AI can improve hiring workflows.",
  image: "/images/smr.png", // Add a placeholder image
  tech: ["React", "Framer Motion", "OpenAI API", "Express"],
  live: "#",
  code: "#"
},
{
  title: "Smart Home Dashboard UI",
  description: "A futuristic dashboard interface for controlling IoT home devices in real-time.",
  longDescription:
    "This UI concept features a modern smart home control panel where users can interact with lights, temperature, and security feeds. The design includes glowing neon elements, GSAP scroll animations, toggle switch simulations, and live data mockups. Though backend is mocked, the focus is on front-end interactivity and visual flair.",
  image: "/images/smart_home.jpg", // Add a clean dashboard placeholder
  tech: ["React", "GSAP", "Tailwind CSS", "Chart.js"],
  live: "#",
  code: "#"
}



  // Add more projects here...
];

export default projects;
