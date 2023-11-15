    // Problem 23: Conditional Tests
   console.log("******* Problem 23 *******");
   
   console.log(" test 1 " );
    let car = 'Audi';
    console.log("Is car == 'subaru'? I predict True.")
    console.log(car == 'subaru')
   
    console.log(" test 2 " );
    let apple = 'sweet';
    console.log("Is apple == 'sweet'? I predict True.")
    console.log(apple == 'sweet')
   
    console.log(" test 3 " );
    let alpha = 'beta';
    console.log("Is alpha == 'bet'? I predict FALSE.")
    console.log(alpha != 'beta')
   
    console.log(" test 4 " );
    let temperature: number = 1;
    let isHot: boolean = temperature > 30;
    let isCold: boolean = temperature < 10;
    console.log("Is it a hot day? I predict false.");
    console.log(isHot);
    let timeOfDay: string = "evening";
    let isMorning: boolean = timeOfDay === "morning";
    let isAfternoon: boolean = timeOfDay === "afternoon";
    let isEvening: boolean = timeOfDay === "evening";
    
    console.log(" test 5 " );
    console.log("Is it morning? I predict false.");
    console.log(isMorning);
    
    console.log(" test 6 " );
    console.log("Is it afternoon? I predict false.");
    console.log(isAfternoon);
    
    console.log(" test 7 " );
    console.log("Is it evening? I predict true.");
    console.log(isEvening);
    let hasLicense: boolean = true;
    let hasCar: boolean = false;
   
    console.log(" test 8 " );
    console.log("hasCar == 'false'? I predict True.")
    console.log(hasCar == false);
   
    console.log(" test 9 " );
    console.log("hasLicense == 'true'? I predict False.");
    console.log(hasLicense == true);
   
    console.log(" test 10 " );
    console.log("Can the person drive? I predict false.");
    console.log(hasLicense && hasCar);
