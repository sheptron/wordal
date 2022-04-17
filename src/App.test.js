import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the WORDAL title', () => {
  render(<App />)
  const title = screen.getByText(/WORDAL/i)
  expect(title).toBeInTheDocument()
})
