import { render } from '@redwoodjs/testing/web'

import ImagesPage from './ImagesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ImagesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImagesPage />)
    }).not.toThrow()
  })
})
