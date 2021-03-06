import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const getLocalStorage = () => {
  let getList = localStorage.getItem("list");
  if (getList) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const initialState = {
  name: "",
  list: getLocalStorage(),
  isEditing: false,
  editId: null,
  alertShow: { show: false, msg: "", type: "" },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addTodo: (state) => {
      if (!state.name) {
        state.name = "";
      } else if (state.isEditing && state.name) {
        state.list = state.list.map((item) =>
          state.editId === item.id
            ? { id: state.editId, value: state.name }
            : item
        );

        state.editId = null;
        state.name = "";
        state.isEditing = false;
      } else {
        const newTodo = { id: nanoid(), value: state.name };
        state.list = [...state.list, newTodo];
        state.name = "";
      }
    },
    allClear: (state) => {
      state.list = [];
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.isEditing = true;
      state.name = action.payload.value;
      state.editId = action.payload.id;
    },
  },
});

export const { setName, addTodo, allClear, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
