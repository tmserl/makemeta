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
            <h3 className="missing-something--intro">
              If you think we're missing a meta tag, let us know which one
              below!
            </h3>
            <form name="missing" method="POST">
              <input type="hidden" name="form-name" value="missing" />
              <label htmlFor="content" className="missing-something--header">
                What's missing?
              </label>
              <input
                className="missing-something--input"
                name="content"
                id="content"
                type="text"
              />
              <p>
                <button className="missing-something--btn" type="submit">
                  Send
                </button>
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default MissingSomething;
