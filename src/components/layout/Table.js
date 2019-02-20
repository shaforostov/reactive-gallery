import React, {Component} from 'react';
import Post from '../Post';
//import ReactTable from "react-table";
//import 'react-table/react-table.css';
import _ from 'lodash';

class Table extends Component {

    render() {
        const { data } = this.props;

        console.log('data', data);

        const rows = _.chunk(data, 3);

        console.log('rows', rows);

        const articles = rows.map((row, i) => (
            <tr key={i}>
                {row.map((cell, i) => (
                    <td key={i}><Post post={cell}/></td>
                ))}
            </tr>
        ));

        return <table>{articles}</table>;

        /*const columns = [{
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
        />*/
    }
}

export default Table;