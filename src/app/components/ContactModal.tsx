"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

    const handleSubmit = (e: any) => {
        
        e.preventDefault();

        setStatus("loading");
        
        emailjs.send(
            "service_uo5ys1p",
            "template_zn1rc7q",
            {
            name,
            email,
            phone,
            subject,
            message,
            },
            "mObZo3f4G59WTTIV7"
        )
        .then(() => {
            setStatus("success");

            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
                onClose();
                setStatus("idle");
            }, 1500);
        })
        .catch(() => {
            setStatus("error");
        });

    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle");

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

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input type="text" placeholder="Name" value={name} className="input p-1 border border-zinc-400 rounded-lg" onChange={(e) => setName(e.target.value)} />
                                <input type="email" placeholder="Email" value={email}  className="input p-1 border border-zinc-400 rounded-lg" onChange={(e) => setEmail(e.target.value)} />
                                <input type="tel" placeholder="Phone Number" value={phone} className="input p-1 border border-zinc-400 rounded-lg" onChange={(e) => setPhone(e.target.value)} />
                                <input type="text" placeholder="Subject" value={subject} className="input p-1 border border-zinc-400 rounded-lg" onChange={(e) => setSubject(e.target.value)} />
                                <textarea placeholder="Message" rows={4} value={message} className="input p-1 border border-zinc-400 rounded-lg" onChange={(e) => setMessage(e.target.value)} />
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="mt-2 bg-white text-black py-3 rounded-lg font-semibold hover:bg-zinc-400 transition cursor-pointer disabled:opacity-50"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>

                                {status === "success" && (
                                    <p className="text-green-400 text-sm">Message sent successfully!</p>
                                )}

                                {status === "error" && (
                                    <p className="text-red-400 text-sm">Something went wrong ❌</p>
                                )}

                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}