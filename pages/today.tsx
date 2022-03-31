import HeaderBar from "../components/HeaderBar";
import Task from "../components/Task";

export default function Today() {
  return (
    <>
      <HeaderBar title="TODAY" />
      <Task description="task 1" />
      <Task description="task 2" />
      <Task description="task 3" />
    </>
  );
}
