/**
 * Created by 1 on 29.01.2019.
 */
import React, {Component} from 'react';


class Post extends Component {

    render() {
        const {post} = this.props;
        const body = <section>{post.body}</section>;

        return (
            <div style={{color: 'red'}}>
                <h2>
                    {post.title}
                </h2>
                {body}
            </div>
        );
    }
}

export default Post;
