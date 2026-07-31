export default function Button({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="bg-linear-to-r from-blue-01 via-blue-900 to-blue-950 p-2 border border-blue-400 rounded-full text-[13px] max-w-35 w-full  flex items-center justify-center shadow-md shadow-blue-300 cursor-pointer transition-all duration-300 hover:scale-103 hover:bg-blue-300 active:scale-105 hover:text-cyan-500  tracking-wide gap-1 text-white group"
    >
      {icon}
      {title}
    </button>
  );
}
