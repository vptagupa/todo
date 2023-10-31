<template>
    <v-toolbar class="rounded-pill bottom-toolbar" height="50">
        <v-text-field
            class="todo-text rounded-pill px-5 pb-2"
            density="compact"
            label="New Task"
            flat
            variant="plain"
            single-line
            hide-details
            v-model="data.task"
            @keyup.enter="addTodo"
        ></v-text-field>
        <v-btn
            icon
            @click="addTodo"
            size="small"
            class="bg-light-blue-accent-4"
        >
            <v-icon size="x-large">mdi-plus</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script setup lang="ts">
const data = ref({ task: "" });
const toDo = useTodo();

const addTodo = () => {
    if (data.value.task) {
        toDo.create(data.value.task);
        data.value.task = "";
    }
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/settings";

.bottom-toolbar {
    background-color: settings.$toolbar-color !important;
    border-color: settings.$toolbar-border-color !important;
    border-width: settings.$toolbar-border-width !important;
}
</style>
