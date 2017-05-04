import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {" "}
        Only show products in stock
      </p>
    </form>
  );
};

const ProductRow = ({ name, price }) => {
  return (
    <tr style={{ marginLeft: "30px" , marginRight: "30px" }}>
      <td>{name}</td>
      <td>{`$${price}`}</td>
    </tr>
  );
};
const ProductCategoryRow = ({ name }) => {
  return (
    <tr style={{ color: "red" }}>
      <th colSpan="2">{name}</th>
    </tr>
  );
};
const ProductTable = ({ data }) => {
  const categories = [...new Set(data.map(x => x.category))];
  const data2 = categories.map(x => {
    return {
      name: x,
      rows: data.filter(y => y.category === x)
    };
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data2.map((row, index) => {
          return [
            <ProductCategoryRow
              key={`ss${index}-${index + 22}`}
              name={row.name}
            />,
            row.rows.map((rr, index2) => (
              <ProductRow key={index2} name={rr.name} price={rr.price} />
            ))
          ];
        })}
      </tbody>
    </table>
  );
};

class App extends Component {
  render() {
    const data = [
      {
        name: "Football",
        price: "49.99",
        category: "Sporting Goods",
        stock: true
      },
      {
        name: "Baseball",
        price: "9.99",
        category: "Sporting Goods",
        stock: false
      },
      {
        name: "Basketball",
        price: "29.99",
        category: "Sporting Goods",
        stock: true
      },
      {
        name: "Football",
        price: "49.99",
        category: "Sporting Goods",
        stock: true
      },
      {
        name: "Ipod Touch",
        price: "99.99",
        category: "Electronics",
        stock: false
      },
      {
        name: "Iphone 5",
        price: "399.99",
        category: "Electronics",
        stock: true
      },
      { name: "Nexus", price: "199.99", category: "Electronics", stock: false }
    ];

    return (
      <div className="App">
        <image src="/favicon.ico" />
        <div>
          <SearchBar />
          <ProductTable data={data} />
        </div>
      </div>
    );
  }
}

export default App;
