import React from "react";

import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaGithub,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/project",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calender",
    text: "calender",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "www.twiter.com",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "www.twiter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "www.twiter.com",
    icon: <FaGithub />,
  },
  {
    id: 4,
    url: "www.twiter.com",
    icon: <FaSketch />,
  },
];
