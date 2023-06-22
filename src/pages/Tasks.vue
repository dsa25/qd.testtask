<template>
  <section class="page__content">
    <div class="row">
      <div class="page__head">
        <h1>tasks page</h1>
        <MyBtn @click="form.show = true" class="btn__success">add task</MyBtn>
        <!-- <MySelect v-model="selectedSort" :options="sortOptions" /> -->
        <MySelect :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
      </div>
      <TaskForm
        v-if="form.show"
        :form="form"
        @create="createTask"
        @edit="editTask"
        @closeForm="clearForm"
      />
      <TaskList :tasks="sortedTasks" @remove="removeTask" @seltask="selectTask" />
    </div>
  </section>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue"
import TaskList from "@/components/TaskList.vue"

import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  components: {
    TaskForm,
    TaskList
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        text: "",
        status: 0,
        show: false,
        edit: false
      },
    }
  },
  methods: {
    ...mapMutations({
      setTasks: "task/setTask",
      setSelectedSort: "task/setSelectedSort",
    }),
    validTask(task) {
      if (task.name.trim().length === 0 || task.text.trim().length === 0)
        return false
      else return true
    },
    clearForm() {
      this.form = {
        id: "",
        name: "",
        text: "",
        status: 0,
        show: false,
        edit: false
      }
    },
    createTask(task) {
      if (this.validTask(task) === false)
        return alert("Все поля должны быть заполнены!")
      this.tasks.push({
        id: Date.now(),
        name: task.name,
        text: task.text,
        status: task.status
      })
      this.$store.commit('task/setTasks', this.tasks)
      localStorage.tasks = JSON.stringify(this.tasks)
      this.clearForm()
    },
    removeTask(task) {
      console.log("remove", task.id)
      let newTasks = this.tasks.filter((t) => t.id !== task.id)
      this.$store.commit('task/setTasks', newTasks)
      localStorage.tasks = JSON.stringify(newTasks)
    },
    selectTask(task) {
      console.log("select...", task.id)
      this.form.id = task.id
      this.form.name = task.name
      this.form.text = task.text
      this.form.status = task.status
      this.form.edit = true
      this.form.show = true
    },
    editTask() {
      console.log("eidt...")
      this.tasks.forEach((item) => {
        if (item.id === this.form.id) {
          item.name = this.form.name
          item.text = this.form.text
          item.status = this.form.status
        }
      })
      this.$store.commit('task/setTasks', this.tasks)
      this.clearForm()
      localStorage.tasks = JSON.stringify(this.tasks)
    },
    getTasks(){
      let LSTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      this.$store.commit('task/setTasks', LSTasks)
    }
  },
  mounted(){
     this.getTasks()
  },
  computed: {
    ...mapState({
      tasks: state => state.task.tasks,
      selectedSort: state => state.task.selectedSort,
      sortOptions: state => state.task.sortOptions,
    }),
    ...mapGetters({
      sortedTasks: "task/sortedTasks",
    }),
  }
}
</script>