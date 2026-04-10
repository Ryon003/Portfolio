import { j as S, r as Be } from "./index-syonqPs8.js";

class SplitTextStub {
  constructor() {
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
  split() {
    return this;
  }
  revert() {
    return this;
  }
  static create() {
    return new SplitTextStub();
  }
}

class ScrollSmootherStub {
  static create() {
    return smoother;
  }
  static refresh() {}
}

let smoother = {
  scrollTop: () => {},
  paused: () => {},
  scrollTo: () => {},
  kill: () => {},
};

const HoverLinks = ({ text, cursor }) =>
  S.jsx("div", {
    className: "hover-link",
    "data-cursor": !cursor && "disable",
    children: S.jsxs("div", {
      className: "hover-in",
      children: [text, " ", S.jsx("div", { children: text })],
    }),
  });

const Navbar = () => (
  Be.useEffect(() => {
    smoother = {
      scrollTop: () => window.scrollTo({ top: 0, behavior: "auto" }),
      paused: () => {},
      scrollTo: (section) => {
        const target = section ? document.querySelector(section) : null;
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      kill: () => {},
    };
    const links = Array.from(document.querySelectorAll(".header ul a"));
    const onLinkClick = (e) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const section = e.currentTarget.getAttribute("data-href");
        smoother.scrollTo(section);
      }
    };
    links.forEach((el) => el.addEventListener("click", onLinkClick));
    return () => links.forEach((el) => el.removeEventListener("click", onLinkClick));
  }, []),
  S.jsxs(S.Fragment, {
    children: [
      S.jsxs("div", {
        className: "header",
        children: [
          S.jsx("a", {
            href: "/#",
            className: "navbar-title",
            "data-cursor": "disable",
            children: "Ryon",
          }),
          S.jsx("a", {
            href: "mailto:ryonchahar@gmail.com",
            className: "navbar-connect",
            "data-cursor": "disable",
            children: "ryonchahar@gmail.com",
          }),
          S.jsxs("ul", {
            children: [
              S.jsx("li", {
                children: S.jsx("a", {
                  "data-href": "#about",
                  href: "#about",
                  children: S.jsx(HoverLinks, { text: "ABOUT" }),
                }),
              }),
              S.jsx("li", {
                children: S.jsx("a", {
                  "data-href": "#work",
                  href: "#work",
                  children: S.jsx(HoverLinks, { text: "WORK" }),
                }),
              }),
              S.jsx("li", {
                children: S.jsx("a", {
                  "data-href": "#contact",
                  href: "#contact",
                  children: S.jsx(HoverLinks, { text: "CONTACT" }),
                }),
              }),
            ],
          }),
        ],
      }),
      S.jsx("div", { className: "landing-circle1" }),
      S.jsx("div", { className: "landing-circle2" }),
      S.jsx("div", { className: "nav-fade" }),
    ],
  })
);

export { Navbar as N, SplitTextStub as m, smoother as s, ScrollSmootherStub as x };
