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
  IconAwardFilled,
  IconAwardOff,
  IconShield,
  IconShieldHalf,
  IconAward,
  IconSpeakerphone,
  IconBellRinging,
  IconNote,
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
    title: "Questions",
    icon: IconSchool,
    href: "/notifications",
  },
    {
    id: uniqueId(),
    title: "Collabration",
    icon: IconTable,
    href: "/Collabration",
    children: [
      {
        id: uniqueId(),
        title: "Collection",
        icon: IconNote,
        href: "/collection",
      },
      {
        id: uniqueId(),
        title: "P2P Quries",
        icon: IconBellRinging,
        href: "/notifications",
      },
      {
        id: uniqueId(),
        title: "Announcement",
        icon: IconSpeakerphone,
        href: "/Announcement",
      },
    ]
  },
  {
    id: uniqueId(),
    title: "Teacher",
    icon: IconAward,
    href: "/teacher/dashboard",
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
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Class",
  //   icon: IconUsersGroup,
  //   href: "/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Account",
  //   icon: IconUser,
  //   href: "/sample-page",
  // },
  // {
  //   // id: uniqueId(),
  //   title: "Content",
  //   // icon: IconUser,
  //   href: "/sample-page",
  // },
];

export default Menuitems;
