// Problem 42: Great Magicians
console.log(`******* Problem 42 *******`);
function make_great(magicians: string[]): string[] 
{
  return magicians.map(magician => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void
   {
    for (let magician of magicians) 
{
        console.log(magician);
    }
}

let magician_names: string[] = ["Pervaz", "Ustad", "kalu Ustad", "Molar"];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians);