// Problem 40: Album
console.log("******* Problem 40 *******");
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    return album;
}
var album1 = make_album("Artist1", "Album 1");
var album2 = make_album("Artist2", "Album 2", 12);
var album3 = make_album("Artist3", "Album 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);
