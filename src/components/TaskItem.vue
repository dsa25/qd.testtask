<template>
  <div class="task" :data-id="'id: ' + task.id" :class="{ done: task.status == 1 }">
    <div>
      <h5 class="task__head">{{ task.name }}</h5>
      <p class="task__text">{{ task.text }}</p>
    </div>
    
    <div class="task__actions">
      <span class="task__status">
        <span v-if="task.status == 1" >&#10003; Выполнена</span>
        <span v-else >&#8766; В работе</span>
      </span>
      <MyBtn class="btn__info" @click="$emit('seltask', task)">Edit</MyBtn>
      <MyBtn class="btn__danger" @click="$emit('remove', task)">X</MyBtn>
    </div>
  </div>
</template>

<script>
export default {
    name: "TaskItem",
    props: {
        task: { type: Object, required: true }
    },
}
</script>

<style scoped>
.task{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  border: 2px solid var(--run);
  color: #777;

}
.task::before{
  position: absolute;
  top: 1px;
  left: 3px;
  content: attr(data-id);
  display: block;
  font-size: 9px;
  z-index: 0;
}
.task.done{
  border-color: var(--done);
}
.task__head{
  margin: 0 ;
  padding: 5px 15px 0 0;
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
}
.task__text{
  padding: 0 20px 0 10px;
  margin: 0;
  font-size: 14px;
}
.task__actions{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task__actions .btn__info{
  margin: 0 15px;
}
.task__status{
  color: var(--run);
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
}
.done .task__status{
  color: var(--done)
}
</style>
