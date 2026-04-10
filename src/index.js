console.log('TODAS LAS ENV:', JSON.stringify(process.env, null, 2));
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/projects', require('./routes/project.routes'));
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/user', require('./routes/user.routes'));

app.get('/', (req, res) => res.json({ message: 'Focusly API funcionando' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {console.log(`Servidor corriendo en puerto ${PORT}`);
});
