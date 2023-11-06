//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo 
//flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
//When they view the browser console, they observe a table listing how many of each flavor
// they have ordered. In this case, they will be able to observe that they have ordered 
// three vanilla, two coffee, and one strawberry froyo.

function flavorCount(string) {

    let flavor = prompt("What Froyo Flavors would you like today?")

    if(flavor === null){
        console.log("No Froyo for you then");
        return 0;
    }   

    let flavorChoices = flavor.split(",");

    const flavorCount = {};


    for(let i = 0; i < flavorChoices.length; i++) {
        if(typeof flavorCount[flavorChoices[i]] === "undefined") {
            flavorCount[flavorChoices[i]] = 1;
        } else {flavorCount[flavorChoices[i]]++}
    }

    console.log(flavorCount);
    return flavorCount;

}