import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Briefcase, Globe } from 'lucide-react';
import HeroScene from '../components/HeroScene';

const Home: React.FC = () => {
    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <HeroScene />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-circuit font-mono text-sm tracking-[0.2em] mb-4">IEEE TEMS SRM CHAPTER</p>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            ENGINEERING <br />
                            <span className="text-gold">MANAGEMENT</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
                            Bridging the gap between technical expertise and strategic leadership.
                            We cultivate the next generation of engineering managers through disruptive innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://www.ieee.org/membership/join"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gold text-black px-8 py-4 rounded-full font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-white transition-colors"
                            >
                                JOIN THE CHAPTER <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                href="#/projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-bold tracking-wide text-white hover:bg-white/10 transition-colors"
                            >
                                VIEW PROJECTS
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-0 w-full text-center">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-gray-500 text-xs font-mono uppercase tracking-widest"
                    >
                        Scroll to Explore
                    </motion.div>
                </div>
            </div>

            {/* About Us Section */}
            <section className="relative py-32 px-4 bg-background border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-circuit font-mono text-sm tracking-[0.2em] mb-6">WHO WE ARE</h2>
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                FUSING <span className="text-gold">VISION</span> WITH <span className="text-gray-500">EXECUTION</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                IEEE TEMS SRM is a dynamic community dedicated to bridging the critical gap between engineering prowess and business acumen. In a world driven by rapid technological advancement, technical skills alone are not enough.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We empower students with the leadership strategies, financial insights, and project management methodologies needed to transform innovative ideas into scalable realities.
                            </p>

                            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-1">100+</h4>
                                    <span className="text-xs font-mono text-gray-500 uppercase">Members</span>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-1">2+</h4>
                                    <span className="text-xs font-mono text-gray-500 uppercase">Events</span>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-1">1+</h4>
                                    <span className="text-xs font-mono text-gray-500 uppercase">Startups</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full pointer-events-none" />
                            <div className="relative bg-surface border border-white/10 p-8 md:p-12 rounded-2xl overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <Globe size={120} className="text-white" strokeWidth={0.5} />
                                </div>

                                <div className="space-y-8 relative z-10">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white/5 p-3 rounded-lg text-gold">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Innovation Management</h4>
                                            <p className="text-gray-500 text-sm">Learning to manage the lifecycle of innovation from concept to product.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white/5 p-3 rounded-lg text-circuit">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Strategic Leadership</h4>
                                            <p className="text-gray-500 text-sm">Developing the soft skills and strategic foresight to lead technical teams.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white/5 p-3 rounded-lg text-green-400">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Entrepreneurship</h4>
                                            <p className="text-gray-500 text-sm">Providing resources and mentorship for aspiring student entrepreneurs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
