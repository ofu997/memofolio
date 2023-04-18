import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EditImagePage = () => {
  return (
    <>
      <MetaTags title="EditImage" description="EditImage page" />

      <h1>EditImagePage</h1>
      <p>
        Find me in <code>./web/src/pages/EditImagePage/EditImagePage.js</code>
      </p>
      <p>
        My default route is named <code>editImage</code>, link to me with `
        <Link to={routes.editImage()}>EditImage</Link>`
      </p>
    </>
  )
}

export default EditImagePage
