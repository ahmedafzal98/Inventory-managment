import "./Sidebar.css";
import Menu from "../menu/Menu";
const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="admin">
        <div className="admin-logo">
          <div className="hr"></div>
          <span>Admin</span>
          <div className="hr"></div>
        </div>
      </div>
      <Menu />
    </section>
  );
};
export default Sidebar;
