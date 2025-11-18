import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import RestaurantCard from '../components/RestaurantCard.jsx'

export default function Browse({ restaurants, favoriteIds, toggleFavorite }) {
  const [search, setSearch] = useState('')

  const filtered = restaurants.filter((r) =>
    (r.name + r.cuisine + r.tags.join(' '))
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <>
      <h1 className="h3 mb-3">Browse restaurants</h1>
      <Form className="mb-3">
        <Form.Control
          type="search"
          placeholder="Search by name, cuisine, or tag…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Row>
        {filtered.map((r) => (
          <Col md={6} lg={4} key={r.id}>
            <RestaurantCard
              restaurant={r}
              isFavorite={favoriteIds.includes(r.id)}
              onToggleFavorite={toggleFavorite}
            />
          </Col>
        ))}
        {filtered.length === 0 && <p>No matches found.</p>}
      </Row>
    </>
  )
}
