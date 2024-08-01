import React from 'react';
import { AppBar } from '../components/AppBar';
import { BottomBar } from '../components/BottomBar';
import { PageHeader } from '../components/PageHeader';

const skillsData = [
  {
    title: 'Python Development',
    description: [
      'Machine Learning: Developing models and algorithms to analyze data and make predictions.',
      'Natural Language Processing (NLP): Analyzing and understanding human language using computational techniques.',
      'PyTorch: A deep learning framework for building and training neural networks.',
      'TensorFlow: An open-source library for machine learning and deep learning applications.',
      'Data Analysis: Using libraries like Pandas and NumPy for data manipulation and insights.',
      'Automation: Creating scripts to automate repetitive tasks and processes.',
      'LLM-Fine Tuning: Customizing large language models for specific applications.'
    ],
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000'
  },
  {
    title: 'Web Development',
    description: [
      'React.js: Building interactive user interfaces and single-page applications.',
      'Web Development Frameworks: Using frameworks to streamline the development of web applications.',
      'User Interface Design: Designing intuitive and user-friendly interfaces.',
      'Responsive Design: Ensuring websites are accessible and functional across various devices and screen sizes.'
    ],
    icon: 'https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000'
  },
  {
    title: 'DevOps',
    description: [
      'AWS (Amazon Web Services): Utilizing cloud services for scalable infrastructure and deployments.',
      'Cloud Hosting: Hosting applications and services on cloud platforms for reliability and scalability.',
      'Infrastructure Management: Managing and automating infrastructure resources and configurations.'
    ],
    icon: 'https://img.icons8.com/?size=100&id=BejoiOeRfYSo&format=png&color=000000'
  },
  {
    title: 'Bash Scripting',
    description: [
      'Automation: Writing scripts to automate system tasks and operations.',
      'System Maintenance: Managing system updates, backups, and other routine tasks.',
      'Workflow Streamlining: Simplifying and optimizing workflows through scripting.'
    ],
    icon: 'https://img.icons8.com/?size=100&id=FZJ0S97wbLL1&format=png&color=000000'
  },
  {
    title: 'Database',
    description: [
      'MySQL: Relational database management system for structured data.',
      'PostgreSQL: Advanced open-source relational database with strong standards compliance.',
      'NoSQL (MongoDB): A NoSQL database for flexible, schema-less data storage.',
      'Firebase: A platform offering real-time databases and backend services.',
      'Normalization: Structuring data to reduce redundancy and improve integrity.',
      'Database Deployment: Setting up and maintaining databases in production environments.'
    ],
    icon: 'https://img.icons8.com/?size=100&id=KZHjwwenS7oK&format=png&color=000000'
  }
];

export const Offerings = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <AppBar />
      
      <div className="pt-16 px-8">
        <div className="container mx-auto px-8 py-16">
          <PageHeader title="OFFERINGS" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="bg-[#1b1a1a] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={skill.icon} alt={`${skill.title} Icon`} className="w-16 h-16 mr-4" />
                  <h2 className="text-2xl font-bold text-blue-500">{skill.title}</h2>
                </div>
                <ul className="list-disc list-inside ml-4 text-gray-300">
                  {skill.description.map((item, idx) => (
                    <li key={idx} className="text-gray-200">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default Offerings;
    