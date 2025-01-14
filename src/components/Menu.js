import React from "react";

function Menu({ darkMode, onChangeDarkMode }) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={(event) => onChangeDarkMode(event.target.checked)}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
