describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create a table containing the server name on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable()

    expect(document.querySelector("#serverTable tbody tr td").innerText).toEqual('Alice');
  });

  it('should clear the server input on submitServerInfo', function () {
    submitServerInfo();

    expect(serverNameInput.value).toEqual('');
  });


  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
