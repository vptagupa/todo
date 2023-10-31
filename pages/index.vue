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
                            1
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
                            1
                        </v-chip>
                    </v-btn>
                    <v-btn
                        size="small"
                        variant="flat"
                        color="red-accent-4"
                        class="rounded-0 mr-1"
                    >
                        <v-icon start icon="mdi-delete"></v-icon>
                        Tasks Done
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
                </v-toolbar>

                <v-card-text>
                    <v-list lines="one">
                        <v-list-item class="todo-item rounded-lg ma-2">
                            <div class="d-flex justify-space-between">
                                <div>
                                    <div class="d-flex align-baseline">
                                        <div class="mr-5">
                                            <v-btn
                                                size="sm"
                                                variant="flat"
                                                color="success"
                                                class="rounded-pill pa-1"
                                            >
                                                <v-icon
                                                    icon="mdi-check"
                                                    size="sm"
                                                ></v-icon>
                                            </v-btn>
                                        </div>
                                        <div>Sample todo 1</div>
                                    </div>
                                </div>

                                <div>
                                    <v-btn
                                        size="sm"
                                        variant="flat"
                                        color="red"
                                        class="pa-1"
                                    >
                                        <v-icon
                                            icon="mdi-delete"
                                            size="sm"
                                        ></v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <v-card-actions>
                    <v-toolbar class="rounded-pill bottom-toolbar" height="50">
                        <v-text-field
                            hide-details
                            single-line
                            class="todo-text rounded-pill"
                        ></v-text-field>
                        <v-btn icon>
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
    title: "My Amazing Site",
    ogTitle: "My Amazing Site",
    description: "This is my amazing site, let me tell you all about it.",
    ogDescription: "This is my amazing site, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
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
