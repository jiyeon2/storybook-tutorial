import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Task, TaskProps, TaskItem } from './Task';

// 컴포넌트
export default {
  component: Task,
  title: 'Task',
  // excludeStories: ['Pinned'] // 제외할 스토리
  // argTypes: {}, // 컨트롤 생성
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

// 컴포넌트의 특정 state를 보여주는 하위 스토리
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018,0,1,9,0),
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task:{
    ...Default.args.task as TaskItem,
    state: 'TASK_PINNED',
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task as TaskItem,
    state: 'TASK_ARCHIVED',
  },
};