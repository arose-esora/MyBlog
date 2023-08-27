<template>
  <div>
    <ul>
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`">
          <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          alt=""
          />
          <div>
            <div>
              {{ blog.category?.name }}
            </div>
            <div>
              {{ blog.title }}
            </div>
            <div>
              {{ blog.publishedAt ?? blog.createdAt }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
    import { Blog } from "~/types/blog";

    const { data, status } = await useMicroCMSGetList<Blog>({
        endpoint: "blogs",
    });
    console.log(JSON.parse(JSON.stringify(data)));
    console.log(JSON.parse(JSON.stringify(status)));
</script>