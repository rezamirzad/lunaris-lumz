import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col items-center gap-6 border-t border-gray-900 bg-black">
      <div className="flex justify-center gap-6">
        <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
          Next.js 14
        </div>
        <div className="w-px h-3 bg-gray-800" />
        <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
          Tailwind CSS
        </div>
        <div className="w-px h-3 bg-gray-800" />
        <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
          TypeScript
        </div>
      </div>

      <div className="text-[10px] text-gray-500 uppercase tracking-widest">
        © {new Date().getFullYear()} LUNARIS - LUMZ
      </div>
    </footer>
  );
};

export default Footer;
