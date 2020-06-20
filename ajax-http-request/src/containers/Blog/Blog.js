import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to='/posts'
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: 'green',
                                        textDecoration: 'underline'
                                    }}>
                                    Posts
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?qucik-submit=false'
                                }}>
                                    New Post
                                </NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Path is predefined */}
                {/* Exact is path is sensitive. */}
                {/* Render what should be rendered when this path is clicked. */}
                {/* <Route path="/" exact render={() => <div>Home</div>} />
                <Route path="/" render={() => <div>Home 2</div>} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;