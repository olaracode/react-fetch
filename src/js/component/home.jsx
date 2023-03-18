import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

/**
 *
 * Refactorizar: Optimizar y limpiar el codigo
 */
let initialValue = [
  {
    nombre: "Cambur",
    valor: 5,
  },
  {
    nombre: "Manzana",
    valor: 10,
  },
  {
    nombre: "Naranja",
    valor: 3,
  },
];
const Home = () => {
  // Declaramos nuestro estado: "lista", con un valor inicial de un arreglo vacio
  const [products, setProducts] = useState(initialValue);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // handle se suele usar para nombres de manejadores de evento
  const handleProductChange = (event) => {
    // Modificando el productName con el valor del input
    setProductName(event.target.value);
  };
  const handlePrice = (event) => {
    setProductPrice(event.target.value);
  };

  // Funcion que agrega un nuevo producto a la lista a la lista
  const handleAddClick = () => {
    const nuevoProducto = {
      nombre: productName,
      valor: productPrice,
    };
    // ... -> Spread Operator
    // declaro una nueva lista con los valores de la anterior mas el valor nuevo
    const nuevaListaDeProductos = [...products, nuevoProducto];

    setProducts(nuevaListaDeProductos);
  };

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">TODO</h1>
      <div className="card m-5">
        <div className="card-header">
          <input
            type="text"
            placeholder="Nuevo producto"
            onChange={(event) => handleProductChange(event)}
          />
          <input
            type="number"
            placeholder="precio"
            onChange={(event) => handlePrice(event)}
          />

          <button onClick={() => handleAddClick()}>Agregame</button>
          <p>
            {productName} cuesta {productPrice}$
          </p>
        </div>
        <div className="card-body">
          <ul>
            {products.map((producto, index) => {
              return (
                <p key={`${producto.nombre}-${index}`}>
                  {producto.nombre} {producto.valor}$
                </p>
              );
            })}
          </ul>
        </div>
        <div className="card-footer">
          Te estas llevando 3 elementos {products.length}
        </div>
      </div>
    </div>
  );
};

export default Home;
