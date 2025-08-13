// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const HireMe = () => {
//     return (
//         <section
//             id="hire-me"
//             className="relative py-20 overflow-hidden h-full w-full"
//             style={{
//                 background:
//                 "linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 60, 80, 0.95))",
//             }}
//         >
//             {/* Decorative background elements */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//                 <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
//                 <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse" />
//             </div>

//             {/* Content */}
//             <div className="relative max-w-4xl mx-auto px-6 text-center">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ amount: 0.5 }}
//                     exit={{ opacity: 0, y: 30 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl md:text-5xl font-bold text-white mb-4"
//                 >
//                     Let's Work Together
//                 </motion.h2>

//                 <motion.p
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ amount: 0.5 }}
//                     exit={{ opacity: 0, y: 30 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
//                 >
//                     Whether you have a project in mind, need a developer for your team, or
//                     just want to say hello, I’m always open to new opportunities and
//                     collaborations.
//                 </motion.p>

//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ amount: 0.5 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                 <a
//                     href="mailto:rafael@example.com"
//                     className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-full shadow-lg transition-transform transform hover:scale-105"
//                 >
//                     Hire Me
//                 </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default HireMe;

"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const HireMe = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .sendForm(
            "service_8qascwa", // Ganti dengan Service ID EmailJS kamu
            "template_iechwdf", // Ganti dengan Template ID EmailJS kamu
            formRef.current,
            "KWY-yp5pQbUbdEz8V" // Ganti dengan Public Key EmailJS kamu
        )
        .then(
            () => {
            setLoading(false);
            setDone(true);
            e.target.reset();
            },
            (error) => {
            console.log(error.text);
            setLoading(false);
            }
        );
    };

    return (
        <section
            id="hire-me"
            className="relative py-20 overflow-hidden w-full h-full"
            style={{
                background:
                "linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 60, 80, 0.95))",
        }}
        >
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
            <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
            Hire Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            >
            Have a project in mind or need a developer? Fill out the form below
            and I’ll get back to you as soon as possible.
            </motion.p>

            {/* Form */}
            <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 text-left"
            >
            <div className="mb-4">
                <label className="block text-sm text-   gray-300 mb-2">Name</label>
                <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-2 rounded font-medium transition-transform transform hover:scale-105 cursor-pointer"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>

            {done && (
                <p className="text-green-400 text-sm mt-3">
                ✅ Your message has been sent successfully!
                </p>
            )}
            </motion.form>
        </div>
        </section>
    );
};

export default HireMe;
