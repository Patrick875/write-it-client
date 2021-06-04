//jshint esversion:9
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { createEntry } from "./../Actions/entryActions";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});
const useStyles = makeStyles((theme) => ({
	dialogBtn: {
		backgroundColor: "#2699FB",
		width: "15.93em",
		height: "2.5em",
		borderRadius: "1.25em",
		margin: "1.5em 0",
	},
	dialogPaper: {
		height: "50em",
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
	entryBody: {
		height: "50em",
	},
}));
const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);
export default function CreateEntry() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")).user
	);
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({
		title: "",
		content: "",
		createdBy: user._id,
	});
	const handleFormValues = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleOnSave = (e) => {
		console.log("HERE AN ENTRY WAS CREATED");
		e.preventDefault();
		dispatch(createEntry(formValues));
		handleClose();
	};
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
				className={classes.dialogBtn}>
				Add entry
			</Button>
			<div className={classes.dialogContainer}>
				<Dialog
					PaperProps={{ className: classes.dialogPaper }}
					onClose={handleClose}
					aria-labelledby="customized-dialog-title"
					open={open}>
					<DialogTitle
						id="customized-dialog-title"
						onClose={handleClose}
						className={classes.dialogTitle}>
						Add Entry
					</DialogTitle>
					<DialogContent dividers>
						<TextField
							onChange={handleFormValues}
							id="outlined-full-width"
							name="title"
							label="Title"
							style={{ margin: 8 }}
							placeholder="Entry Title"
							helperText="Full width!"
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
						<div className={classes.entryContent}>
							<TextField
								onChange={handleFormValues}
								id="outlined-full-width"
								name="content"
								label="Content"
								style={{ margin: 8 }}
								placeholder="Entry content"
								helperText="Entry content!"
								fullWidth
								multiline={true}
								rows={20}
								rowsMax={400}
								margin="normal"
								inputProps={{
									className: classes.entryBody,
								}}
								InputLabelProps={{
									shrink: true,
								}}
								variant="outlined"
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleOnSave} color="primary">
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}
