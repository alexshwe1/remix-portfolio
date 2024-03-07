import { useOutletContext } from "@remix-run/react";
import { AnimatePresence, MotionValue, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bargain from '../images/bargain.jpg';
import stravafy from '../images/stravafy.png'
import moto from '../images/moto.png'

interface Project {
  id: number;
  title: string;
  img: string;
  desc: string;
  shortDesc: string;
  learnMoreText: string;
  learnMoreLink?: string;
}

const items: Project[] = [
  {
    id: 1,
    title: "Bargain",
    img: bargain,
    desc: "Bargain is an iOS app I developed to showcase exclusive deals at bars in Madison and Chicago. Since hitting the App Store in September 2023, it's been a hit, racking up hundreds of downloads. By simplifying the discovery of new promotions and bolstering local businesses, Bargain is reshaping the nightlife landscape, seamlessly merging technology with social experiences.",
    shortDesc: "An iOS app for exclusive bar deals in Madison and Chicago.",
    learnMoreText: "Click here to learn more!",
    learnMoreLink: "https://apps.apple.com/us/app/bargain-sip-and-save/id6464521870?uo=2"
  },
  {
    id: 2,
    title: "Stravafy",
    img: stravafy,
    desc: "Stravafy is a Remix application that bridges your Strava account with Spotify, allowing for seamless integration between your fitness activities and music preferences. Once you upload an activity on Strava, Stravafy automatically updates your activity to display the music you listened to during your workout. Additionally, Stravafy offers personalized playlists based on your activity types and paces, enhancing your workout experience with tailored music selections. ",
    shortDesc: "A Remix application linking Strava with Spotify, enhancing workout experiences with personalized playlists.",
    learnMoreText: "Coming soon...",
  },
  {
    id: 3,
    title: "Moto Bikes",
    img: moto,
    desc: "Moto is an online storefront providing electric bikes at accessible price points, merging innovation with eco-friendly transportation. Since its inception, Moto has been committed to making eco-friendly transportation options more accessible to all, revolutionizing the way people commute and adventure.",
    shortDesc: "An online storefront offering affordable electric bikes, merging innovation with eco-friendly transportation.",
    learnMoreText: "Click here to learn more!",
    learnMoreLink: "https://www.ridewithmoto.com/"
  }
];


interface CardProps {
  index: number;
  frontCard: boolean;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  drag?: "x" | "y" | boolean;
  item: Project;
}

function Card(props: CardProps) {
  const [exitX, setExitX] = useState<number>(0);

  const x = useMotionValue(0);
  const variantsFrontCard = {
      animate: { scale: 1, y: 0, opacity: 1 },
      exit: (custom: number) => ({ x: custom, opacity: 0, scale: 0.5 }),
  };
  const variantsBackCard = {
      initial: { scale: 0, y: 105, opacity: 0 },
      animate: { scale: 0.75, y: 280, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: any) {
      if (info.offset.x < -10) {
          setExitX(-10);
          props.setIndex(props.index + 1 == items.length ? 0 : props.index + 1);
      }
      if (info.offset.x > 10) {
          setExitX(10);
          props.setIndex(props.index + 1 == items.length ? 0 : props.index + 1);
      }
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0
      }}
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center px-5 bg-gray-100 h-[60vh] md:h-[40vh] md:w-[70vw] rounded-2xl shadow-xl"
      >
        <img 
          src={props.item.img} 
          alt={props.item.title} 
          draggable="false"
          className="w-[20vh] h-[20vh] md:w-[30vh] md:h-[30vh] rounded-full animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-1"
        />
        <div
          className="flex flex-col pl-5"
        >
          <h2
            className="pb-1 pt-2 md:pt-0 font-block font-extrabold text-4xl animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent font-block font-extrabold"
          >
            {props.item.title}
          </h2>
          <p 
            className="hidden lg:block"
          >
            {props.item.desc}
            {props.item.learnMoreLink ? 
                <motion.a 
                href={props.item.learnMoreLink}
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                {' '}{props.item.learnMoreText}
              </motion.a> 
            :
              <motion.a
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                {' '}{props.item.learnMoreText}
              </motion.a> 
            }
          </p>
          <p 
            className="lg:hidden"
          >
            {props.item.shortDesc}
            {props.item.learnMoreLink ? 
                <motion.a 
                href={props.item.learnMoreLink}
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                {' '}{props.item.learnMoreText}
              </motion.a> 
            :
              <motion.a
                whileHover={{
                  scale: 1.05,
                  color: "#f97316"
                }}
              >
                {' '}{props.item.learnMoreText}
              </motion.a> 
            }
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex flex-col z-30">
      <div className="flex flex-row items-center justify-center py-24 md:h-[60vh] 2xl:py-96 px-5 md:px-10 bg-gray-50 border-b-1 border-gray-300">
        <motion.p 
          initial={{
            scale: 0,
            opacity: 0,
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
          className="text-4xl md:text-8xl animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent font-block font-extrabold"
        >
          Featured Projects
        </motion.p>
      </div>
      <div ref={ref} className="px-5 pt-[6vh] pb-[100vh] md:pt-[100px] md:pb-[320px] 2xl:pt-[100px] 2xl:pb-[320px] bg-white overflow-hidden">
        <div 
          className="flex flex-row items-center justify-center"
        >
          <div
            style={{
              transform: isInView ? "none" : "translateY(80px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s"
            }}
          >
            <motion.div 
              style={{
                position: "relative",
              }}
            >
              <AnimatePresence 
                initial={false}
              >
                <div className="w-[40vh] md:w-[70vw] md:h-[40vh]" />
                <Card 
                  key={index + 1 == items.length ? 0 : index + 1} 
                  frontCard={false} 
                  index={index + 1 == items.length ? 0 : index + 1} 
                  setIndex={setIndex} 
                  item={index + 1 == items.length ? items[0] : items[index + 1]}
                />
                <Card
                  key={index}
                  frontCard={true}
                  index={index}
                  setIndex={setIndex}
                  drag="x"
                  item={items[index]}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}