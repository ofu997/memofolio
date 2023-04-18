// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SignUpForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SignUpForm from './SignUpForm'

export const generated = () => {
  return <SignUpForm />
}

export default {
  title: 'Components/SignUpForm',
  component: SignUpForm,
}
