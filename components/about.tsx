"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a junior full-stack developer with a Computer Engineering degree, graduating with a GPA of 3.51. Driven by a passion for programming, I embarked on a self-taught journey to master full-stack development, focusing on both web and mobile technologies. My core skills include JavaScript, React, React Native, Next.js, Node.js, and MongoDB, with additional experience in TypeScript and Prisma. I enjoy tackling complex problems and have a strong interest in mobile app development, where I can combine my technical expertise with creative problem-solving. I am currently seeking a full-time software developer position to further expand my skills and contribute to innovative mobile projects.
      </p>
    </motion.section>
  );
}
