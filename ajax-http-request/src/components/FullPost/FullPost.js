import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            // Don't update the state if same post is selected...
            if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id != this.props.id) {
                axios.get('https://jsonplaceholder.cypress.io/posts/' + this.props.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data })
                    })
            }
        }
    }
    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.cypress.io/posts/' + this.props.id)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;