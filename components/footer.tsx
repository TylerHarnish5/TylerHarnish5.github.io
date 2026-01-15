export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 id="contact" className="text-3xl font-semibold text-white mb-6">
          Contact
        </h3>

        <ul className="space-y-4 text-2xl text-left">
          <li className="text-gray-400">
            Phone: +1 (908) 202-4119
          </li>
          <li className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:Tyler.M.Harnish@gmail.com"
              className="text-gray-300 underline hover:text-white transition-colors"
            >
              Tyler.M.Harnish@gmail.com
            </a>
          </li>
          <li className="text-gray-400">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/tyler-harnish-th117"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline hover:text-white transition-colors"
            >
              linkedin.com/in/tyler-harnish-th117
            </a>
          </li>
          <li className="text-gray-400">
            GitHub:{" "}
            <a
              href="https://github.com/TylerHarnish5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline hover:text-white transition-colors"
            >
              github.com/TylerHarnish5
            </a>
          </li>
        </ul>
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-400 text-base">
            &copy; {new Date().getFullYear()} Tyler Harnish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
