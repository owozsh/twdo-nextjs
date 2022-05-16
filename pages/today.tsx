import { useState } from "react";
import HeaderBar from "../components/UI/HeaderBar";
import Task from "../components/UI/Task";
import TaskView from "../components/UI/TaskView";
import { task } from "../types";

const exampleTasks: task[] = [
  {
    id: 1,
    description: "task",
    completed: false,
  },
];

export default function Today() {
  const [tasks, setTasks] = useState(exampleTasks);

  const addTask = (): void => {
    console.log(tasks);
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        description: "",
        completed: false,
      },
    ]);
  };

  return (
    <>
      <HeaderBar title="TODAY" onAddButtonClick={addTask} />
      <TaskView>
        {tasks.map((task) => (
          <Task key={task.id} description={task.description} />
        ))}
      </TaskView>
    </>
  );
}
