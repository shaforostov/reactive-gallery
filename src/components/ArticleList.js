/**
 * Created by 1 on 29.01.2019.
 */
import React, {Component} from 'react';
import Blog from './layout/Blog'
import Table from './layout/Table'

class ArticleList extends Component {


    constructor(props) {
        super(props);
        this.state ={ data: [] };
    }

    componentWillMount() {
        fetch('http://www.mocky.io/v2/5c6563703300008a12b99d5a')
            .then(response => response.json())
            .then(result => this.setState({data: result}))
            .catch(e => console.log(e));
    }

    render() {
        const { data } = this.state;

        return (
            <Table data={data} />
        );
    }
}


export default ArticleList;
