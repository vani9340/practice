import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-3 gap-6">${each(posts, ({ id, title, image, body }) => {
    return `<div><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="h-1/2">
    <p class="text-2xl font-bold">${escape(title.substring(0, 20))}</p>
    <p>${escape(body.substring(0, 80))}</p>
    </div>`;
  })}</div>


${$$result.head += `<!-- HEAD_svelte-s5lpsi_START -->${$$result.title = `<title>Buisness frontpage</title>`, ""}<meta name="description" content="Business frontpage is a company"><!-- HEAD_svelte-s5lpsi_END -->`, ""}`;
});
export {
  Page as default
};
