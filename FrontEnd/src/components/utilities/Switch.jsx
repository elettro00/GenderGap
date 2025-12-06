import { motion } from 'framer-motion';
import "../../styles/switch.css"

const Switch = ({ setState, state, isActive}) => {

  const handleToggle = () => {
    const newValue = !state;
    setState?.(newValue);
  };

  return (
    <div className="switch-container">
      <span className="switch-label">Assoluto</span>
      <motion.div
        className="switch-wrapper"
        onClick={!isActive ? handleToggle : () => {}}
        whileTap={{ scale: 0.98 }}
        animate={state ? { backgroundColor: '#10b981' } : { backgroundColor: '#d1d5db' }}
      >
        <motion.span
          className="switch-thumb"
          layout
          transition={{ type: 'keyframes', stiffness: 1000, damping: 50 }}
          animate={{ x: state ? 22 : 1 }}
        />
      </motion.div>
      <span className="switch-label">%</span>
    </div>
  );
};

export default Switch;
