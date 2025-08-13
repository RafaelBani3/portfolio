// 'use client';

// import { motion } from 'framer-motion';
// import { FaDownload } from 'react-icons/fa';
// import ProfileCard from './ProfileCard/ProfileCard';
// import Link from 'next/link';
// import { Button } from './ui/button';
// import { FiDownload } from 'react-icons/fi';

// export default function AboutSection() {
//   return (

//     <section id="about" className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#19222D]">
//         <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
//             {/* Profile Card - Kiri */}
//             <div className="relative w-full md:w-1/2 flex justify-center">
//                 <div className="absolute -z-10 w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
//                 <ProfileCard 
//                     name="Rafael Gerhard Bani"
//                     title="Fullstack Developer"
//                     handle="rafaelbani"
//                     status="Online"
//                     contactText="Contact Me"
//                     avatarUrl="/profile.jpeg"
//                     showUser Info={true}
//                     enableTilt={true}
//                     enableMobileTilt={false}
//                     onContactClick={() => alert("Let's collaborate!")}
//                 />
//             </div>

//             {/* Teks - Kanan */}
//             <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
//                 <h2 className="text-4xl font-bold text-[#00BCFF]">HI!, I'm Rafael</h2>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                     a passionate Fullstack Developer who loves turning ideas into beautiful, functional, and efficient digital experiences.
//                 </p>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                     With hands-on experience in <span className="text-white">React.js</span>, <span className="text-white">Laravel</span>, <span className="text-white">Tailwind CSS</span>, and <span className="text-white">MySQL</span>, I specialize in crafting responsive websites and intuitive UI/UX interfaces that feel just right.
//                 </p>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                     I'm always exploring new tools and frameworks like <span className="text-white">Next.js</span> and <span className="text-white">Figma</span> to push my creative and technical boundaries further.
//                 </p>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                     Let’s build something awesome together. 🚀
//                 </p>

//                 {/* Call to Action Buttons */}
//                 <div className="flex justify-center md:justify-start gap-4 mt-6">
//                     <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition text-white">
//                         View My Work
//                     </Button>
//                     <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition">
//                         <FiDownload />
//                         Download CV
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     </section>

//   );
// }

// 'use client';

// import { motion } from 'framer-motion';
// import { FiDownload } from 'react-icons/fi';
// import ProfileCard from './ProfileCard/ProfileCard';
// import { Button } from './ui/button';

// // Variants untuk animasi masuk & keluar
// const leftVariant = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//   exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: 'easeIn' } }
// };

// const rightVariant = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
//   exit: { opacity: 0, x: 100, transition: { duration: 0.5, ease: 'easeIn' } }
// };

// const buttonVariant = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.6 } },
//   exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeIn' } }
// };

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#19222D]"
//     >
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
//         {/* Profile Card - Kiri */}
//         <motion.div
//           className="relative w-full md:w-1/2 flex justify-center"
//           variants={leftVariant}
//           initial="hidden"
//           whileInView="visible"
//           exit="exit"
//           viewport={{ amount: 0.3, once: false }}
//         >
//           <div className="absolute -z-10 w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
//           <ProfileCard
//             name="Rafael Gerhard Bani"
//             title="Fullstack Developer"
//             handle="rafaelbani"
//             status="Online"
//             contactText="Contact Me"
//             avatarUrl="/profile.jpeg"
//             showUserInfo={true}
//             enableTilt={true}
//             enableMobileTilt={false}
//             onContactClick={() => alert("Let's collaborate!")}
//           />
//         </motion.div>

//         {/* Teks - Kanan */}
//         <motion.div
//           className="w-full md:w-1/2 text-center md:text-left space-y-6"
//           variants={rightVariant}
//           initial="hidden"
//           whileInView="visible"
//           exit="exit"
//           viewport={{ amount: 0.3, once: false }}
//         >
//           <h2 className="text-4xl font-bold text-[#00BCFF]">HI!, I'm Rafael</h2>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             a passionate Fullstack Developer who loves turning ideas into beautiful, functional, and efficient digital experiences.
//           </p>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             With hands-on experience in <span className="text-white">React.js</span>, <span className="text-white">Laravel</span>, <span className="text-white">Tailwind CSS</span>, and <span className="text-white">MySQL</span>, I specialize in crafting responsive websites and intuitive UI/UX interfaces that feel just right.
//           </p>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             I'm always exploring new tools and frameworks like <span className="text-white">Next.js</span> and <span className="text-white">Figma</span> to push my creative and technical boundaries further.
//           </p>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             Let’s build something awesome together. 🚀
//           </p>

//           {/* Call to Action Buttons */}
//           <motion.div
//             className="flex justify-center md:justify-start gap-4 mt-6"
//             variants={buttonVariant}
//             initial="hidden"
//             whileInView="visible"
//             exit="exit"
//             viewport={{ amount: 0.3, once: false }}
//           >
//             <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition text-white">
//               View My Work
//             </Button>
//             <Button
//               variant="outline"
//               className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition"
//             >
//               <FiDownload />
//               Download CV
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import ProfileCard from './ProfileCard/ProfileCard';
import { Button } from './ui/button';
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Variants animasi
const leftVariant = {
  hidden: { opacity: 0, x: -50 }, // kurangi offset supaya gak overflow
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: 'easeIn' } }
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 }, // sama, jangan terlalu jauh
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5, ease: 'easeIn' } }
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.6 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } }
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#19222D] overflow-x-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Card - Kiri */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.3, once: false }}
        >
          <div className="absolute -z-10 w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 rounded-full blur-3xl opacity-60 animate-pulse overflow-hidden"></div>
            <ProfileCard
              name="Rafael Gerhard Bani"
              title="Fullstack Developer"
              handle="rafaelbani"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profile.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => alert("Let's collaborate!")}
            />
        </motion.div>

        {/* Teks - Kanan */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.3, once: false }}
        >
          <h2 className="text-4xl font-bold text-[#00BCFF]">HI!, I'm Rafael</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            a passionate Fullstack Developer who loves turning ideas into beautiful, functional, and efficient digital experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            With hands-on experience in <span className="text-white">React.js</span>, <span className="text-white">Laravel</span>, <span className="text-white">Tailwind CSS</span>, and <span className="text-white">MySQL</span>, I specialize in crafting responsive websites and intuitive UI/UX interfaces that feel just right.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm always exploring new tools and frameworks like <span className="text-white">Next.js</span> and <span className="text-white">Figma</span> to push my creative and technical boundaries further.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Let’s build something awesome together. 🚀
          </p>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-6"
              variants={buttonVariant}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ amount: 0.3, once: false }}
            >
              {/* Tombol */}
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <a href="#project">
                  <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition text-white">
                    View My Work
                  </Button> 
                </a>
                
                <a  
                  href="/CV - Rafael Gerhard Bani - EN.pdf" 
                  download="RafaelBani_CV.pdf"
                >
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition"
                  >
                    <FiDownload />
                    Download CV
                  </Button>
                </a>
              </div>

              {/* Icon Sosmed */}
              <div className="flex gap-4 justify-center md:justify-start text-white text-2xl mt-2">
                <a 
                  href="https://www.linkedin.com/in/rafaelbani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0A66C2] transition"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/RafaelBani3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
