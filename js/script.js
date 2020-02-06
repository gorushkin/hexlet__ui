const getInfo = (obj) => {
  const result = {}
  for (key in obj) {
    if (typeof obj[key] !== 'object' && typeof obj[key] !== 'function' && obj[key].length !== 0) {
      result[key] = obj[key];
    }
  }
  return result;
}

const printInfo = (obj) => {
  for (key in obj) {
    console.log(`${key} ${obj[key]} ${typeof obj[key]} `);
  }
}

const app = () => {
  console.log('app start!');
  
  const state = {
    readyStatus: true
  }

  const container = document.querySelector('.container');
  

  const info = window.location;
  // printInfo(info);

  const obj = getInfo(info);
  console.log('obj: ', obj);
}

app();