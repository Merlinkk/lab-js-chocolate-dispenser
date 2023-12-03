var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

const taskAdd = (chocolates,color, count)=>{
  for(let i=0;i<count;i++){
    chocolates.unshift(color)
  }
}


const addChocolates = (chocolates,color, count) =>{return count<=0 ? "Number cannot be zero/negative" : taskAdd(chocolates,color, count) }

//Progression 2: Remove z chocolates from the top the dispenser
const taskRemove = (chocolates, count) =>{
  let removedChocolates = []
  for (let i=0;i<count;i++){
    removedChocolates.push(chocolates.shift())
  }
  return removedChocolates
}

const removeChocolates = (chocolates, count) =>{return count<=0 ? "Number cannot be zero/negative" : chocolates.length<count ? "Insufficient chocolates in the dispenser" : taskRemove(chocolates, count) }

//Progression 3: Dispense z chocolates
const taskDispense = (chocolates,count) =>{
  let dispensedChocolates = []
  for(let i=0;i<count;i++){
    dispensedChocolates.push(chocolates.pop())
  }
  return dispensedChocolates
}

const dispenseChocolates = (chocolates,count) =>{return count<=0 ? "Number cannot be zero/negative" : count>chocolates.length? "Insufficient chocolates in the dispenser" : taskDispense(chocolates,count)}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates, count, color) {return count<=0 ? "Number cannot be zero/negative" : count>chocolates.length ? "Insufficient chocolates in the dispenser" : taskDispense(chocolates, count);}
  
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const taskNoOfChocolates = (chocolates) => {
  let returnArray = []
  let colorArray = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]

  colorArray.forEach((color)=>{
    let count =0
    chocolates.forEach((chocolate)=>{
      if(chocolate == color){
        count++
      }
    })
    count>0 ? returnArray.push(count) : null
  })
  return returnArray
}

const noOfChocolates = (chocolates) =>{return taskNoOfChocolates(chocolates)}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

const sortFunction = (chocolates) => {
  let returnArray = [];
  let colorObject = {};

  chocolates.forEach((chocolate) => {
    colorObject[chocolate] = (colorObject[chocolate] || 0) + 1;
  });

  const colorObjectSorted = Object.keys(colorObject).sort((a, b) => {
    if (colorObject[a] === colorObject[b]) {
      return a.localeCompare(b); 
    }
    return colorObject[b] - colorObject[a]; 
  });

  colorObjectSorted.forEach((color) => {
    for (let i = 0; i < colorObject[color]; i++) {
      returnArray.push(color);
    }
  });

  return returnArray;
};

const sortChocolateBasedOnCount = (chocolates) => {return sortFunction(chocolates);};

//Progression 7: Change z chocolates of x color to y color

const colorChanger = (chocolates, count,  color, finalColor) =>{
  for (let i=0;i<chocolates.length && count>0;i++){
    if(chocolates[i]==color){
      chocolates[i] = finalColor
      count--
    }
  }
  return chocolates
} 

const changeChocolateColor = (chocolates, count, color, finalColor) =>{
  return count<=0 ? "Number cannot be zero/negative" : color==finalColor ? "Can't replace the same chocolates" : colorChanger(chocolates, count,  color, finalColor)
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

const colorChangerAll = (chocolates,color, finalColor) =>{
  console.log(chocolates)
  let count =0;
  chocolates.forEach((chocolate,i)=>{
    if(chocolate==color){
      chocolates[i] = finalColor
    }
  })

  chocolates.forEach((choco)=>{
    if(choco==finalColor){count++}
  })

  console.log(count,chocolates)
  return [count,chocolates]
}

const changeChocolateColorAllOfxCount = (chocolates,color, finalColor) =>{
  return color == finalColor ? "Can't replace the same chocolates" : colorChangerAll(chocolates,color, finalColor)
}

//Challenge 1: Remove one chocolate of x color from the top

const removeChocolateOfColor = (chocolates,color) =>{
  let index= 0
  for (let i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
      index = i
      break
    }
  }
  chocolates.splice(index,1)
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
const numberOfRainbowChocolates = (chocolates) =>{
  const store = {}
  
  chocolates.forEach((chocolate)=>{
    if(chocolate in store){store[chocolate]+=1}
    else{store[chocolate]=1}
  })

  let count = []
  for(color in store){count.push(store[color])}

  let rainbowChocolates = 0
  count.forEach((countedChocolate)=>{
    if(countedChocolate%3==0){rainbowChocolates+= countedChocolate/3}
  })
  return rainbowChocolates
}

const dispenseRainbowChocolates = (chocolates) => {return numberOfRainbowChocolates(chocolates)}