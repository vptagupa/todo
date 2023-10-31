<template>
    <v-layout>
        <v-main class="d-flex align-center justify-center">
            <v-card width="500" theme="light">
                <TodoHeader />
                <v-card-text> <TodoTasks /> </v-card-text>
                <v-card-actions>
                    <TodoFooter />
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
</script>
