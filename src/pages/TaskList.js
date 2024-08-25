import React, { useState, useEffect } from 'react';
import { Button, Container, ListGroup, Form } from 'react-bootstrap';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('/tasks', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    try {
      const res = await fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ task: newTask }),
      });
      const data = await res.json();
      setTasks([...tasks, data]);
      setNewTask('');
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };

  return (
    <Container>
      <h2>Your Tasks</h2>
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group controlId="formTask">
          <Form.Control
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addTask}>Add Task</Button>
      </Form>
      <ListGroup className="mt-3">
        {tasks.map(task => (
          <ListGroup.Item key={task.id}>{task.task}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
