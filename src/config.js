import github from "./assets/icons/github.svg";
import twitter from "./assets/icons/twitter.svg";
import email from "./assets/icons/email.svg";
import qq from "./assets/icons/qq.svg";
import t from "./tags.js";

export const socials = [
  {
    icon: github,
    href: "https://github.com/lihe07",
  },
  {
    icon: twitter,
    href: "https://twitter.com/lihe2007",
  },
  {
    icon: email,
    href: "mailto:me@lihe.dev",
  },
  {
    icon: qq,
    href: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=3525904273",
    showInFirst: false,
  },
];

export const footerLinks = [
  {
    name: "General",
    // children: {
    //   Works: "/works",
    //   Blog: "/blog",
    //   Contact: "/contact",
    // },
    children: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Works",
        href: "/works",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    name: "Details",
    // children: {
    //   Resume: "/resume",
    //   About: "/about",
    // },

    children: [
      {
        name: "Resume",
        href: "/resume",
      },
      {
        name: "About",
        href: "/about",
      },
    ],
  },
  {
    name: "Friends",
    children: [
      {
        name: "Ziling's Blog",
        href: "https://ziling.moe/",
        target: "_blank",
      },
      {
        name: "Lin's Blog",
        href: "https://dreta.dev",
        target: "_blank",
      },
      {
        name: "¬(🐟∨🐱)",
        href: "https://neitherfishnorcat.com/",
        target: "_blank",
      },
      {
        name: "Daniel & Toby",
        href: "https://philochat.org/",
        target: "_blank",
      },
    ],
  },
];
export const tags = t;
