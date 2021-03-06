import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div  className="filter"> 
                 <div className="filter-result"> {/*this.props.count = 6 */}
                    {this.props.count} Product  
                </div>

                <div className="filter-sort"> {/* onChange mengeksekusi js ketika user mengganti piliham option */}
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>

                <div className="filter-size">
                    Filter {" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL </option>
                    </select>
                </div>
            </div>
        )
    }
}
