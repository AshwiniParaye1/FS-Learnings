import { jsx } from "react/jsx-runtime";

export default function ReactElement() {
  return jsx("h1", {
    className: "header",
    children: "Profile",
  });
}
