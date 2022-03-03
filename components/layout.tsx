import Sidebar from "./sidebar/sidebar";
import TaskView from "./taskView";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="layout">
      <Sidebar />
      <TaskView>{children}</TaskView>
      <div className="spacer"></div>
    </div>
  );
}
