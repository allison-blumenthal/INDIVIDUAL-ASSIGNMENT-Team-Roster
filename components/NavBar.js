/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>LuckyDog Daycare</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/locations">
              <Nav.Link>Locations</Nav.Link>
            </Link>
            <Link passHref href="/dogs">
              <Nav.Link>Dogs</Nav.Link>
            </Link>
            <Link passHref href="/dog/new">
              <Nav.Link>New Dog</Nav.Link>
            </Link>
            <Link passHref href="/location/new">
              <Nav.Link>New Location</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
