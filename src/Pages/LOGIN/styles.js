import { makeStyles } from "@material-ui/core/styles";
import img from "./../../static/undraw_secure_login_pdn4.png";

export default makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	logo: {
		stroke: theme.palette.primary.main,
		width: "15em",
		height: "12em",
		textAlign: "center",
	},
	image: {
		boxSizing: "border-box",
		backgroundImage: `url(${img})`,
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "100% 100%",
	},
	paper: {
		height: "100%",
		margin: "108px 32px 0 32px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	form_container: {
		height: "100%",

		// justifySelf: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		alignSelf: "end",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
