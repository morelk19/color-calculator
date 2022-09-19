const prompt = require('prompt-sync')({sigint: true});

console.log(`Do you want to combine or deconstruct colors? Type c for combine, d for deconstruct.`);
let response = prompt(`>`);

if(response === "c"){
    let color1 = prompt(`Enter color 1: `);

    let color2 = prompt(`Enter color 2: `);
    
    if(color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red")
    {
        console.log(`${color1} + ${color2} = purple`);
    }else if(color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red")
    {
        console.log(`${color1} + ${color2} = orange`);
    }else if(color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue")
    {
        console.log(`${color1} + ${color2} = green`);
    }else{
        console.log(`Error!`);
    }


}else if (response === "d"){
    console.log(`Enter color to deconstruct: purple, orange, green.`);
    let color3 = prompt(`>`);
    if(color3 === "purple"){
        console.log(`${color3} = red + blue `);
    }else if(color3 === "orange"){
        console.log(`${color3} = red + yellow `);
    }else if(color3 === "green"){
        console.log(`${color3} = blue + yellow `);
    }else{
        console.log(`Error!`);
    }

}else {
    console.log(`Error! Did not choose a valid response.`)
}


