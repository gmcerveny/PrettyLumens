var server = new StellarSdk.Server('https://horizon.stellar.org');

var es = server.payments()
  .cursor('now')
  .stream({
    onmessage: function (message) {
      if (message.type == "payment") {
        gotPayment(message.from, message.to, message.amount)
      } else {
        console.log(message.type, message);  
      }
    }
  })