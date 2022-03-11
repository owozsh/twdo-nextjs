import HeaderBar from "../components/headerBar";
import Task from "../components/task";

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
