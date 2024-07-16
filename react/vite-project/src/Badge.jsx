import { jsx } from "react/jsx-runtime";

export default function Badge({ name, handle, img, link }) {
  return jsx("div", {
    className: "badge",
    children: [
      jsx("img", {
        alt: name,
        src: img,
      }),
      jsx("div", {
        children: [
          jsx("h4", {
            children: name,
          }),
          jsx("p", {
            children: ["@", handle],
          }),
          jsx("p", {
            children: ["View Profile: ", link],
          }),
        ],
      }),
    ],
  });
}
