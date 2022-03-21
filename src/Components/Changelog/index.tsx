import './Changelog.css';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import React from 'react';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function Changelog({
  showChangelog,
  setShowChangelog,
}: {
  showChangelog: boolean;
  setShowChangelog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showChangelog && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default Changelog;
