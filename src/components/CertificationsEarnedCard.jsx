export const CertificationsEarned = () => (
    <div className="bg-gray-900 w-full h-fit rounded-xl flex flex-col items-center justify-center text-center p-4 shadow-lg">
      <div className="text-3xl mb-2">🏆</div>
      <div className="text-white text-2xl font-bold mb-1">7+</div>
      <p className="text-gray-400 text-xs uppercase tracking-wide">Certifications Earned</p>
    </div>
  );

  const SkillBar = ({ skill, percentage }) => (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-white text-sm">{skill}</span>
        <span className="text-gray-400 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  export const SkillShowcase = () => (
    <div className="bg-gray-900 w-full h-fit rounded-xl p-6 shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">Skills Overview</h2>
      <SkillBar skill="Machine Learning" percentage={90} />
      <SkillBar skill="Full Stack Development" percentage={95} />
      <SkillBar skill="Data Analysis" percentage={85} />
      <SkillBar skill="Cloud Computing" percentage={75} />
      <SkillBar skill="Competetive Programing" percentage={85} />
      <SkillBar skill="Database Management" percentage={95} />
    </div>
  );