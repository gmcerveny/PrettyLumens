var giverPublic = "GDCMW6HA6IGNHZOEDL3QXIKI2A6KHAIACCNVK7X7HV3LATW2BO3CXKR2";
var giverSecret = "SDVACSPEBHVFP6DD5POWOWMN6XXNP7RMBZLSPROTR3Q77YI6DGZQLVY3";

var receiverPublic = "GCOI7ADES5FWXJCDM4WLBPTPFSHZ24JBZ326JSYSYKKESF5CFZ5CDHKU";
var receiverSecret = "SDFKAUJYSHS3BNVSMHSFFW63HQIKDFBHPU6XASLOPT3F4RXZTIILSPYG";

var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
var accountAddress=receiverPublic;
var lastCursor=0; // or load where you left off

var lastMessage 

var paymentHandler = function (message) {
    console.log(message);
    lastMessage = message;
    if (message.type == "payment") {
      gotPayment(message.from, message.amount)
    }
};

var es

var newServer = function(address) {
 es = server.payments()
    .forAccount(address)
    .cursor('now')
    .stream({
        onmessage: paymentHandler
    })
}
