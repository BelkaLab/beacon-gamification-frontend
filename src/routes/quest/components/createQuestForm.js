import { html } from "lit-html";
import { store } from "../../../createStore";
import { createQuestAction } from "../../../actions/questActions";

export function createQuestForm() {
  let newQuestName = "";
  let newQuestPosition = "";
  let newQuestDescription = "";
  let newQuestEpilogue = "";
  let newQuestInstructions = "";

  return html`
    <form
      action=""
      @submit=${e => {
        e.preventDefault();
        store.dispatch(
          createQuestAction({
            name: newQuestName,
            position: newQuestPosition,
            description: newQuestDescription,
            epilogue: newQuestEpilogue,
            instructions: newQuestInstructions
          })
        );
      }}
    >
      <label>Name</label>
      <input
        @change=${e => {
          newQuestName = e.target.value;
        }}
        type="text"
      />
      <label>Position</label>
      <input
        @change=${e => {
          newQuestPosition = e.target.value;
        }}
        type="text"
      />
      <!-- new -->
      <label>Instructions</label>
      <input
        @change=${e => {
          newQuestInstructions = e.target.value;
        }}
        type="text"
      />
      <label>Description</label>
      <input
        @change=${e => {
          newQuestDescription = e.target.value;
        }}
        type="text"
      />
      <label>Epilogue</label>
      <input
        @change=${e => {
          newQuestEpilogue = e.target.value;
        }}
        type="text"
      />
      <button submit class="full_width submit">
        Create
      </button>
    </form>
  `;
}
