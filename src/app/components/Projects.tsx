"use client";

import { motion } from "framer-motion";

export default function Projects({ref}:any) {
  return (
    <section id="projects" ref={ref} className="py-32 px-6">
        <h2 className="text-4xl text-center font-bold mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <h3 className="text-xl font-semibold">Stekya</h3>
                <p className="text-gray-400 mt-2">
                    Developed a complete restaurant website using WordPress and Elementor, including custom-designed pages such as Orders, Reservations, Menu, and About.
                </p>
                <p className="text-gray-400 mt-2">
                    Focused on user experience, responsive design, and conversion optimization to support online orders and bookings.
                </p>
                <p className="text-gray-400 mt-2">
                    Live Site: <a href="https://stekya.com" className="text-blue-500 hover:underline" target="_blank">Click Here</a>
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <motion.img
                        src="/wordpress_blue_logo.png"
                        alt="Logo WordPress"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/woocommerce_logo.png"
                        alt="Logo WooCommerce"
                        className="w-20 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/elementor_logo.png"
                        alt="Logo Elementor"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </motion.div>

            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <h3 className="text-xl font-semibold">Metro Design Build Miami</h3>
                <p className="text-gray-400 mt-2">
                    Redesigned and rebuilt the homepage from scratch using WordPress and Elementor, improving layout, structure, and user experience.
                </p>
                <p className="text-gray-400 mt-2">
                    Developed multiple high-converting landing pages for paid advertising campaigns, focused on lead generation and conversion optimization.
                </p>
                <ul className="mt-2 text-gray-400 text-sm space-y-1">
                    <li>• <a href="https://mdbmia.com/design-build-system/" className="text-blue-300 hover:underline" target="_blank">Design Build System</a></li>
                    <li>• <a href="https://mdbmia.com/condo-renovation/" className="text-blue-300 hover:underline" target="_blank">Condo Renovation</a></li>
                    <li>• <a href="https://mdbmia.com/development/" className="text-blue-300 hover:underline" target="_blank">Development</a></li>
                    <li>• <a href="https://mdbmia.com/custom-closets/" className="text-blue-300 hover:underline" target="_blank">Custom Closets</a></li>
                </ul>
                <p className="text-gray-400 mt-2">
                    Live Site: <a href="https://mdbmia.com" className="text-blue-500 hover:underline" target="_blank">Click Here</a>
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <motion.img
                        src="/wordpress_blue_logo.png"
                        alt="Logo WordPress"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/elementor_logo.png"
                        alt="Logo Elementor"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/meta_logo.png"
                        alt="Logo Meta Pixel"
                        className="w-16 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/google_logo.png"
                        alt="Logo Google Site Kit"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/clarity_logo.png"
                        alt="Logo Microsoft Clarity"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/zapier_logo.png"
                        alt="Logo Zapier"
                        className="w-20 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/brevo_logo.png"
                        alt="Logo Brevo"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </motion.div>

            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <h3 className="text-xl font-semibold">AI Lead Qualification System</h3>
                <p className="text-gray-400 mt-2">
                    Developed a multi-step lead qualification tool using Next.js, combining rule-based logic with AI evaluation to score and categorize leads based on project scope, budget, and complexity.
                </p>
                <p className="text-gray-400 mt-2">
                    Integrated OpenAI API for dynamic scoring, with a fallback system to ensure reliability when API limits are reached.
                </p>
                <p className="text-gray-400 mt-2">
                    Includes real-time evaluation, conditional logic, and automated lead classification.
                </p>
                <p className="text-gray-400 mt-2">
                    Live Site: <a href="https://quiz-form-ejxnpegod-mrcocois-projects.vercel.app/" className="text-blue-500 hover:underline" target="_blank">Click Here</a>
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <motion.img
                        src="/nodejs_logo.png"
                        alt="Logo NodeJS"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/nextjs_logo.png"
                        alt="Logo Next.js"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/react_logo.png"
                        alt="Logo ReactJS"
                        className="w-10 h-10 "
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/typescript_logo.png"
                        alt="Logo TypeScript"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/openai_logo.png"
                        alt="Logo OpenAI"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
                
            </motion.div>

            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <h3 className="text-xl font-semibold">SmarTask</h3>
                <p className="text-gray-400 mt-2">
                    Developed a full-stack task and scheduling application using Node.js and Express, featuring user authentication, calendar management, and automated workflows.
                </p>
                <p className="text-gray-400 mt-2">
                    Implemented secure authentication using JWT and Google OAuth, integrated SQL Server database, and built email notification system with scheduled tasks using cron jobs.
                </p>
                <p className="text-gray-400 mt-2">
                    Includes session management, API endpoints, and dynamic calendar interface for task organization.
                </p>
                <p className="text-gray-400 mt-2">
                    Live Site: <a href="https://github.com/marcosvizio/SmarTask" className="text-blue-500 hover:underline" target="_blank">Click Here</a>
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <motion.img
                        src="/nodejs_logo.png"
                        alt="Logo NodeJS"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/expressjs_logo.png"
                        alt="Logo Express.js"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/jwt_logo.jpg"
                        alt="Logo JSON Web Tokens"
                        className="w-20 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/passport_logo.png"
                        alt="Logo Passport.js"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/sqlserver_logo.png"
                        alt="Logo SQL Server"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/nodemailer_logo.webp"
                        alt="Logo Nodemailer"
                        className="w-12 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </motion.div>
            
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <h3 className="text-xl font-semibold">Double K Auditions System</h3>
                <p className="text-gray-400 mt-2">
                    Developed a web application for managing audition submissions using Node.js and Express.
                </p>
                <p className="text-gray-400 mt-2">
                    Implemented file upload functionality for media submissions, integrated MongoDB for data storage, and built server-side rendering using Handlebars.
                </p>
                <p className="text-gray-400 mt-2">
                    Includes email notifications and session management for handling user submissions and communication.
                </p>
                <p className="text-gray-400 mt-2">
                    Live Site: <a href="https://double-k-audiciones.onrender.com/" className="text-blue-500 hover:underline" target="_blank">Click Here</a>
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <motion.img
                        src="/nodejs_logo.png"
                        alt="Logo NodeJS"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/expressjs_logo.png"
                        alt="Logo Express.js"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/mongodb_logo.png"
                        alt="Logo MongoDB"
                        className="w-10 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/nodemailer_logo.webp"
                        alt="Logo Nodemailer"
                        className="w-12 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/handlebars_logo.webp"
                        alt="Logo Handlebars"
                        className="w-20 h-10 object-cover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  );
}