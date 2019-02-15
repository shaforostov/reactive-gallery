import React, {Component} from 'react';
import Post from '../Post';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Table extends Component {

    render() {
        const { data } = this.props;
        //var tr = <tr>;
        /*const articleElements = data.map(el =>
            <tr><td><Post post={el}/></td></tr>);*/

        /*const articleElements = data.map((el, i) =>
            <tr><td><Post post={el}/></td></tr>);

        const articles = data.map(function(el, i) {
            i++;
            if (i == 1)
                return <tr><td><Post post={el}/></td>;
            else if (i % 3 == 0)
                return <td><Post post={el}/></td></tr>;
            else if (i % 4 == 0)
                return <tr><td><Post post={el}/></td>;
            else
                return <td><Post post={el}/></td>;
        });

        console.log('articleElements', articleElements);

        return <table>
                    {articles}
                </table>;*/

        const columns = [{
            Header: 'Title',
            accessor: 'title'
        }, {
            Header: 'Body',
            accessor: 'body'
        }, {
            Header: 'Img',
            accessor: 'img',
            Cell: <img width="200" src='img'/>
        }];

        return <ReactTable
            data={data}
            columns={columns}
        />

    }
}

export default Table;