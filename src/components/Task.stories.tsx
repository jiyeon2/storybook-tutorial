import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Task, TaskProps, TaskItem } from './Task';

// 컴포넌트 - 스토리북화면 사이드바에 표시됨
export default {
  component: Task, // Directory/component 식으로 구성가능
  title: 'Task',
  // excludeStories: ['Pinned'] // 제외할 스토리
  // argTypes: {}, // 컨트롤 생성
} as Meta;

// 상태(arg)를 받아서 컴포넌트 보여줄 템플릿 함수
const Template: Story<TaskProps> = (args) => <Task {...args} />;

// 컴포넌트의 특정 state를 보여주는 하위 개별 스토리
// Function.bind(thisArg) 함수 복사 메서드
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