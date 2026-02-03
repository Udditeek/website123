// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Udditee',
    title: 'Data Science & Economics Student | Aspiring Data Analyst',
    image: getAsset('images/me.png'), // Customize or replace with your profile image
    description:
      'I am a first-year BSc Data Science and Economics student at Christ University, Bangalore, with a passion for understanding how data, business, and human behavior intersect.\n' +
      '\n' +
      'My experience spans nonprofit organizations, conglomerates, and research firms where I've handled data validation, observed business strategy, and supported real-world projects. I recently co-founded MyG.O.A.T, a platform helping students find better colleges in India.\n' +
      '\n' +
      'I specialize in turning complex information into actionable insights through data analysis and visualization. Currently seeking internship opportunities in research, analytics, or strategy.\n' +
      '\n' +
      'Fluent in English, Hindi, Bangla, and Gujarati. When I'm not analyzing data, you'll find me exploring photography, cooking, or baking.',
    tagline: 'Transforming data into insights, one analysis at a time.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Udditee Kapoor – Data Science & Economics Student',
    description: "Portfolio website showcasing my education, research, projects, and experience in data science, economics, and analytics.",
  },

  animatedText: ['Data Analyst', 'Economics Enthusiast', 'Problem Solver', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2024–2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['GPA: 3.75/4.00', 'Focus on applied data analysis and economic theory'],
    },
    {
      institution: 'Grace International School',
      degree: 'Pearson Edexcel A Levels',
      year: '2023–2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Mathematics, Economics, English', 'Dhaka, Bangladesh'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Data Analysis & Visualization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Applied Data Analysis Project', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Dashboard Development', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Co-Founder of MyG.O.A.T ',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Bangalore,India',
      time: '(2026 – Present)',
      desp: ['Co-founded a platform helping students find better colleges in India', 'Leading product development and user research initiatives'],
    },
    {
      title: 'Intern',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Bengal Industries',
      time: '(Oct 2025 – Nov 2025)',
      desp: ['Collaborated with sales and marketing teams to observe operational workflows', 'Identified process improvements increasing data entry efficiency'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'MyG.O.A.T - College Discovery Platform',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Co-founded a platform that helps students discover and evaluate colleges across India, providing data-driven insights for better educational decisions.',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Applied Data Analysis & Visualization',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'End-to-end data analysis project involving data sourcing, cleaning, analysis, and visualization using interactive dashboards to present actionable insights.',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Data-Driven Insights in Economic Decision Making',
      authors: 'Udditee Kapoor',
      conferences: 'Christ University',
      researchYr: 2025,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'kapoorudditee@gmail.com',
    linkedin: 'https://www.linkedin.com/in/udditee-kapoor/',
    github: 'https://github.com/udditeekapoor',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
