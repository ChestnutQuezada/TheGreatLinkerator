import React, { useState } from 'react';

import { createLink, getLinks } from '../api'


import './Aside.css';

const Aside = (props) => {


	const [comment, setComment] = useState(' ')
	const [url, setUrl] = useState(' ')
	const [tags, setTags] = useState([])

	function handleComment(event) {
		setComment(event.target.value)
	}

	function handleUrl(event) {
		setUrl(event.target.value)
	}

	function handleTags(event) {
		setTags(event.target.value)
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const newLinkList = await getLinks();
		props.setLinkList(newLinkList);
		console.log(newLinkList);
	}

	async function setLink(event) {
		event.preventDefault()
		console.log('creating link')
		console.log('url', url);
		console.log('comment', comment);
		console.log('tags', tags);
		const newLink = await createLink({
			url, comment, tags
		});
		console.log("newLink", newLink);
		props.setNewLink(newLink)
	}


	return (
		<div id="linkCreator">
			<h1>Create Link</h1>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label>URL:
					<input
							type="text"
							className="makeURL"

							value={url}
							onChange={handleUrl}>

						</input>
					</label>
				</fieldset>
				<fieldset>
					<label>Comments:
					<textarea
							type="text"
							className="makeComment"

							value={comment}
							onChange={handleComment}

						></textarea>
					</label>
				</fieldset>
				<fieldset>
					<label>Tags:
					<textarea
							type="text"
							className="makeTags"


							value={tags}
							onChange={handleTags}

						></textarea>
					</label>
				</fieldset>
				<div>

					<button type="submit" className="formBut" onClick={setLink}>

						<span title="Submit">
							SUBMIT
						</span>

					</button>
				</div>
			</form>
		</div>
	);
};

export default Aside;