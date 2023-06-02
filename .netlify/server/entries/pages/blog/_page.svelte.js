import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-8"><h2>Blog Posts </h2>
<ul>${each(posts, (post) => {
    return `<li><a href="${"/blog/" + escape(post.id, true)}">${escape(post.title)}</a>
    </li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
