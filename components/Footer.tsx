export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 text-sm text-center">
          © {currentYear} Rishab Saini. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
