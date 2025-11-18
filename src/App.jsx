import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import MadisonNavbar from './components/MadisonNavbar.jsx'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import Favorites from './pages/Favorites.jsx'

const RESTAURANTS = [
  {
    id: '1',
    name: 'Ian’s Pizza on State',
    cuisine: 'Pizza',
    price: '$',
    distance: '0.2 mi',
    rating: 4.6,
    tags: ['Late-night', 'Slice']
  },
  {
    id: '2',
    name: 'Sunroom Café',
    cuisine: 'Café',
    price: '$$',
    distance: '0.3 mi',
    rating: 4.4,
    tags: ['Brunch', 'Vegetarian-friendly']
  },
  {
    id: '3',
    name: 'Dotty Dumpling’s Dowry',
    cuisine: 'Burgers',
    price: '$$',
    distance: '0.4 mi',
    rating: 4.5,
    tags: ['Classic', 'Burger']
  },
  {
    id: '4',
    name: 'Tutto Pasta',
    cuisine: 'Italian',
    price: '$$',
    distance: '0.5 mi',
    rating: 4.3,
    tags: ['Pasta', 'Sit-down']
  },
  {
    id: '5',
    name: 'Taqueria El Grito',
    cuisine: 'Mexican',
    price: '$',
    distance: '0.8 mi',
    rating: 4.7,
    tags: ['Tacos', 'Casual']
  }
]

export default function App() {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const stored = localStorage.getItem('madison-eats-favorites')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('madison-eats-favorites', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const favorites = RESTAURANTS.filter((r) => favoriteIds.includes(r.id))

  return (
    <>
      <MadisonNavbar />
      <Container className="py-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                restaurants={RESTAURANTS.slice(0, 3)}
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/browse"
            element={
              <Browse
                restaurants={RESTAURANTS}
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </Container>
    </>
  )
}
