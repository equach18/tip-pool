describe("Payments Test (with set up and tear down)" , function () {
    beforeEach(function () {
        billAmtInput.value = 88;
        tipAmtInput.value = 8;
        
    });
  
    it("should add a curPayment object to all payments upon calling submitPaymentInfo", function () {
        submitPaymentInfo();

        expect(paymentId).toEqual(1);
        expect(allPayments.payment1.billAmt).toEqual('88');
        expect(allPayments.payment1.tipAmt).toEqual('8');
    });

    it ("should return undefined if inputs are negative upon calling createCurPayment function", function () {
        billAmtInput.value = -88;
        tipAmtInput.value = 9;

        expect(createCurPayment()).toBeUndefined();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it ("should update the table rows with the value input using appendPaymentTable", function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let testTd = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(testTd.length).toEqual(4);
        expect(testTd[0].innerText).toEqual('$88');
        expect(testTd[1].innerText).toEqual('$8');
        expect(testTd[2].innerText).toEqual('9%');
    });

    it("should calculate the tipPercentTotal as 0 if the payment total and number of payments is 0.", function () {
        paymentTotal = 0;
        numberOfPayments = 0;
        updateSummary();

        expect(summaryTds[0].innerHTML).toEqual("$0");
        expect(summaryTds[1].innerHTML).toEqual("$0");
        expect(summaryTds[2].innerHTML).toEqual("0%");

    })

    afterEach(function () {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
});
