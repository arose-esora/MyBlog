<template>
    <div v-if="data">
        <h1>
            {{ data.title }}
        </h1>
        <img
            :src="data.eyecatch?.url"
            :width="data.eyecatch?.width"
            :height="data.eyecatch?.height"
            alt="eye catch"
        />
        <div>
            <div>
                {{ data.category?.name }}
            </div>
            <div>
                {{ data.publishedAt ?? data.createdAt }}
            </div>
        </div>
        <div v-html="data.content"></div>
    </div>
</template>

<script setup lang="ts">
    import { Blog } from "~/types/blog";

    const { params } = useRoute();

    const { data } = await useMicroCMSGetListDetail<Blog>({
        endpoint: "blogs",
        contentId: Array.isArray(params.id) ? params.id[0] : params.id,
    });
</script>

<style scope lang="scss">
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    img {
        width: 40%;
        height: auto;
    }
</style>