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
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              name="missing-something"
              method="POST"
              data-netlify="true"
            >
              <label
                className="missing-something--header"
                htmlFor="whats-missing"
              >
                What's missing?
              </label>
              <input
                className="missing-something--input"
                type="text"
                name="whats-missing"
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
