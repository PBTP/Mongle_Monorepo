import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@mgmg/ui/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: '몽글몽글의 버튼 컴포넌트입니다.',
    docs: {
      description: {
        component: 'variant, size, disabled 속성을 통해 버튼의 종류, 크기, 비활성 상태를 설정할 수 있습니다.',
      },
    },
  },

  tags: ['autodocs'],
  argTypes: {
    variant: {
        type: 'select',
        options: ['default', 'destructive', 'outline'],
        description: '버튼의 종류입니다.',
    },
    size: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
        description: '버튼의 크기입니다.',
    },
    disabled: {
      type: 'boolean',
      description: '버튼의 비활성 상태입니다.',
    },
  },
  args: { onClick: fn() },

};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};
