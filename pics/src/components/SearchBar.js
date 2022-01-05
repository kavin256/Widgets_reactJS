import React from "react";

class SearchBar extends React.Component {
    state = {term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitSearch(this.state.term) // only when this is in a class based component we need 'this.'
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='ui field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term} // controlled element
                            onChange={e => this.setState({term: e.target.value.toUpperCase()})}
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;
