import React from 'react';
import { motion } from 'framer-motion';
import "../styles/hero.css"

export default function Hero() {
  // Varianti di animazione
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.5,
      transition: { duration: 1.5, ease: "easeIn" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 50px rgba(139, 92, 246, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section id='hero'>
      <motion.div
        className='animated-grid'
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      />

    
      <motion.div
        className='hero-content'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
    
        <motion.h1
          className='hero-title'
          variants={titleVariants}
        >
          Il Gender Gap in Italia
        </motion.h1>

        
        <motion.p
          className='hero-subtitle'
          variants={itemVariants}
        >
          Analisi approfondita dei dati, tendenze e prospettive
        </motion.p>

    
        <motion.a
          className="cta-a"
          href='#charts-section'
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Scopri i Dati
        </motion.a>
      </motion.div>

      <motion.div
        className="floating-element floating-1"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-element floating-2"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
