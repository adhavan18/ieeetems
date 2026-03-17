import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { TEAM_MEMBERS, ADVISORS } from '../data';

const Team: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4 max-w-7xl mx-auto">
            <div className="mb-12">
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6 font-mono text-white"
                >
                    OUR <span className="text-gold">TEAM</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-3xl text-lg leading-relaxed"
                >
                    Meet the dedicated professionals who lead our IEEE TEMS chapter. Our team brings together diverse expertise in technology, engineering, and management to serve our community.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                {TEAM_MEMBERS.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`relative group rounded-xl overflow-hidden border border-white/10 bg-surface
              ${member.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${member.size === 'medium' ? 'md:col-span-2' : ''}
              ${member.size === 'small' ? 'md:col-span-1' : ''}
            `}
                    >
                        {/* Image & Gradient */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                style={{ objectPosition: member.imagePosition || 'center' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                        </div>

                        {/* Hover Cyber Overlay */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-colors z-20 pointer-events-none rounded-xl" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                            <span className="text-circuit text-xs font-mono uppercase tracking-widest mb-1 block">{member.role}</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors">{member.bio}</p>

                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {member.socials.linkedin && (
                                    <motion.a href={member.socials.linkedin} whileHover={{ scale: 1.2, color: '#D4AF37' }} className="text-white">
                                        <Linkedin size={20} />
                                    </motion.a>
                                )}
                                {member.socials.github && (
                                    <motion.a href={member.socials.github} whileHover={{ scale: 1.2, color: '#D4AF37' }} className="text-white">
                                        <Github size={20} />
                                    </motion.a>
                                )}
                                {member.socials.twitter && (
                                    <motion.a href={member.socials.twitter} whileHover={{ scale: 1.2, color: '#D4AF37' }} className="text-white">
                                        <Twitter size={20} />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Advisors Section */}
            <div className="mt-24 mb-12">
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6 font-mono text-white"
                >
                    OUR <span className="text-gold">ADVISORS</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-3xl text-lg leading-relaxed"
                >
                    The visionaries who laid the foundation and continue to guide our chapter's journey.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ADVISORS.map((advisor, index) => (
                    <motion.div
                        key={advisor.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group rounded-2xl overflow-hidden border border-gold/20 bg-surface h-[400px]"
                    >
                        {/* Image & Gradient */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={advisor.image}
                                alt={advisor.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95" />
                        </div>

                        {/* Hover Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors z-20 pointer-events-none rounded-2xl" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                            <span className="text-gold text-xs font-mono uppercase tracking-widest mb-2 block">{advisor.role}</span>
                            <h3 className="text-3xl font-bold text-white mb-3">{advisor.name}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">{advisor.bio}</p>

                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {advisor.socials.linkedin && (
                                    <motion.a href={advisor.socials.linkedin} whileHover={{ scale: 1.2, color: '#D4AF37' }} className="text-white">
                                        <Linkedin size={24} />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;
