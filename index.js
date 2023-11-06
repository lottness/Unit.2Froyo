//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo 
//flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
//When they view the browser console, they observe a table listing how many of each flavor
// they have ordered. In this case, they will be able to observe that they have ordered 
// three vanilla, two coffee, and one strawberry froyo.

//Declare Prompt
let froyo = prompt("Please insert your Froyo options");

// [const,let] valueName = {"key":value}
let froyoFlavors = {}

const froyoArray = froyo.split(",");

// froyoArray.forEach((flavor, index)=> {

//     // console.log(froyoArray[index]);
//     console.log(flavor);
// })

for(let i = 0; i < froyoArray.length; i++){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    if(froyoFlavors.hasOwnProperty(froyoArray[i])){
        froyoFlavors[froyoArray[i]] +=1;
    } else {
        froyoFlavors[froyoArray[i]] = 1;
    }
    // console.log(froyoArray[i]);
}

console.log(froyoFlavors);