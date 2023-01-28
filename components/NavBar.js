/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import Logo from './Logo';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <div style={{
              padding: '0px',
              maxWidth: '100px',
              margin: '0',
            }}
            >
              <Logo />
            </div>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/dogs">
              <Button variant="success" size="lg" id="dogs-btn">Dogs</Button>
            </Link>
            <Link passHref href="/locations">
              <Button variant="success" size="lg" id="locations-btn">Locations</Button>
            </Link>
            <Link passHref href="/dog/new">
              <Button variant="success" size="lg" id="new-dogs-btn">New Dog</Button>
            </Link>
            <Link passHref href="/location/new">
              <Button variant="success" size="lg" id="new-location-btn">New Location</Button>
            </Link>
            <Button variant="danger" size="lg" onClick={signOut} id="logout-btn">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
