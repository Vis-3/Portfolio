import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import {
  navItems,
  heroData,
  dataTools,
  aboutStats,
  aboutMe,
  skills,
  projects,
  footerData
} from './data.jsx';


// --- Data Icons & Assets ---

// Component to render stylized data science tool icons
const DataIcon = ({ icon, label, className = '' }) => (
  <div className={`flex flex-col items-center p-3 sm:p-4 bg-gray-900/70 backdrop-blur-sm rounded-xl shadow-lg border border-yellow-700 transition duration-300 hover:scale-105 ${className}`}>
    <span className="text-4xl mb-2 text-yellow-400">{icon}</span>
    <p className="text-sm font-semibold text-gray-200">{label}</p>
  </div>
);

// --- Navigation Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 bg-black/90 backdrop-blur-sm shadow-xl border-b border-yellow-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex-shrink-0 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
            SANSKAR
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition duration-150 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 ml-4 rounded-full bg-gradient-to-r from-yellow-600 to-amber-500 text-black font-semibold shadow-lg hover:from-yellow-700 hover:to-amber-600 transition duration-300 flex items-center"
            >
              Get in Touch <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-2 px-3 py-2 rounded-md text-base font-medium text-black bg-gradient-to-r from-yellow-600 to-amber-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Faint gold code lines background - VISIBLE NOW with opacity-20 and text-yellow-800 */}
      <div className="absolute inset-0 opacity-50 pointer-events-none overflow-hidden">
        <pre className="text-yellow-800 text-[10px] leading-3 whitespace-pre-wrap overflow-hidden">
          {`
import pandas as pd; import numpy as np; from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential; from tensorflow.keras.layers import Dense, LSTM, Dropout
import matplotlib.pyplot as plt; import seaborn as sns; import requests; import json; from datetime import datetime

# Function to simulate data fetching
def fetch_sensor_data(api_url):
    response = requests.get(api_url)
    data = json.loads(response.text)
    df = pd.DataFrame(data['sensorReadings'])
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    return df

# Simple predictive model training (conceptual)
def train_simple_model(X, y):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = Sequential([
        Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
        Dropout(0.2),
        Dense(32, activation='relu'),
        Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    model.fit(X_train, y_train, epochs=10, batch_size=32, verbose=0)
    return model

# Data processing example
def process_customer_data(df):
    df['customer_age'] = (datetime.now().year - df['birth_year'])
    df['churn_risk'] = np.where(df['interaction_count'] < 5, 1, 0)
    return df

# A complex LSTM model for time-series (conceptual)
def build_lstm_model(input_shape, units=50):
    model = Sequential([
        LSTM(units, activation='relu', input_shape=input_shape, return_sequences=True),
        Dropout(0.3),
        LSTM(units, activation='relu'),
        Dropout(0.3),
        Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

# Data visualization snippet
def plot_data_distribution(df, column):
    plt.figure(figsize=(10, 6))
    sns.histplot(df[column], kde=True, color='gold')
    plt.title(f'Distribution of {column}')
    plt.xlabel(column)
    plt.ylabel('Frequency')
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.show()

# More code lines to fill the background...
          `}
        </pre>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-xl text-yellow-400 mb-3 font-medium">{heroData.greeting}</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4 text-white">
            {heroData.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light text-amber-300 mb-6">
            A <span className="font-bold border-b-2 border-yellow-500">{heroData.title}</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {heroData.description}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href={heroData.mainAction.href}
              className="px-8 py-3 rounded-full bg-yellow-600 text-black font-bold shadow-xl hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
            >
              {heroData.mainAction.text}
            </a>
            <a
              href={heroData.secondaryAction.href}
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-bold hover:bg-gray-800 transition duration-300 transform hover:scale-105"
            >
              {heroData.secondaryAction.text}
            </a>
          </div>
        </div>

        {/* Right Visual/Icons: Celestial body with orbiting tools */}
        <div className="order-1 md:order-2 flex justify-center items-center relative h-80 w-80 mx-auto">
          {/* Central Celestial Body */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-yellow-800 shadow-xl flex items-center justify-center">
            <span className="text-5xl text-yellow-400 animate-pulse">✨</span>
          </div>
          
          {/* Orbiting Container - NEEDS the custom animation in tailwind.config.js */}
          <div className="absolute inset-0 animate-spin-slow">
            {dataTools.map((tool, index) => {
              const angle = (index / dataTools.length) * 2 * Math.PI;
              const radius = 120; // Distance from center
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={index}
                  className="absolute w-16 h-16 rounded-full bg-gray-800 border border-yellow-600 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    // Apply inverse spin to keep icons upright (optical illusion)
                    // If your tailwind.config.js includes 'spin-slow' AND 'spin-slow-reverse'
                    // For now, we omit the self-spin for simplicity and rely on the container spin.
                  }}
                >
                  <span className="text-2xl">{tool.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Stat Card Component ---
const StatCard = ({ number, unit, description }) => (
    <div className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 text-center transition duration-300 hover:border-yellow-600/80 hover:shadow-yellow-900/50">
        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
            {number}{unit}
        </p>
        <p className="mt-2 text-lg font-medium text-gray-300">{description}</p>
    </div>
);


// --- About Section ---
const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {aboutStats.map((stat, index) => (
                    <StatCard key={index} number={stat.number} unit={stat.unit} description={stat.description} />
                ))}
            </div>

            <div className="bg-black p-8 md:p-12 rounded-2xl shadow-inner border border-yellow-800/50">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {aboutMe.p1}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {aboutMe.p2}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {aboutMe.p3}
                </p>
            </div>
        </div>
    </section>
);

// --- Skills Section ---
const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-black border-t border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Core Skills & Expertise</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-6 bg-gray-900 rounded-xl shadow-xl transition duration-300 hover:shadow-yellow-900/50 hover:bg-gray-800">
                            <div className="flex items-center mb-4">
                                {skill.icon}
                                <h3 className="ml-3 text-xl font-semibold text-white">{skill.name}</h3>
                            </div>
                            <ul className="space-y-2 text-gray-400 list-disc pl-5">
                                {skill.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Projects Section ---
const ProjectsSection = () => {
    React.useEffect(() => {
        console.log('ProjectsSection mounted');
    }, []);

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-yellow-800/50 transition duration-300 hover:shadow-yellow-900/70">
                            {/* Project Visual (Placeholder) */}
                            <div className="lg:w-full p-8 flex items-center justify-center bg-yellow-900/20 text-yellow-400">
                                {project.icon}
                            </div>

                            {/* Project Content */}
                            <div className="lg:w-full p-8 space-y-4">
                                <h3 className="text-3xl font-bold text-yellow-400">{project.title}</h3>
                                <p className="text-gray-300 text-lg">{project.description}</p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-200 rounded-full transition duration-150 hover:bg-yellow-600 hover:text-black">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yellow-400 font-semibold mt-4 hover:text-yellow-300 transition duration-150">
                                    View Case Study
                                    <ChevronRight size={18} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Contact/Footer Section ---
const Footer = () => (
    <footer id="contact" className="bg-black pt-16 pb-8 border-t border-yellow-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{footerData.title}</h2>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                    {footerData.description}
                </p>
            </div>

            <div className="flex justify-center mb-12 space-x-6">
                {footerData.socials.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full text-white hover:bg-yellow-600 hover:text-black transition duration-300" aria-label={social.name}>
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className="text-center text-sm text-gray-500">
                {footerData.copyright}
            </p>
        </div>
    </footer>
);

// --- Main App Component ---
const App = () => {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;