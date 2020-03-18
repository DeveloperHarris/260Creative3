<template>
  <div class="newsFeed">
    <NewsPost v-for="post in news.slice().reverse()" :key="post.id" :newsPost="post" />
  </div>
</template>

<script>
import NewsPost from "./NewsPost.vue";

export default {
  name: "NewsFeed",
  props: {
    posts: Array,
    news: Array
  },
  components: {
    NewsPost
  }
};
</script>

<style></style>
