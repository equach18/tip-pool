describe("Helpers Test (with set up and tear down)" , function () {
    beforeEach(function () {
        billAmtInput.value = 88;
        tipAmtInput.value = 8;
        submitPaymentInfo();
    });
  
    it("should total up payments depending on the type using sumPaymentTotal function", function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(8);
        expect(sumPaymentTotal('billAmt')).toEqual(88);

    });

    it ("should calculate the tip percent using calculateTipPercent function", function () {
        expect(calculateTipPercent(88, 8)).toEqual(9);
        expect(calculateTipPercent(100, 20)).toEqual(20);
    });

    it ("should create a table row element using appendTd function", function () {
        let testTr = document.createElement('tr');

        appendTd(testTr, 'test');

        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerText).toEqual('test');
    });

    it ("should append a delete button ('X') to tr", function () {
        let testTr = document.createElement('tr');

        appendDeleteBtn(tr, 'server');

        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerText).toEqual('X');
        
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
