import * as api from "./../API/";
import axios from "axios";

export const getAllEntries = () => async (dispatch) => {
	try {
		const { data } = await api.getEntries();
		dispatch({ type: "GET_ALL", payload: data.data });
	} catch (error) {
		console.log(error.message);
	}
};
export const createEntry = (entry) => async (dispatch) => {
	try {
		const { data } = await api.createEntry(entry);
		dispatch({ type: "CREATE", payload: data.data });
	} catch (error) {
		console.log(error.message);
	}
};
export const updateEntry = (entry, body) => async (dispatch) => {
	try {
		const updateEntry = await api.updateEntry(entry, body.body);
		console.log(updateEntry);
		dispatch({ type: "UPDATE_ENTRY", payload: body });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteEntry = (entry) => async (dispatch) => {
	try {
		await api.deleteEntry(entry);
		dispatch({ type: "DELETE_ENTRY", payload: entry });
	} catch (error) {
		console.log(error.message);
	}
};
