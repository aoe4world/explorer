import { Component } from "solid-js";

export const Icon: Component<{ icon: string; class?: string }> = (props) => <i class={`fas fa-${props.icon} ${props.class}`}></i>;
