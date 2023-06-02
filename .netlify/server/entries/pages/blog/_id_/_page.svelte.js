import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { post } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><h2 class="text-2xl font-bold">${escape(post.title)}</h2>
    <h2>${escape(post.body)}</h2></div>`;
});
export {
  Page as default
};
