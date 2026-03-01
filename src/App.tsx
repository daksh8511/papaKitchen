import { motion } from "framer-motion"
import logo from "./assets/logo.svg"
import bannerImg from "./assets/bannerimage.svg"
import aboutImg from "./assets/aboutus.svg"
import whyChooseUsImg from './assets/why_choose_us.svg'

import ordersTruck from './assets/orders_truck.svg'
import certified from './assets/certified.svg'
import availableOnline from './assets/available_online.svg'
import serviceSince from './assets/service_since.svg'
import menuItem from './assets/menu_items.svg'

import { menuItems } from './menuData'

import slider1 from './assets/slider1.svg'
import slider2 from './assets/slider2.svg'
import slider3 from './assets/slider3.svg'
import slider4 from './assets/slider4.svg'
import slider5 from './assets/slider5.svg'
import Slider from './Slider';
import { useNavigate } from "react-router-dom"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
  viewport: { once: true, margin: "-50px" }
};

const App = () => {
  const navigate = useNavigate();

  const whyChooseUs = [
    { image: ordersTruck, name: '500+ order' },
    { image: certified, name: 'FSSAI certified kitchen' },
    { image: availableOnline, name: 'Available Online' },
    { image: serviceSince, name: 'Service Since' },
    { image: menuItem, name: '30+ Menu items' }
  ]
  return (
    <div className="overflow-x-hidden">
      {/* banner section */}
      <main>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-3"
        >
          <img src={logo} alt="logo" className="w-20 mx-auto" />
        </motion.header>
        <div className="flex items-center gap-5 ps-12 md:px-6 justify-center py-24">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[#FFA03A] font-semibold text-5xl">Pure spice</h2>
            <h2 className="text-[#99353D] font-semibold text-5xl">Pure comfort</h2>
            <p className="my-7 w-[400px]">Experience the bold aromas and creamy textures
              of handcrafted Indian delicacies made with love.</p>
            <button onClick={() => navigate('/menu')} className="bg-[#FFA03A] text-white px-6 py-2 rounded-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">Explore menu</button>
          </motion.div>
          {/* right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block"
          >

            <motion.img
              src={bannerImg}
              alt="bannerimage"
              className="w-[70%] m-auto drop-shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,     // speed (lower = faster)
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </main>

      {/* about us section */}
      <section className="flex items-center gap-5 px-6 justify-center py-0 md:py-24 h-full md:h-screen">
        {/* about us content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="px-6 w-full md:w-1/2 ps-0 md:ps-24"
        >
          <motion.h2 variants={fadeInUp} className="text-[#FFA03A] font-semibold text-5xl mb-5">About us</motion.h2>
          <motion.p variants={fadeInUp} className="w-full md:w-[500px]">
            At our restaurant, food is more than a meal — it’s an experience.
          </motion.p>
          <motion.p variants={fadeInUp} className="w-full md:w-[500px] my-3">We bring together authentic recipes, handpicked spices, and fresh ingredients to create dishes that celebrate the rich flavors of Indian cuisine.</motion.p>
          <motion.p variants={fadeInUp} className="w-full md:w-[500px]">Every plate is crafted with passion, tradition, and a touch of modern excellence. From creamy classics to bold spice-infused curries, we serve food that feels like home and tastes unforgettable.</motion.p>
        </motion.div>
        {/* about us image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 hidden md:block"
        >
          <img src={aboutImg} alt="aboutus" className="w-[70%] mr-auto rounded-tl-[100px] rounded-br-[100px] shadow-xl" />
        </motion.div>
      </section>

      {/* menu section */}
      <section className="h-full p-6 md:p-0 mt-10 md:mt-0 md:h-screen">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="text-[#FFA03A] font-semibold text-5xl mb-10 text-center"
        >
          Menu
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-3 gap-8"
        >
          {
            menuItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="m-auto cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-52 h-52 object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
                />
                <span className="flex justify-center mt-3 font-medium text-gray-800">{item.name}</span>
              </motion.div>
            ))
          }
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => navigate('/menu')}
          className="flex m-auto mt-9 bg-[#FFA03A] text-white px-6 py-2 rounded-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          Explore menu
        </motion.button>
      </section>

      {/* why choose us section */}
      <section className="h-full md:h-screen py-24">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="text-[#FFA03A] font-semibold text-5xl mb-10 text-center"
        >
          Why choose us
        </motion.h2>
        <div className="block md:flex items-center gap-5 px-6 justify-center">
          {/* image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            <img src={whyChooseUsImg} alt="whyChooseUs" className="w-full md:w-[70%] flex m-auto drop-shadow-2xl" />
          </motion.div>
          {/* content section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="gap-5 flex flex-col w-full mt-10 md:w-1/2"
          >
            {
              whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-center bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer max-w-[350px]"
                >
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                  <span className="font-semibold text-gray-800 text-lg">{item.name}</span>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </section>

      {/* user experience section */}
      <section className="block md:flex items-center gap-10 px-6 py-0 md:py-24 h-screen min-h-[700px]">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="w-full md:w-1/2 ps-0 md:ps-24"
        >
          <motion.h2 variants={fadeInUp} className="text-[#FFA03A] font-semibold text-5xl w-full md:w-[500px] mb-5">Experience</motion.h2>
          <motion.h3 variants={fadeInUp} className="text-[#99353D] font-semibold text-4xl w-full md:w-[500px] mb-4">Aesthetic Bites</motion.h3>
          <motion.p variants={fadeInUp} className="w-full md:w-[500px] text-lg leading-relaxed text-gray-700">
            Discover our delicacies from a different perspective. Swipe through some of the most aesthetic bites you'll ever have. Every plate is crafted with passion and a touch of modern excellence.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            className="bg-[#FFA03A] text-white px-6 py-2 rounded-full cursor-pointer mt-8 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300"
          >
            Explore More
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center relative md:mt-0"
        >
          <Slider images={[slider1, slider2, slider3, slider4, slider5]} />
        </motion.div>
      </section>

      {/* footer section */}
      <footer className="p-3 px-12 mt-26 md:mt-0 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 font-medium">Copyright © 2026 All rights reserved.</p>
          <motion.img
            whileHover={{ scale: 1.1, rotate: 10 }}
            src={logo}
            alt="logo"
            className="w-16 cursor-pointer"
          />
        </div>
      </footer>
    </div>
  )
}

export default App