<template>
  <section class="page__content">
    <div class="row">
      <div class="page__head">
        <h1>tasks page</h1>
        <MyBtn @click="form.show = true" class="btn__success">add task</MyBtn>
        <MySelect v-model="selectedSort" :options="sortOptions" />
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

export default {
  components: {
    TaskForm,
    TaskList
  },
  data() {
    return {
      tasks: [
        // {id: 1, name: "task1", text: "lorem ipsum 111", status: 1},
        // {id: 2, name: "task2", text: "lorem ipsum 222", status: 0},
      ],
      form: {
        id: "",
        name: "",
        text: "",
        status: 0,
        show: false,
        edit: false
      },
      selectedSort: "2",
      sortOptions: [
        { value: 0, name: "В работе" },
        { value: 1, name: "Завершенные" },
        { value: 2, name: "Все" }
      ]
    }
  },
  methods: {
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
      localStorage.tasks = JSON.stringify(this.tasks)
      this.clearForm()
    },
    removeTask(task) {
      console.log("remove", task.id)
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
      localStorage.tasks = JSON.stringify(this.tasks)
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
      this.clearForm()
      localStorage.tasks = JSON.stringify(this.tasks)
      console.log(JSON.parse(localStorage.tasks));
    }
  },
  mounted(){
    this.tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
  },
  computed: {
    sortedTasks() {
        if(this.selectedSort == 0) return this.tasks.filter(t => t.status == 0)
        if(this.selectedSort == 1) return this.tasks.filter(t => t.status == 1)
        if(this.selectedSort == 2) return this.tasks
        return this.tasks
    },
  }
}
</script>

<style></style>
