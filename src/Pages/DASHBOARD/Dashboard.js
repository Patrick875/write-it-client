//jshint esversion:9
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "./../../Actions/entryActions";
import { useHistory } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
//dashboard scss
import "./../../SCSS/Dashboard.scss";
//components form Component folder
import CreateEntry from "../../Components/CreateEntry";
//material-ui classes and components

import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./styles";
import Entry from "../../Components/Entry";

export default function Dashboard(props) {
	const localUser = JSON.parse(localStorage.getItem("user"))
		? JSON.parse(localStorage.getItem("user")).user
		: null;
	const history = useHistory();
	const [user, setUser] = useState(localUser);

	const userName = `${user.firstName} ${user.lastName}`;
	const letterProfile = userName
		.split(" ")
		.map((e) => e[0].toUpperCase())
		.join("");

	const classes = useStyles();

	//---redux getting data and dispatching action
	const dispatch = useDispatch();
	const entries = useSelector((state) => state.entries);
	useEffect(() => {
		dispatch(getAllEntries());
	}, [dispatch]);
	if (localUser) {
		return user ? (
			<div className={classes.root}>
				<CssBaseline />
				<DashboardHeader />
				<main className={`dashboard `}>
					<section className="dashboard--section">
						<header className="dashboard--header">
							<h2 className="dashboard--greeting header__h2">
								Welcome back {user.firstName.toUpperCase()}
							</h2>
							<p className="header__p">What's on your mind</p>
							<CreateEntry />
						</header>
						<h3> Diary entries</h3>
						<motion.section className="entries--container" layout>
							{entries.map((entry) => (
								<Entry entry={entry} />
							))}
						</motion.section>
					</section>
				</main>
			</div>
		) : (
			history.push("/login")
		);
	} else {
		history.push("/login");
		return null;
	}
}
