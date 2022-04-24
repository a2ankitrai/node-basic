import * as fs from 'fs'

fs.writeFile('./generated/newFile.txt', "Test file ankit", (error) => {
  if(error){
    console.log(error);
  } else{
    console.log('File created successfully')
  }
})