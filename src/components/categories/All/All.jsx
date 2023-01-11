import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";
import productsApi from "../../Products/Products";

function All() {
  const products = productsApi;

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <div>
      <div className="products-container">
        {data.map((product, i) => (
          <Card
            key={i}
            name={product.name}
            price={product.price}
            memory={product.memory}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default All;
