var ghpages = require('gh-pages');

ghpages.publish(
	'build', // path to public directory
	{
		branch: 'main',
		repo: 'https://github.com/yustarandomname/test-mirror-2.git', // Update to point to your repository
		user: {
			name: 'yustarandomname', // update to use your name
			email: 'abeldebruijn@hotmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
