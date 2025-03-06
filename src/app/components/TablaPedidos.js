import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form, Container } from 'react-bootstrap';

function App() {
  // Estado para los pedidos
  const [orders, setOrders] = useState([]);
  
  // Estado para el formulario de nuevos pedidos
  const [orderData, setOrderData] = useState({
    item: '',
    quantity: '',
    price: ''
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  // Manejar el envío del formulario para agregar un pedido
  const handleAddOrder = (e) => {
    e.preventDefault();
    if (orderData.item && orderData.quantity && orderData.price) {
      setOrders([...orders, orderData]); // Agregar el nuevo pedido
      setOrderData({ item: '', quantity: '', price: '' }); // Limpiar el formulario
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Pedidos Realizados</h2>
      
      {/* Formulario para agregar un pedido */}
      <Form onSubmit={handleAddOrder} className="mb-4">
        <Form.Group controlId="item" className="mb-3">
          <Form.Label>Artículo</Form.Label>
          <Form.Control
            type="text"
            name="item"
            value={orderData.item}
            onChange={handleChange}
            placeholder="Nombre del artículo"
          />
        </Form.Group>

        <Form.Group controlId="quantity" className="mb-3">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={orderData.quantity}
            onChange={handleChange}
            placeholder="Cantidad"
          />
        </Form.Group>

        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={orderData.price}
            onChange={handleChange}
            placeholder="Precio unitario"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Agregar Pedido
        </Button>
      </Form>

      {/* Tabla que muestra los pedidos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Artículo</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.item}</td>
              <td>{order.quantity}</td>
              <td>${order.price}</td>
              <td>${(order.quantity * order.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
