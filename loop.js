 
 const array = ['$5', '$25', '$50', '$100'];
 function getRandomPrize(arr) {
     const randomIndex = Math.floor(Math.random() * arr.length);
     const item = arr[randomIndex];
     return item;
    }
    const result = getRandomPrize(array);
    
    
document.getElementById('prize').innerHTML = result;    