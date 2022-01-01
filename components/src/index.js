import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail"; // as long as you are importing a js file. you don't have to mention the .js extension

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
