import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Guru'
                    }
                })
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                console.log(error);
                // this.setState({ errorProperty: true });
            })
    }

    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    }

    render() {

        let posts = <p style={{ textAlign: "center" }}> Something went wrong</p>

        if (!this.state.errorProperty) {
            posts = this.state.posts.map(post => {
                return (

                    <Link to={'/' + post.id} key={post.id}>

                        <Post
                            title={post.title}
                            author={post.author}
                            {...this.posts}
                            clicked={this.postSelectedHandler.bind(this, post.id)} />
                    </Link>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;