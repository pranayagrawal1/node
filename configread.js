var fs = require('fs')

console.log('Starting to read file');

fs.readFile('./files/config.json', function(err, data){
    
    console.log(err);
    console.log('Contents: '+  data);
    
    var fileContent = JSON.parse(data);
    console.log(fileContent.host);
    console.log(fileContent.port);
})

console.log('Finished with reading file')