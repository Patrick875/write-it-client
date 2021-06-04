import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	dialogPaper: {
		height: "max-content",
		width: "50em",
		backgroundColor: "#FAF8FF",
	},
	dialogContainer: {
		margin: " 1em 1.5em",
		lineHeight: "1.8em",
		fontSize: "1.3em",
		fontFamily: "'Poppins',sans-serif",
	},
	dialogTitle: {
		textAlign: "center",
		padding: "1em",
	},
	dialogTag: {
		padding: "1em 0",
		textAlign: "center",
	},
}));
