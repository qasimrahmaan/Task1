require('dotenv').config();


const os = require('os');
const fs = require('fs');
const path = require('path');

const getOSinformation = () => {
  const osInfo = {
    hostname: os.hostname(), 
    type: os.type(), 
    platform: os.platform(), 
    cpu: os.cpus(), 
    architechure: os.arch(), 
    homedir: os.homedir(), 
  }
  //return osInfo;
  return new Promise((resolve,reject)=>{
    resolve(osInfo);
  })
}

const writeOSinfo = async () => {
  const osInfo = await getOSinformation();
  const {homedir} = osInfo;
  fs.writeFileSync(
    path.join(homedir+'/'+process.env.FILE_DIRECTORY+'/'+process.env.FILE_NAME), 
    JSON.stringify(osInfo), 
    (err) => {
      console.log(err);
    }
  );
}


writeOSinfo();