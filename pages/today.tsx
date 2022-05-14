import HeaderBar from "../components/UI/HeaderBar";
import Task from "../components/UI/Task";
import TaskView from "../components/UI/TaskView";

export default function Today() {
  return (
    <>
      <HeaderBar title="TODAY" />
      <TaskView>
        <Task description="task 1" />
        <Task description="task 2" />
        <Task description="task 3" />
      </TaskView>
    </>
  );
}
