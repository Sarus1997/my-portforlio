"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../css/page.module.css";

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className={styles.page}>
      <br />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>tttt</h1>
      </motion.div>
    </div>
  );
}
