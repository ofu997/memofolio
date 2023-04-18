// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/user" page={UserPage} name="user" />
      <Route path="/new-image" page={NewImagePage} name="newImage" />
      <Route path="/image" page={ImagePage} name="image" />
      <Route path="/handle-users" page={HandleUsersPage} name="handleUsers" />
      <Route path="/edit-user-info" page={EditUserInfoPage} name="editUserInfo" />
      <Route path="/edit-image" page={EditImagePage} name="editImage" />
      <Route path="/" page={ImagesPage} name="images" />
      <Route path="/test" page={TestPage} name="test" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
