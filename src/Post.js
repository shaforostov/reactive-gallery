/**
 * Created by 1 on 29.01.2019.
 */
import React, {Component} from 'react';
import Img from './Img'


class Post extends Component {

    render() {
        const {post} = this.props;
        const body = <section>{post.body}</section>;
        const path = './src/' + post.img;

        return (
            <div style={{color: 'red'}}>
                <h2>
                    {post.title}
                </h2>
                <Img src={path} alt={post.title} />
                {body}
            </div>
        );
    }
}

export default Post;
