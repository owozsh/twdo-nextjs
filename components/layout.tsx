import Sidebar from "./sidebar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
