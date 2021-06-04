import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
const drawerWidth = 240;
export default makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	logout: {
		position: "relative",
		top: "10px",
		height: "3em",
	},
	navlink: {
		textDecoration: "none",
		color: "black",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		// alignItems: "start",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		height: "max-content",
	},
	//Appbar styles start--here
	lgBtn: {
		display: "flex",
		alignItems: "center",
	},
	username: {
		padding: "0 2em",
		alignSelf: "center",
		fontWeight: "bold",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	LetterAvatar: {
		backgroundColor: "navy",
		border: "2px solid white",
	},
	Logo: {
		width: "100%",
		height: "100%",
		paddingTop: "10px",
		margin: "0",
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		width: "20em",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
			justifyItems: "space-between",
		},
	},
	menu: {
		position: "absolute",
		top: "4em",
	},

	sectionMobile: {
		display: "flex",
		justifyItems: "space-between",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	button: {
		margin: theme.spacing(1),
	},
	drawer: {
		marginTop: "3px",
	},
}));
