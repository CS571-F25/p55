import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import RestaurantCard from '../components/RestaurantCard.jsx'

export default function Favorites({ favorites, favoriteIds, toggleFavorite }) {
  return (
    <>
      <h1 className="h3 mb-3">Your favorites</h1>
      {favorites.length === 0 ? (
        <p>
          You haven’t favorited any spots yet.{' '}
          <Button variant="link" as={Link} to="/browse" className="p-0">
            Browse restaurants
          </Button>{' '}
          to start building your list.
        </p>
      ) : (
        <Row>
          {favorites.map((r) => (
            <Col md={6} lg={4} key={r.id}>
              <RestaurantCard
                restaurant={r}
                isFavorite={favoriteIds.includes(r.id)}
                onToggleFavorite={toggleFavorite}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
