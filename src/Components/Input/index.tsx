import './Input.css';

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
  return (
    <section>
      <form className="wrapper-sm">
        <p className="start-here">Start here</p>
        <label>
          What's the name of your site?{' '}
          <span className={`${counter[0] > 60 ? 'counter__limit' : ''}`}>
            {counter[0]}
          </span>
          &nbsp;/ 60
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
        <label>
          How would you describe your site?{' '}
          <span className={`${counter[1] > 110 ? 'counter__limit' : ''}`}>
            {counter[1]}
          </span>
          / 110
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
        <label>
          What's the alt text for your image?{' '}
          <span className={`${counter[2] > 110 ? 'counter__limit' : ''}`}>
            {counter[2]}
          </span>
          / 110
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
      </form>
    </section>
  );
}

export default Input;
