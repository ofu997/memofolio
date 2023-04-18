// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ImageForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ImageForm from './ImageForm'

export const generated = () => {
  return <ImageForm />
}

export default {
  title: 'Components/ImageForm',
  component: ImageForm,
}
