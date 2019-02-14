/**
 * Created by 1 on 29.01.2019.
 */
import React, {Component} from 'react';
import Blog from './layout/Blog'

class ArticleList extends Component {


    constructor(props) {
        super(props);
        this.state ={ data: [] };
    }

    componentWillMount() {
        fetch('http://www.mocky.io/v2/5c52dacd320000a72a855ddb')
            .then(response => response.json())
            .then(result => this.setState({data: result}))
            .catch(e => console.log(e));
    }

    render() {
        const { data } = this.state;

        return (
            <Blog data={data} />
        );
    }
}


export default ArticleList;
