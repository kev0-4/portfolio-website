export const BioCard = ({ name, description }) => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 max-w-2xl"> {/* Updated background color */}
      <div className="flex items-start">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-3">{name}</h1>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
