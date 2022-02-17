document.getElementById("expense_Cal").addEventListener("click", function () {
  //   console.log("i'm clickd");
  // Get monthly Income
  const monthlyIncome = document.getElementById("monthly_Incom");
  const monthlyIncomeText = monthlyIncome.value;
  const monthlyIncomeN = parseFloat(monthlyIncomeText);

  //Get Food Expense input
  const foodExp = document.getElementById("food_Exp");
  const foodExpText = foodExp.value;
  const foodExpNum = parseFloat(foodExpText);
  //   console.log(foodExpNum);

  //Get Rent Expense input
  const rentExp = document.getElementById("rent_Exp");
  const rentExpText = rentExp.value;
  const rentExpNum = parseFloat(rentExpText);
  //   console.log(rentExpNum);
  //Get Cloth Expense Input
  const clothsExp = document.getElementById("cloths_Exp");
  const clothsExpText = clothsExp.value;
  const clothsExpNum = parseFloat(clothsExpText);
  //   console.log(clothsExpNum);

  // Set total expense
  const totalExp = document.getElementById("total_Exp");
  const totalExpText = totalExp.innerText;
  const totalExpNum = foodExpNum + rentExpNum + clothsExpNum;
  totalExp.innerText = totalExpNum;

  //primary remaing blance
  const balance = document.getElementById("balance");
  const totalBalance = balance.innerText;
  balance.innerText = monthlyIncomeN - totalExpNum;
});
