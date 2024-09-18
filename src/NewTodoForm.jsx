export function NewTodoForm(){
    const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

    return (
          <form className='new-item-form' onSubmit={handleSubmit}>
            <div className='form-row'>
              <label htmlFor='item'>New Item</label>
              <input
                type='text'
                value={newItem}
                id='item'
                onChange={(e) => setNewItem(e.target.value)}></input>
            </div>
            <button className='btn'>Add</button>
          </form>
          )
}