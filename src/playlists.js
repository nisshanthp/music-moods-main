// Choose a playlist from a mood score
export function choosePlaylist(rawScore) {
  let score = Math.floor(rawScore * 2.5 + 3.5);
  if (score > 5) score = 5;
  let playlist = {
    spotifyLink: "",
    imageLink: "",
    message: "",
    color: "",
  };

  switch (score) {
    case 1:
      // Negative
      playlist.color = "rgb(0, 0, 0), rgb(255, 99, 71), rgb(0,0,0)";
      playlist.message = "It'll be better tomorrow, here's a playlist for you.";
      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/6tEHdC4ee1bkhjtoPKNhbm";
      playlist.imageLink =
        "https://i.pinimg.com/originals/46/09/23/460923f017d4f5019f28e6cdbae72dac.gif";
      break;
    case 2:
      // Neutrally Negative
      playlist.color = "rgb(0,0, 0), rgb(86,3,25), rgb(0,0, 0)";
      playlist.message = "Rough day? Here, a playlist for you.";

      playlist.spotifyLink =
        "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWVV27DiNWxkR";
      playlist.imageLink =
        "https://cdn-acpnj.nitrocdn.com/SDkrhncnWeetGsYGlzwaPnbfptfOeIKk/assets/static/optimized/rev-56afdb7/wp-content/uploads/2018/01/13-Sad-doctor-who-gif.gif";
      break;
    case 3:
      //mixed
      playlist.color = "rgb(0,0,0), rgb(255, 255, 255), rgb(0,0, 0)";
      playlist.message =
        "You've got this! Here is a playlist to boost your mood";

      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0";
      playlist.imageLink =
        "https://c.tenor.com/F00W5rJTnokAAAAM/chris-paul-not-funny.gif";
      break;
    case 4:
      // casually happy
      playlist.color = "rgb(0,0,0), rgb(0,86,63), rgb(0,0, 0)";
      playlist.message = "Keep smiling and listen to this playlist";

      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX0UrRvztWcAU";
      playlist.imageLink =
        "https://media2.giphy.com/media/3o6vY59s91hWsxASYM/giphy.gif";
      break;
    case 5:
      // really happy
      playlist.color = "rgb(0,0,0), rgb(255,255,0), rgb(0,0,0)";
      playlist.message = "Stay turnt up with this playlist selected for you";

      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
      playlist.imageLink =
        "https://c.tenor.com/1rGPG7GkOVwAAAAC/beau-happy.gif";
      break;
    default:
      break;
  }

  return playlist;
}
