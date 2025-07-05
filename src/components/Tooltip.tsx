import { computePosition, offset, flip, shift } from "@floating-ui/dom";
import { Component, createSignal, onMount, onCleanup, Show, JSX } from "solid-js";
import { Portal } from "solid-js/web";

export const Tooltip: Component<{ attachTo: HTMLElement; children?: JSX.Element }> = (props) => {
  let [hover, setHover] = createSignal(false);
  const delay = 50;

  onMount(() => {
    props.attachTo?.addEventListener("mouseenter", () => setHover(true));
    props.attachTo?.addEventListener("mouseleave", () => setHover(false));
  });

  onCleanup(() => {
    props.attachTo?.removeEventListener("mouseenter", () => setHover(true));
    props.attachTo?.removeEventListener("mouseleave", () => setHover(false));
  });

  function positionTooltip(el) {
    Object.assign(el.style, { position: "absolute" });
    function updatePosition() {
      computePosition(props.attachTo, el, {
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
      <Show when={hover()}>
        <Portal>
          <div class="w-50 p-5 w-screen sm:w-auto" style="opacity: 0; position: absolute;" ref={(el) => positionTooltip(el)}>
            {props.children}
          </div>
        </Portal>
      </Show>
    </>
  );
};
