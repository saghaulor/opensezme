var b = require('bonescript');
var relay_state = b.LOW;

b.pinMode("P9_11", b.OUTPUT);
b.pinMode('USR0', 'out');
setInterval(toggle, 1000);

//b.pinMode('P9_12', b.INPUT);
//b.digitalRead('P9_12', printStatus);

//function printStatus(x) {
    //console.log('x.value = ' + x.value);
    //console.log('x.err = ' + x.err);
//}

// User the serialNumber + ownerEmailfor the UUID
b.getPlatform(printData);
function printData(x) {
 console.log('serialNumber = ' + x.serialNumber);
}

function toggle() {
  if (relay_state == b.LOW)
    relay_state = b.HIGH;
  else 
    relay_state = b.LOW;
  b.digitalWrite("P9_11", relay_state);
  b.digitalWrite("USR0", relay_state);
}
