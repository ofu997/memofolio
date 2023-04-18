// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <LoginForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import LoginForm from './LoginForm'

export const generated = () => {
  return <LoginForm />
}

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
}
