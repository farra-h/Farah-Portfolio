import { motion } from "framer-motion";

const Contact = ({ staggerContainer, fadeUp }) => {
  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto py-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeUp}
        className="capitalize mb-8 bg-transparent rounded-full border-2 border-zinc-900 dark:border-zinc-100 inline-block py-2 px-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500 font text-lg"
      >
        Contact
      </motion.div>
      <div className="text-center">
        <motion.div
          variants={fadeUp}
          className="uppercase text-5xl md:text-[100px] font-extrabold leading-none font hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
        >
          BEGIN SOMETHING
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="mt-0 text-2xl font-bold text-black dark:text-zinc-400 font"
        >
          Say Hi! & tell me about your idea
        </motion.p>
        <motion.div className="flex flex-col justify-center items-center gap-5 mt-15">
          {/* GMAIL BUTTON */}
          <motion.a
            variants={fadeUp}
            target="_blank"
            href="mailto:faraheltahawy27@gmail.com"
            className="w-fit px-12 py-5 text-2xl font border-2 border-zinc-900 dark:border-zinc-100 rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-300 flex items-center gap-3"
          >
            faraheltahawy27@gmail.com
          </motion.a>

          {/* WHATSAPP BUTTON */}
          <motion.a
            variants={fadeUp}
            // Replace 1234567890 with your actual phone number (include country code, no + or zeros)
            href="https://wa.me/201060357092"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-12 py-5 text-2xl font border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full flex items-center gap-3"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.237 3.483 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.652zm5.835-3.332c1.515.897 3.3 1.371 5.122 1.372l.006.001c5.452 0 9.891-4.439 9.893-9.891.001-2.641-1.027-5.124-2.897-6.995s-4.355-2.9-6.996-2.9c-5.452 0-9.891 4.439-9.893 9.891-.001 1.916.551 3.787 1.595 5.39l-1.043 3.809 3.92-1.026z" />
            </svg>
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
