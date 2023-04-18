// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <EditImage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import EditImage from './EditImage'

export const generated = () => {
  return <EditImage />
}

export default {
  title: 'Components/EditImage',
  component: EditImage,
}
