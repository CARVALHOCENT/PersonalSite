

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
            title: "Forest Fire Detection (PIC)",
            description: "Integrated monitoring system using a YOLO-based AI model for real-time smoke identification and Meshtastic (LoRa) for long-range, off-grid communication. Features a custom unified dashboard for telemetry and alerts.",
            image: "https://images.unsplash.com/photo-1600181958051-bd8544360312?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            links: [
                { label: "Website", url: "https://web.tecnico.ulisboa.pt/~ist1109562/equipa2/" }
            ]
        },
        {
            id: 2,
            title: "Distributed Resource Sharing (RC)",
            description: "A concurrent distributed system in C implementing peer-to-peer and client-server architectures with TCP/UDP socket programming for reliable data transfer and resource discovery.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
            links: [
                { label: "GitHub", url: "https://github.com/CARVALHOCENT/Computer-Networks-and-the-Internet" }
            ]
        },
        {
            id: 3,
            title: "Image Watermark Processor",
            description: "Privacy-focused React application for batch image watermarking and PDF generation. Performs 100% client-side processing via Canvas API and jsPDF to ensure data security.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
            links: [
                { label: "GitHub", url: "https://github.com/CARVALHOCENT/WatermarkApp" }
            ]
        },
        {
            id: 4,
            title: "Robotic Arm",
            description: "A 5-DOF robotic arm control system using Arduino and C++, featuring a Serial interface for real-time joint manipulation and kinematic safety constraints.",
            image: "/images/RobotArm.webp",
            links: [
                { label: "Report", url: "https://github.com/CARVALHOCENT/RobotArm/blob/main/Projeto_Fisica_e_API.pdf" },
                { label: "GitHub", url: "https://github.com/CARVALHOCENT/RobotArm" }
            ]
        },
        {
            id: 5,
            title: "CS2-Discord Bot",
            description: "Custom Discord Bot using discord.py and Faceit API. Features real-time server status via A2S protocol, Elo tracking, and match statistics retrieval.",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800",
            links: [
                { label: "Github", url: "https://github.com/CARVALHOCENT/Discord-Bot-CS2" }
            ]
        },
        {
            id: 6,
            title: "KeyLogger",
            description: "A Python-based keylogger optimized for Arch Linux. Focused on low-level input hooking and data normalization for educational security research.",
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
