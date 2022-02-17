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

document.getElementById("saving_Cal").addEventListener("click", function () {
  //get saving persectage
  const savingPercent = document.getElementById("saving_percent");
  const savingPercentText = savingPercent.value;
  const savingPercentNum = parseFloat(savingPercentText);

  //get remaing balanc after expense;
  const balance = document.getElementById("balance");
  const balanceText = balance.innerText;
  const balanceNum = parseFloat(balanceText);
  const savingAmountCal = (balanceNum / 100) * savingPercentNum;

  // Calculation saving amount
  const savingAmount = document.getElementById("saving_Amount");
  const savingAmountText = savingAmount.innerText;
  const savingAmountNum = parseFloat(savingAmountText);
  console.log(savingAmountNum);
  savingAmount.innerText = savingAmountCal;

  // Remaing balance after saving calculation;
  const remaing_Balance = document.getElementById("ramaing_Balance");
  remaing_Balance.innerText = balanceNum - savingAmountNum;
});
