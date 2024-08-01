import { Link } from "react-router-dom";

export const BottomBar = () => {
  return (
    <div className="bg-[#0f0f0f] py-4 px-8">
      <div className="container mx-auto flex flex-wrap justify-between space-x-4">
        {["Home", "Bio", "Resume", "Portfolio", "Certificates", "Offerings"].map((text, index) => (
          <Link
            key={index}
            to={`/${text === "Home" ? "" : text.replace(/\s+/g, '')}`}
            className="text-white rounded-lg p-4 flex items-center justify-center text-lg font-semibold transition-colors hover:text-gray-300"
          >
            {text}
          </Link>
        ))}
        <a
          href="https://github.com/kev0-4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg p-4 flex items-center justify-center text-lg font-semibold transition-colors hover:text-gray-300"
        >
          GitHub
        </a>
      </div>
      <div className="text-gray-400 text-center mt-4">
        <p className="text-sm">
          This website is built using modern web technologies to provide a sleek and interactive experience. Explore my portfolio, contact me, or connect on GitHub to learn more about my work and skills.
        </p>
      </div>
    </div>
  );
};
