import React from "react";
import Calendar from "src/components/calendar";
import Icon from "src/components/icon";
import Menu, { MenuItem, MenuGroup, SubMenu } from "src/components/menu";
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
          <SubMenu eventKey="list" title="列表">
            <MenuItem eventKey="list1">
              <div className="flex items-center">
                <Icon type="drag" />
                <span className="font-bold">列表 1</span>
              </div>
            </MenuItem>
          </SubMenu>
          <SubMenu eventKey="tags" title="标签">
            <MenuItem eventKey="tag">
              <div className="flex items-center">
                <Icon style={{ fontSize: 14 }} type="tag" />
                <span className="font-bold">标签一</span>
              </div>
            </MenuItem>
          </SubMenu>
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
