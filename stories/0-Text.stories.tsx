import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextBody, TextBodyProps } from "../src/base/TextBody";

export default {
  title: 'Text',
  component: TextBody,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

export const text = (args) => {
  return (
    <TextBody {...args} />
  )
}
