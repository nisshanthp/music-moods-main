import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  body: {
    backgroundImage:
      "linear-gradient(rgb(0, 0, 0), rgb(40, 44, 52), rgb(36, 48, 156))",
    opacity: "3.0",
  },
  main: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "auto",
    background: "#282c34",
    minHeight: "100vh",
    width: "min(80vw, 900px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    boxShadow: "0px 0px 12px 10px rgba(255,255,255,0.8)",
  },
  textBox: {
    width: "max(30%, 300px)",
    height: "20%",
    margin: "30px 20px",
    textShadow: "2px",
  },
  input: {
    fontFamily: "Permanent Marker",
    fontSize: "1.5rem",
    color: "white",
  },
  notchedOutline: {
    borderColor: "white",
  },
  header: {
    position: "absolute",
    marginTop: "20px",
    top: "10%",
    color: "white",
    backgroundColor: "black",
  },
  spotify: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "min(500px, 100vw)",
    height: "calc(50px + 40%)",
    opacity: ".85",
    boxShadow: "0px 1px 10px 9px rgba(255,255,255,0.8)",
  },
  spinner: {
    position: "absolute",
    left: "60%",
    transform: "translateX(-1000%)",
  },
}));
