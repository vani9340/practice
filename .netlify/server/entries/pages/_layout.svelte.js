import { c as create_ssr_component, e as escape, b as subscribe, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="bg-slate-800 text-gray-200 text-center p-4"><div>copyright c your window ${escape(year)}</div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.route.id;
  $page.url.href;
  $$unsubscribe_page();
  return `<nav class="flex justify-between p-4 text-lg bg-slate-800 text-white"><h1>Project</h1>
    <ul class="underline flex text-base justify-center gap-4"><li><a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/services">Services</a></li>
       <li><a href="/contact">Contact</a></li>
       <li><a href="/blog">Blog</a></li></ul></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
