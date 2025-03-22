import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@mgmg/ui/components/ui/drawer';
import { Button } from '@mgmg/ui/components/ui/button';


const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    componentSubtitle: '몽글몽글의 Drawer 컴포넌트입니다.',
    docs: {
      description: {
        component: 'open 속성을 통해 Drawer의 열기 상태를 설정할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a description for the drawer.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here. You can put any content inside the drawer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Open: Story = {
  args: {
    open: true,
  },
  parameters: {
    docs: {
      disable: true, // 이 스토리를 docs에서 숨깁니다
    },
  },
  render: () => (
    <Drawer open={true}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Open Drawer State</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription>This is a description for the drawer.</DrawerDescription>
      </DrawerContent>
    </Drawer>
  ),
};

