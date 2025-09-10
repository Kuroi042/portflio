# Modern Developer Portfolio

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS. Features GitHub API integration, dark/light mode toggle, and smooth animations.

## ✨ Features

- **Modern Design**: Clean, minimalistic design with smooth animations
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **GitHub Integration**: Automatically fetches and displays your repositories
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Optimized for speed with lazy loading and efficient rendering
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React, React Icons
- **API**: GitHub REST API
- **Deployment**: Ready for GitHub Pages, Netlify, or Vercel

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn
- GitHub account (for API integration)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Customize your information**
   - Edit `src/data/portfolio.ts` with your personal information
   - Update `src/services/githubApi.ts` with your GitHub username
   - Replace placeholder images in the public folder

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## ⚙️ Configuration

### Personal Information

Edit `src/data/portfolio.ts` to customize:

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

### GitHub Integration

Update `src/services/githubApi.ts`:

```typescript
export const githubAPI = new GitHubAPI('your-github-username')
```

### Featured Projects

Add your featured projects in `src/data/portfolio.ts`:

```typescript
export const featuredProjects: FeaturedProject[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description...",
    image: "/images/project.jpg",
    techStack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    featured: true
  }
]
```

### Skills

Customize your skills in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    icon: "devicon-react-original",
    level: 90,
    category: "framework"
  }
]
```

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... customize your primary colors
      }
    }
  }
}
```

### Fonts

Update fonts in `tailwind.config.js`:

```javascript
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],
  'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
}
```

### Animations

Customize animations in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
}
```

## 📱 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal bio and key highlights
3. **Skills**: Technical skills with progress bars
4. **Featured Projects**: Highlighted projects with detailed cards
5. **GitHub Projects**: Automatically fetched repositories
6. **Experience**: Work history and education timeline
7. **Contact**: Contact form and social links

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Connect your repository to Netlify**
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`
4. **Deploy**

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── FeaturedProjects.tsx
│   ├── GitHubProjects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── data/              # Static data
│   └── portfolio.ts
├── services/          # API services
│   └── githubApi.ts
├── types/             # TypeScript types
│   └── index.ts
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [GitHub API](https://docs.github.com/en/rest) for repository data

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me directly.

---

Made with ❤️ by [Your Name]

