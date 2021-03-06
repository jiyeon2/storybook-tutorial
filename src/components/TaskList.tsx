import React from 'react';
import { Task, TaskItem } from './Task';

export interface TaskListProps{
  loading: boolean,
  tasks: TaskItem[],
  onPinTask: () => void,
  onArchiveTask: () => void
}

export default function TaskList(props:TaskListProps):JSX.Element{
  const {loading = false, tasks, onPinTask, onArchiveTask} = props;
  const events ={ onPinTask, onArchiveTask};

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading){
    return <div className="list-items">
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
    </div>;
  }

  if (tasks.length === 0){
    return <div className="list-items">
      <div className="wrapper-message">
        <span className="icon-check" />
        <div className="title-message">you have no tasks</div>
        <div className="subtitle-message">Sit back and relax</div>
      </div>
    </div>;
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )


}