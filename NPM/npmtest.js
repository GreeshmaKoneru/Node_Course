const figlet = require('figlet')

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong here");
    console.dir(err);
    return;
  }
  console.log(data);
});