const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configurações básicas
app.use(express.json());
app.use(cors());

// Banco de dados em memória (simulado para começarmos de forma simples)
let tasks = [
  { id: 1, title: 'Criar repositório no GitHub', status: 'concluido' },
  { id: 2, title: 'Estudar lógica de programação', status: 'fazendo' },
  { id: 3, title: 'Configurar ambiente de ADS', status: 'fazer' }
];

// Rota para listar todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para criar uma nova tarefa
app.post('/tasks', (req, res) => {
  const { title, status } = req.body;
  
  const newTask = {
    id: tasks.length + 1,
    title: title || 'Nova Tarefa',
    status: status || 'fazer'
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Rota para deletar uma tarefa
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.json({ message: 'Tarefa removida com sucesso!' });
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando liso na porta ${PORT} 🚀`);
});
