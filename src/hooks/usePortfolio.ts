'use client'

import { useEffect, useState } from 'react'

const hardcodedProjects = [
  {
    id: '1',
    title: 'Admin Management System',
    description: 'A robust and secure admin management system designed to streamline internal operations, manage user roles, and monitor system metrics effectively.',
    live_url: '',
    image_url: '/portfolio/admin_dashboard.png'
  },
  {
    id: '2',
    title: 'AI Chat Bot (RAG, MCP, LLM)',
    description: 'An intelligent chatbot powered by Large Language Models, utilizing Retrieval-Augmented Generation (RAG) and the Model Context Protocol (MCP) to provide highly accurate and context-aware responses.',
    live_url: '',
    image_url: '/portfolio/ai_chatbot.png'
  },
  {
    id: '3',
    title: 'AI Resume Analyzer',
    description: 'An automated tool that leverages AI to parse, analyze, and score resumes against job descriptions, helping recruiters filter candidates efficiently.',
    live_url: '',
    image_url: '/portfolio/ai_resume.png'
  },
  {
    id: '4',
    title: 'Obesity Risk Prediction',
    description: 'A machine learning predictive model that analyzes various health metrics and lifestyle factors to estimate an individual\'s risk of developing obesity.',
    live_url: '',
    image_url: '/portfolio/obesity_risk.png'
  }
];

const hardcodedCertificates = [
  {
    id: '1',
    title: 'Full Stack Intern 4 Months (at kmedtech)',
    image_url: '/portfolio/cert_fullstack.png'
  },
  {
    id: '2',
    title: 'Web Developer Intern 2 Months',
    image_url: '/portfolio/cert_webdev.png'
  },
  {
    id: '3',
    title: 'Android Development',
    image_url: '/portfolio/cert_android.png'
  }
];

const techList = [
  'Python', 'JavaScript', 'React', 'APIs', 'SQL', 'HTML', 'CSS', 'PostgreSQL', 'RAG', 'MCP', 'CI/CD', 'AWS'
];

const techIcons: Record<string, string> = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'APIs': 'https://ui-avatars.com/api/?name=API&background=292929&color=fff&rounded=true&bold=true',
  'SQL': 'https://ui-avatars.com/api/?name=SQL&background=292929&color=fff&rounded=true&bold=true',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'RAG': 'https://ui-avatars.com/api/?name=RAG&background=292929&color=fff&rounded=true&bold=true',
  'MCP': 'https://ui-avatars.com/api/?name=MCP&background=292929&color=fff&rounded=true&bold=true',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
};

const hardcodedTechStacks = techList.map((name, i) => ({
  id: String(i),
  name,
  logo_url: techIcons[name] || ''
}));

export default function usePortfolio() {
  const [projects, setProjects] = useState<any[]>([])
  const [certificates, setCertificates] = useState<any[]>([])
  const [techStacks, setTechStacks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a brief loading state to allow animations to play
    const timer = setTimeout(() => {
      setProjects(hardcodedProjects);
      setCertificates(hardcodedCertificates);
      setTechStacks(hardcodedTechStacks);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [])

  return {
    projects,
    certificates,
    techStacks,
    loading,
  }
}