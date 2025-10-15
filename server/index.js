const express = require('express');
const { randomBytes } = require('node:crypto');

const app = express();
app.use(express.json());

const posts = [];

app.get('/posts', (req, res) => {
	res.json(posts);
})

app.post('/posts', (req, res) => {
	const title = req.body.title;
	const post = {
		id: randomBytes(4).toString('hex'),
		title
	};
	posts.push(post);
	res.status(201).json({
		post: post
	});
});

app.listen(5000, () => {
	console.log('Server is running on http://localhost:5000');
})

