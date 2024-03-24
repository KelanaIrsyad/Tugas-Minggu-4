import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import "./Layout.css"

function Layout() {
    const { user, logout } = useAuth();
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#">STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/carts">Cart</Nav.Link>
            <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Layout