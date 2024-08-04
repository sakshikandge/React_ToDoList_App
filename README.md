This To-Do List application is designed to help users manage their tasks efficiently. Users can add, update, complete, and delete tasks, as well as search for tasks based on their titles. The application is built using React, providing a dynamic and interactive user experience.

System Design : Architecture: The application follows a component-based architecture using React:

Components: The application is divided into several reusable components, each handling a specific part of the UI and its functionality. App: The main component that manages the state of the application and renders other components. TaskList: Displays the list of tasks. TaskForm: Provides a form for adding new tasks. Task: Represents an individual task with options to edit, complete, or delete it.

Data Flow User Interaction: The user interacts with the UI, adding or modifying tasks. State Management: The useState hook in React is used to manage the state of tasks and the search term. Rendering: Components re-render based on state changes, providing an up-to-date view of tasks.

The main component that maintains the list of tasks and the search term. It includes functions to add, update, toggle completion, delete tasks, and handle search input.

Setup and Running the Application:

cd todo-list

Install Dependencies npm install

Start the Application npm start
