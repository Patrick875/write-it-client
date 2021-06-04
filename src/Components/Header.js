//jshint esversion:9
import React from "react";
import Logo from "./../Components/SVGs/Logo";
import { useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
	Avatar,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	MenuItem,
	Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
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
}));

export default function Header(props) {
	const user = useSelector((state) => state.user);
	console.log(`heloooooooo\n${user}`);
	const username = user ? `${user.firstName} ${user.lastName}` : null;
	const letterProfile = user
		? username
				.split(" ")
				.map((e) => e[0])
				.join("")
		: props.userName
				.split(" ")
				.map((e) => e[0])
				.join("");
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem onClick={handleProfileMenuOpen}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<header className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.lgBtn}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer">
							{props.page !== "Dashboard" ? (
								<HomeIcon fontSize="large" />
							) : (
								<MenuIcon />
							)}
						</IconButton>
						<div className={classes.Logo}>
							<Logo />
						</div>
					</div>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit">
							{props.userImg ? (
								<Avatar src={props.userImg} alt="user profile image" />
							) : (
								<Avatar className={classes.LetterAvatar}>
									{letterProfile}
								</Avatar>
							)}
						</IconButton>
						<p className={classes.username}>{props.userName}</p>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit">
							{props.userImg ? (
								<Avatar src={props.userImg} alt="user profile image" />
							) : (
								<Avatar className={classes.LetterAvatar}>
									{letterProfile}
								</Avatar>
							)}
						</IconButton>
						<p className={classes.username}>{props.userName}</p>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</header>
	);
}

// {//<div className={classes.grow} />}
