import './Input.css';

function Input({ handleChange, data }: { handleChange: any; data: any }) {
  return (
    <section className="form">
      <form className="wrapper-sm">
        <p>Start here</p>
        <label>What's the name of your site?</label>
        <input
          type="text"
          name="title"
          value={data.title || ''}
          onChange={handleChange}
        />
        <label>How would you describe your site?</label>
        <input
          type="text"
          name="description"
          value={data.description || ''}
          onChange={handleChange}
        />
        <label>What's the URL for your site?</label>
        <input
          type="text"
          name="url"
          value={data.url || ''}
          onChange={handleChange}
        />
        <label>What's your Twitter Handle?</label>
        <input
          type="text"
          name="twitter"
          value={data.twitter || ''}
          onChange={handleChange}
        />
        <label>Link (URL) to an image?</label>
        <input
          type="text"
          name="image"
          value={data.image || ''}
          onChange={handleChange}
        />
        <label>What's the Alt text for your image?</label>
        <input
          type="text"
          name="alt"
          value={data.alt || ''}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default Input;
