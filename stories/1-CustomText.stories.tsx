import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextBody } from '../src/custom1'

export default {
  title: 'Custom',
  component: TextBody,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

export const text = (args) => {
  return <TextBody {...args} />
}
