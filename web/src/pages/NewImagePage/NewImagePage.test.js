import { render } from '@redwoodjs/testing/web'

import NewImagePage from './NewImagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewImagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewImagePage />)
    }).not.toThrow()
  })
})
