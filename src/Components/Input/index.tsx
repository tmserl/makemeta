import './Input.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hint from '../Hint';
import hints from '../../lib/hints';

const hintVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
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
  counter: any;
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
        >
          ?
        </motion.div>
        <label>
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
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {isHintClicked && (
              <motion.div exit={{ opacity: 0, y: -10 }}>
                <Hint hint={hints.title} isHintClicked={isHintClicked} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <label>
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
          placeholder="Effortlessly generate Meta Tags for your website"
          type="text"
          name="description"
          value={data.description || ''}
          onChange={(e) => {
            handleChange(e);
            handleCounter(e, 1);
          }}
        />
        {isHintClicked && (
          <Hint hint={hints.description} isHintClicked={isHintClicked} />
        )}
        <label>What's the URL for your site?</label>
        <input
          placeholder="https://makemeta.app"
          type="text"
          name="url"
          value={data.url || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {isHintClicked && (
          <Hint hint={hints.url} isHintClicked={isHintClicked} />
        )}
        <label>What's your Twitter handle?</label>
        <input
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
        <label>Link (URL) to an image?</label>
        <input
          placeholder="https://social-card-image.xyz/"
          type="text"
          name="image"
          value={data.image || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {isHintClicked && (
          <Hint hint={hints.img} isHintClicked={isHintClicked} />
        )}
        <label>
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
          placeholder="MakeMeta"
          type="text"
          name="alt"
          value={data.alt || ''}
          onChange={(e) => {
            handleChange(e);
            handleCounter(e, 2);
          }}
        />
        {isHintClicked && (
          <Hint hint={hints.alt} isHintClicked={isHintClicked} />
        )}
      </form>
    </section>
  );
}

export default Input;
