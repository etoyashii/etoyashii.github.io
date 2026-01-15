import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Download, Menu, X, Terminal } from 'lucide-react';
import LogoEnaria from './Logo_Enaria.png';
import LogoFOBO from './Logo_FindOrBlackOut.png';
import LogoHS from './Logo_HospitalSurvivor.png';
import BannerL from './Banner_Loki.png';


export default function GameplayPortfolio() {
    const [currentProject, setCurrentProject] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const profile = {
        firstName: "Emeric",
        lastName: "DEPREZ",
        description: "Étudiant passionné par le développement gameplay, je crée des expériences de jeu immersives et innovantes. Spécialisé dans la mécanique de jeu, l'IA, les systèmes de gameplay et l'UI/UX, je recherche un stage pour continuer à apprendre et contribuer à des projets ambitieux."
    };

    const projects = [
        {
            id: 1,
            title: "ENARIA - MMORPG",
            description: "Un MMORPG mélangeant le gameplay de Dofus et le lore de SAO, sur ce prjet je me suis principalement occupé des mini jeux des mini-jeux de récolte (faits uniquement en ui), ça a été ma premiere experience sur unity, j'ai vraiment adoré.",
            duration: "Temps de prod : 2 mois (j'ai rejoin le projet 2 semaines avant sa finalisation)",
            image: LogoEnaria,
            tags: ["Unity", "C#", "Game Design", "UI/UX"],
            link: "#"
        },
        {
            id: 2,
            title: "Find Or BlackOut - Jeu de cartes full UI/UX",
            description: "Une partie d'autobus forcé par la mafia, Cela nous a permis de decouvrir l'architecture MVC et de la mettre en place correctement.",
            duration: "Temps de prod : 1 semaine",
            image: LogoFOBO,
            tags: ["Unity", "C#", "MVC", "UI/UX"],
            link: "https://www.youtube.com/watch?v=LgmDVsRahhI"
        },
        {
            id: 3,
            title: "Hospital Survivor - FPS",
            description: "Un FPS en solo dans un hopital infesté de zombies, j'ai pu m'occuper des ennemies et de la map.",
            duration: "Temps de prod : 1 semaine",
            image: LogoHS,
            tags: ["Unity", "C#", "Combat System", "Animation", "VFX"],
            link: "#"
        },
        {
            id: 4,
            title: "Loki - Roguelite Topdown",
            description: "Un roguelite 3D en vue topdown dans lequel j'ai pu apprendre a me servir de l'input system d'unity, a gerer des animations et a des enemies plus complexes que sur le projet Hospital Survivor.",
            duration: "Temps de prod : 1 semaine",
            image: BannerL,
            tags: ["Unity", "C#", "Combat System", "Animation", "VFX"],
            link: "https://youtu.be/XX1g3oe4EsU?si=kzwesi74Gj2XwloR"
        }
    ];

    const skills = [
        {
            category: "Moteurs de Jeu",
            icon: "💽",
            items: ["Unity", "Unreal Engine"],
            color: "from-cyan-500 to-blue-500"
        },
        {
            category: "Langages",
            icon: "💻",
            items: ["C#", "C++", "Python", "HTML/CSS"],
            color: "from-pink-500 to-purple-500"
        },
        {
            category: "Game Design",
            icon: "🕹️",
            items: ["Prototypage", "Level Design", "Balancing", "UX"],
            color: "from-yellow-500 to-orange-500"
        },
        {
            category: "Systèmes Gameplay",
            icon: "🎮",
            items: ["Combat", "IA", "Physics",'UI/UX'],
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Outils",
            icon: "🦾",
            items: ["Git", "Blender"],
            color: "from-violet-500 to-fuchsia-500"
        },
        {
            category: "Soft Skills",
            icon: "🌃",
            items: ["Travail d'équipe", "Communication", "Créativité", "Autonomie"],
            color: "from-red-500 to-pink-500"
        }
    ];

    const nextProject = () => {
        if (isAnimating) return;
        setDirection(1);
        setIsAnimating(true);
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevProject = () => {
        if (isAnimating) return;
        setDirection(-1);
        setIsAnimating(true);
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const project = projects[currentProject];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideVertical {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100vh); }
        }
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
          .mobile-menu { display: block; }
        }
        .glitch-text:hover { animation: glitch 0.3s infinite; }
        .neon-border {
          box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, inset 0 0 5px currentColor;
        }
        .neon-border:hover {
          box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, inset 0 0 10px currentColor;
        }
        .neon-border-yellow {
          box-shadow: 0 0 5px #ff0, 0 0 10px #ff0, inset 0 0 5px #ff0;
        }
        .neon-border-yellow:hover {
          box-shadow: 0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0, inset 0 0 10px #ff0;
        }
        .neon-border-cyan {
          box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, inset 0 0 5px #0ff;
        }
        .neon-border-cyan:hover {
          box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, inset 0 0 10px #0ff;
        }
        .neon-border-pink {
          box-shadow: 0 0 5px #f0f, 0 0 10px #f0f, inset 0 0 5px #f0f;
        }
        .neon-border-pink:hover {
          box-shadow: 0 0 10px #f0f, 0 0 20px #f0f, 0 0 30px #f0f, inset 0 0 10px #f0f;
        }
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .scanline { position: relative; overflow: hidden; }
        .scanline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(transparent, rgba(0, 255, 255, 0.5), transparent);
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }
        .backdrop-blur-strong {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

            <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
            <div className="fixed inset-0 scanline pointer-events-none"></div>

            <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b-2 border-yellow-500 shadow-lg shadow-yellow-500/50">
                <nav className="container mx-auto px-6 py-4 max-w-6xl">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => scrollToSection('presentation')}
                            className="flex items-center gap-2 text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                            <Terminal size={28} className="text-yellow-400" />
                            <span className="glitch-text" style={{ textShadow: '0 0 5px #ff0' }}>PORTFOLIO</span>
                        </button>

                        <div className="desktop-nav items-center gap-6">
                            <button
                                onClick={() => scrollToSection('presentation')}
                                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium relative group"
                            >
                                <span className="relative z-10">ACCUEIL</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('projets')}
                                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group"
                            >
                                <span className="relative z-10">PROJETS</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('competences')}
                                className="text-gray-300 hover:text-pink-400 transition-colors font-medium relative group"
                            >
                                <span className="relative z-10">COMPÉTENCES</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-5 py-2 bg-pink-500 text-black font-bold uppercase hover:bg-pink-400 transition-all duration-300 neon-border-pink relative overflow-hidden group"
                            >
                                <span className="relative z-10">CONTACT</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                            </button>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="mobile-menu-btn p-2 text-yellow-400 hover:text-yellow-300 transition-colors border-2 border-yellow-500"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="mobile-menu mt-4 pb-4 space-y-3 border-t-2 border-yellow-500 pt-4">
                            <button
                                onClick={() => scrollToSection('presentation')}
                                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase font-bold"
                            >
                                ACCUEIL
                            </button>
                            <button
                                onClick={() => scrollToSection('projets')}
                                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border-l-2 border-transparent hover:border-cyan-400 transition-all uppercase font-bold"
                            >
                                PROJETS
                            </button>
                            <button
                                onClick={() => scrollToSection('competences')}
                                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 border-l-2 border-transparent hover:border-pink-400 transition-all uppercase font-bold"
                            >
                                COMPÉTENCES
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left px-4 py-2 bg-pink-500/20 text-pink-400 hover:bg-pink-500/30 border-l-2 border-pink-400 transition-all uppercase font-bold"
                            >
                                CONTACT
                            </button>
                        </div>
                    )}
                </nav>
            </header>

            <div className="relative container mx-auto px-6 py-12 max-w-6xl" style={{ zIndex: 10 }}>

                <section id="presentation" className="mb-20 scroll-mt-20">
                    <div className="flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative bg-black p-4 border-4 border-yellow-500 neon-border-yellow">
                                <Terminal size={48} className="text-yellow-400" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-6 bg-black/80 backdrop-blur-strong border-4 border-yellow-500 neon-border-yellow p-10 relative overflow-hidden">

                        <h1 className="text-6xl font-bold text-yellow-400 uppercase glitch-text" style={{
                            textShadow: '0 0 5px #ff0, 0 0 10px #ff0',
                            fontFamily: 'monospace'
                        }}>
                            {profile.firstName} {profile.lastName}
                        </h1>

                        <div className="inline-block px-6 py-2 bg-yellow-500/20 border-2 border-yellow-400 relative">
                            <p className="text-xl text-yellow-300 font-bold uppercase" style={{ fontFamily: 'monospace' }}>
                                &gt; Développeur Gameplay | En Recherche de Stage
                            </p>
                        </div>

                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed border-l-4 border-yellow-500 pl-4 text-left font-mono">
                            <span className="text-yellow-400 font-bold">&gt;&gt;</span> {profile.description}
                        </p>
                    </div>
                </section>

                <section id="projets" className="scroll-mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 uppercase" style={{
                        textShadow: '0 0 5px #0ff, 0 0 10px #0ff',
                        fontFamily: 'monospace'
                    }}>
                        <span className="border-b-4 border-cyan-500 pb-2">&lt; MES PROJETS /&gt;</span>
                    </h2>

                    <div className="relative">
                        <div className="bg-black border-4 border-cyan-500 neon-border-cyan overflow-hidden relative">
                            <div className="relative h-80 overflow-hidden bg-black">
                                <img
                                    key={project.id}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-150 hover:opacity-80 transition-opacity duration-300"
                                    style={{
                                        animation: `${direction > 0 ? 'slideInRight' : 'slideInLeft'} 0.5s ease-out`,
                                        filter: 'contrast(1.0) brightness(1.0) saturate(1.0)',
                                        mixBlendMode: 'screen'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
                                <div className="absolute inset-0" style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 255, 0.03) 3px)',
                                }}></div>
                            </div>

                            <div
                                key={`content-${project.id}`}
                                className="p-8 space-y-6 bg-black/90 backdrop-blur-strong"
                                style={{
                                    animation: 'fadeInUp 0.5s ease-out',
                                }}
                            >
                                <h3 className="text-3xl font-bold text-cyan-400 uppercase border-l-4 border-cyan-500 pl-4" style={{ fontFamily: 'monospace' }}>
                                    [ {project.title} ]
                                </h3>

                                <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-cyan-500/30 pl-4 font-mono">
                                    {project.description}
                                </p>

                                <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-cyan-500/30 pl-4 font-mono">
                                    {project.duration}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-cyan-500/10 border-2 border-cyan-400 text-cyan-300 text-sm font-bold uppercase hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 transform relative"
                                            style={{ fontFamily: 'monospace' }}
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-block px-6 py-3 bg-cyan-500 text-black font-bold uppercase hover:bg-cyan-400 transition-all duration-300 neon-border-cyan relative overflow-hidden group"
                                >
                                    <span className="relative z-10">&gt; VOIR LE PROJET_</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={prevProject}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-black border-4 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 neon-border-cyan"
                            aria-label="Projet précédent"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={nextProject}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-black border-4 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 neon-border-cyan"
                            aria-label="Projet suivant"
                        >
                            <ChevronRight size={28} />
                        </button>

                        <div className="flex justify-center gap-3 mt-8">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentProject(index)}
                                    className={`h-2 transition-all duration-300 ${
                                        index === currentProject
                                            ? 'w-12 bg-cyan-400 shadow-lg shadow-cyan-400/50'
                                            : 'w-2 bg-gray-600 hover:bg-cyan-600'
                                    }`}
                                    aria-label={`Aller au projet ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="competences" className="mt-20 scroll-mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12 text-pink-400 uppercase" style={{
                        textShadow: '0 0 5px #f0f, 0 0 10px #f0f',
                        fontFamily: 'monospace'
                    }}>
                        <span className="border-b-4 border-pink-500 pb-2">&lt; MES COMPÉTENCES /&gt;</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-black/80 backdrop-blur-strong border-4 border-pink-500 p-6 hover:border-pink-400 transition-all duration-300 hover:scale-105 neon-border-pink relative overflow-hidden"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
                                }}
                            >

                                <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-pink-500/30">
                                    <div className={`text-4xl p-3 bg-gradient-to-br ${skill.color} border-2 border-black`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-pink-400 uppercase" style={{ fontFamily: 'monospace' }}>
                                        {skill.category}
                                    </h3>
                                </div>

                                <div className="space-y-2">
                                    {skill.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors duration-200"
                                        >
                                            <div className="w-2 h-2 bg-pink-400 transform rotate-45"></div>
                                            <span className="text-sm font-mono">&gt; {item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={`mt-4 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mt-20 scroll-mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400 uppercase" style={{
                        textShadow: '0 0 5px #ff0, 0 0 10px #ff0',
                        fontFamily: 'monospace'
                    }}>
                        <span className="border-b-4 border-yellow-500 pb-2">&lt; ME CONTACTER /&gt;</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-black/80 backdrop-blur-strong border-4 border-yellow-500 neon-border-yellow p-8 md:p-12 relative">

                            <div className="text-center mb-10">
                                <p className="text-xl text-gray-300 font-mono">
                                    <span className="text-yellow-400 font-bold">&gt;&gt;</span> Vous avez un projet ou une opportunité de stage ?
                                    <br />
                                    <span className="text-yellow-400 font-bold text-2xl">N'HÉSITEZ PAS À ME CONTACTER !</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                                <a
                                    href="mailto:emeric.deprez05@gmail.com"
                                    className="group flex flex-col items-center gap-4 p-6 bg-black/80 backdrop-blur-sm border-4 border-yellow-500 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105 neon-border-yellow relative"
                                >
                                    <div className="p-4 bg-yellow-500 text-black group-hover:bg-yellow-400 transition-colors duration-300">
                                        <Mail size={32} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg mb-1 text-yellow-400 uppercase" style={{ fontFamily: 'monospace' }}>EMAIL</h3>
                                        <p className="text-xs text-gray-400 font-mono">emeric.deprez05@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/emeric-déprez-b76428298/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center gap-4 p-6 bg-black/80 backdrop-blur-sm border-4 border-cyan-500 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 neon-border-cyan relative"
                                >
                                    <div className="p-4 bg-cyan-500 text-black group-hover:bg-cyan-400 transition-colors duration-300">
                                        <Linkedin size={32} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg mb-1 text-cyan-400 uppercase" style={{ fontFamily: 'monospace' }}>LINKEDIN</h3>
                                        <p className="text-sm text-gray-400 font-mono">Emeric Déprez</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/etoyashii"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center gap-4 p-6 bg-black/80 backdrop-blur-sm border-4 border-pink-500 hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-300 hover:scale-105 neon-border-pink relative"
                                >
                                    <div className="p-4 bg-pink-500 text-black group-hover:bg-pink-400 transition-colors duration-300">
                                        <Github size={32} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg mb-1 text-pink-400 uppercase" style={{ fontFamily: 'monospace' }}>GITHUB</h3>
                                        <p className="text-sm text-gray-400 font-mono">@etoyashii</p>
                                    </div>
                                </a>

                                <a
                                    href="/chemin/vers/votre-cv.pdf"
                                    download
                                    className="group flex flex-col items-center gap-4 p-6 bg-black/80 backdrop-blur-sm border-4 border-yellow-500 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105 neon-border-yellow relative"
                                >
                                    <div className="p-4 bg-yellow-500 text-black group-hover:bg-yellow-400 transition-colors duration-300">
                                        <Download size={32} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg mb-1 text-yellow-400 uppercase" style={{ fontFamily: 'monospace' }}>CV.PDF</h3>
                                        <p className="text-sm text-gray-400 font-mono">Télécharger</p>
                                    </div>
                                </a>

                            </div>

                            <div className="text-center pt-6 border-t-4 border-yellow-500/30">
                                <p className="text-gray-400 mb-4 font-mono uppercase text-sm">[ Disponible pour un stage à partir du 11 mai]</p>
                                <div className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold text-lg uppercase neon-border-yellow relative">
                                    📅 DATE DE DISPONIBILITÉ
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <footer className="mt-16 text-center pb-8 border-t-4 border-cyan-500 pt-8">
                    <p className="text-gray-400 font-mono text-sm mb-2">
                        <span className="text-cyan-400">&gt;</span> © 2025 {profile.firstName} {profile.lastName}
                        <span className="text-cyan-400"> - PORTFOLIO Emeric DEPREZ</span>
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                        <span className="text-pink-500">[</span> FAIT AVEC REACT & TAILWIND CSS <span className="text-pink-500">]</span>
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 animate-pulse"></div>
                        <div className="w-2 h-2 bg-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
