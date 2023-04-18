import { render } from '@redwoodjs/testing/web'

import EditImagePage from './EditImagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditImagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditImagePage />)
    }).not.toThrow()
  })
})
