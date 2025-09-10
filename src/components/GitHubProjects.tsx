import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, Calendar, Code } from 'lucide-react'
import { GitHubRepo } from '../types'
import { githubAPI } from '../services/githubApi'

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const pinnedRepos = await githubAPI.getPinnedRepos()
        setRepos(pinnedRepos)
      } catch (err) {
        setError('Failed to fetch GitHub repositories')
        console.error('Error fetching repos:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'C++': 'bg-blue-500',
      'Python': 'bg-yellow-500',
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-600',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-purple-500',
      'Shell': 'bg-green-500',
      'Dockerfile': 'bg-blue-400',
      'Makefile': 'bg-gray-500',
    }
    return colors[language || ''] || 'bg-gray-400'
  }

  if (loading) {
    return (
      <section id="github-projects" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="github-projects" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>{error}</p>
            <p className="mt-2">Please check your GitHub username in the configuration.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github-projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out my latest repositories and contributions on GitHub.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Repo Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {repo.name}
                  </h3>
                  {repo.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Language & Stats */}
              <div className="flex items-center justify-between mb-4">
                {repo.language && (
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {repo.language}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>

              {/* Topics */}
              {repo.topics.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Updated Date */}
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-3 h-3" />
                <span>Updated {formatDate(repo.updated_at)}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View
                </motion.a>
                
                {repo.homepage && (
                  <motion.a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubProjects

