import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin, Clock, CalendarPlus } from 'lucide-react';
import { Event } from '../types';
import { EVENTS } from '../data';

const Events: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-bold mb-16 font-mono text-white"
            >
                TIMELINE <span className="text-gold">/ EVENTS</span>
            </motion.h2>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-16">
                {EVENTS.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 80, rotate: 3 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: index * 0.15 }}
                        className="relative pl-8 md:pl-16 cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 ${event.status === 'upcoming' ? 'bg-gold border-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-background border-gray-600'}`} />

                        <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-gold/30 transition-all group hover:bg-white/10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <span className="text-circuit font-mono text-sm tracking-wider mb-2 md:mb-0">{event.date}</span>
                                <span className={`text-xs px-3 py-1 rounded-full border ${event.status === 'upcoming' ? 'border-green-500/50 text-green-400' : 'border-gray-500/50 text-gray-500'}`}>
                                    {event.status.toUpperCase()}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{event.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-4">{event.description}</p>
                            <div className="flex items-center text-sm text-gold font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                VIEW DETAILS <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0f0f0f] border border-gold/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                        >
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`text-xs px-3 py-1 rounded-full border font-mono tracking-wider ${selectedEvent.status === 'upcoming' ? 'border-green-500/50 text-green-400 bg-green-500/10' : 'border-gray-500/50 text-gray-500 bg-gray-500/10'}`}>
                                        {selectedEvent.status.toUpperCase()}
                                    </span>
                                    <span className="text-circuit font-mono text-sm">{selectedEvent.date}</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{selectedEvent.title}</h3>

                                <div className="flex flex-col md:flex-row gap-6 mb-8 text-sm text-gray-300">
                                    {selectedEvent.time && (
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-gold" />
                                            <span>{selectedEvent.time}</span>
                                        </div>
                                    )}
                                    {selectedEvent.location && (
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-gold" />
                                            <span>{selectedEvent.location}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="h-px w-full bg-white/10 mb-8" />

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 text-lg leading-relaxed">{selectedEvent.fullDescription || selectedEvent.description}</p>
                                </div>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                    {selectedEvent.status === 'upcoming' ? (
                                        <>
                                            {selectedEvent.registrationLink ? (
                                                <a
                                                    href={selectedEvent.registrationLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 flex-1"
                                                >
                                                    REGISTER NOW <ArrowRight size={18} />
                                                </a>
                                            ) : (
                                                <button className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 flex-1">
                                                    REGISTER NOW <ArrowRight size={18} />
                                                </button>
                                            )}
                                            {selectedEvent.googleCalendarUrl && (
                                                <a
                                                    href={selectedEvent.googleCalendarUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white/10 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 flex-1"
                                                >
                                                    ADD TO CALENDAR <CalendarPlus size={18} />
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 w-full md:w-auto cursor-not-allowed opacity-50">
                                            VIEW RECAP
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Events;
