import React from "react";
import moment from "moment";
import EntryAction from "./EntryAction/EntryAction";
import "./../SCSS/Entry.scss";

function Entry({ entry }) {
	return (
		<div className="entry" key={entry._id}>
			<div className="entry--container">
				<div className="entry--description">
					<h3 className="entry--header entry__h2">{entry.title}</h3>
					<p className="entry--summary entry__p">
						{entry.content.slice(0, 14)}...
					</p>
				</div>
				<div className="entry--date">
					<p>{moment(entry.createdAt).fromNow()}</p>
				</div>

				<div className="entry--actions">
					<EntryAction
						color="default"
						action="view"
						entry={{ title: entry.title, content: entry.content }}>
						read
					</EntryAction>
					<EntryAction color="primary" action="edit" entry={entry}>
						edit
					</EntryAction>
					<EntryAction color="secondary" action="delete" entry={entry}>
						delete
					</EntryAction>
				</div>
			</div>
		</div>
	);
}

export default Entry;
