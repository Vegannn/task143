var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'http://1.fwcdn.pl/po/05/71/30571/7529024.3.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o królu sawanny',
		img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
	}
];

var Movie = React.createClass({
  	propTypes: {
    	movie: React.PropTypes.object.isRequired,
  	},

	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
				//React.createElement('h2', {}, this.props.movie.title),
				React.createElement('p', {}, this.props.movie.desc),
				React.createElement('img', {className: 'poster', src: this.props.movie.img})
			)
		);
	},
});

var MoviesList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired
	},

	render: function() {
		var moviesElements = this.props.movies.map(function(movie) {
			return React.createElement(Movie, {movie: movie, key: movie.id});
		});

		return React.createElement('ul', {}, moviesElements);
	}
});


var MovieTitle = React.createClass({
	propTypes: {
		movieTitle: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('h2',{}, this.props.movie.title);
	},
});

ReactDOM.render(
	React.createElement(MoviesList, {movies: movies}), 
	document.getElementById('app')
);
