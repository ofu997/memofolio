import { render } from '@redwoodjs/testing/web'

import HandleUsersPage from './HandleUsersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HandleUsersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HandleUsersPage />)
    }).not.toThrow()
  })
})
