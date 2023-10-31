<template>
    <div>
        <div class="task-list">
            <v-list>
                <TransitionGroup name="list" tag="v-list-item">
                    <v-list-item
                        class="todo-item rounded-lg ma-2"
                        :class="{ 'task-done': task.status.done }"
                        v-for="(task, index) in tasks"
                        :key="task.id"
                    >
                        <div class="d-flex justify-space-between">
                            <div>
                                <div class="d-flex align-baseline">
                                    <div class="mr-5">
                                        <v-btn
                                            size="sm"
                                            variant="flat"
                                            :class="{
                                                'bg-success': !task.status.done,
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
                                    class="pa-1 list-item-delete"
                                    @click="deleteTodo(task.id)"
                                >
                                    <v-icon
                                        color="red"
                                        icon="mdi-delete"
                                        size="x-large"
                                    ></v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-list-item>
                </TransitionGroup>
                <v-list-item
                    v-if="tasks.length <= 0"
                    class="todo-item rounded-lg ma-2"
                >
                    <p>No tasks.</p>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>
<script setup lang="ts">
const toDo = useTodo();
const tasks = computed(() => toDo.getTasks());

const deleteTodo = (id: number) => toDo.delete(id);
const updateStatus = (id: number) => toDo.updateStatus(id);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/settings";

.v-list-item {
    border-width: settings.$list-item-border-width !important;
    border-color: settings.$list-item-border-color !important;
}

.task-list {
    min-height: 100px;
    max-height: 300px;
    overflow: auto;
}
.task-done {
    text-decoration-line: line-through;
    text-decoration-color: #000;
    transition: text-decoration-line 2s linear;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s linear;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}

.list-enter-to {
    opacity: 1;
}

.list-item-delete {
    opacity: 0;
}

.list-item-delete:hover {
    opacity: 1;
}
</style>
