// feature 1
import React from 'react';
import Products from './components/Products';
import data from './data.json'; // ./ artinya mencari file

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products, //mengambil nilai products di dalam data .json
      size: "",
      sort: ""
    }
  }
  
  render(){
    return (
      <div className="grid-container">

        <header> 
          <a href="/">React Shopping Cart</a>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>

        <footer>
          All right is reserved
        </footer>
      </div>
    );
  }
}

export default App;
