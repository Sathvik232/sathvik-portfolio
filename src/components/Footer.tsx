export default function Footer() {
  return (
    <footer
      className="
        bg-slate-950
        border-t
        border-slate-800
        py-8
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2026 Sathvik S Kashyap. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm text-center md:text-right">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}