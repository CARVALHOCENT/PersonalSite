

export const portfolioData = {
    name: "Salvador Carvalho",
    greeting: "Saudações!!!",
    tagline: "3rd Year BSc Electrical and Computer Engineering",

    about: {
        description: "",
        skills: []
    },

    projects: [
        {
            id: 1,
            title: "Robotic Arm",
            description: "A 5 Degree of Freedom Robot able to be controlled to several positions using servo motors",
            image: "/images/RobotArm.webp",
            links: [
                { label: "Report", url: "https://github.com/CARVALHOCENT/RobotArm/blob/main/Projeto_Fisica_e_API.pdf" },
                { label: "GitHub", url: "https://github.com/CARVALHOCENT/RobotArm" }
            ]
        },
        {
            id: 2,
            title: "CS2-Discord Bot",
            description: "A custom Discord Bot for a gaming community.Featuring: CS2 Server browser using A2S to query live servers status, ping and player count also a Faceit API integration that fetches players stats and infos. ",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800",
            links: [
                { label: "Github", url: "https://github.com/CARVALHOCENT/Discord-Bot-CS2" }
            ]
        },
        {
            id: 3,
            title: "KeyLogger",
            description: "A Python-based keylogger optimized for Arch Linux (Hyprland/Wayland). Focused on low-level input hooking and data normalization for educational security research.",
            image: "/images/Keylogger.webp",
            links: [
                { label: "Github", url: "https://github.com/CARVALHOCENT/Keylogger" }
            ]
        }
    ],

    contact: {
        email: "salvadorcarvalho2005@gmail.com",
        github: "https://github.com/CARVALHOCENT",
        linkedin: "https://www.linkedin.com/in/salvadordesousacarvalho/",
        cvUrl: "/Salvador_Carvalho_CV.pdf"
    },

    videos: {
        legoSpace: "/videos/Lego.mp4"
    }
};
