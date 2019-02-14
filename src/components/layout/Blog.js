/**
 * Created by 1 on 01.02.2019.
 */
import React, {Component} from 'react';
import Post from '../Post'


class Blog extends Component {

    render() {
        const { data } = this.props;
        const articleElements = data.map(el =>
            <li key={el.id}><Post post={el}/></li>);


        return (
            <ul>
                {articleElements}
            </ul>
        );
    }

}

export default Blog;
