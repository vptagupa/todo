<template>
    <v-layout>
        <v-main class="d-flex align-center justify-center">
            <v-card width="500" theme="light">
                <v-toolbar density="compact">
                    <v-spacer></v-spacer>
                    <v-btn
                        size="small"
                        variant="flat"
                        color="indigo-lighten-2"
                        class="rounded-xl mr-1"
                    >
                        Tasks
                        <v-chip
                            color="white"
                            variant="flat"
                            size="x-small"
                            class="ml-2"
                        >
                            {{ tasksCount }}
                        </v-chip>
                    </v-btn>
                    <v-btn
                        size="small"
                        variant="flat"
                        color="indigo-lighten-2"
                        class="rounded-xl mr-1"
                    >
                        Tasks Done
                        <v-chip
                            color="white"
                            variant="flat"
                            size="x-small"
                            class="ma-1"
                        >
                            {{ tasksDoneCount }}
                        </v-chip>
                    </v-btn>
                    <v-btn
                        size="small"
                        variant="flat"
                        color="red-accent-4"
                        class="rounded-0 mr-1"
                        @click="deleteAllDone"
                    >
                        <v-icon start icon="mdi-delete"></v-icon>
                        Tasks Done
                    </v-btn>
                    <v-btn
                        size="small"
                        variant="flat"
                        color="red-accent-4"
                        class="rounded-0"
                        @click="deleteAll"
                    >
                        <v-icon start icon="mdi-delete"></v-icon>
                        Tasks
                    </v-btn>
                </v-toolbar>

                <v-card-text>
                    <v-list>
                        <v-list-item
                            class="todo-item rounded-lg ma-2"
                            v-for="(task, index) in tasks"
                        >
                            <div class="d-flex justify-space-between">
                                <div>
                                    <div class="d-flex align-baseline">
                                        <div class="mr-5">
                                            <v-btn
                                                size="sm"
                                                variant="flat"
                                                :class="{
                                                    'bg-success':
                                                        !task.status.done,
                                                    'bg-grey-lighten-2':
                                                        task.status.done,
                                                }"
                                                class="rounded-pill pa-1"
                                                @click="updateStatus(task.id)"
                                            >
                                                <v-icon
                                                    icon="mdi-check"
                                                    size="sm"
                                                ></v-icon>
                                            </v-btn>
                                        </div>
                                        <div>{{ task.name }}</div>
                                    </div>
                                </div>

                                <div>
                                    <v-btn
                                        size="sm"
                                        variant="flat"
                                        color="red"
                                        class="pa-1"
                                        @click="deleteTodo(task.id)"
                                    >
                                        <v-icon
                                            icon="mdi-delete"
                                            size="sm"
                                        ></v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </v-list-item>
                        <v-list-item
                            v-if="tasks.length <= 0"
                            class="todo-item rounded-lg ma-2"
                        >
                            <p>No tasks.</p>
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <v-card-actions>
                    <v-toolbar class="rounded-pill bottom-toolbar" height="50">
                        <v-text-field
                            hide-details
                            single-line
                            class="todo-text rounded-pill"
                            v-model="data.task"
                            @keyup.enter="addTodo"
                        ></v-text-field>
                        <v-btn icon @click="addTodo">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card-actions>
            </v-card>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Todo App",
    ogTitle: "Todo App",
    description: "Nuxt todo app",
    ogDescription: "Nuxt todo app",
});

const data = ref({ task: "" });
const toDo = useTodo();
const tasks = computed(() => toDo.getTasks());
const tasksCount = computed(() => toDo.getTaskCount());
const tasksDoneCount = computed(() => toDo.getTaskDoneCount());
const addTodo = () => {
    if (data.value.task) {
        toDo.create(data.value.task);
        data.value.task = "";
    }
};
const deleteTodo = (id: number) => toDo.delete(id);
const updateStatus = (id: number) => toDo.updateStatus(id);
const deleteAllDone = (id: number) => toDo.deleteAllDone();
const deleteAll = (id: number) => toDo.deleteAll();
</script>

<style lang="scss" scoped>
@use "~/styles/settings";
.v-list-item {
    border-width: settings.$list-item-border-width !important;
    border-color: settings.$list-item-border-color !important;
}

.bottom-toolbar {
    background-color: settings.$toolbar-color !important;
    border-color: settings.$toolbar-border-color !important;
    border-width: settings.$toolbar-border-width !important;
}

.v-input {
    background: transparent !important;
}
.v-field__outline {
    border: 1px solid red;
}
</style>
