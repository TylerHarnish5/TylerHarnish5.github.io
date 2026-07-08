'use client';
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r
                         from-primary via-secondary to-tertiary
                         bg-clip-text text-transparent mb-6"
            >
              About
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary via-secondary
                           to-tertiary bg-clip-text text-transparent"
              >
                Me
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-2xl text-content/80 mb-8"
            >
              I am a computer science graduate with experience in
              web development, machine learning, deep learning, databases, and technical support.
              I have built responsive web applications using React and Next.js and worked on
              machine learning projects using Python, PyTorch, and scikit-learn. One of these projects
              is a ResNet18 waste-image classifier that achieved 95.65% test accuracy. I am motivated to
              continue building practical software solutions and expanding my technical skills.
            </motion.p>

            {/* Resume Button */}
           <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex px-8 py-4 rounded-full bg-surface
                        border border-white/10 hover:border-primary/30
                        transition-all group"   // 👈 group lives HERE now
            >
                <div className="flex items-center space-x-2">
                <span className="text-content text-2xl group-hover:text-primary transition-colors">
                    Resume
                </span>
                <Image
                    src="/download.jpg"
                    alt="Resume Icon"
                    loading="eager"
                    width={24}
                    height={24}
                    className="object-contain"
                />
                </div>

                <div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10
                            opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                />
            </motion.a>
            </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:w-1/2 relative"
            style={{ y }}
          >
            <div className="relative w-full aspect-square group">
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 aspect-square rounded-3xl overflow-hidden
                           border border-white/10 bg-surface backdrop-blur-sm hidden md:block"
              >
                <Image
                  src="/me.jpg"
                  alt="Avatar"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                  className="object-cover scale-110 group-hover:scale-90
                             transition-transform duration-500 hidden md:block"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="text-2xl font-bold text-content">
                    Living in
                    <motion.span
                      className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Manalapan, NJ
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
