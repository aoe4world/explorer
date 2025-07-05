import { Component, JSXElement, Show } from "solid-js";
import { Icon } from "../Icon";

interface ToggleSwitchProps {
  id: string;
  checked: boolean | null;
  onChange: (checked: boolean) => void;
  label?: string;
  tooltip?: string;
  class?: string;
  size?: "normal" | "small";
}

export const ToggleSwitch: Component<ToggleSwitchProps> = (props) => {
  return (
    <label for={props.id} class={`relative inline-flex items-center cursor-pointer ${props.class ?? ''}`}>
      <input
        id={props.id}
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange(e.currentTarget.checked)}
        class="sr-only peer"
      />
      <div
        class={`relative rounded-full peer after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all after:top-0.5
            ${props.size == 'small' ? 'w-7 h-4 after:h-3 after:w-3' : 'w-11 h-6 after:h-5 after:w-5'}
            ${props.checked === null
              ? "bg-yellow-500 after:left-1/2 after:-translate-x-1/2"
              : `bg-gray-400 peer-checked:bg-purple-600 after:left-[2px] ${props.size == 'small' ? 'peer-checked:after:translate-x-3' : 'peer-checked:after:translate-x-full'}`
            }`
          }>
      </div>
      <Show when={props.label}>
        <span class="ml-3 text-sm font-medium text-gray-300 relative group">
          {props.label}
          {props.tooltip && (
            <>
              <Icon icon="info-circle" class="ml-1 text-gray-400" />
              <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max p-2 bg-gray-800 text-white text-xs rounded-md hidden group-hover:block z-10">
                {props.tooltip}
              </span>
            </>
          )}
        </span>
      </Show>
    </label>
  );
};
