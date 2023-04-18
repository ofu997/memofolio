import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewImagePage = () => {
  return (
    <>
      <MetaTags title="NewImage" description="NewImage page" />

      <h1>NewImagePage</h1>
      <p>
        Find me in <code>./web/src/pages/NewImagePage/NewImagePage.js</code>
      </p>
      <p>
        My default route is named <code>newImage</code>, link to me with `
        <Link to={routes.newImage()}>NewImage</Link>`
      </p>
    </>
  )
}

export default NewImagePage
