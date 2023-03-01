const convertToRoman = (num) => {
    const romanValues = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let romanNum = "";
    for (let key in romanValues) {
      while (num >= romanValues[key]) {
        romanNum += key;
        num -= romanValues[key];
      }
    }
    return romanNum;
  };
  
  const resultArray = [];
  
  const saveResult = () => {
    const result = document.getElementById("result").value;
    resultArray.push(result);
    const resultList = document.getElementById("result-list");
    const resultItem = document.createElement("li");
    resultItem.innerText = result;
    resultList.appendChild(resultItem);
  };
  
  const convertAndSave = () => {
    const number = document.getElementById("number-input").value;
    const romanNum = convertToRoman(number);
    document.getElementById("result").value = romanNum;
    saveResult();
  };
  