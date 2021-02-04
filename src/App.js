import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      repoName: null
    }
    this.handleClick=this.handleClick.bind(this);
  }

  
  handleClick(){
    fetch( 'https://jsonplaceholder.typicode.com/todos/1',{method:"GET"})
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
          this.setState({repoName: data['title']});
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
    })
  }
  
  render() {
      return (
        <div className="App">
          <div className="data-display">
            {(this.state.repoName===null)?"目前還有沒有資料789":this.state.repoName}
          </div>
          <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
    	</div>
    )
  }
};


export default App;