import * as api from "./../API/";

export const login = (formValues, history) => async (dispatch) => {
	try {
		//login user
		const { data } = await api.loginUser(formValues);
		dispatch({ type: "LOGIN", data: { user: data.user, token: data.token } });
		history.push("/dashboard");
	} catch (err) {
		console.log(err.message);
	}
};

export const logout = () => ({ type: "LOGOUT" });

export const signup = (formValues, history) => async (dispatch) => {
	console.log(formValues);
	try {
		//signup user user
		const { data } = await api.signupUser(formValues);
		dispatch({ type: "AUTH", data: { user: data.user, token: data.token } });
		history.push("/dashboard");
	} catch (err) {
		console.log(err.message);
	}
};
