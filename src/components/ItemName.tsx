import { Show } from 'solid-js';

export function ItemName(props: { name: string; class?: string }) {
  return (
    <Show when={props.name.match(/(.*?)\((.*?)\)/)} fallback={<span class={props.class}>{props.name}</span>}>
      {(match) => (
        <span class={props.class}>
          {match()[1]}
          <span class="opacity-50">{match()[2]}</span>
        </span>
      )}
    </Show>
  );
}
