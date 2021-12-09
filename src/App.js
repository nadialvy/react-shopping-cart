// feature 1
import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'; // ./ artinya mencari file

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products, //mengambil nilai products di dalam data .json
      cartItems: [], //defaultnya tidak ada item
      size: "",
      sort: ""
    };
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    //get rid pf current product tahat user select to remove
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice(); //slice() mengembalikan nilai array yang dipilih kedalam array baru
    
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id){ //jika sudah ada, maka update jumlahnya saja
        item.count++;
        alreadyInCart = true;
      }
    });

    if(!alreadyInCart){ //jika produk belum ada di keranjang maka : 
      cartItems.push({...product, count: 1})
    }

    this.setState({cartItems});
  
  };

  sortProducts = (event) =>{
    //implement
    const sort = event.target.value;

    console.log(event.target.value); //read the value that user select
    this.setState(state => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort((a, b) => 
        sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : sort === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : a._id > b._id
          ? 1
          : -1
        ),
    }));
  };

  filterProducts = (event) =>{
    console.log(event.target.value); //membaca apa yang user pilih
    if(event.target.value === ""){ //jika value = "" alias tida memilih apa apa
      this.setState({ //mengganti state = data tetap
        size: event.target.value,
        products: data.products
      });
    } else { //jika user mengganti option/ jika value terganti, maka : 
      this.setState({
        size: event.target.value, //XS
        products: data.products.filter( //memfilter produk dimana size nya XS
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
          ),
      });
    }
  };
  
  render(){
    return (
      <div className="grid-container">

        <header> 
          <a href="/">React Shopping Cart</a>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length} //6
                sort={this.state.sort}
                size={this.state.size}

                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}

              ></Filter>

              <Products
                products={this.state.products}
                addToCart={this.addToCart}

              ></Products>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
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
