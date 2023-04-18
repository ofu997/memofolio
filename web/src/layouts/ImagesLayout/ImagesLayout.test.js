import { render } from '@redwoodjs/testing/web'

import ImagesLayout from './ImagesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ImagesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImagesLayout />)
    }).not.toThrow()
  })
})
