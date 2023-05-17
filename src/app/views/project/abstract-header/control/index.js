import AddTaskModal from '../../../modals/add-task';

const Control = (data) => {
  const { title, icon } = data;

  const controllerBtn = document.createElement('button');
  controllerBtn.classList.add(`${title}-btn`);

  const iconSpan = document.createElement('span');
  iconSpan.classList.add(`${title}-icon`);

  iconSpan.innerHTML = icon;

  const textSpan = document.createElement('span');
  textSpan.classList.add('btn-text');
  textSpan.textContent = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;

  controllerBtn.appendChild(iconSpan);
  controllerBtn.appendChild(textSpan);

  return controllerBtn;
};

const AddTaskControl = (app) => {
  const addTaskControlData = {
    title: 'add-task',
    icon: `<svg width="13" height="13">
                  <path
                    d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>`,
  };

  const showTaskModal = () => {
    const modal = AddTaskModal(app);
    document.body.appendChild(modal);
  };

  const control = Control(addTaskControlData);
  control.addEventListener('click', showTaskModal);

  return control;
};

const ShowCompletedControl = () => {
  const showCompletedControlData = {
    title: 'show-completed',
    icon: `<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-1a8 8 0 110-16 8 8 0 010 16zm-4.354-8.104a.5.5 0 01.708 0l2.146 2.147 5.146-5.147a.5.5 0 01.708.708l-5.5 5.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 010-.708z"
                  fill="currentColor"
                ></path>
              </svg>`,
  };

  const showCompleted = Control(showCompletedControlData);

  return showCompleted;
};

const ViewControl = () => {
  const viewControlData = {
    title: 'view',
    icon: `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>`,
  };

  const view = Control(viewControlData);

  return view;
};

const EditProjectControl = () => {
  const editProjectControlData = {
    title: 'edit-project',
    icon: `<svg width="24" height="24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                  ></path>
                </g>
              </svg>`,
  };

  const editProject = Control(editProjectControlData);

  return editProject;
};

const DeleteProjectControl = () => {
  const deleteProjectControlData = {
    title: 'delete-project',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
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
  };

  const deleteProject = Control(deleteProjectControlData);

  return deleteProject;
};

export {
  AddTaskControl,
  ShowCompletedControl,
  ViewControl,
  EditProjectControl,
  DeleteProjectControl,
};
