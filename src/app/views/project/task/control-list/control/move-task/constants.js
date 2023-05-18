const CHECK_MARK_SVG = `<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              width="12"
              height="12"
              aria-hidden="true"
              class="select-project-checkmark"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
              ></path>
            </svg>`;

const INBOX_ICON_SVG = `<svg
                  color="#246fe0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="project_icon project_icon_inbox"
                >
                  <g fill="currentColor">
                    <path
                      d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z"
                      opacity="0.1"
                    ></path>
                    <path
                      d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"
                    ></path>
                  </g>
                </svg>`;

const ARROW_DOWN_SVG = `<svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.646 9.646L4.854 6.854A.5.5 0 015.207 6h5.586a.5.5 0 01.353.854L8.354 9.646a.5.5 0 01-.708 0z"
                    fill="currentColor"
                  ></path>
                </svg>`;

export { CHECK_MARK_SVG, INBOX_ICON_SVG, ARROW_DOWN_SVG };
