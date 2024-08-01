export const CertificateComponent = ({
  url,
  image,
  subheading,
  text,
  instructor,
}) => {
  return (
    <div className="bg-[#1b1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{text}</h3>
        <p className="text-sm text-gray-400 uppercase mb-2">{subheading}</p>
        {instructor && (
          <p className="text-sm text-gray-400">Instructor: {instructor}</p>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-orange-500 to-pink-500 transition-colors duration-300"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};
