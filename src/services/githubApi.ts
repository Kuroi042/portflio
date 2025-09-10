import axios from 'axios'
import { GitHubRepo } from '../types'

const GITHUB_API_BASE = 'https://api.github.com'

export class GitHubAPI {
  private username: string

  constructor(username: string) {
    this.username = username
  }

  async getUserRepos(): Promise<GitHubRepo[]> {
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/users/${this.username}/repos`, {
        params: {
          sort: 'updated',
          per_page: 12,
          type: 'owner'
        }
      })
      
      return response.data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        fork: repo.fork,
        archived: repo.archived
      }))
    } catch (error) {
      console.error('Error fetching GitHub repos:', error)
      return []
    }
  }

  async getPinnedRepos(): Promise<GitHubRepo[]> {
    try {
      // GitHub doesn't have a direct API for pinned repos, so we'll fetch all repos
      // and filter by stars or manually specify which ones to show
      const repos = await this.getUserRepos()
      
      // Filter out forks and archived repos, sort by stars
      return repos
        .filter(repo => !repo.fork && !repo.archived)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
    } catch (error) {
      console.error('Error fetching pinned repos:', error)
      return []
    }
  }

  async getUserInfo() {
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/users/${this.username}`)
      return {
        name: response.data.name,
        bio: response.data.bio,
        avatar_url: response.data.avatar_url,
        public_repos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
        html_url: response.data.html_url
      }
    } catch (error) {
      console.error('Error fetching user info:', error)
      return null
    }
  }
}

// Create a singleton instance
export const githubAPI = new GitHubAPI('your-github-username') // Replace with actual username

