 // Problem 40: Album

console.log(`******* Problem 40 *******`);

function make_album(artist: string, title: string, tracks?: number): any 
{
let album = 
{
        artist,
        title,
        tracks
};
    return album;
}
let album1 = make_album("Artist1", "Album 1");
let album2 = make_album("Artist2", "Album 2", 12);
let album3 = make_album("Artist3", "Album 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);