<template>
    <p>ユーザID : {{  $route.params.id }}</p>
</template>

<script setup>
    const router = useRoute();
    console.log(router.params.id);
    useHead({
        title: 'sub test1',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'My custom description',
            },
        ],
    });
</script>