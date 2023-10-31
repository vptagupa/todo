<template>
    <div>
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
                v-if="tasksDoneCount"
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
    </div>
</template>

<script setup lang="ts">
const toDo = useTodo();
const tasksCount = computed(() => toDo.getTaskCount());
const tasksDoneCount = computed(() => toDo.getTaskDoneCount());
const deleteAllDone = (id: number) => toDo.deleteAllDone();
const deleteAll = (id: number) => toDo.deleteAll();
</script>
