//on delete the

export default (entries = [], action) => {
	switch (action.type) {
		case "GET_ALL":
			return action.payload;
		case "CREATE":
			return [action.payload, ...entries];
		case "DELETE_ENTRY":
			return entries.filter((entry) => entry._id !== action.payload);
		case "UPDATE_ENTRY":
			return entries.map((entry) =>
				entry._id === action.payload.id
					? { ...entry, ...action.payload.body }
					: entry
			);
		case "GET_ENTRIES_BYTAG":
			return action.payload;
		default:
			return entries;
	}
};
