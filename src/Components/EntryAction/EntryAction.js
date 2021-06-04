//jshint esversion:9
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
	updateEntry,
	deleteEntry,
	getAllEntries,
} from "./../../Actions/entryActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function EntryAction(props) {
	const classes = useStyles();
	const [entryTitle, setentryTitle] = useState(props.entry.title);
	const [entryContent, setentryContent] = useState(props.entry.content);
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const dispatch = useDispatch();
	const handleAction = () => {
		if (props.action === "delete") {
			dispatch(deleteEntry(props.entry._id));
		}
		if (props.action === "edit") {
			dispatch(
				updateEntry(props.entry._id, {
					id: props.entry._id,
					body: {
						title: entryTitle,
						content: entryContent,
					},
				})
			);
			setentryTitle(entryTitle);
			setentryContent(entryContent);
		}
	};
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleOnAction = (e) => {
		e.preventDefault();
		handleAction();
		handleClose();
	};
	const renderDialogDelete = (
		<div className={classes.dialogContainer}>
			<DialogTitle id="responsive-dialog-title" className={classes.dialogTitle}>
				{"Delete entry"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>Do you want to delete this entry?</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleClose} color="primary">
					return
				</Button>
				<Button onClick={handleOnAction} color={props.actionColor} autoFocus>
					Delete
				</Button>
			</DialogActions>
		</div>
	);
	console.log(entryTitle, entryContent);
	const renderDialogView = (
		<div className={classes.dialogContainer}>
			<DialogTitle id="responsive-dialog-title" className={classes.dialogTitle}>
				{props.entry.title}
			</DialogTitle>
			<DialogContent>{props.entry.content}</DialogContent>
			<Button autoFocus onClick={handleClose} color="primary">
				return
			</Button>
		</div>
	);

	const renderDialogEdit = (
		<div className={classes.dialogContainer} className={classes.dialogTitle}>
			<DialogTitle id="responsive-dialog-title">
				<TextField
					value={entryTitle}
					InputProps={{ readOnly: false }}
					onChange={(e) => {
						setentryTitle(e.target.value);
					}}
					fullWidth
					label="Title"
					helperText="Edit Title"
					variant="outlined"
				/>
			</DialogTitle>
			<div className={classes.dialogTag}>tags will be here</div>
			<DialogContent>
				<DialogContentText>
					<TextField
						variant="outlined"
						autoFocus
						margin="normal"
						fullWidth
						label="Content"
						helperText="Edit content"
						id="content"
						type="text"
						fullWidth
						value={entryContent}
						multiline={true}
						rowsMax={30}
						onChange={(e) => {
							setentryContent(e.target.value);
						}}
					/>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleClose} color="primary">
					CANCEL
				</Button>
				<Button onClick={handleOnAction} color={props.actionColor} autoFocus>
					SAVE
				</Button>
			</DialogActions>
		</div>
	);

	return (
		<div>
			<Button variant="contained" color={props.color} onClick={handleClickOpen}>
				{props.children}
			</Button>
			<Dialog
				PaperProps={{ className: classes.dialogPaper }}
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title">
				{props.action === "view" && renderDialogView}
				{props.action === "edit" && renderDialogEdit}
				{props.action === "delete" && renderDialogDelete}
			</Dialog>
		</div>
	);
}
