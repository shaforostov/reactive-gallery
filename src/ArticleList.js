/**
 * Created by 1 on 29.01.2019.
 */
import React, {Component} from 'react';
import Post from './Post'

class ArticleList extends Component {

/*    state = {
        articleElements: null
    }*/
    constructor(props) {
        super(props);
        this.state ={ data: [] };
    }

    componentWillMount() {
        //console.log('mythis:', this);
        fetch('http://www.mocky.io/v2/5c52dacd320000a72a855ddb')
            .then(response => response.json())
            .then(result => this.setState({data: result}))
            .catch(e => console.log(e));
        /*            .then(function(response) {
         return response.json();
         })
         .then(function(data) {
         console.log('data', data);
         const articleElements = data.map(el =>
         <li key={el.id}>el.title</li>);
         console.log('mymythis:', this);
         this.setState({
         articleElements: articleElements
         });
         });*/
    }

    render() {
        const { data } = this.state;
        const articleElements = data.map(el =>
            <li key={el.id}><Post post={el}/></li>);


        return (
            <ul>
                {articleElements}
            </ul>
        );
    }
}

/*export default function ArticleList(props) {


}*/

export default ArticleList;
