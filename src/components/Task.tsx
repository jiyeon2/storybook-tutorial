import React from 'react';

export interface TaskItem{
  id: string,
  title: string,
  state: string,
  updatedAt?: Date
}
export interface TaskProps{
  task: TaskItem,
  onArchiveTask:(id: string) => void,
  onPinTask:(id: string) => void,
}


export const Task: React.FC<TaskProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return ( 
  <div className={`list-item ${state}`}>
    <label className="checkbox">
      <input 
      type="checkbox"
      defaultChecked={state === 'TASK_ARCHIVED'}
      disabled={true}
      name="checked"
      />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)}/>
    </label>

    <div className="title">
      <input type="text" value={title} readOnly={true} placeholder="Input title" />
    </div>

    <div className="actions" onClick={(e) => e.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => onPinTask(id)}>
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
  )
}