import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../../Components/SVGs/Logo";
import useStyles from "./styles";
import "./../../SCSS/Dashboard.scss";

import { Button } from "@material-ui/core";
export default function DashboardHeader(props) {
	const localUser = JSON.parse(localStorage.getItem("user"))
		? JSON.parse(localStorage.getItem("user")).user
		: null;
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState(localUser);
	const dispatch = useDispatch();
	const userName = `${user.firstName} ${user.lastName}`;
	const letterProfile = userName
		.split(" ")
		.map((e) => e[0].toUpperCase())
		.join("");

	const classes = useStyles();

	const onLogout = () => {
		dispatch({ type: "LOGOUT" });
		localStorage.clear();
		history.push("/");
	};

	const menuId = "primary-search-account-menu";

	const mobileMenuId = "primary-search-account-menu-mobile";
	if (localUser) {
		return (
			<React.Fragment>
				<AppBar position="fixed" className={clsx(classes.appBar)}>
					<Toolbar>
						<div className={classes.lgBtn}>
							<IconButton
								color="inherit"
								edge="start"
								className={clsx(classes.menuButton, {
									[classes.hide]: open,
								})}>
								<MenuIcon />
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
								color="inherit">
								{props.userImg ? (
									<Avatar src={props.userImg} alt="user profile image" />
								) : (
									<Avatar className={classes.LetterAvatar}>
										{letterProfile}
									</Avatar>
								)}
							</IconButton>
							<p
								className={
									classes.username
								}>{`${user.firstName} ${user.lastName}`}</p>
							<Button
								className={classes.logout}
								color="secondary"
								variant="contained"
								onClick={onLogout}>
								LOGOUT
							</Button>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label="show more"
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								color="inherit">
								{props.userImg ? (
									<Avatar src={props.userImg} alt="user profile image" />
								) : (
									<Avatar className={classes.LetterAvatar}>
										{letterProfile}
									</Avatar>
								)}
							</IconButton>
							<p
								className={
									classes.username
								}>{`${user.firstName} ${user.lastName}`}</p>
							<Button
								color="secondary"
								variant="contained"
								onClick={onLogout}
								className={classes.logout}>
								LOGOUT
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		);
	} else {
		history.push("/login");
		return null;
	}
}
