import { render } from '@redwoodjs/testing/web'

import EditUserInfoPage from './EditUserInfoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditUserInfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserInfoPage />)
    }).not.toThrow()
  })
})
