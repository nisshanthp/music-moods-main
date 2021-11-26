// Sentiment -> choose song -> get spotify HTML
import useStyles from "./styles";

const SpotifyComponent = ({ spotifyLink }) => {
  const classes = useStyles();

  return (
    <div>
      <iframe
        className={classes.spotify}
        title="spotify"
        src={spotifyLink}
        frameBorder="0"
        allowtransparency="true"

        //allow="encrypted-media"
      ></iframe>
    </div>
  );
};
export default SpotifyComponent;
