import React from 'react';

import './BlogPost.css';

function BlogPost(props) {
    return (
        <div className="BlogPost">
            BlogPost {props.match.params.id}
        </div>
    )
}

export default BlogPost;