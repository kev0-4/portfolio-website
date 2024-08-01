export const InfoCard = ({ title, items }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-6 max-w-2xl"> {/* Updated background color */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="block text-gray-300">{item.date}</span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
