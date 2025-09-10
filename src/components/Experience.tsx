import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { experience, education } from '../data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
                  
                  <div className="relative flex gap-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-dark-700 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {education.school}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                </div>
                
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {education.description}
              </p>

              {/* 1337 Specific Highlights */}
              <div className="space-y-3">
                <h5 className="font-semibold text-gray-900 dark:text-white">
                  Key Highlights:
                </h5>
                <ul className="space-y-2">
                  {[
                    "Peer-to-peer learning methodology",
                    "Project-based curriculum",
                    "Intensive coding challenges",
                    "Collaborative development environment",
                    "Real-world problem solving",
                    "System administration skills"
                  ].map((highlight, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Developed */}
              <div className="mt-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Skills Developed:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C++", "C", "Shell Scripting", "Git", "Docker", "Linux",
                    "System Design", "Algorithms", "Data Structures", "Networking"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

