import React from "react";
import cx from "classnames";
import styles from "./style.module.scss";
import Aside from "src/app/components/aside";
import Add from "src/components/add";
function App() {
  return (
    <div className={cx(styles.app, "flex h-screen")}>
      <div className={cx(styles.aside, "md:min-w-0")}>
        <Aside />
      </div>
      <div className="flex-1">Content</div>
      <Add />
    </div>
  );
}

export default App;
