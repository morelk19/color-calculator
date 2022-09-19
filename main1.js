const prompt = require('prompt-sync')({sigint: true});

console.log(`Enter the colors you want to combine leaving a space between them. Enter in just the color you wish to deconstruct.`);
let response = prompt(`>`);

if(response === "red blue" || response === "blue red")
    {
        console.log(`blue + red = purple`);
    }else if(response === "red yellow" || response === "yellow red")
    {
        console.log(`yellow + red = orange`);
    }else if(response === "blue yellow" || response === "yellow blue")
    {
        console.log(`yellow + blue = green`);
    }else if(response === "purple"){
        console.log(`purple = red + blue `);
    }else if(response === "orange"){
        console.log(`orange = red + yellow `);
    }else if(response === "green"){
        console.log(`green = blue + yellow `);
    }else{
        console.log(`Error!`);
    }


