import React from 'react';
import TaskList, {TaskListProps} from './TaskList'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import * as TaskStories from './Task.stories';
import { TaskItem } from './Task';


const meta:Meta = {
  component: TaskList,
  title:'TaskList',
  // 데코레이터는 각 스토리에 임의의 래퍼 적용, provider로 감쌀때도 사용 가능
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
}
export default meta;

const Template:Story<TaskListProps> = args => <TaskList {...args}/>;

export const Default = Template.bind({});
// taskstories 가져와서 arg합성
Default.args={
  tasks: [
    {...(TaskStories.Default.args!.task as TaskItem), id: '1', title: 'Task 1' },
    {...(TaskStories.Default.args!.task as TaskItem), id: '2', title: 'Task 2' },
    {...(TaskStories.Default.args!.task as TaskItem), id: '3', title: 'Task 3' },
    {...(TaskStories.Default.args!.task as TaskItem), id: '4', title: 'Task 4' },
    {...(TaskStories.Default.args!.task as TaskItem), id: '5', title: 'Task 5' },
    {...(TaskStories.Default.args!.task as TaskItem), id: '6', title: 'Task 6' },
  ]
}

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks!.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
}

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind({});
Empty.args={
  ...Loading.args,
  loading: false
}