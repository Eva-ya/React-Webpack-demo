import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import BasicExample from './BasicExample'; 



ReactDOM.render(
  <AppContainer>
    <BasicExample/>
  </AppContainer>,document.getElementById('main')
);
import $ from 'jquery';
$('body').append('<p>Hello vendor</p>');

//配置热更新处理逻辑
if (module.hot) { 
  module.hot.accept();
};