import { Component, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { SUPPORTED_LOCALES } from "../config";
import { currentLocale, setLocale } from "../global";
import { Icon } from "./Icon";

export const LanguageSelector: Component = () => {
  const [, setSearchParams] = useSearchParams<{ lang?: string }>();
  const [isOpen, setIsOpen] = createSignal(false);
  const [filter, setFilter] = createSignal("");
  let containerRef: HTMLDivElement | undefined;
  let searchInputRef: HTMLInputElement | undefined;

  const selectLocale = async (code: string) => {
    await setLocale(code);
    setSearchParams({ lang: code === "en" ? "" : code }, { replace: true, scroll: false });
    setIsOpen(false);
    setFilter("");
  };

  const currentConfig = createMemo(() => {
    const loc = currentLocale();
    return SUPPORTED_LOCALES.find((l) => l.code === loc) ?? {
      code: loc,
      short: loc.slice(0, 2).toUpperCase(),
      name: loc,
      label: loc,
    };
  });

  const displayCode = createMemo(() => currentConfig().short);

  const filteredLocales = createMemo(() => {
    const q = filter().trim().toLowerCase();
    if (!q) return SUPPORTED_LOCALES;
    return SUPPORTED_LOCALES.filter(
      (l) => l.name.toLowerCase().includes(q) || l.label.toLowerCase().includes(q) || l.code.toLowerCase().includes(q)
    );
  });

  const handleClickOutside = (e: MouseEvent) => {
    if (containerRef && !containerRef.contains(e.target as Node)) {
      setIsOpen(false);
      setFilter("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen()) {
      setIsOpen(false);
      setFilter("");
    }
  };

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
  });

  const toggleDropdown = () => {
    const next = !isOpen();
    setIsOpen(next);
    if (next) {
      setTimeout(() => searchInputRef?.focus(), 50);
    } else {
      setFilter("");
    }
  };

  return (
    <div class="relative inline-block" ref={containerRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        class="w-10 h-7 md:w-12 bg-gray-900 text-white/70 hover:text-white md:hover:bg-white md:hover:text-black rounded-md transition font-bold text-xs flex items-center justify-center cursor-pointer select-none"
        classList={{
          "bg-gray-800 text-white ring-1 ring-white/50": isOpen(),
        }}
        aria-label="Select language"
        aria-expanded={isOpen()}
        aria-haspopup="listbox"
        title={`Language: ${currentConfig().label}`}
      >
        <span class="uppercase tracking-wide">{displayCode()}</span>
      </button>

      <Show when={isOpen()}>
        <div class="absolute top-full left-0 mt-1.5 z-50 bg-gray-900 border border-gray-700 rounded-md shadow-2xl py-1 w-60 max-h-80 flex flex-col text-sm">
          <div class="p-2 border-b border-gray-800">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search language..."
              value={filter()}
              onInput={(e) => setFilter(e.currentTarget.value)}
              class="w-full px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="overflow-y-auto flex-1 max-h-64 py-1" role="listbox">
            <For each={filteredLocales()}>
              {(loc) => (
                <button
                  type="button"
                  onClick={() => selectLocale(loc.code)}
                  class="w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-gray-800 transition cursor-pointer"
                  classList={{
                    "bg-gray-800 text-blue-400 font-bold": currentLocale() === loc.code,
                    "text-white/80": currentLocale() !== loc.code,
                  }}
                  role="option"
                  aria-selected={currentLocale() === loc.code}
                >
                  <span class="truncate">{loc.label}</span>
                  <div class="flex items-center gap-1.5 ml-2 flex-none">
                    <span class="text-[10px] uppercase text-white/40 font-mono">{loc.code}</span>
                    <Show when={currentLocale() === loc.code}>
                      <Icon icon="check" class="text-blue-400 text-xs" />
                    </Show>
                  </div>
                </button>
              )}
            </For>
            <Show when={filteredLocales().length === 0}>
              <div class="px-3 py-2 text-xs text-white/40 text-center">No languages found</div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
};
