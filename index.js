function calculateBudget() {
  const totalExpenses =
    parseFloat(document.getElementById("rent-input").value || 0) +
    parseFloat(document.getElementById("loans-input").value || 0) +
    parseFloat(document.getElementById("electric-input").value || 0) +
    parseFloat(document.getElementById("phone-input").value || 0) +
    parseFloat(document.getElementById("internet-input").value || 0) +
    parseFloat(document.getElementById("transportation-input").value || 0) +
    parseFloat(document.getElementById("food-input").value || 0) +
    parseFloat(document.getElementById("insurance-input").value || 0) +
    parseFloat(document.getElementById("other-input").value || 0);

  const totalIncome =
    parseFloat(document.getElementById("salary-input").value || 0) +
    parseFloat(document.getElementById("freelance-input").value || 0) +
    parseFloat(document.getElementById("passive-input").value || 0);

  const extraIncome = totalIncome - totalExpenses;

  document.getElementById(
    "total-income"
  ).textContent = `Total Monthly Income: $${totalIncome.toFixed(2)}`;
  document.getElementById(
    "total-expenses"
  ).textContent = `Total Monthly Expenses: $${totalExpenses.toFixed(2)}`;
  document.getElementById(
    "extra-income"
  ).textContent = `Leftover Monthly Income: $${extraIncome.toFixed(2)}`;
}
