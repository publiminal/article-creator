import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner.js'

// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  // expect(true).toBe(false)
  render(<Spinner on={true} />)
})

test('sanity', () => {
  // expect(true).toBe(false)
  render(<Spinner on={false} />)
})

