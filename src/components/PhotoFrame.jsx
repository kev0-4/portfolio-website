export const PhotoFrame = ({ imageUrl }) => {
  return (
    <div className="relative w-64 h-64">
      {/* Background frame */}
      <div className="absolute inset-0 bg-[#0f0f0f] rounded-3xl transform rotate-3"></div>
      
      {/* Photo container */}
      <div className="absolute inset-0 bg-[#0f0f0f] rounded-3xl overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
   
    </div>
  );
};
