import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HandleUsersPage = () => {
  return (
    <>
      <MetaTags title="HandleUsers" description="HandleUsers page" />

      <h1>HandleUsersPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/HandleUsersPage/HandleUsersPage.js</code>
      </p>
      <p>
        My default route is named <code>handleUsers</code>, link to me with `
        <Link to={routes.handleUsers()}>HandleUsers</Link>`
      </p>
    </>
  )
}

export default HandleUsersPage
