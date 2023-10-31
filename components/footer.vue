<template>
    <div>
        <div class="bg-light-blue-accent-4 rounded-pill text-sm-body-2">
            <span
                v-if="show"
                class="px-3 text-sm-body-2 marquee-message"
            ></span>

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
        <v-btn
            v-if="!show"
            @click="show = !show"
            size="x-small"
            color="light-blue-accent-4"
            >Show info</v-btn
        >
    </div>
</template>

<script setup lang="ts">
const show = ref(false);
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

.footer-marquee:before {
    content: "This application uses the browser's Local Storage to store data.";
    font-size: 0.15rem;
    letter-spacing: 3px;
}

.footer-marquee {
    width: 22%;
}

.marquee-message:before {
    content: "This application uses the browser's Local Storage to store data.";
}
</style>
