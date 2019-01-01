import React from 'react';
import List from './List';
import Form from './Form';
import Posts from './Posts';

const App = () => (<div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new Article</h2>
            <Form/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>API Posts</h2>
            <Posts/>
        </div>
    </div>
)

export default App;