let budget = 0;
let remaining = 0;
const budgetDisplay = document.getElementById('budget-display');
const remainingDisplay = document.getElementById('remaining-display');
const expenseList = document.getElementById('expense-list');

// Setting up budget by clicking "Add Budget"
document.getElementById('set-budget-btn').addEventListener('click', () => {
  const budgetInput = parseFloat(document.getElementById('budget-input').value);
  
  if (isNaN(budgetInput) || budgetInput <= 0) {
    alert('Enter a valid budget!');
    return;
  }
  
  if (budgetInput>50000) {
    alert('Budget limit exceed!');
    return;
  }

  budget = budgetInput;
  remaining = budget;
  budgetDisplay.textContent = `Budget: ₹${budget}`;
  remainingDisplay.textContent = `Remaining: ₹${remaining}`;
});

// Adding expenses by clicking "Add Expense"
document.getElementById('add-expense-btn').addEventListener('click', () => {
  const name = document.getElementById('expense-name').value.trim();
  const amount = parseFloat(document.getElementById('expense-amount').value);
  const date = document.getElementById('expense-date').value;

  // Validation
  if (!name || isNaN(amount) || !date) {
    alert('Please fill in all fields!');
    return;
  }

  if (amount <= 0) {
    alert('Enter a valid expense amount!');
    return;
  }

  if (amount > remaining) {
    alert('Expense exceeds remaining budget!');
    return;
  }

  // Deduct expense from remaining budget
  remaining -= amount;
  remainingDisplay.textContent = `Remaining: ₹${remaining}`;

  // Display the expense in a table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>₹${amount}</td>
    <td>${date}</td>
  `;
  expenseList.appendChild(row);

  // Clear input fields
  document.getElementById('expense-name').value = '';
  document.getElementById('expense-amount').value = '';
  document.getElementById('expense-date').value = '';
});
