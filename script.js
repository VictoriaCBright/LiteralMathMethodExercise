//1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."; console.log(warmHugs)
//1b
console.log(warmHugs.toUpperCase()); 
//1c
console.log(warmHugs.replace("like", "love"));
//2a
var beenImpaled = "Oh, look at that. I've been impaled."; console.log(beenImpaled);
//2b
console.log(beenImpaled.slice(18, 36));
//3a
var dotDotDot = "...";
//3b
let skullBones= `I don\'t have a skull${dotDotDot}or bones.`; console.log(skullBones);
//4
console.log(Math.PI);
//5
var randomNumber = Math.random();
randomNumber = randomNumber *3;
console.log(randomNumber);

//BONUS
//6
//repeatStringNumTimes(" Let It Go!", 2);
console.log(" Let It Go!".repeat(2));
//7a
var reindeers = "Reindeers are better than people.";
//7b
console.log(reindeers.replaceAll(" ", "_"));
//8
console.log(Math.sqrt(2));
//9
let newRandomNumber= Math.floor((Math.random() * 17) + 7); console.log(newRandomNumber);