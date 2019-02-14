/**
 * Created by 1 on 29.01.2019.
 */
import React, {Component} from 'react';
import Img from './Img'


class Post extends Component {

    render() {
        const {post} = this.props;
        const body = <section className="card-text">{post.body}</section>;
        const path = './img/' + post.img;

        return (
            <div className="card" style={{color: 'red'}}>
                <div className="card-header">
                    <h2>
                        {post.title}
                    </h2>
                </div>
                <div className="card-body">
                    <Img src={path} alt={post.title} />
                    {body}
                </div>
            </div>
        );
    }
}

export default Post;
