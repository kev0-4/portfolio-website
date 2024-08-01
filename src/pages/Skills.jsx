import React, { useState } from 'react';
import { AppBar } from '../components/AppBar';
import { BottomBar } from '../components/BottomBar';
import { PageHeader } from '../components/PageHeader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const skillsData = [
  { name: 'JavaScript', years: 2 },
  { name: 'TypeScript', years: 1 },
  { name: 'React', years: 1.5 },
  { name: 'Node.js', years: 2 },
  { name: 'SQL', years: 3 },
  { name: 'NoSQL', years: 1 },
  { name: 'Git (Version Control)', years: 2 },
  { name: 'Docker', years: 1 },
  { name: 'Python', years: 3 },
  { name: 'C/C++', years: 3 },
];

const maxYears = Math.max(...skillsData.map(skill => skill.years));

const normalizedData = skillsData.map(skill => ({
  name: skill.name,
  totalExpertise: ((skill.years / maxYears) * 100).toFixed(1),
}));

const SkillsPage = () => {
  const [showRelative, setShowRelative] = useState(true);

  const handleToggle = () => {
    setShowRelative(!showRelative);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <AppBar />
      
      <div className="pt-16 px-4 sm:px-8">
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <PageHeader title="MY SKILLS" />
          
          <div className="mb-8 flex justify-center">
            <button
              onClick={handleToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              {showRelative ? 'Show Absolute Experience' : 'Show Relative Experience'}
            </button>
          </div>

          <div className="bg-[#1b1a1a] p-4 sm:p-6 rounded-lg mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">
              {showRelative ? 'Relative Expertise' : 'Absolute Technology Experience'}
            </h2>
            <div className="w-full h-[400px] sm:h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={showRelative ? normalizedData : skillsData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    type="number" 
                    domain={showRelative ? [0, 100] : [0, 4]} 
                    tickFormatter={(value) => (showRelative ? `${value}%` : value)} 
                  />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip 
                    formatter={(value, name) => {
                      if (showRelative) {
                        return `${value}%`;
                      }
                      return value;
                    }}
                  />
                  <Bar 
                    dataKey={showRelative ? 'totalExpertise' : 'years'} 
                    fill={showRelative ? "#FBBF24" : "#F59E0B"}
                    radius={[5, 5, 5, 5]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1b1a1a] p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">Technical Skills</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>Git (Version Control)</li>
                <li>Docker</li>
                <li>Python</li>
                <li>C/C++</li>
              </ul>
            </div>
            
            <div className="bg-[#1b1a1a] p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">Soft Skills</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
                <li>Agile Methodologies</li>
                <li>Communication</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default SkillsPage;
