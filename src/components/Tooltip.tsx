import { computePosition, offset, flip, shift } from "@floating-ui/dom";
import { Component, createSignal, onMount, onCleanup, Show, JSX } from "solid-js";
import { Portal } from "solid-js/web";

export const Tooltip: Component<{ attachTo?: HTMLElement; children?: JSX.Element }> = (props) => {
  let [hover, setHover] = createSignal(false);
  let ref: HTMLDivElement | undefined;
  const delay = 50;

  const target = () => props.attachTo || ref?.parentElement;

  const onEnter = () => setHover(true);
  const onLeave = () => setHover(false);

  onMount(() => {
    const el = target();
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    onCleanup(() => {
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    });
  });

  function positionTooltip(el: HTMLDivElement) {
    const anchor = target();
    if (!anchor) return;

    Object.assign(el.style, { position: "absolute" });
    function updatePosition() {
      computePosition(anchor, el, {
        placement: "bottom-start",
        strategy: "absolute",
        middleware: [flip(), shift()],
      }).then(({ x, y }) =>
        Object.assign(el.style, {
          left: `${x}px`,
          top: `${y}px`,
          opacity: "",
          zIndex: 999,
        })
      );
    }
    window.setTimeout(updatePosition, delay);
    window.addEventListener("scroll", updatePosition);

    onCleanup(() => {
      window.removeEventListener("scroll", updatePosition);
    });
  }
  return (
    <>
      <div ref={ref} style="display: none" />
      <Show when={hover()}>
        <Portal>
          <div class="w-50 p-5 w-screen sm:w-auto" style="opacity: 0; position: absolute; top: 0;" ref={(el) => positionTooltip(el)}>
            {props.children}
          </div>
        </Portal>
      </Show>
    </>
  );
};

