import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import RestaurantCard from '../components/RestaurantCard.jsx'

export default function Home({ restaurants, favoriteIds, toggleFavorite }) {
  return (
    <>
      <section className="mb-4">
        <h1 className="display-4">Madison Eats</h1>
        <p className="lead">
          Campus food finder — discover your next go-to spot around UW–Madison.
        </p>
        <Button as={Link} to="/browse">
          Start browsing restaurants
        </Button>
      </section>

      <section>
        <h2 className="h4 mb-3">Featured spots</h2>
        <Row>
          {restaurants.map((r) => (
            <Col md={6} lg={4} key={r.id}>
              <RestaurantCard
                restaurant={r}
                isFavorite={favoriteIds.includes(r.id)}
                onToggleFavorite={toggleFavorite}
              />
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}
