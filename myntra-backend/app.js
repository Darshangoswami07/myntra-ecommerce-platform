const express = require('express');
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/items');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.json({ items: storedItems });
});


app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;

  const newItem = {
    ...itemData,
    id: Math.random().toString(), 
  };

  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);

  res.status(201).json({ message: 'Stored new item.', item: newItem });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
