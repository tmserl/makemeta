function Input({ handleChange, data }: { handleChange: any; data: any }) {
  return (
    <form>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={data.title || ''}
        onChange={handleChange}
      />
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={data.description || ''}
        onChange={handleChange}
      />
      <label>Twitter Handle:</label>
      <input
        type="text"
        name="twitter"
        value={data.twitter || ''}
        onChange={handleChange}
      />
      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={data.image || ''}
        onChange={handleChange}
      />
      <label>Image Alt Text:</label>
      <input
        type="text"
        name="alt"
        value={data.alt || ''}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
