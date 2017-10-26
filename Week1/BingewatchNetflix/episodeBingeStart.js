// The following are episodes for Arrested Development.

const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];


const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };
//Creating an empty array to add all the episodes of the season
let playlist = [];

 // Add this finaleEpisode to the episodes object and save that into addToPlaylist.
 //Taking the currentPlaylist and adding the finaleEpisode episode to it
const addToPlaylist = (currentPlaylist, addEpisode) => {playlist = currentPlaylist.concat(addEpisode);}

// You may want to add a function which takes away the current episode you were just watching and returns the new object consisting only of the
// rest of the episodes which you have not viewed yet.
//Take the first element of the episodes array and take out the episode we just watched
const removeFromPlaylist = (justWatched) => justWatched.shift();

// You might want to create a function which shows the viewer the next episode.
// ** this would be a useful function after you have filtered or sliced the previous episode object out of the array **
//Getting the next episode in the array 
const getNextEpisodeInPlaylist = (currentPlaylist) => console.log(currentPlaylist[1]);
