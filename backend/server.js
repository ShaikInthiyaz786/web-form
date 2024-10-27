const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Import models
const User = require('./models/User')(sequelize);
const Address = require('./models/Address')(sequelize);

// Establish relationships
User.hasMany(Address);
Address.belongsTo(User);

// Sync database
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
});

// Routes
app.post('/register', async (req, res) => {
  const { name, address } = req.body;
  try {
    const user = await User.create({ name });
    await Address.create({ address, UserId: user.id });
    res.status(201).json({ message: 'User and address created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});