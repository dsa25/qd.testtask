<template>
  <div v-if="tasks.length">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @seltask="$emit('seltask', task)"
      @remove="$emit('remove', task)"
    />
  </div>
  <div v-else style="text-align: center">not tasks ...</div>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue"

export default {
  name: "TaskList",
  components: { TaskItem },
  props: {
    tasks: { type: Array, required: true }
  }
}
</script>
