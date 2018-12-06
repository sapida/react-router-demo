import React, { Component } from 'react'
import { Button } from 'antd';
import { Route,Link } from 'react-router-dom';
import Second from './second'
import App from '../app'

export default class home extends Component {
  state = {
    list:[],
    id:456,
  }

  componentDidMount(){
    console.log(12222);
  }

  handleClick(id){
    switch (id) {
      case 1:
        this.props.history.push('/about/'+'2')
        break;
      case 2:
        this.props.history.push({pathname :'/contact',search:'?sort=name&type=1',query :{id:'456'}})
        break;
    }
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick.bind(this,1)}>Primary</Button>
        <Button onClick={this.handleClick.bind(this,2)}>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <h2>通过params传参</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={'/about/' + '2' }>About</Link></li>
          <li><Link to={{pathname:'/contact',search:'?sort=name',query:{id:'456'}}}>contact</Link></li>
          <li><Link to="/home/second">second</Link></li>
        </ul>
        <App><Route path='/home/second' component={Second}/></App>
        
      </div>
    )
  }

}
