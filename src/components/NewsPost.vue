<template>
  <div class="newsPost">
    <h3>{{ newsPost.title }}</h3>
    <div class="newsSection0">
      <img class="thumbnail" :src="newsPost.thumbnail" height="250px" />
      <div class="newsSection1">
        <div class="date">{{ newsPost.date }}</div>
        <div class="content">{{ newsPost.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsPost",
  props: {
    newsPost: Object,
  },
};
</script>

<style>
.newsPost {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px gray solid;
}

.newsSection0 {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.newsSection1 {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 10px;
}

.date {
  margin-bottom: 10px;
}
</style>
