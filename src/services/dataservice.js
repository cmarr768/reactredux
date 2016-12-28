//Copying this code from https://github.com/sohamkamani/blog-example__redux-data/blob/master/src/services/data-service.js

import request from 'superagent';

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_USER_DATA':
		request
			.get('data/user-data.json')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_USER_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text).users;
				next({
					type: 'GET_USER_DATA_RECEIVED',
					data
				})
			})
		break
	case 'GET_POSTS_DATA':
		request
			.get('data/posts-data.json')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_POSTS_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text).posts;
				next({
					type: 'GET_POSTS_DATA_RECEIVED',
					data
				})
			})
		break
	case 'GET_COMMENTS_DATA':
		request
			.get('data/comments-data.json')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_COMMENTS_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text).comments;
				next({
					type: 'GET_COMMENTS_DATA_RECEIVED',
					data
				})
			})
		break
	default:
		break
	}

};

export default dataService;

