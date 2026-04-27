import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);

  // ADD ITEM
  const addItem = async () => {
    await axios.post("http://localhost:5000/api/items", {
      name,
      quantity,
      price,
    });
    getItems();
    setName("");
    setQuantity("");
    setPrice("");
  };

  // DELETE ITEM
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    getItems();
  };

  // GET ITEMS
  const getItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items");
    setItems(res.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Item Manager</h1>
      <div className="form-row">
        <input
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          className="input"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="add-btn" onClick={addItem}>
          Add
        </button>
      </div>
      <table className="item-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
