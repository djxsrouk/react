import React from "react";
import styles from "./Sidebar.module.css";
import { MdAccountCircle } from "react-icons/md";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Sidebar = ({ data }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>
        <Link to="/play/tasksReducer/">TasksReducer</Link>

      <div className={styles.wrapperContainer}>
        <div className={styles.listWrapper}>
          {data.map((menuItem) => (
            <div key={menuItem.id} className={styles.text}>
              {menuItem.icon}
              {menuItem.name}
            </div>
          ))}
        </div>

        <div className={styles.userName}>
          <span className={styles.text}>
            <MdAccountCircle />
            User Name
          </span>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
