<template>
    <div class="popup" @click="$emit('closeForm')">
        <div @click.stop class="popup__content form_task">
            <p class="form_task__head">Create task</p>
            <MyInput v-model="form.name" placeholder="name" />
            <MyInput v-model="form.text" placeholder="description" />
            <div class="form_task__ation">
              <MySelect v-if="form.edit" v-model="form.status" :options="selectOptions"/>
              <MyBtn v-if="form.edit"  @click="$emit('edit', form)" class="btn__info">Edit</MyBtn>
              <MyBtn v-else @click="$emit('create', form)" class="btn__success">Create</MyBtn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    form: { type: Object, required: true }
  },
  data(){
    return {
        selectOptions: [
          {value: 0, name: "В работе"},
          {value: 1, name: "Завершить"}
        ]
    }
  }
}
</script>

<style scoped>
.popup{
    top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 11;
}
.popup__content{
      margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 15px;
}
.form_task__head{
    text-align: center;
    font-weight: 600;
}
.form_task .btn{
    margin-left: auto;
}
.form_task__ation{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
