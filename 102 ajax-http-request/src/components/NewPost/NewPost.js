import React, { Component } from 'react';

import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    postDataHandle = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', data)
            .then(response => {
                console.log(response.data.id);
            });
    }

    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Guru">Guru</option>
                    <option value="Dev">Dev</option>
                    <option value="Gurudev">Gurudev</option>
                </select>
                <button onClick={this.postDataHandle}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;