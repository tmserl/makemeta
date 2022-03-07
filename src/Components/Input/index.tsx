import './Input.css';
import { useState } from 'react';
import Hint from '../Hint';
import hints from '../../lib/hints';

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
  const [toggle, setToggle] = useState<boolean>(false);

  function hintToggler() {
    setToggle(!toggle);
  }

  return (
    <section>
      <form className="wrapper-sm">
        <p className="start-here">Start here</p>
        <div
          onClick={() => {
            hintToggler();
          }}
          className="hint-toggle"
        >
          ?
        </div>
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
        {toggle && <Hint hint={hints.title} toggle={toggle} />}
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
        {toggle && <Hint hint={hints.description} toggle={toggle} />}
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
        {toggle && <Hint hint={hints.url} toggle={toggle} />}
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
        {toggle && <Hint hint={hints.twitter} toggle={toggle} />}
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
        {toggle && <Hint hint={hints.img} toggle={toggle} />}
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
        {toggle && <Hint hint={hints.alt} toggle={toggle} />}
      </form>
    </section>
  );
}

export default Input;
