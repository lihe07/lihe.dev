import github from "./assets/icons/github.svg";
import twitter from "./assets/icons/twitter.svg";
import email from "./assets/icons/email.svg";
import qq from "./assets/icons/qq.svg";

export const socials = [
  {
    icon: github,
    href: "https://github.com/lihe07",
  },
  {
    icon: twitter,
    href: "https://twitter.com/HeLi07784212",
  },
  {
    icon: email,
    href: "mailto:li@imlihe.com",
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
    name: "External",
    // children: {
    //   Github: "https://github.com",
    //   Twitter: "https://twitter.com",
    //   Google: "https://google.com",
    // },
    children: [
      {
        name: "Github",
        href: "https://github.com",
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
      },
      {
        name: "Google",
        href: "https://google.com",
      },
    ],
  },
];
