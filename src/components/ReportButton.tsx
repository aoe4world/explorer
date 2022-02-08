import { Outlet, useLocation } from "solid-app-router";
import { Component, createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { tooltipCSSClass } from "../styles";
import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";

export const ReportButton: Component = () => {
  const [showReport, setShowReport] = createSignal(false);
  const url = () => useLocation().pathname;
  let el;
  return (
    <>
      <button
        onClick={() => setShowReport(true)}
        ref={el}
        class="text-gray-300 font-bold text-sm bg-gray-600 rounded px-3 py-2 hover:bg-gray-500 hover:text-gray-50 transition"
      >
        <Icon icon="message-exclamation" class="mr-1" /> Report incorrect info
      </button>
      <Tooltip attachTo={el}>
        <div className={tooltipCSSClass}>
          Something missing or incorrect on this page? It can happen! We manage and collect all data manually, you can help us by reporting if something is
          incorrect.
        </div>
      </Tooltip>
      <Show when={showReport()}>
        <Portal>
          <div class="w-screen h-screen bg-black/80 fixed top-0 left-0 z-50 h-screen w-screen">
            <div class="max-w-2xl mx-auto h-full flex flex-col">
              <div>
                <button
                  class="bg-white text-black p-3 rounded m-5 ml-8 flex gap-3 items-center font-bold hover:opacity-70"
                  onClick={() => setShowReport(false)}
                >
                  <Icon icon="angle-left" /> Back
                </button>
              </div>

              <div class="flex-auto py-4 overflow-auto">
                <iframe
                  src={`https://docs.google.com/forms/d/e/1FAIpQLSfwjrXXcTDHamsYCyeV9YpkkfmXe7sVVxzLkui1HDJH_fpQTQ/viewform?embedded=true&entry.222412237=${url()}`}
                  class="w-full h-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
};
