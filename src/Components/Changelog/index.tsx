import './Changelog.css';
import { motion, AnimatePresence } from 'framer-motion';
import changelog from '../../lib/changelog';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const changelogVariants = {
  hidden: { y: '-50vh', opacity: 0 },
  visible: { y: '120px', opacity: 1, transition: { delay: 0.25 } },
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
          exit="hidden"
        >
          <motion.div className="changelog" variants={changelogVariants}>
            <p
              className="changelog--close"
              onClick={() => setShowChangelog(!showChangelog)}
            >
              Close
            </p>
            {changelog.map((item) => (
              <div key={item.version}>
                <article className="changelog--item">
                  <div className="changelog--meta">
                    <p>{item.date}</p>
                    <p className="changelog--version">{item.version}</p>
                  </div>
                  <div className="changelog--content">
                    <h3>{item.title}</h3>
                    {item.description.map((paragraph) => (
                      <div key={paragraph}>
                        <p className="changelog--description">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </article>
                <hr className="line" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Changelog;
