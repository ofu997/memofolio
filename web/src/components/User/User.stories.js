// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <User {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import User from './User'

export const generated = () => {
  return <User />
}

export default {
  title: 'Components/User',
  component: User,
}
