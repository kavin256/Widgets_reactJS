import React from "react";
import faker from "faker";

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.image()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Bam
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00 PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
}

// to every other file inside the project
export default CommentDetail;
