import axios from "axios";

const API = axios.create({
	baseURL: "https://write-it-back.herokuapp.com/api/v1/",
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("user")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("user")).token
		}`;
	}
	console.log(req);
	return req;
});

export const getEntries = () => API.get("/entries");

export const createEntry = (entry) => API.post("/entries", entry);
export const updateEntry = (entry, body) => {
	console.log(body);
	return API.patch(`/entries/${entry}`, body);
};
export const deleteEntry = (entry) => {
	return API.delete(`/entries/${entry}`);
};

export const signupUser = (userInfo) => API.post("/users/signup", userInfo);
export const loginUser = (userInfo) => API.post("/users/login", userInfo);
