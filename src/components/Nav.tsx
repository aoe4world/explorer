import { A, useLocation, useMatch } from "@solidjs/router";
import { ParentComponent, createEffect, For, on } from "solid-js";

const MenuLink: ParentComponent<{ href: string; }> = (props) => {
  const isMatch = useMatch(() => props.href);
  return (
    <li>
      <A
        href={props.href}
        class="text-white font-bold text-lg py-2 px-3 rounded-lg focus:outline-none focus:ring focus:ring-white active:ring-transparent"
        classList={{ "opacity-70": !isMatch() }}
      >
        {props.children}
      </A>
    </li>
  );
};

export function Nav(props: { items: [href: string, label: string][] }) {
  const location = useLocation();
  let resetFocusEl: HTMLDivElement | undefined; // eslint-disable-line no-unassigned-vars

  // Reset focus when path changes
  createEffect(on(() => location.pathname, () => resetFocusEl?.focus()));

  return (
    <>
      <nav class="border-gray-500 border-b w-full sticky z-50 t-0">
        <section class="py-6 px-4 lg:px-10 bg-gray-800">
          <div class="relative justify-between items-center flex">
            <a class="text-2xl text-white font-bold focus py-2 px-3 -ml-3 rounded-lg focus:outline-none focus:ring focus:ring-white" href="/">
              AoE4 World
            </a>

            <ul class="hidden md:flex items-center text-white space-x-2 gap-x-5">
              <For each={props.items}>{([href, label]) => <MenuLink href={href}>{label}</MenuLink>}</For>
              <li class="bg-white/5 w-20 h-4 rounded-full" />
              <li class="bg-white/5 w-20 h-4 rounded-full" />
            </ul>
            <div />
          </div>
        </section>
      </nav>
      <div ref={resetFocusEl} class="outline-none" tabindex="-1" />
    </>
  );
}
