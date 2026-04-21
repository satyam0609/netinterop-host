"use client";
import { motion } from "framer-motion";

export const FadeInContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15, // 👈 auto stagger
            delayChildren: 0.2, // 👈 wait for image first
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }} // 👈 important
    >
      {children}
    </motion.div>
  );
};
