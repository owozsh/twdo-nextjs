import { useRouter } from "next/router";

import HeaderBar from "../components/UI/HeaderBar";
import Task from "../components/UI/Task";

export default function Project() {
  const projectName = useRouter().query.project as string;

  return (
    <>
      <HeaderBar title={projectName.toUpperCase()} />
      <Task description="task 1" />
      <Task description="task 2" />
      <Task description="task 3" />
    </>
  );
}
