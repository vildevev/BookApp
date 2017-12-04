import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// returns the books as this.props on the BookList container 
function mapStateToProps(state) {
	return {
		books: state.books
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a contaioner - makes the dispatch method "selectBook" a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);