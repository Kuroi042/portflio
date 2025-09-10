# Quick Setup Guide

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## ⚙️ Customization Steps

### 1. Update Personal Information

Edit `src/data/portfolio.ts`:
```typescript
export const portfolioData = {
  name: "Your Name",
  tagline: "Your Tagline",
  about: "Your bio...",
  githubUsername: "your-github-username",
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  }
}
```

### 2. Update GitHub Username

Edit `src/services/githubApi.ts`:
```typescript
export const githubAPI = new GitHubAPI('your-github-username')
```

### 3. Add Your Projects

Edit `src/data/portfolio.ts` - `featuredProjects` array:
```typescript
export const featuredProjects: FeaturedProject[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description...",
    image: "/images/project.jpg", // Add your project image
    techStack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com", // Optional
    featured: true
  }
]
```

### 4. Customize Skills

Edit `src/data/portfolio.ts` - `skills` array:
```typescript
export const skills: Skill[] = [
  {
    name: "React",
    icon: "devicon-react-original", // Use Devicon classes
    level: 90, // 0-100
    category: "framework"
  }
]
```

### 5. Update Experience

Edit `src/data/portfolio.ts` - `experience` array:
```typescript
export const experience: Experience[] = [
  {
    id: "unique-id",
    title: "Job Title",
    company: "Company Name",
    period: "2023 - Present",
    description: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["React", "TypeScript", "Node.js"]
  }
]
```

### 6. Add Project Images (Optional)

1. Create a `public/images/` folder
2. Add your project screenshots
3. Update the `image` field in `featuredProjects`

### 7. Customize Colors (Optional)

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize your colors
  }
}
```

## 🎨 Available Icons

The portfolio uses Devicon classes for technology icons. Find available icons at: https://devicon.dev/

Common icons:
- `devicon-react-original`
- `devicon-typescript-plain`
- `devicon-javascript-plain`
- `devicon-python-plain`
- `devicon-django-plain`
- `devicon-docker-plain`
- `devicon-git-plain`
- `devicon-linux-plain`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options

1. **GitHub Pages**: Use the `deploy.sh` script
2. **Netlify**: Drag and drop the `dist` folder
3. **Vercel**: Use `vercel` command

## 📝 Notes

- The contact form is currently a simulation. To make it functional, you'll need to add a backend service.
- GitHub integration fetches your public repositories automatically.
- All animations can be disabled by setting `animations: false` in the site config.
- The portfolio is fully responsive and works on all devices.

## 🆘 Troubleshooting

- **GitHub API errors**: Check your username in `githubApi.ts`
- **Build errors**: Make sure all dependencies are installed
- **Styling issues**: Check Tailwind CSS configuration
- **TypeScript errors**: Ensure all required fields are filled in the data files

