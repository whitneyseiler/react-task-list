# react-task-list
Completed as a [coding challenge](https://www.dropbox.com/sh/8icefhbj8w39t20/AAAIuaNcW-1yd_rS36JLmqqoa?dl=0) for Wonderschool. Full writeup of challenge can be found in [client/dist/assets/README.txt](client/dist/assets/README.txt). Live demo can be found [here](https://whitneyseiler.github.io/react-task-list/).

# How to Run Locally
1. Install dependencies: `-npm install`
4. Run React Webpack: `-npm run react-dev`,
5. Start server: `-npm start`

To start, in your browser navigate to: http://localhost:3000

# Prompt Responses
1. Build the UI for a grouped task list with task dependencies
   * this UI was created using Javascript, React, and Webpack to mimic the [mockup image](/client/dist/assets/Task List.png)
   * provided assets are stored in [client/dist/assets](client/dist/assets)
2. Design the SQL database schema to store all required task list data.
   * schema can be found in [/db/task-list-schema.sql](db/task-list-schema.sql);
   * schema mockup can be found in [/db/schema_mockup.png](db/schema_mockup.png)
3. Document an HTTP API for checking and unchecking a Task
   * API Documentation can be found in [docs/APIDocs.md](docs/APIDocs.md)


# Changes I would have made given more time: 
- [ ] add app title
- [ ] create form to add new task
- [ ] handle logic for adding a task with dependencies
- [ ] make task text editable by clicking them in list
- [ ] order tasks by parent task & use styling to indicate dependency relationships
    * e.g. parent tasks in bold with their dependent tasks indented beneath them *
- [ ] add feature that displays timestamp information for when completed tasks were marked complete
- [ ] add more engaging css styling, including border around main app div and background color on page body
- [ ] switch to split pane view instead of conditional render of either group list or task list
   * note: In my commit history you will see evidence of me testing this view option, but I ultimately
   reverted to this view format in order to match provided mockup image as closely as possible *
