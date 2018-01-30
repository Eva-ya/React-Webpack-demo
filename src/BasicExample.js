import React from 'react';
// 引入
import styles from './BasicExample-m.css';
import AsyncLoader from "./AsyncLoader";
import Counter from "./Counter";

import config from '../config/index.js';
import {
    //BrowserRouter web环境路由跳转的逻辑
    //Router 配置了页面路径以及当用户输入的路径命中时需要渲染的组件
    //Link用于跳转
    BrowserRouter as Router,
    Route, 
    Link
} from 'react-router-dom';

export default class BasicExample extends React.Component {
    render() {
      return (
        <Router>
          <div>
              <p className={styles.red}>Red Text</p>
            <ul>
              <li><Link to="/">Home122</Link></li>
              <li><Link to="/topics">Topics</Link></li>
              <li><Link to="/counter">Counter</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/counter" component={Counter}/>
          </div>
        </Router>
      );
    }
  }

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )
  
  //路由跳转(当前url+后缀)
  const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
  
  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )