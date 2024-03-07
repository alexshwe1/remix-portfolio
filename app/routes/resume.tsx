import { Reveal } from "~/components/utils/Reveal";
import { AnimatePresence, MotionValue, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

interface JobExperience {
  company: string;
  title: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
}

const jobExperiences: JobExperience[] = [
  {
    company: "Tech Mates Group",
    title: "Full Stack Software Engineer",
    date: "2023-Present",
    location: "Chicago, IL",
    description:
      "I help build and scale enterprise integrations for Shopify. Implemented CI/CD pipelines for development, staging, and development environments. Built embedded apps interacting with Shopify's storefront and admin APIs. Also helped make the integration apps look pretty.",
    skills: [
      "CodePipeline",
      "EventBridge",
      "Lambda",
      "SQS",
      "ECS",
      "Remix",
      "React",
      "Shopify"
    ],
  },
  {
    company: "Fulfil",
    title: "Software Engineering Intern",
    date: "2022",
    location: "Redwood City, CA",
    description:
      "Built a full stack user management application for cloud administrators using Angular, Node.js, MySQL, and other technologies. Authored a Node.js server-side application resulting in robust and efficient REST API routes.",
    skills: ["Node.js", "Express.js", "Angular", "MySQL", "CI/CD"],
  },
  {
    company: "Chea Seed",
    title: "QA Engineering Intern",
    date: "2021",
    location: "Palo Alto, CA",
    description:
      "Wrote end-to-end test scripts using Cypress.io for a career tracking app.",
    skills: ["Cypress.io", "GitHub"],
  },
];

export default function Resume() {
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
          Experience
        </motion.p>
      </div>
      <div className="flex flex-row items-center justify-center py-20 2xl:py-96 px-5 md:px-10 bg-white">
        <div className="flex flex-col w-[80vw] md:w-[50vw]">
          {jobExperiences.map((experience: JobExperience, index: number) => {
            return (
              <div>
                <div className="flex justify-between">
                  <Reveal><p className="font-black text-xl pb-3">{experience.company}</p></Reveal>
                  <Reveal><p className="hidden md:block">{experience.date}</p></Reveal>
                </div>
                <div className="flex justify-between">
                  <Reveal><p className="font-black text-orange-500 pb-3">{experience.title}</p></Reveal>
                  <Reveal><p className="hidden md:block">{experience.location}</p></Reveal>
                </div>
                <Reveal>
                  <div className="flex justify-between pr-4 pb-3">
                    {experience.description}
                  </div>
                </Reveal>
                <Reveal>
                  <div className="flex flex-wrap flex-row gap-2">
                    {experience.skills.map((skill) => {
                      return (
                        <div className="bg-gray-200 rounded-2xl py-1 px-3">{skill}</div>
                      )
                    })}
                  </div>
                </Reveal>
                {index == jobExperiences.length - 1 ? 
                  <div></div> 
                : 
                  <div className="py-10">
                    <div className="bg-gray-300 w-[80vw] md:w-[50vw] h-[1px]"/>
                  </div>
                }
              </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}