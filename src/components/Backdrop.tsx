import { useLocation } from "@solidjs/router";
import { createMemo, createContext, useContext, ParentComponent, Show } from "solid-js";
import { parseCurrentLocation } from "../global";
import { BACKDROPS } from "../../assets";
import { CivSlug } from "../config";

const overviewRightStyle = {
  "--backdrop-mobile": `url(${BACKDROPS["overview-right-desktop"]})`,
  "--backdrop-desktop": `url(${BACKDROPS["overview-right-desktop"]})`,
  "--backdrop-opacity": "0.5",
};

const overviewLeftStyle = {
  "--backdrop-mobile": `url(${BACKDROPS["overview-left-desktop"]})`,
  "--backdrop-desktop": `url(${BACKDROPS["overview-left-desktop"]})`,
};

const BackdropContext = createContext<{ civilization: () => CivSlug | undefined }>({ civilization: () => undefined });

const LEFT_ALIGNED_CIVS: CivSlug[] = ['goldenhorde', 'tughlaq', 'macedonian', 'sengoku'];

function isLeftAlignedCiv(civ?: CivSlug) {
  return civ && LEFT_ALIGNED_CIVS.includes(civ);
}

export const BackdropWrapper: ParentComponent = (props) => {
  const location = useLocation();
  const current = createMemo(() => parseCurrentLocation(location.pathname));
  const civilization = createMemo(() => current().civ);

  const backdropStyle = createMemo(() => {
    const civSlug = civilization();
    if (!civSlug) return undefined;
    const desktop = BACKDROPS[`${civSlug}-desktop`];
    const mobile = BACKDROPS[`${civSlug}-mobile`] || desktop;
    return {
      "--backdrop-mobile": `url(${mobile})`,
      "--backdrop-desktop": `url(${desktop})`
    };
  });

  return (
    <BackdropContext.Provider value={{ civilization }}>
      <div
        style={backdropStyle()}
        class="contents"
      >
        {props.children}
        <Backdrop />
      </div>
    </BackdropContext.Provider>
  );
};

export const Backdrop = (props: {cover?: boolean; }) => {
  const context = useContext(BackdropContext);

  const position = () => props.cover ? "absolute" : "fixed";
  return (
    <Show
      when={context.civilization()}
      fallback={
        <>
          <div class={`${position()} bg-backdrop bg-contain bg-right-top`} style={overviewRightStyle} />
          <div class={`${position()} bg-backdrop bg-contain bg-left-bottom`} style={overviewLeftStyle} />
        </>
      }
    >
      <div class={`${position()} bg-backdrop bg-cover ${isLeftAlignedCiv(context.civilization()) ?  'bg-left-top' : 'bg-right-top'}`} />
    </Show>
  );
};

export const BackdropCover = () => <Backdrop cover={true} />;
