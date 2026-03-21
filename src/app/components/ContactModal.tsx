"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
        {isOpen && (
            <>
                {/* Overlay */}
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50 px-4"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                >
                    <div
                        className="bg-zinc-900 text-white w-full max-w-lg rounded-2xl p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer text-2xl font-bold"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="input p-1 border border-zinc-400 rounded-lg" />
                            <input type="email" placeholder="Email" className="input p-1 border border-zinc-400 rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="input p-1 border border-zinc-400 rounded-lg" />
                            <input type="text" placeholder="Subject" className="input p-1 border border-zinc-400 rounded-lg" />
                            <textarea placeholder="Message" rows={4} className="input p-1 border border-zinc-400 rounded-lg" />
                            <button
                            type="submit"
                            className="mt-2 bg-white text-black py-3 rounded-lg font-semibold hover:bg-zinc-400 transition cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
  );
}