import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconSchool,
  IconTable,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: "Home",
  // },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  // {
  //   navlabel: true,
  //   subheader: "Utilities",
  // },
  {
    id: uniqueId(),
    title: "Student",
    icon: IconSchool,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Content",
    icon: IconTable,
    href: "/utilities/shadow",
  },
  // {
  //   id: uniqueId(),
  //   title: "Dummy",
  //   icon: IconTable,
  //   href: "/utilities/dummy",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  {
    id: uniqueId(),
    title: "Class",
    icon: IconUsersGroup,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Account",
    icon: IconUser,
    href: "/sample-page",
  },
  // {
  //   // id: uniqueId(),
  //   title: "Content",
  //   // icon: IconUser,
  //   href: "/sample-page",
  // },
];

export default Menuitems;
