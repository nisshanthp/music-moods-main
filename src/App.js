import { useState, useEffect } from "react";
import { Typography, TextField } from "@material-ui/core";
import useStyles from "./styles";
import SpotifyComponent from "./spotifyComponent";
import { choosePlaylist } from "./playlists";
import getSentiment from "./sentiment";

function App() {
  const classes = useStyles();
  const [story, setStory] = useState("");
  const [spotOn, setSpotOn] = useState(false);
  const [playlist, setPlaylist] = useState({
    spotifyLink: "",
    playlistimageLink: "",
    message: "Talk about your day.",
    color: "rgb(0, 0, 0)",
  });

  useEffect(() => {
    async function fetchSentiment() {
      let sentiment = await getSentiment(story);
      let pl = await choosePlaylist(sentiment);
      setPlaylist(pl);
      setSpotOn(true);
    }
    if (story === "") {
      setPlaylist({
        spotifyLink: "",
        playlistimageLink: "",
        message: "Talk about your day.",
        color: "rgb(0, 0, 0)",
      });
      setSpotOn(false);
    } else {
      const timeOutId = setTimeout(() => fetchSentiment(), 200);
      return () => clearTimeout(timeOutId);
    }
  }, [story]);

  return (
    <div
      id="body"
      className={classes.body}
      style={{
        backgroundImage: `linear-gradient(${playlist.color})`,
      }}
    >
      <div
        className={classes.main}
        style={{
          backgroundImage: `url("${playlist.imageLink}")`,
        }}
      >
        <Typography
          variant="h4"
          className="header"
          style={{
            position: "absolute",
            top: "17%",
            fontFamily: "Zen Kurenaido",
            fontWeight: "900",
            backgroundColor: "rgba(40, 44, 52, 0.5)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {playlist.message === "" ? "How was your day?" : playlist.message}
        </Typography>
        <TextField
          onChange={(e) => setStory(e.target.value)}
          className={classes.textBox}
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="  Let the words flow.."
          style={{ position: "absolute", top: "25%", width: "40%" }}
          InputProps={{
            className: classes.input,
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />

        {spotOn ? (
          <SpotifyComponent
            spotifyLink={playlist.spotifyLink}
            style={{
              height: "20%",
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
