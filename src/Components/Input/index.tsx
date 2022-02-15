function Input({ handleChange, text }) {
  return (
    // <input
    //   type="text"
    //   value={text}
    //   onChange={(e) => handleChange(e.target.value)}
    // />
    <form>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={text.title || ''}
        onChange={handleChange}
      />
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={text.description || ''}
        onChange={handleChange}
      />
      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={text.image || ''}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
