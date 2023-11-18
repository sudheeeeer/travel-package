import { useState } from 'react';
import './style.css';
import Head from './Head';
import SubHead from './SubHead';
import List from './List';
import Footer from './Footer';


function App() {



  const [items, setItems] = useState([])
  function handleChange(item) {
    setItems(items => [...items, item])
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => id !== item.id))
  }
  function handlecheckbox(id) {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handleClear() {
    let confirm = window.confirm('Are you sure to clear everything from the list')
    if (confirm)
      setItems([])
  }

  return (
    <div className="App">
      <Head />
      <SubHead change={handleChange} />
      <List items={items} onDelete={handleDelete} onCheckbox={handlecheckbox} onClear={handleClear} />
      <Footer items={items} />
    </div>

  );
}





export default App;
