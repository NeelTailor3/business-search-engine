import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

function AppNavbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Business Search Engine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="primary" onClick={handleShow}>
              Register Business
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Business</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppNavbar;
