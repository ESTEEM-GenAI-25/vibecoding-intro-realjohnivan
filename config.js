// Personal Website Configuration
// Edit this file to customize all text content for your website

const CONFIG = {
  // Personal Information
  personal: {
    name: "John Ivan Busulwa",
    title: "Multidisciplinary Professional",
    subtitle: "Venture Capital • Product Management • Business Development",
    email: "johnivan@example.com",
    linkedin: "https://linkedin.com/in/johnivan",
    location: "Kampala, Uganda",
    bio: "A multidisciplinary professional transitioning into tech-focused roles in venture capital, product management, and business development. Passionate about innovation, entrepreneurship, and creating impact through strategic leadership.",
    headshot: "https://via.placeholder.com/300x300/2c5aa0/ffffff?text=Your+Photo", // Replace with your headshot image
    resume: "documents/resume.pdf" // Add your resume PDF
  },

  // Navigation Menu
  navigation: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    leadership: "Leadership",
    contact: "Contact"
  },

  // Homepage Content
  homepage: {
    heroTitle: "Welcome to My Professional Journey",
    heroSubtitle: "Building bridges between innovation and impact",
    ctaPrimary: "View My Work",
    ctaSecondary: "Get In Touch",
    quickStats: [
      { number: "5+", label: "Years Experience" },
      { number: "10+", label: "Projects Led" },
      { number: "3", label: "Leadership Roles" }
    ]
  },

  // About Page Content
  about: {
    title: "About Me",
    education: {
      title: "Education",
      items: [
        {
          degree: "Bachelor's Degree",
          institution: "Your University",
          year: "2020",
          description: "Relevant coursework and achievements"
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          position: "Your Current Role",
          company: "Company Name",
          period: "2022 - Present",
          description: "Key responsibilities and achievements"
        }
      ]
    },
    skills: {
      title: "Core Competencies",
      categories: [
        {
          name: "Business Development",
          skills: ["Strategic Planning", "Market Analysis", "Partnership Development"]
        },
        {
          name: "Product Management",
          skills: ["Product Strategy", "User Research", "Agile Methodologies"]
        },
        {
          name: "Venture Capital",
          skills: ["Due Diligence", "Investment Analysis", "Portfolio Management"]
        }
      ]
    }
  },

  // Portfolio/Projects Content
  portfolio: {
    title: "Portfolio & Projects",
    subtitle: "Key projects and achievements that showcase my expertise",
    projects: [
      {
        title: "Project Name 1",
        category: "Venture Capital",
        description: "Brief description of the project and your role",
        image: "https://via.placeholder.com/400x200/2c5aa0/ffffff?text=Project+1",
        technologies: ["Analysis", "Due Diligence", "Investment Strategy"],
        link: "#"
      },
      {
        title: "Project Name 2",
        category: "Product Management",
        description: "Brief description of the project and your role",
        image: "https://via.placeholder.com/400x200/2c5aa0/ffffff?text=Project+2",
        technologies: ["Product Strategy", "User Research", "Agile"],
        link: "#"
      },
      {
        title: "Project Name 3",
        category: "Business Development",
        description: "Brief description of the project and your role",
        image: "https://via.placeholder.com/400x200/2c5aa0/ffffff?text=Project+3",
        technologies: ["Strategic Planning", "Partnerships", "Growth"],
        link: "#"
      }
    ]
  },

  // Leadership & Service Content
  leadership: {
    title: "Leadership & Service",
    subtitle: "Contributing to communities and organizations",
    roles: [
      {
        organization: "LÉO Africa Institute",
        position: "Your Role",
        period: "2023 - Present",
        description: "Description of your contributions and impact",
        achievements: [
          "Achievement 1",
          "Achievement 2",
          "Achievement 3"
        ]
      },
      {
        organization: "SMACK Startups",
        position: "Your Role",
        period: "2022 - Present",
        description: "Description of your contributions and impact",
        achievements: [
          "Achievement 1",
          "Achievement 2",
          "Achievement 3"
        ]
      }
    ]
  },

  // Contact Page Content
  contact: {
    title: "Get In Touch",
    subtitle: "Let's connect and explore opportunities together",
    form: {
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitButton: "Send Message",
      successMessage: "Thank you! Your message has been sent successfully.",
      errorMessage: "Sorry, there was an error sending your message. Please try again."
    },
    info: {
      email: "johnivan@example.com",
      linkedin: "Connect on LinkedIn",
      availability: "Available for consulting and collaboration opportunities"
    }
  },

  // Footer Content
  footer: {
    copyright: "© 2024 John Ivan Busulwa. All rights reserved.",
    builtWith: "Built with passion and attention to detail"
  },

  // SEO Meta Data
  seo: {
    title: "John Ivan Busulwa - Venture Capital & Product Management Professional",
    description: "Professional website showcasing John Ivan Busulwa's expertise in venture capital, product management, and business development. View portfolio, experience, and connect for opportunities.",
    keywords: "venture capital, product management, business development, entrepreneurship, investment analysis, John Ivan Busulwa",
    author: "John Ivan Busulwa",
    ogImage: "images/headshot.jpg" // Add your Open Graph image
  }
};

// Make config available globally
window.CONFIG = CONFIG;
