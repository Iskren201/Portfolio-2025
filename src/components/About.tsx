import React from 'react';
import { motion } from 'framer-motion';
import { revealOnScroll, staggerContainer, staggerItem, slideInFromLeft, slideInFromRight } from '../lib/animations';

const About: React.FC = () => {
  const skills = [
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'AngularJS', icon: '🅰️' },
    { name: 'NodeJS & NestJS', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'TypeORM', icon: '🗄️' },
    { name: 'CSS/SCSS', icon: '🎨' },
    { name: 'HTML', icon: '🌐' },
  ];

  const experiences = [
    {
      year: '2025 - Present',
      title: 'Frontend Developer',
      company: '2i-digitals',
      description: 'Develop user interfaces based on Figma designs, ensuring pixel-perfect implementation using modern technologies. Collaborate closely with designers and backend developers to deliver seamless user experiences.',
    },
    {
      year: '2024 Feb - 2024 Oct',
      title: 'Full-Stack Developer',
      company: 'Hermes Engineering Solutions',
      description: 'Support and develop company platforms for buying and selling parts, ensuring stability and high functionality. Implement new features and develop specific modules tailored to business objectives.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={revealOnScroll}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            variants={slideInFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-7 space-y-8"
          >
            <div className="space-y-6 max-w-prose">
              <h2 className="text-3xl font-bold text-white leading-tight">Hello! I'm Iskren Iliev</h2>
              <p className="text-gray-400 leading-7">
              I'm a passionate Frontend Developer with experience in ReactJS, AngularJS, and Full-Stack development. I specialize in building modern, responsive user interfaces based on Figma designs and developing efficient, user-friendly web solutions.
              </p>
              <p className="text-gray-400 leading-7">
              I have strong collaboration skills, attention to detail, and a drive to deliver high-quality, scalable applications that provide exceptional user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2 tabular-nums">1.5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2 tabular-nums">2</div>
                <div className="text-gray-400 text-sm">Companies Worked</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-pink-400 mb-2 tabular-nums">8+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2 tabular-nums">2025</div>
                <div className="text-gray-400 text-sm">Graduation Year</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div
            variants={slideInFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-5 space-y-8"
          >
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                    data-hover
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative pl-6 border-l-2 border-purple-500/30"
                  >
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-base font-semibold text-white">{exp.title}</h4>
                        <span className="text-purple-400 text-xs font-medium">{exp.year}</span>
                      </div>
                      <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
