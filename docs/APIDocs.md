# React-Task-List API #

  The React Task List API helps the user check or the status of a task item by clicking on it.
  The API response will let you know whether a task is locked or not (meaning its parent task has not yet been completed), and, if not, will change its status from incomplete to completed, or vice versa.

## TABLE OF CONTENTS ##
1. [`What's a RESTful API?`](#What's-a-RESTful-API?)
2. [`URL`](#URL)
3. [`METHODS`](#METHODS)
    * [`GET`](#GET)
    * [`PUT`](#PUT)
    * [`POST`](#POST)
    * [`DELETE`](#DELETE)
4. [`RESPONSES`](#RESPONSES)
5. [`SAMPLE CALL`](#SAMPLE-CALL)

## What's a RESTful API? ## 

REST stands for Representational State Transfer and refers to an architectural style and communications approach that uses HTTP protocol to GET, PUT, POST and DELETE data. There are six primary constraints that define a RESTful API: 

1. *CLIENT-SERVER:* That the client and server remain separate and function independently.
2. *STATELESS:* That all data must be stored in the client, not the server, and each call contains all of the data necessary to be completed.
3. *CACHE:* That RESTful API responses should indicate whether data can be stored and for how long to reduce server overhead and encourage users to build the most efficient apps possible.
4. *UNIFORM INTERFACE:* That four architecture constraints should be used to guide the behavior of components: identification of resources; manipulation of resources through representations, self-descriptive messages, and, hypermedia as the engine of application state. 
5. *LAYERED SYSTEM:* That the API architecture is composed of heirarchical layers by constraining component behavior so that each component can only access the layer with which they are interacting.
6. *CODE ON DEMAND (optional):* That a server can extend the client's functionality on runtime by sending code or applets to the client to execute.


## URL ##

  The base URL used is formatted as follows:
  ```
  https://api.reacttasklist.com/
  ```

*All React Task List REST APIs are served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.*

## Methods: ##

  [`GET`](#GET) | [`PUT`](#PUT) | [`POST`](#POST)| [`DELETE`](#DELETE)

#### GET ####

* **Fetching Tasks:**

  ```
  GET https://api.reacttasklist.com/tasks/:task_id
  ```

  *If no task id is included, all tasks will be displayed*

* **See All Tasks By Group:**

  ```
  GET https://api.reacttasklist.com/groups/:group name
  ```

  *If no group name is included, all tasks in that group will be displayed*


#### PUT ####

* **Checking & Unchecking tasks, Editing/Updating Tasks or Groups:**

  ```
  PUT https://api.reacttasklist.com/tasks/:task_id
  ```
  ```
  PUT https://api.reacttasklist.com/groups/:group_id
  ```

  *App logic prevents locked tasks from being clicked*
  *POST requests to /tasks/{task_id} will toggle task status from incomplete to complete, or vice versa*
  *Task's completed_at property will be changed from null to current datetime, or vice versa*
  *This method would be used if the app functionality expanded to allow the user to edit an existing task or group*


#### POST ####

* **Adding Tasks:**

  ```
  POST https://api.reacttasklist.com/tasks/:task_id
  ```

  *This route and method would be used if the app functionality expanded to include a form for the user to add a new task*

* **Adding new groups:**

  ```
  POSThttps://api.reacttasklist.com/groups/:group_id
  ```

  *This route and method would be used if the app functionality expanded to include a form for the user to add a new group*


#### DELETE ####

* **Removing Tasks or Groups:**

  ```
  DELETE https://api.reacttasklist.com/tasks/:task_id
  ```
   ```
  DELETE https://api.reacttasklist.com/groups/:group_id
  ```

  *This method would be used if the app functionality expanded to allow the user to delete an existing task or group*

## RESPONSES ##

* **Success Response:**

  * All successful calls return a 200 HTTP response.

* **Error Response:**
  
  * All errors return a 400 or 500 HTTP response. The details of each error are included in the message field.

  ```
  {
    "error": boolean,
    "message": string,
    "code": int
  }
  ```
 
## Sample Call: ##

  ```
  curl –XGET https://api.reacttasklist.com/tasks
  ```