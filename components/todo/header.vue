<template>
    <div>
        <v-toolbar density="compact">
            <v-spacer></v-spacer>
            <v-btn
                size="x-small"
                variant="flat"
                color="indigo-lighten-2"
                class="rounded-xl mr-1 text-none pr-0"
            >
                Tasks
                <template v-slot:append>
                    <v-badge
                        color="white"
                        :content="tasksCount"
                        inline
                    ></v-badge>
                </template>
            </v-btn>
            <v-btn
                size="x-small"
                variant="flat"
                color="indigo-lighten-2"
                class="rounded-xl mr-1 text-none pr-0"
            >
                Tasks Done
                <template v-slot:append>
                    <v-badge
                        color="white"
                        :content="tasksDoneCount"
                        inline
                    ></v-badge>
                </template>
            </v-btn>
            <v-btn
                v-if="tasksDoneCount"
                size="x-small"
                variant="flat"
                color="red-accent-4"
                class="rounded-0 mr-1"
                @click="deleteAllDone"
            >
                <v-icon start icon="mdi-delete" size="large"></v-icon>
                Tasks Done
            </v-btn>
            <v-btn
                size="x-small"
                variant="flat"
                color="red-accent-4"
                class="rounded-0"
                @click="deleteAll"
            >
                <v-icon start icon="mdi-delete" size="large"></v-icon>
                Tasks
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script setup lang="ts">
const toDo = useTodo();
const tasksCount = computed(() => toDo.getTaskCount());
const tasksDoneCount = computed(() => toDo.getTaskDoneCount());
const deleteAllDone = (id: number) => toDo.deleteAllDone();
const deleteAll = (id: number) => toDo.deleteAll();
</script>
