import React from "react";
import Calendar from "src/components/calendar";
import Icon from "src/components/icon";
import Menu, { MenuItem, MenuGroup } from "src/components/menu";
import "./style.scss";

const Aside = () => {
  return (
    <div className="bg-gray-800 h-screen w-full">
      <Calendar type="card" theme="dark" />
      <div className="aside-device bg-gray-900" />
      <Menu theme="dark">
        <MenuGroup>
          <MenuItem eventKey="inbox">
            <div className="flex items-center">
              <Icon type="inbox" />
              <span className="font-bold">收件箱</span>
            </div>
          </MenuItem>
          <MenuItem eventKey="filter">
            <div className="flex items-center">
              <Icon type="timeline" />
              <span className="font-bold">过滤器</span>
            </div>
          </MenuItem>
          <MenuItem eventKey="tag">
            <div className="flex items-center">
              <Icon style={{ fontSize: 14 }} type="tag1" />
              <span className="font-bold">标签</span>
            </div>
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem eventKey="completed">
            <div className="flex items-center">
              <Icon type="checkbox" />
              <span className="font-bold">已完成</span>
            </div>
          </MenuItem>
          <MenuItem eventKey="trash">
            <div className="flex items-center">
              <Icon type="delete" />
              <span className="font-bold">垃圾桶</span>
            </div>
          </MenuItem>
        </MenuGroup>
      </Menu>
    </div>
  );
};

export default Aside;
