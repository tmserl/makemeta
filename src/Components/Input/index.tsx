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
      <input
        type="text"
        name="description"
        value={text.description || ''}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
