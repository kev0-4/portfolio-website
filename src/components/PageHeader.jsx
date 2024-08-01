export const PageHeader = ({ title }) => {
  return (
    <div className="text-white text-center py-2 px-4 font-bold text-3xl relative bg-gradient-to-br ">
      <span className="absolute left-2 top-1/2 transform -translate-y-1/2">✧</span>
      {title}
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2">✧</span>
    </div>
  );
};
