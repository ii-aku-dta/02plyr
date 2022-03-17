import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value } from "./index-099ba245.js";
const Flex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let directionWithReverse;
  let $$restProps = compute_rest_props($$props, ["direction", "align", "justify", "reverse"]);
  let { direction = "row" } = $$props;
  let { align = "center" } = $$props;
  let { justify = "center" } = $$props;
  let { reverse = false } = $$props;
  const alignMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch"
  };
  const justifyMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    around: "space-around",
    between: "space-between",
    evenly: "space-evenly"
  };
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  directionWithReverse = reverse ? `${direction}-reverse` : direction;
  return `<div${spread([
    escape_object($$restProps),
    {
      class: escape_attribute_value($$restProps.class)
    }
  ], {
    styles: {
      "display": `flex`,
      "flex-direction": directionWithReverse,
      "align-items": alignMap[align],
      "justify-content": justifyMap[justify]
    }
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Flex as F };
