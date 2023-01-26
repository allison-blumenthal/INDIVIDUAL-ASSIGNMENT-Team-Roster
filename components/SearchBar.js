import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText !== '') {
      router.push('/search/searchDog');
      setSearchText('');
    }
  };

  return (
    <Form className="search-bar" onSubmit={handleSubmit}>
      <FormControl type="text" size="sm" onChange={handleChange} value={searchText} />
      <Button type="submit" size="sm">Search</Button>
    </Form>
  );
}
