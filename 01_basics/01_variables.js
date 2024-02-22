const accountId = 144553
let accountEmail = "vishnu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "vg@google.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Don't use var. Use let
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])