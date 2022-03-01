import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="layout">
      <Sidebar />
      <main>{children}</main>
      <div className="spacer"></div>
    </div>
  );
}
