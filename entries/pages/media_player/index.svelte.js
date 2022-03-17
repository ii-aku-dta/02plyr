import { c as create_ssr_component, l as createEventDispatcher, v as validate_component, i as add_attribute, f as escape, n as is_promise, o as noop, p as each, k as subscribe, q as set_store_value } from "../../../chunks/index-099ba245.js";
import { createClient } from "@supabase/supabase-js";
import { a as selected_media, b as selected_poster, C as ClickableTile, u as usePlayerStore, G as Grid, R as Row, c as Column, P as Player, V as Video, D as DefaultUi, S as Scrim } from "../../../chunks/media_player_component.svelte_svelte_type_style_lang-d87d1871.js";
import { F as Flex } from "../../../chunks/Flex-b9b37364.js";
import "@vime/core";
const css$1 = {
  code: ".entry.svelte-arruu4{height:100%;min-width:150px}.tile.svelte-arruu4{border-top:0.1px silver solid}#current_media_box.svelte-arruu4{background-color:black;margin:0;max-width:350px;padding:10px;overflow-wrap:break-word}#current_title.svelte-arruu4{font-size:large}#media_list_container.svelte-arruu4{padding:5px;border:solid 0.1px grey;max-height:300px;overflow-y:scroll;max-width:fit-content;min-width:270px}",
  map: null
};
const Featured_media_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const _supabase = createClient("https://uoofyfcnmnhiscvbrvvd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvb2Z5ZmNubW5oaXNjdmJydnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNjg5MTMsImV4cCI6MTk1OTk0NDkxM30.M20YOn3KU6h6uGapLGKGD5ZGYIJM6qs-5Q0iLSOepEc");
  const dispatch = createEventDispatcher();
  function control_message() {
    dispatch("message", { text: "play" });
  }
  async function get_entries() {
    const { data, error } = await _supabase.rpc("get_all_media");
    if (error)
      throw new Error(error.message);
    media_selected(data[0].title, data[0].file, data[0].img, data[0].details, data[0].released);
    return data;
  }
  let title = "";
  let image = "";
  let details = "";
  let released = "";
  let media_click_row;
  async function media_selected(_title, file, poster, _details, _released) {
    title = _title;
    image = poster;
    details = _details;
    released = _released;
    selected_media.update((n) => file);
    selected_poster.update((n) => poster);
    control_message();
  }
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Flex, "Flex").$$render($$result, { justify: "evenly", align: "center" }, {}, {
      default: () => {
        return `<div id="${"current_media_box"}" class="${"svelte-arruu4"}"><img${add_attribute("src", image, 0)} width="${"200px"}" height="${"200px"}"${add_attribute("alt", title, 0)}>
    <h1 id="${"current_title"}" class="${"svelte-arruu4"}">${escape(title)}</h1>
    <p>${escape(details)}</p>
    <p>${escape(released)}</p></div>



  <div id="${"media_list_container"}" class="${"svelte-arruu4"}">${function(__value) {
          if (is_promise(__value)) {
            __value.then(null, noop);
            return `
  <p>Fetching data...</p>
  
  
`;
          }
          return function(data) {
            return `
  ${each(data, (entry, i) => {
              return `${entry.released == true && entry.featured == true ? `<div class="${"tile svelte-arruu4"}">${validate_component(ClickableTile, "ClickableTile").$$render($$result, { type: "submit", this: media_click_row }, {
                this: ($$value) => {
                  media_click_row = $$value;
                  $$settled = false;
                }
              }, {
                default: () => {
                  return `<figure class="${"entry svelte-arruu4"}"><figcaption><h2>${escape(entry.title)}</h2></figcaption>
           
         
            
            <div><p>collection: ${escape(entry.collection)}</p></div>
          
        </figure>
      `;
                }
              })}
    </div>` : ``}`;
            })}
`;
          }(__value);
        }(get_entries())}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "html,body{width:100%;height:100%}body{margin:0}#container.svelte-gz6ts8{width:auto}vm-playback-control{--vm-control-scale:1.7}",
  map: null
};
const Media_player_component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paused, $$unsubscribe_paused;
  let $autoplay, $$unsubscribe_autoplay;
  let $selected_poster, $$unsubscribe_selected_poster;
  let $selected_media, $$unsubscribe_selected_media;
  $$unsubscribe_selected_poster = subscribe(selected_poster, (value) => $selected_poster = value);
  $$unsubscribe_selected_media = subscribe(selected_media, (value) => $selected_media = value);
  let player = Player;
  const { paused } = usePlayerStore();
  $$unsubscribe_paused = subscribe(paused, (value) => $paused = value);
  set_store_value(paused, $paused = false, $paused);
  const { autoplay } = usePlayerStore();
  $$unsubscribe_autoplay = subscribe(autoplay, (value) => $autoplay = value);
  set_store_value(autoplay, $autoplay = true, $autoplay);
  let _player;
  function pause() {
    player.pause();
  }
  function play() {
    _player.play();
  }
  function handleMessage(event) {
    if (event.detail.text = "play")
      player.play();
  }
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  if ($$props.handleMessage === void 0 && $$bindings.handleMessage && handleMessage !== void 0)
    $$bindings.handleMessage(handleMessage);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log($paused);
    }
    $$rendered = `${validate_component(Grid, "Grid").$$render($$result, { condensed: true }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {
              sm: 5,
              md: 4,
              lg: 8,
              style: "outline: 1px solid var(--cds-interactive-04)"
            }, {}, {
              default: () => {
                return `<div id="${"container"}" class="${"svelte-gz6ts8"}">${validate_component(Player, "Player").$$render($$result, {
                  id: "player",
                  autoplay: true,
                  style: "--vm-player-theme: #1873d3",
                  this: player
                }, {
                  this: ($$value) => {
                    player = $$value;
                    $$settled = false;
                  }
                }, {
                  default: () => {
                    return `${validate_component(Video, "Video").$$render($$result, {
                      crossOrigin: "",
                      poster: $selected_poster
                    }, {}, {
                      default: () => {
                        return `<source${add_attribute("data-src", $selected_media, 0)} type="${"video/mp4"}">`;
                      }
                    })}
  
					  ${validate_component(DefaultUi, "DefaultUi").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Scrim, "Scrim").$$render($$result, {}, {}, {})}`;
                      }
                    })}`;
                  }
                })}</div>`;
              }
            })}`;
          }
        })}	
	  ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Featured_media_list, "FeaturedMediaList").$$render($$result, {}, {}, {})}`;
          }
        })}
	 `;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_paused();
  $$unsubscribe_autoplay();
  $$unsubscribe_selected_poster();
  $$unsubscribe_selected_media();
  return $$rendered;
});
const Media_player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Media_player_component, "MediaPlayerComponent").$$render($$result, {}, {}, {})}</div>`;
});
export { Media_player as default };
