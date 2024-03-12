
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}



//will create a 'td' with the value 'X'.
//function will be used to remove servers and DOM td when 'X' is clicked
//type parameter accpets 'payment' or 'server'
function appendDeleteBtn(tr, type){
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.className = 'deleteBtn';

  newTd.addEventListener('click', function(e){
    let parentRow = e.target.parentElement;
    parentRow.parentElement.removeChild(parentRow);

    if(type === 'server'){
      delete allServers[parentRow.id];
      updateServerTable();
    }
    else if(type === 'payment'){
      delete allPayments[parentRow.id]
      updateSummary();
    }
  });

  tr.append(newTd);
}

