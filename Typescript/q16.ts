// Problem 14, 15 & 16
console.log(`******* Problem 14,15 & 16 *******`);
// Initial list of guests
let guests: string[] = ['Khala', 'Mamo', 'Nano'];
// Function to print invitations
function printInvitations(guestList: string[]) {
  guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner with us!`);
  });
}
printInvitations(guests);
console.log(`\n******* Changing Guest List *******`);
let unableToAttend = guests[1];
console.log(`${unableToAttend} won't be able to make it.`);
// Replace the guest who can't make it
guests[1] = 'Esha';
// Print new invitations
printInvitations(guests);
console.log(`\n******* More Guests *******`);
// Inform about a bigger dinner table
console.log(`We found a bigger dinner table!`);
// Add new guests
guests.unshift('phopho'); 
guests.splice(2, 0, 'cuzs');
guests.push('Uncle');

printInvitations(guests);