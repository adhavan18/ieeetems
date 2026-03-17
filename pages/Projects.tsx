import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl"
            >
                {/* Animated Icon */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 bg-gold/10 border border-gold/30 rounded-2xl flex items-center justify-center mx-auto">
                        <Rocket className="text-gold" size={48} />
                    </div>
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
                    <span className="text-gold">INNOVATION</span> / LAB
                </h1>

                {/* Coming Soon Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block mb-6"
                >
                    <span className="px-4 py-2 bg-circuit/10 border border-circuit/30 rounded-full text-circuit font-mono text-sm tracking-widest">
                        COMING SOON
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-lg leading-relaxed mb-10"
                >
                    Our project showcase is under construction. We're curating an impressive collection of innovative projects
                    from our talented members. Check back soon to explore groundbreaking work in technology and engineering management.
                </motion.p>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-gold/30 transition-all"
                    >
                        <ArrowLeft size={18} />
                        BACK TO HOME
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;
