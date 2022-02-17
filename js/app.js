// input income and expense common funtion
function inputAmout(inputDec) {
  const inputMoney = document.getElementById(inputDec);
  const inputMoneyText = inputMoney.value;
  const inputMoneyNum = parseFloat(inputMoneyText);
  return inputMoneyNum;
}

document.getElementById("expense_Cal").addEventListener("click", function () {
  // Get monthly Income function
  const monthlyIncomeN = inputAmout("monthly_Incom");

  //Get Food Expense input
  const foodExpNum = inputAmout("food_Exp");

  //Get Rent Expense input
  const rentExpNum = inputAmout("rent_Exp");

  //Get Cloth Expense Input
  const clothsExpNum = inputAmout("cloths_Exp");

  //error mge
  const errorMassg = document.getElementById("msg_Error");
  if (
    monthlyIncomeN > 0 &&
    foodExpNum > 0 &&
    rentExpNum > 0 &&
    clothsExpNum > 0
  ) {
    errorMassg.style.display = "none";
    //Set total expense
    const totalExp = document.getElementById("total_Exp");
    // const totalExpText = totalExp.innerText;
    const totalExpNum = foodExpNum + rentExpNum + clothsExpNum;
    totalExp.innerText = totalExpNum;
    const enoufgMoney = document.getElementById("enough_Money");

    if (totalExpNum > monthlyIncomeN) {
      enoufgMoney.style.display = "block";
      balance.innerText = "";
    } else {
      enoufgMoney.style.display = "none";
      const balance = document.getElementById("balance");
      // const totalBalance = balance.innerText;
      balance.innerText = monthlyIncomeN - totalExpNum;
    }
  } else {
    errorMassg.style.display = "block";
  }
});

document.getElementById("saving_Cal").addEventListener("click", function () {
  //total amount
  const balanceNum = inputAmout("monthly_Incom");

  //get saving persectage
  const savingPercentNum = inputAmout("saving_percent");

  const savingAmountCal = (balanceNum / 100) * savingPercentNum;

  // Calculation saving amount
  const savingAmount = document.getElementById("saving_Amount");
  savingAmount.innerText = savingAmountCal;

  //get remaing balanc after expense;
  const balance = document.getElementById("balance");
  const balanceText = balance.innerText;
  const remaingBalanceNum = parseFloat(balanceText);

  //remaing balance after saving
  const remaing_Balance = document.getElementById("ramaing_Balance");

  //error saving money
  const saving_Error = document.getElementById("remaing_save");

  //if remainng balance ar low than saving amount
  if (savingAmount.innerText > remaingBalanceNum) {
    console.log("you have no ramaing balance");
    saving_Error.style.display = "block";
    savingAmount.innerText = "";
    remaing_Balance.innerText = " ";
  } else {
    saving_Error.style.display = "none";
    remaing_Balance.innerText = remaingBalanceNum - savingAmountCal;
  }
});
