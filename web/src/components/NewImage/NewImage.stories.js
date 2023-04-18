// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <NewImage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import NewImage from './NewImage'

export const generated = () => {
  return <NewImage />
}

export default {
  title: 'Components/NewImage',
  component: NewImage,
}
