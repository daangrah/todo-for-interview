import React from 'react';

export const FooterArea = ({tasks, setFilter, getButtonClass}) => {
    console.log(tasks);
    const TaskNotChecked = tasks.filter((task) => !task.checked).length;

    return (
        <div className="footer">
            <p>{TaskNotChecked} items left</p>
            <div className={'btn-active'}>
                <button id='btn-choose' className={getButtonClass('All')} onClick={() => setFilter('All')}>Все</button>
                <button id='btn-choose' className={getButtonClass('Completed')} onClick={() => setFilter('Completed')}>Выполненные</button>
                <button id='btn-choose' className={getButtonClass('Active')} onClick={() => setFilter('Active')}>Не выполненные</button>
            </div>
            <style>
                {`
          button.active {
            border: 1px solid #a6a6a6;
            font-weight: bold;
          }
        `}
            </style>
        </div>
    );
};
