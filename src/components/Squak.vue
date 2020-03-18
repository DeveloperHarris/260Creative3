<template>
  <div class="squak">
    <Post
      v-for="post in posts.slice().reverse()"
      :key="post.id"
      :post="post"
      v-on:like="like(post.id)"
      v-on:unlike="unlike(post.id)"
      v-on:comment="comment(post.id)"
      v-on:uncomment="uncomment(post.id)"
      v-on:resqeak="resqeak(post.id)"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Squak",
  components: {
    Post
  },
  props: {
    posts: Array,
    news: Array
  },
  data: function() {
    return {};
  },
  methods: {
    like: function(id) {
      this.$emit("like", id);
    },
    unlike: function(id) {
      this.$emit("unlike", id);
    },
    comment: function(id) {
      this.$emit("comment", id);
    },
    uncomment: function(id) {
      this.$emit("uncomment", id);
    },
    resqeak: function(id) {
      this.$emit("resqeak", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
