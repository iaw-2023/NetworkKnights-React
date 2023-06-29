import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from "next/link";

function OrderModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Orden Exitosa!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Tu orden ha sido creada con éxito, nos comunicaremos por mail con los datos.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">
            <Link href={"/"} className='link-dark ms-2'>Adoptar</Link>
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default OrderModal;