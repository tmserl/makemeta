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
            <form name="missing" method="POST">
              <input type="hidden" name="form-name" value="missing" />
              <label htmlFor="content" className="missing-something--header">
                If you think we're missing a meta tag, let us know which one
                below!
              </label>
              <input
                className="missing-something--input"
                type="text"
                name="content"
                id="content"
                placeholder="<meta name='twitter:image:alt' content='alt text goes here' />"
              />
              <p>
                <motion.button
                  className="missing-something--btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.25 }}
                  type="submit"
                >
                  Send
                </motion.button>
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default MissingSomething;
