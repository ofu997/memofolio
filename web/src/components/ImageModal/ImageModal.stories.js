// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ImageModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ImageModal from './ImageModal'

export const generated = () => {
  return <ImageModal />
}

export default {
  title: 'Components/ImageModal',
  component: ImageModal,
}
