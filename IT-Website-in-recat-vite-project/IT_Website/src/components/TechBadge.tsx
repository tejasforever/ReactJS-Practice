import React from 'react';
import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  index: number;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
      
      <span className="relative z-10 text-gray-700 font-semibold group-hover:text-blue-700 transition-colors duration-300">
        {tech}
      </span>
    </motion.div>
  );
};