<template>
  <div id="todo">
    <h2>ToDoリスト</h2>
    <div class="radio">
      <input type="radio" v-model="picked" value="all" />すべて
      <input type="radio" v-model="picked" value="doing" />作業中
      <input type="radio" v-model="picked" value="done" />完了
    </div>
    <h3>新規タスクの追加</h3>
    <table>
      <thead>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </thead>
      <tbody v-for="(todo, index) in getTodoList" v-bind:key="index">
        <tr>
          <td>{{ index }}</td>
          <td>{{ todo }}</td>
          <td>
            <button>作業中</button>
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <input type="text" v-model.lazy="task" />
    <button @click="addTodo">追加</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data: function() {
    return {
      task: "",
      picked: "all"
    };
  },
  computed: {
    ...mapGetters(["getCount", "getTodoList"])
  },
  methods: {
    addTodo() {
      const todo = this.task;
      this.task = "";
      this.$store.dispatch("addTodo", todo);
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
  }
</style>