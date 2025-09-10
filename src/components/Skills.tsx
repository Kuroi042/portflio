import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const Skills = () => {
  const categories = [
    { name: 'Languages', key: 'language' },
    { name: 'Frameworks', key: 'framework' },
    { name: 'Tools', key: 'tool' },
    { name: 'Databases', key: 'database' }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.key)
            
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-sm hover-lift hover-glow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                            <i className={`${skill.icon} text-primary-600 dark:text-primary-400 text-xl`}></i>
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                                                 <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.level}%` }}
                           transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                           viewport={{ once: true }}
                           className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                         />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'REST APIs', 'GraphQL', 'Microservices', 'CI/CD', 'AWS', 'Docker Compose',
              'Nginx', 'Redis', 'MongoDB', 'GraphQL', 'WebSocket', 'OAuth', 'JWT',
              'Testing', 'Agile', 'Git Flow', 'Shell Scripting', 'System Design'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
