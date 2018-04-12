var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement('h2', {}, this.props.movie.title),
				React.createElement('p', {}, this.props.movie.desc),
				React.createElement('img',{className: 'poster', src: this.props.movie.img}, )
			)
		)
	},
});



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


var element = React.createElement(Movie, {movie: movies[0], movie: movies[1]});
ReactDOM.render(element, document.getElementById('app'));