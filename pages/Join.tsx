import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, ChevronRight, Check } from 'lucide-react';

const Join: React.FC = () => {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        department: '',
        interest: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="min-h-screen pt-24 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">INITIATE <span className="text-gold">SEQUENCE</span></h2>
                    <p className="text-gray-400">Join the elite management cohort of SRM.</p>
                </div>

                <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-gold"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    <AnimatePresence mode='wait'>
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><User size={20} className="text-circuit" /> Identity Verification</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">SRM Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-colors"
                                            placeholder="jd1234@srmist.edu.in"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button onClick={nextStep} className="bg-gold text-black px-6 py-2 rounded-lg font-bold hover:bg-white transition-colors flex items-center gap-2">
                                        NEXT <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><Briefcase size={20} className="text-circuit" /> Academic Profile</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Department</label>
                                        <select
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-colors appearance-none"
                                        >
                                            <option value="">Select Department</option>
                                            <option value="CSE">Computer Science</option>
                                            <option value="ECE">Electronics & Comm.</option>
                                            <option value="MECH">Mechanical</option>
                                            <option value="EEE">Electrical</option>
                                            <option value="OTHER">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Primary Interest</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Product Mgmt', 'Finance', 'Logistics', 'HR', 'Marketing', 'Tech Lead'].map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => setFormData({ ...formData, interest: opt })}
                                                    className={`cursor-pointer border rounded-lg p-3 text-center text-sm transition-all ${formData.interest === opt ? 'border-gold bg-gold/10 text-gold' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <button onClick={prevStep} className="text-gray-400 hover:text-white transition-colors">Back</button>
                                    <button onClick={nextStep} className="bg-gold text-black px-6 py-2 rounded-lg font-bold hover:bg-white transition-colors flex items-center gap-2">
                                        NEXT <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 border border-green-500/50">
                                    <Check size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted</h3>
                                <p className="text-gray-400 mb-8">Welcome to the waiting list. Our recruitment team will analyze your profile and contact you shortly.</p>
                                <button
                                    onClick={() => navigate('/')}
                                    className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all"
                                >
                                    RETURN HOME
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Join;
