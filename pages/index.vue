<template>
    <v-layout class="rounded rounded-md">
        <v-main
            class="d-flex align-center justify-center"
            style="min-height: 300px"
        >
            <v-card width="500">
                <v-card-item>
                    <v-card-title class="d-flex justify-end">
                        <v-btn
                            size="small"
                            variant="flat"
                            color="indigo-lighten-2"
                            class="rounded-xl"
                        >
                            Tasks
                            <v-chip
                                color="white"
                                variant="flat"
                                size="x-small"
                                class="ml-2"
                            >
                                1
                            </v-chip>
                        </v-btn>
                        <v-btn
                            size="small"
                            variant="flat"
                            color="indigo-lighten-2"
                            class="rounded-xl"
                        >
                            Tasks Done
                            <v-chip
                                color="white"
                                variant="flat"
                                size="x-small"
                                class="ma-1"
                            >
                                1
                            </v-chip>
                        </v-btn>
                        <v-btn
                            size="small"
                            variant="flat"
                            color="red-accent-4"
                            class="rounded-0"
                        >
                            <v-icon start icon="mdi-delete"></v-icon>
                            Tasks
                        </v-btn>
                    </v-card-title>
                </v-card-item>

                <v-card-actions>
                    <v-btn variant="flat" color="purple-accent-2">Button</v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "My Amazing Site",
    ogTitle: "My Amazing Site",
    description: "This is my amazing site, let me tell you all about it.",
    ogDescription: "This is my amazing site, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>
