<template>
  <div class="post">
    <img class="profilePic" v-bind:src="post.profilePicture" />
    <div class="postBody">
      <div class="postInfo">
        <div class="author">{{ post.author }}</div>
        <div class="timestamp">{{ moment(new Date(post.timestamp * 1000)).fromNow() }}</div>
      </div>
      <div class="content">{{ post.content }}</div>
      <div class="postStats">
        <div class="comments">
          <FontAwesomeIcon
            v-if="post.isCommented"
            :icon="['fas', 'comments']"
            v-on:click="uncomment()"
          />
          <FontAwesomeIcon v-else :icon="['far', 'comments']" v-on:click="comment()" />
          {{ post.comments }}
        </div>
        <div class="resqeaks">
          <FontAwesomeIcon icon="retweet" v-on:click="resqeak()" />
          {{ post.resqeaks }}
        </div>
        <div class="likes">
          <FontAwesomeIcon v-if="post.isLiked" :icon="['fas', 'heart']" v-on:click="unlike()" />
          <FontAwesomeIcon v-else :icon="['far', 'heart']" v-on:click="like()" />
          {{ post.likes }}
        </div>
        <div class="share">
          <FontAwesomeIcon icon="share" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  },
  data: function() {
    return {};
  },
  methods: {
    like: function() {
      this.$emit("like");
    },
    unlike: function() {
      this.$emit("unlike");
    },
    comment: function() {
      this.$emit("comment");
    },
    uncomment: function() {
      this.$emit("uncomment");
    },
    resqeak: function() {
      this.$emit("resqeak");
    }
  }
};
</script>

<style>
.post {
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
  padding-bottom: 10px;

  border-bottom: 1px gray solid;
}

.profilePic {
  height: 50px;
}

.postBody {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
}

.postInfo {
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
}

.author {
  font-weight: bold;
}

.timestamp {
  margin-left: 7px;
}

.content {
  margin-bottom: 7px;
}

.postStats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 50px;
}
</style>
