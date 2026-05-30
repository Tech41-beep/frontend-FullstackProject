const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-16">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2">Audience</h3>
            <a href="#company" className="hover:text-gray-300 text-lg transition-colors">Companies</a>
            <a href="#about" className="hover:text-gray-300 text-lg transition-colors">About Us</a>
            <a href="#contact" className="hover:text-gray-300 text-lg transition-colors">Contact Us</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <a href="#about" className="hover:text-gray-300 text-lg transition-colors">Our Mission</a>
            <a href="#about" className="hover:text-gray-300 text-lg transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-gray-300 text-lg transition-colors">Join Us</a>
            <a href="#contact" className="hover:text-gray-300 text-lg transition-colors">Press</a>
            <a href="#contact" className="hover:text-gray-300 text-lg transition-colors">Blog</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <a href="#" className="hover:text-gray-300 text-lg transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-300 text-lg transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-300 text-lg transition-colors">YouTube</a>
            <a href="#" className="hover:text-gray-300 text-lg transition-colors">Twitter</a>
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm md:text-base">
          <div>
            <p>&copy; {new Date().getFullYear()} Virtual Internships. All right reserved.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-left">
            <a href="#" className="underline hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="underline hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="underline hover:text-gray-300 transition-colors">Cookie Settings</a>
            <a href="#" className="underline hover:text-gray-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;