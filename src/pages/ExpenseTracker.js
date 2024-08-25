import React, { useState, useEffect } from 'react';
import { Button, Container, ListGroup, Form } from 'react-bootstrap';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await fetch('/expenses', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const data = await res.json();
        setExpenses(data);
      } catch (err) {
        console.error('Failed to fetch expenses:', err);
      }
    };

    fetchExpenses();
  }, []);

  const addExpense = async () => {
    try {
      const res = await fetch('/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newExpense),
      });
      const data = await res.json();
      setExpenses([...expenses, data]);
      setNewExpense({ description: '', amount: '' });
    } catch (err) {
      console.error('Failed to add expense:', err);
    }
  };

  return (
    <Container>
      <h2>Your Expenses</h2>
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group controlId="formExpenseDescription">
          <Form.Control
            type="text"
            placeholder="Enter a description"
            value={newExpense.description}
            onChange={e => setNewExpense({ ...newExpense, description: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formExpenseAmount">
          <Form.Control
            type="number"
            placeholder="Enter an amount"
            value={newExpense.amount}
            onChange={e => setNewExpense({ ...newExpense, amount: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" onClick={addExpense}>Add Expense</Button>
      </Form>
      <ListGroup className="mt-3">
        {expenses.map(expense => (
          <ListGroup.Item key={expense.id}>
            {expense.description}: ${expense.amount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ExpenseTracker;
