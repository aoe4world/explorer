import { computePosition, offset, flip } from "@floating-ui/dom";
import { Component, createSignal, onMount, onCleanup, Show } from "solid-js";
import { Portal } from "solid-js/web";

export const Tooltip: Component<{ attachTo: HTMLElement }> = (props) => {
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
        middleware: [offset(10), flip()],
      }).then(({ x, y }) =>
        Object.assign(el.style, {
          left: `${x}px`,
          top: `${y}px`,
          opacity: "",
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
          <div class="z-100 w-50" style="opacity: 0; position: absolute;" ref={(el) => positionTooltip(el)}>
            {props.children}
          </div>
        </Portal>
      </Show>
    </>
  );
};
