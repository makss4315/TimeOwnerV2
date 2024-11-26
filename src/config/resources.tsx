import type { IResourceItem } from "@refinedev/core";

import {
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [

  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
  },
];
