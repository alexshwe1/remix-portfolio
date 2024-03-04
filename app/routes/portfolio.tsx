import { useOutletContext } from "@remix-run/react";
import { AnimatePresence, MotionValue, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import headshot from '../images/headshot.png'

interface Project {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const items: Project[] = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
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
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
      clamp: false,
  });

  const variantsFrontCard = {
      animate: { scale: 1, y: 0, opacity: 1 },
      exit: (custom: number) => ({ x: custom, opacity: 0, scale: 0.5 }),
  };
  const variantsBackCard = {
      initial: { scale: 0, y: 105, opacity: 0 },
      animate: { scale: 0.75, y: 200, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: any) {
      if (info.offset.x < -100) {
          setExitX(-250);
          props.setIndex(props.index + 1 == items.length ? 0 : props.index + 1);
      }
      if (info.offset.x > 100) {
          setExitX(250);
          props.setIndex(props.index + 1 == items.length ? 0 : props.index + 1);
      }
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        position: "absolute",
        top: 0,
        x,
        rotate,
        scale,
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
        className="flex flex-row bg-gray-50 h-[30vh] w-[60vw] items-center justify-items-center rounded-2xl"
      >
        <img 
          src={props.item.img} 
          alt={props.item.title} 
          draggable="false"
          className="w-16 h-16 object-fill rounded-full"
        />
        <div
          className="flex flex-col"
        >
          <h2
            className="pl-5 font-block font-extrabold "
          >
            {props.item.title}
          </h2>
          <p
            className="pl-5 pr-10"
          >
            {props.item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleScale = useTransform(scrollYProgress, [0, .005, .095, .1], [1, 2.5, 2.5, 0]);
  const titleXProgress = useTransform(scrollYProgress, [0, .005, .095, .1], [0, 500, -500,  0]);
  const projectsY = useTransform(scrollYProgress, [0, .1, .1475, 1], [0, 0, -500, -500]);
  const cardScale = useTransform(scrollYProgress, [0, .1, .1475, 1], [1, 1, 1.2, 5])
  const cardOpacity = useTransform(scrollYProgress, [0, .1, .1475, 1], [1, 1, .95, 0])

  const [index, setIndex] = useState(0);

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
      <div className="md:pt-20 md:pb-80 2xl:py-96 bg-white border-b-1 border-gray-300">
        <motion.div 
          style={{ width: 150, height: 150, position: "relative" }}
        >
          <AnimatePresence 
            initial={false}
          >
            <Card key={index + 1 == items.length ? 0 : index + 1} frontCard={false} index={index + 1 == items.length ? 0 : index + 1} setIndex={setIndex} item={index + 1 == items.length ? items[0] : items[index + 1]}/>
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
  );
}