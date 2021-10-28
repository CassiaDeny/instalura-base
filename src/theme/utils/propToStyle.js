import { breakpointsMedia } from "./breakpointsMedia";

export const propToStyle = (propName) => {
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === "string") {
      return { [propName]: props[propName] };
    }

    if (typeof propValue === "object") {
      const breaksPoint = {
        xs: { [propName]: propValue.xs },
        md: { [propName]: propValue.md },
        sm: { [propName]: propValue.sm },
        lg: { [propName]: propValue.lg },
        xl: { [propName]: propValue.xl },
      };
      return breakpointsMedia(breaksPoint);
    }
  };
};
