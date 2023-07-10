import Control from '../index';
import ConfirmationDialog from '../../../../../modals/confirmation-dialog';

const DeleteTaskControl = (task) => {
  const deleteTaskControlData = {
    title: 'delete-task',
    icon: `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <rect
                              width="14"
                              height="1"
                              x="5"
                              y="6"
                              fill="currentColor"
                              rx="0.5"
                            ></rect>
                            <path
                              fill="currentColor"
                              d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"
                            ></path>
                            <path
                              stroke="currentColor"
                              d="M17.5 6.5h-11V18A1.5 1.5 0 008 19.5h8a1.5 1.5 0 001.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5v1.5z"
                            ></path>
                          </g>
                        </svg>`,
    taskId: task.getId(),
    taskTitle: task.getTitle(),
  };

  const deleteTaskControl = Control(deleteTaskControlData);

  deleteTaskControl.addEventListener('click', (e) => {
    e.stopPropagation();

    const { taskId, taskTitle } = deleteTaskControlData;
    const confirmationDialog = ConfirmationDialog(
      `Are you sure you want to delete <strong>${taskTitle}</strong>?`,
      taskId,
      'task'
    );

    document.body.append(confirmationDialog);
  });

  return deleteTaskControl;
};

export default DeleteTaskControl;
