CREATE DATABASE react-task-list;

USE react-task-list;

CREATE TABLE Tasks (
  id INT PRIMARY KEY,
  task VARCHAR(30) NOT NULL,
  parent_id INT,
  group_id INT NOT NULL,
  completed_at DATETIME,
  locked BOOL NOT NULL,
  FOREIGN KEY (groupId) REFERENCES Groups(id)
);

CREATE TABLE Groups (
  id INT PRIMARY KEY,
  name VARCHAR(50),
);

CREATE TABLE Dependencies (
  parent_id INT PRIMARY KEY,
  sub_task_id INT NOT NULL,
  FOREIGN KEY (sub_task_id) REFERENCES Tasks(id)
);