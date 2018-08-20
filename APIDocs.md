# React-Task-List API #
----
  The React Task List API helps the user check or the status of a task item by clicking on it.
  The API response will let you know whether a task is locked or not (meaning its parent task has not yet been completed), and, if not, will change its status from incomplete to completed, or vice versa.

## URL ##

  The base URL used is formatted as follows:
  ```
  https://api.reacttasklist.com/
  ```

*All React Task List REST APIs are served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.*

## Methods: ##

  `GET` | `POST` | `DELETE` | `PUT`

### GET ###

* **Fetching Tasks:**

  ```
  GET https://api.reacttasklist.com/tasks/id={optional: task_id}
  ```

  *If no task id is included, all tasks will be displayed*

* **See All Tasks By Group:**

  ```
  GET https://api.reacttasklist.com/groups/group={optional: group name}
  ```

  *If no group name is included, all tasks in that group will be displayed*

### POST ###

* **Checking and Unchecking Tasks:**

  ```
  POST https://api.reacttasklist.com/tasks/id={task_id}
  ```

  *App logic prevents locked tasks from being clicked*
  *POST requests to /tasks/{task_id} will toggle task status from incomplete to complete, or vice versa*
  *Task's completed_at property will be changed from null to current datetime, or vice versa*


## RESPONSES ##

### Success Response: ###

  * All successful calls return a 200 HTTP response.

### Error Response: ###
  
  * All errors return a 400 or 500 HTTP response. The details of each error are included in the message field.

  ```
  {
    "error": boolean,
    "message": string,
    "code": int
  }
  ```
 

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 