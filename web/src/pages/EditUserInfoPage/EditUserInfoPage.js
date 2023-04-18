import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EditUserInfoPage = () => {
  return (
    <>
      <MetaTags title="EditUserInfo" description="EditUserInfo page" />

      <h1>EditUserInfoPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EditUserInfoPage/EditUserInfoPage.js</code>
      </p>
      <p>
        My default route is named <code>editUserInfo</code>, link to me with `
        <Link to={routes.editUserInfo()}>EditUserInfo</Link>`
      </p>
    </>
  )
}

export default EditUserInfoPage
