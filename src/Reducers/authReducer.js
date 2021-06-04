//jshint esversion:9
const userInit = {
	firstName: "",
	lastName: "",
};
export default (state = { user: null }, action) => {
	switch (action.type) {
		case "AUTH":
			const userData = { user: action.data.user, token: action.data.token };
			localStorage.setItem("user", JSON.stringify({ ...userData }));
		case "LOGIN":
			const loggedInData = { user: action.data.user, token: action.data.token };

			localStorage.setItem("user", JSON.stringify({ ...loggedInData }));
			return { ...state, user: action.data };
		case "LOGOUT":
			localStorage.clear();
			return { ...state, user: null, loading: false, errors: null };
		default:
			return state;
	}
};
