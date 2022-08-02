import './Input.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hint from '../Hint';
import hints from '../../lib/hints';

const hintVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -25 },
};

function Input({
  handleChange,
  handleCounter,
  data,
  counter,
}: {
  handleChange: any;
  handleCounter: any;
  data: any;
  counter: number[];
}) {
  const [isHintClicked, setIsHintClicked] = useState<boolean>(false);

  function hintToggler() {
    setIsHintClicked(!isHintClicked);
  }

  return (
    <section>
      <form className="wrapper-sm">
        <p className="start-here">Start here</p>
        <motion.div
          whileHover={{ scale: 1.05, color: '#bbbbbb' }}
          whileTap={{ scale: 1.15 }}
          onClick={() => {
            hintToggler();
          }}
          className="hint-toggle"
          id="hint-toggle"
        >
          ?
        </motion.div>
        <label htmlFor="title">
          What's the name of your site?{' '}
          <div
            className={`${
              counter[0] > 60 ? 'counter counter__limit' : 'counter'
            }`}
          >
            {counter[0]}
            &nbsp;/ 60
          </div>
        </label>
        <input
          id="title"
          placeholder="MakeMeta"
          type="text"
          name="title"
          value={data.title || ''}
          onChange={(e) => {
            handleChange(e);
            handleCounter(e, 0);
          }}
        />
        <motion.div
          animate={isHintClicked ? 'open' : 'closed'}
          variants={hintVariants}
        >
          <AnimatePresence>
            {isHintClicked && (
              <motion.div exit={{ opacity: 0, y: 8 }}>
                <Hint hint={hints.title} isHintClicked={isHintClicked} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <label htmlFor="description">
          How would you describe your site?{' '}
          <div
            className={`${
              counter[1] > 105 ? 'counter counter__limit' : 'counter'
            }`}
          >
            {counter[1]}&nbsp;/ 105
          </div>
        </label>
        <input
          id="description"
          placeholder="Effortlessly generate Meta Tags for your website"
          type="text"
          name="description"
          value={data.description || ''}
          onChange={(e) => {
            handleChange(e);
            handleCounter(e, 1);
          }}
        />
        <motion.div
          animate={isHintClicked ? 'open' : 'closed'}
          variants={hintVariants}
        >
          <AnimatePresence>
            {isHintClicked && (
              <motion.div exit={{ opacity: 0, y: 8 }}>
                <Hint hint={hints.description} isHintClicked={isHintClicked} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <label htmlFor="url">What's the URL for your site?</label>
        <input
          id="url"
          placeholder="https://makemeta.app"
          type="text"
          name="url"
          value={data.url || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <motion.div
          animate={isHintClicked ? 'open' : 'closed'}
          variants={hintVariants}
        >
          <AnimatePresence>
            {isHintClicked && (
              <motion.div exit={{ opacity: 0, y: 8 }}>
                <Hint hint={hints.url} isHintClicked={isHintClicked} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <label htmlFor="twitter">What's your Twitter handle?</label>
        <input
          id="twitter"
          placeholder="@tmserl_"
          type="text"
          name="twitter"
          value={data.twitter || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {isHintClicked && (
          <Hint hint={hints.twitter} isHintClicked={isHintClicked} />
        )}
        <label htmlFor="image">Link (URL) to an image?</label>
        <input
          id="image"
          placeholder="https://social-card-image.xyz/"
          type="text"
          name="image"
          value={data.image || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <motion.div
          animate={isHintClicked ? 'open' : 'closed'}
          variants={hintVariants}
        >
          <AnimatePresence>
            {isHintClicked && (
              <motion.div exit={{ opacity: 0, y: 8 }}>
                <Hint hint={hints.img} isHintClicked={isHintClicked} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <label htmlFor="alt">
          What's the alt text for your image?{' '}
          <div
            className={`${
              counter[2] > 105 ? 'counter counter__limit' : 'counter'
            }`}
          >
            {counter[2]}&nbsp;/ 105
          </div>
        </label>
        <input
          id="alt"
          placeholder="MakeMeta Logo"
          type="text"
          name="alt"
          value={data.alt || ''}
          onChange={(e) => {
            handleChange(e);
            handleCounter(e, 2);
          }}
        />
        <motion.div
          animate={isHintClicked ? 'open' : 'closed'}
          variants={hintVariants}
        >
          <AnimatePresence>
            {isHintClicked && (
              <motion.div exit={{ opacity: 0, y: 8 }}>
                <Hint hint={hints.alt} isHintClicked={isHintClicked} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </form>
    </section>
  );
}

export default Input;
