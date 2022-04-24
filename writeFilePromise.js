import * as fs from 'fs';
import * as util from 'util'
 
const writeFile = util.promisify(fs.writeFile);
 
writeFile('./generated/newFilePromise.txt', "domething")
  .then(() => {
    console.log('File created successfully');
  })
  .catch(error => {
    console.log(error);
  });