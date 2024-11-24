import { useRef } from 'react';
import headshot from '../images/headshot.png'
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function Index() {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="flex flex-col z-30">
      <div className="flex flex-row items-center justify-center py-24 md:h-[60vh] 2xl:py-96 px-12 md:px-10 bg-gray-50 border-b-1 border-gray-300">
        <motion.p 
          initial={{
            scale: 0,
            opacity: 0,
            x: 150
          }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1,
            ease: "backInOut"
          }}
          className="pr-5 md:px-20 text-4xl md:text-8xl animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent font-block font-extrabold"
        >
          Alex Shwe
        </motion.p>
        <motion.img 
          initial={{
            rotate: "0deg",
            scale: 0,
            x: 0,
          }}
          animate={{
            rotate: "360deg",
            scale: 1,
            x: [-75, 100, 0]
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            times:[0, 0.5, 1],
          }}
          src={headshot}
          className="w-36 md:w-60 h-auto rounded-full animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-1"
        />
      </div>
      <div className="bg-white border-b-1 border-gray-300">
        <div className="py-5 md:py-6 flex flex-col items-center">
          <AnimatePresence>
            <motion.div 
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              transition={{
                duration: 0.75,
                ease: "backInOut"
              }}
              className="text-center flex items-stretch font-semibold text-base gap-x-5 md:gap-x-44 px-5"
            >
              <motion.div 
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                Passionate Creator
              </motion.div>
              <motion.div 
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                Lifelong Learner
              </motion.div>
              <motion.div 
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                Hardworking Teammate
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="py-20 px-5 sm:px-20 md:py-48 lg:px-52 bg-gray-50">
        <div 
          className="flex flex-col items-center"
        >
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(150px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}
          >
            Hey, I'm Alex Shwe, and I love to build. My love for creating started with my middle school woodworking elective. 
            I loved learning about new tools and soon built a sizable shop of my own. YouTube was (and still is) my go-to resource for exposing myself to new tools, 
            and as soon as I discovered a new tool, I had to have it. The problem? Tools worth hundreds of dollars are pretty tough for a middle schooler to afford. 
            In high school, I began learning to code and immediately took to it. Instead of having to pay hundreds of dollars for a new tool, 
            all I had to spend were a few seconds installing a package or library. Ever since, I have loved discovering new tools to put in my toolbelt.
          </div>
        </div>
      </div>
    </div>
  );
}
