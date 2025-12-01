// src/data.js

import React from 'react';
import { Database, TrendingUp, Cpu, Mail, Linkedin, BarChart3, Code } from 'lucide-react';

export const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export const heroData = {
  greeting: "Hi! 👋 I'm",
  name: "Sanskar Srivastava",
  title: "Data Scientist",
  description: "Crafting actionable insights from complex datasets to drive strategic decisions and build predictive models. Let's turn data into intelligence.",
  mainAction: {
    text: "Explore Portfolio",
    href: "#projects",
  },
  secondaryAction: {
    text: "View Resume",
    href: "/resume.pdf",
  },
};

export const dataTools = [
  { icon: '🐍', label: 'Python' },
  { icon: '🐼', label: 'Pandas' },
  { icon: '📈', label: 'Matplotlib' },
  { icon: '🧠', label: 'Scikit-learn' },
  { icon: '📊', label: 'SQL' },
  { icon: '☁️', label: 'Cloud' },
];

export const aboutStats = [
  { number: "Master's", unit: "", description: "in Data Science" },
  { number: "10", unit: "+", description: "Successful Projects Completed" },
  { number: "Research Assistant", unit: "", description: "@Soda Labs" },
];

export const aboutMe = {
  p1: "I am Sanskar Srivastava, a dedicated Data Scientist passionate about leveraging data to drive meaningful insights and create impactful solutions. My expertise encompasses the entire data science lifecycle, from crafting robust data pipelines and performing in-depth analysis to developing and deploying advanced machine learning models.",
  p2: "I specialize in transforming complex datasets into actionable intelligence, with a strong foundation in both traditional machine learning and modern deep learning techniques. I thrive on interdisciplinary challenges that demand both analytical rigor and innovative problem-solving, consistently delivering transparent, scalable, and business-centric results.",
  p3: "I am committed to continuous learning and the application of cutting-edge technologies to push the boundaries of data-driven innovation. Let's connect to explore how my skills can contribute to your organization's success.",
};

export const skills = [
    { name: 'Programming', icon: <Code size={24} className="text-yellow-400" />, items: ['Python', 'R', 'SQL', 'Java', 'C++'] },
    { name: 'Machine Learning', icon: <Cpu size={24} className="text-amber-400" />, items: ['Supervised & Unsupervised Learning', 'Regression', 'Classification', 'Clustering', 'NLP', 'Time Series Forecasting'] },
    { name: 'Deep Learning', icon: <TrendingUp size={24} className="text-orange-400" />, items: ['Neural Networks', 'TensorFlow', 'PyTorch', 'Keras'] },
    { name: 'Data Science', icon: <Database size={24} className="text-rose-400" />, items: ['Pandas', 'NumPy', 'Sci-kit Learn', 'Matplotlib', 'Seaborn', 'SciPy', 'Jupyter'] },
];

export const projects = [

  { title: 'Smart-FL | Bone Marrow Smear Classification', description: 'Engineered a preprocessing engine and utilized a ResNet-18 backbone for a meta-learning algorithm in a federated learning environment for bone marrow smear classification.', tech: ['Pandas', 'scikit-learn', 'ResNet-18'], icon: <BarChart3 size={96} className="p-4 rounded-lg bg-yellow-900/50" />, link: 'https://github.com/Vis-3/Smart_FL' },

  { title: 'Tula: AI-Driven Skill Verification Platform', description: 'Designed an AI assessment system using multi-agent RAG, Sentence-Transformers, and Google Gemini to automate skill extraction and generate adaptive assessments, reducing hiring time by 40%.', tech: ['Python', 'FastAPI', 'Milvus', 'MinIO', 'Docker'], icon: <BarChart3 size={96} className="p-4 rounded-lg bg-yellow-900/50" />, link: 'https://github.com/Vis-3/TULA' },

  { title: 'DataFlow Pro', description: 'Developed an AI-powered web application using Python/Flask and React to automate data science workflows (ETL), including data profiling, preprocessing, and model building, and integrated Gemini 2.0 Flash API for intelligent recommendations.', tech: ['Python', 'Flask', 'React', 'Pandas', 'scikit-learn', 'Gemini 2.0 Flash API (LLM)'], icon: <BarChart3 size={96} className="p-4 rounded-lg bg-yellow-900/50" />, link: 'https://github.com/Vis-3/DataFlowPro' },

  { title: 'Data Visualization | Customer Insights Dashboard', description: 'Designed and deployed an interactive Tableau dashboard to monitor customer experience metrics from airline reviews, delivering actionable insights by integrating geographic and sentiment data.', tech: ['Tableau'], icon: <BarChart3 size={96} className="p-4 rounded-lg bg-yellow-900/50" />, link: 'https://public.tableau.com/app/profile/sanskar.srivastava7236/viz/BritishAirwaysReviewAna lysis_17558995251300/Dashboard1' },

  { title: 'FinGuard-AI: Self-Optimizing Fraud Detection System', description: 'Architected and developed a novel multi-agent Python system using adaptive A/B testing to autonomously optimize fraud detection and explanation strategies. Engineered a high-throughput, asynchronous backend with batch processing and integrated Groq/Llama 3.1 for advanced reasoning. Implemented a RAG pipeline for context-aware, LLM-generated explanations and built a Streamlit dashboard for real-time monitoring.', tech: ['Python', 'Groq/Llama 3.1', 'RAG', 'Streamlit', 'Docker', 'Thompson Sampling'], icon: <BarChart3 size={96} className="p-4 rounded-lg bg-yellow-900/50" />, link: 'https://github.com/Manvi234/FinGuardAI' },

  { title: 'Semantic Analysis of Reddit Data', description: 'Scraped Reddit comments using PRAW, performed sentiment and emotional analysis, and trained a stacking ensemble classifier with a 96.8% F1 score.', tech: ['Python', 'PRAW', 'Hugging Face'], icon: <BarChart3 size={96} className="p-4 rounded-lg bg-yellow-900/50" />, link: 'https://github.com/Vis-3/Semantic-Analysis-on-Reddit-data' },

];

export const footerData = {
  title: "Let's Build Something Great",
  description: "I'm currently open to new opportunities and collaborations. Reach out and let's discuss your data challenges.",
  socials: [
    { name: "Email", href: "mailto:sanskar.ss2011@gmail.com", icon: <Mail size={24} /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/sansriv", icon: <Linkedin size={24} /> },
    { name: "GitHub", href: "https://github.com/Vis-3", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.353 3.43 9.387 8.244 10.852.6.11.82-.26.82-.577v-2.035c-3.336.723-4.041-1.61-4.041-1.61-.546-1.385-1.332-1.75-1.332-1.75-1.085-.74.08-.727.08-.727 1.2.083 1.838 1.234 1.838 1.234 1.07 1.835 2.809 1.305 3.493.993.11-.775.421-1.305.766-1.605-2.665-.3-5.465-1.334-5.465-5.932 0-1.31.47-2.38 1.234-3.21-.123-.3-.535-1.517.117-3.175 0 0 1.008-.32 3.301 1.228 2.007-.558 4.17-.558 6.177 0 2.292-1.548 3.301-1.228 3.301-1.228.652 1.658.24 2.875.117 3.175.765.83 1.234 1.9 1.234 3.21 0 4.609-2.804 5.626-5.474 5.922.427.36.816 1.096.816 2.21v3.313c0 .318.21.69.826.577C20.573 21.39 24 17.35 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  ],
  copyright: `© ${new Date().getFullYear()} Sanskar Srivastava. All rights reserved. Built with React & Tailwind CSS.`,
};
