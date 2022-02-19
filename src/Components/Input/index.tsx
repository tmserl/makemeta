import './Input.css';

function Input({ handleChange, data }: { handleChange: any; data: any }) {
  return (
    <section className="form">
      <form className="wrapper-sm">
        <p>Start here</p>
        <label>What's the name of your site?</label>
        <input
          placeholder="MakeMeta"
          type="text"
          name="title"
          value={data.title || ''}
          onChange={handleChange}
        />
        <label>How would you describe your site?</label>
        <input
          placeholder="Effortlessly generate Meta Tags for your website"
          type="text"
          name="description"
          value={data.description || ''}
          onChange={handleChange}
        />
        <label>What's the URL for your site?</label>
        <input
          placeholder="https://makemeta.app"
          type="text"
          name="url"
          value={data.url || ''}
          onChange={handleChange}
        />
        <label>What's your Twitter handle?</label>
        <input
          placeholder="@tmserl_"
          type="text"
          name="twitter"
          value={data.twitter || ''}
          onChange={handleChange}
        />
        <label>Link (URL) to an image?</label>
        <input
          placeholder="https://i.kym-cdn.com/photos/images/facebook/000/764/965/47a.jpg"
          type="text"
          name="image"
          value={data.image || ''}
          onChange={handleChange}
        />
        <label>What's the alt text for your image?</label>
        <input
          placeholder="Michael Rosen saying 'Nice'"
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
