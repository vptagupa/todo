<template>
    <v-layout>
        <v-main class="d-flex align-center justify-center">
            <v-card width="500" theme="light">
                <TodoHeader />
                <v-card-text> <TodoTasks /> </v-card-text>
                <v-card-actions class="bg-grey-lighten-3">
                    <TodoFooter />
                </v-card-actions>
            </v-card>
        </v-main>
        <v-footer app name="footer" class="justify-end" color="transparent">
            <div
                class="d-flex align-baseline bg-light-blue-accent-4 rounded-pill"
            >
                <Transition>
                    <span v-if="show" class="px-3 text-sm-body-2"
                        >This application uses the browser's Local Storage to
                        store data.</span
                    >
                </Transition>
                <v-btn
                    v-if="show"
                    @click="show = !show"
                    size="x-small"
                    icon="mdi-close"
                    variant="flat"
                    color="black"
                    hover
                ></v-btn>
            </div>
            <Transition name="footer-marquee">
                <span v-if="marquee" class="footer-marquee"></span>
            </Transition>
            <v-btn v-if="!show" @click="show = !show" size="x-small"
                >Show info</v-btn
            >
        </v-footer>
    </v-layout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Todo App",
    ogTitle: "Todo App",
    description: "Nuxt todo app",
    ogDescription: "Nuxt todo app",
});

const show = ref(true);
const marquee = ref(false);

watch(show, (newValue, oldValue) => {
    if (newValue === false) {
        marquee.value = true;
        setTimeout(() => {
            marquee.value = false;
            console.log(marquee.value);
        }, 300);
    }
});
</script>

<style lang="scss" scoped>
.footer-marquee {
    position: absolute;
    right: 20px;
}
.footer-marquee-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.footer-marquee-enter-from,
.footer-marquee-leave-to {
    transform: translateX(30px);
    opacity: 0;
}

.footer-marquee {
    border-bottom: 2px dashed #ccc;
    width: 30%;
}
</style>
