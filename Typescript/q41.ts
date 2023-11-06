// Problem 41: Magicians
console.log(`******* Problem 41 *******`);
function show_magicians(magicians: string[]): void 
{
for (let magician of magicians) 
    {
        console.log(magician);
    }
}
let magician_names: string[] = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];
show_magicians(magician_names);