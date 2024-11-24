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
      "I co-lead the development of TMG Fuse, the only integration app purpose-built for Shopify and fully embedded within its app ecosystem. Built a responsive Shopify-embedded frontend using Remix, developed secure backend services for data synchronization, and provisioned all AWS infrastructure via Terraform. Scaled Fuse from a proof of concept to a production-ready solution used by TMG clients.",
    skills: [
      "Remix",
      "DBOS",
      "Node.js",
      "AWS",
      "Terraform",
      "GraphQL",
      "Shopify"
    ],
  },
  {
    company: "Fulfil",
    title: "Software Engineering Intern",
    date: "2022",
    location: "Redwood City, CA",
    description:
      "Built a full stack user management application for cloud administrators using Angular, Node.js, MySQL, and other technologies. Also played around with some robots. They're pretty cool.",
    skills: ["Node.js", "Express.js", "Angular", "MySQL", "CI/CD"],
  },
  {
    company: "Chea Seed",
    title: "QA Engineering Intern",
    date: "2021",
    location: "Palo Alto, CA",
    description:
      "Wrote end-to-end test scripts using Cypress.io for a career tracking app. This marks the start of my professional software engineering career",
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
      <div className="flex flex-row items-center justify-center py-20 2xl:py-36 px-5 md:px-10 bg-white">
        <div className="flex flex-col w-[80vw] md:w-[50vw]">
          {jobExperiences.map((experience: JobExperience, index: number) => {
            return (
              <div key={index}>
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
                        <div className="transition-all duration-500 bg-gray-200 hover:bg-orange-500 rounded-2xl py-1 px-3">{skill}</div>
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
