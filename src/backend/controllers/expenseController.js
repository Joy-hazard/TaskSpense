const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense({ user: req.user.id, description: req.body.description, amount: req.body.amount });
    const savedExpense = await expense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    await expense.remove();
    res.json({ message: 'Expense removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
