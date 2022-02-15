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
      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={data.image || ''}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
