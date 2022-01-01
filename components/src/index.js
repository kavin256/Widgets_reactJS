import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from "faker"; // as long as you are importing a js file. you don't have to mention the .js extension
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>
                        Warning
                    </h4>
                </div>
                Are you sure you wanna do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today @ 3:00AM" content="Are you sure?" url={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today @ 2:00PM" content="Are you sure?"
                               url={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today @ 5:00AM" content="Are you sure?"
                               url={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
