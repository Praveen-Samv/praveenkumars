
import { motion } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
  delay?: number;
}

export const Motion = ({ children, delay = 0 }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
