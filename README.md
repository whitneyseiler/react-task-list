# react-task-list
Completed as a coding exercise for Wonderschool. Live demo can be found [here](https://whitneyseiler.github.io/react-task-list/).

# How to Run Locally
1. Install dependencies: `-npm install`
4. Run React Webpack: `-npm run react-dev`,
5. Start server: `-npm start`

To start, in your browser navigate to: http://localhost:3000

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