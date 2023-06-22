export const taskModule = {
  state: () => {
    return {
      tasks: [
        // { id: 1, name: "task1", text: "lorem ipsum 111", status: 1 },
        // { id: 2, name: "task2", text: "lorem ipsum 222", status: 0 }
      ],
      selectedSort: "2",
      sortOptions: [
        { value: 0, name: "В работе" },
        { value: 1, name: "Завершенные" },
        { value: 2, name: "Все" }
      ]
    }
  },
  getters: {
    sortedTasks(state) {
      if (state.selectedSort == 0)
        return state.tasks.filter((t) => t.status == 0)
      if (state.selectedSort == 1)
        return state.tasks.filter((t) => t.status == 1)
      if (state.selectedSort == 2) return state.tasks
      return state.tasks
    }
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    }
    // setForm(state, form) {
    //   state.form = form
    // },
  },
  namespaced: true
}
