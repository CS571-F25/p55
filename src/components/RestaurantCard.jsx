import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export default function RestaurantCard({
  restaurant,
  isFavorite,
  onToggleFavorite
}) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{restaurant.name}</span>
          <Badge bg="secondary">{restaurant.cuisine}</Badge>
        </Card.Title>
        <Card.Subtitle className="text-muted mb-2">
          {restaurant.price} • {restaurant.distance} • ⭐ {restaurant.rating}
        </Card.Subtitle>
        {restaurant.tags?.length > 0 && (
          <div className="mb-2">
            {restaurant.tags.map((tag) => (
              <Badge bg="light" text="dark" key={tag} className="me-1">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Button
          variant={isFavorite ? 'outline-danger' : 'primary'}
          onClick={() => onToggleFavorite(restaurant.id)}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Card.Body>
    </Card>
  )
}
