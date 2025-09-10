export const siteConfig = {
  // Site metadata
  name: "Your Name",
  title: "Developer Portfolio - Full-Stack Developer",
  description: "Full-Stack Developer specializing in C++98, Django, Docker, and modern web applications",
  url: "https://your-portfolio-url.com",
  
  // Social links
  github: "https://github.com/your-github-username",
  linkedin: "https://linkedin.com/in/your-linkedin-profile",
  email: "your.email@example.com",
  
  // GitHub configuration
  githubUsername: "your-github-username",
  
  // Contact form (optional - for backend integration)
  contactForm: {
    enabled: true,
    // Add your form submission endpoint here
    endpoint: "/api/contact",
  },
  
  // Analytics (optional)
  analytics: {
    googleAnalyticsId: "", // GA4 Measurement ID
    googleTagManagerId: "", // GTM Container ID
  },
  
  // SEO
  seo: {
    titleTemplate: "%s | Your Name",
    defaultTitle: "Developer Portfolio - Full-Stack Developer",
    additionalMetaTags: [
      {
        name: "author",
        content: "Your Name",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  },
  
  // Theme
  theme: {
    primaryColor: "#0ea5e9", // Sky blue
    accentColor: "#3b82f6", // Blue
  },
  
  // Features
  features: {
    darkMode: true,
    animations: true,
    githubIntegration: true,
    contactForm: true,
  },
}

