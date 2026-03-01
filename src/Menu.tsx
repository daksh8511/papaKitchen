import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.svg";
import { menuItems } from "./menuData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-50px" }
};

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Header section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 px-8 flex items-center justify-between border-b border-gray-200 top-0 z-50 relative"
      >
        <button
          onClick={() => navigate('/')}
          className="text-[#FFA03A] font-semibold flex items-center gap-2 hover:text-[#99353D] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>
        <img
          src={logo}
          alt="logo"
          className="w-16 cursor-pointer absolute left-1/2 transform -translate-x-1/2"
          onClick={() => navigate('/')}
        />
        <div className="w-24"></div> {/* spacer for centering logo */}
      </motion.header>

      {/* Main Menu content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-[#FFA03A] font-bold text-5xl md:text-6xl mb-6">Our Distinctive Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Immerse yourself in our handcrafted selection of 30 exquisite Indian delicacies.
            Prepared with raw love, traditional passion, and a touch of aesthetic excellence.
          </p>
        </motion.div>

        {/* Dynamic Menu Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center items-center bg-white z-20 relative">
                <span className="text-[#99353D] font-bold text-xl text-center group-hover:text-[#FFA03A] transition-colors duration-300">
                  {item.name}
                </span>
                <div className="h-1 w-12 bg-[#FFA03A] rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-6 mt-16 border-t border-gray-100 flex justify-center items-center bg-white">
        <p className="text-sm text-gray-500 font-medium">Copyright © 2026 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Menu;