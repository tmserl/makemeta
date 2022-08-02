import './MissingSomething.css';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const missingSomethingVariants = {
  hidden: { y: '-50vh', opacity: 0 },
  visible: { y: '120px', opacity: 1, transition: { delay: 0.25 } },
};

function MissingSomething({
  showMissingSomething,
  setShowMissingSomething,
}: {
  showMissingSomething: boolean;
  setShowMissingSomething: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log(showMissingSomething);
  return (
    <AnimatePresence exitBeforeEnter>
      {showMissingSomething && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="changelog" variants={missingSomethingVariants}>
            <p
              className="changelog--close"
              onClick={() => setShowMissingSomething(!showMissingSomething)}
            >
              Close
            </p>
            <p>sadsad</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default MissingSomething;
