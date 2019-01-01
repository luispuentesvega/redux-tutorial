import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";

export class Posts extends Component {
    constructor () {
        super();
    }

    componentDidMount() {
        this.props.getData();
    }

    render () {
        return (
            <ul className="list-group list-group-flush">
                { this.props.articles.map(el=>(
                    <li key={el.key}>
                        { el.title }
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.remoteArticles.slice(0, 10)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts);