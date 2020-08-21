var fs = require('fs');
var HTMLtoJSX = require('htmltojsx');
var converter = new HTMLtoJSX({
  createClass: false,
  outputClassName: 'AwesomeComponent'
});
fs = require('fs')
fs.readFile(process.argv.slice(2).toString(), 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  var convertMe = `${data}`;
  var output = converter.convert(convertMe);
  fs.writeFile('converted.jsx', output, function (err) {
    if (err) return console.log(err);
  });
});