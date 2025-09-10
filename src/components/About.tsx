import { motion } from 'framer-motion'
import { User, Code, School, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      description: "Specialized in C++, Django, and system-level programming with a focus on performance and scalability."
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Full-Stack Solutions",
      description: "Experience building complete web applications from database design to frontend implementation."
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "1337 Student",
      description: "Currently enrolled in 1337 Coding School, part of the 42 Network's innovative peer-to-peer learning program."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about tackling complex technical challenges and finding elegant solutions."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Full-Stack Developer & 1337 Student
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                {portfolioData.about}
              </p>
              
              <p>
                My journey in software development began with a fascination for how computers work at the lowest level. 
                This led me to 1337 Coding School, where I've been immersed in intensive, project-based learning that 
                emphasizes peer collaboration and real-world problem solving.
              </p>
              
              <p>
                I specialize in backend development with C++ and Django, but I'm equally comfortable working across 
                the full stack. My projects range from low-level system programming to modern web applications, 
                always with a focus on clean code, performance, and user experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
