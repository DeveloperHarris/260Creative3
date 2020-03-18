<template>
  <div class="adminPage">
    <div class="addButton">
      <div class="buttonText">Add a post:</div>
      <button @click="addPost">+</button>
    </div>

    <label for="posts">Edit a post (Select ID):</label>

    <select id="postSelect" v-model="postSelected" @change="update">
      <option v-for="post in posts" :key="post.id">{{post.id}}</option>
    </select>

    <h3>Preview Post #{{postSelected}}:</h3>
    <Post :post="posts[postSelected]" />

    <div class="inputColumn">
      <div class="inputRow">
        <div class="label">ID:</div>
        <input v-model="postId" disabled />
      </div>
      <div class="inputRow">
        <div class="label">Author:</div>
        <input v-model="postAuthor" />
      </div>
      <div class="inputRow">
        <div class="label">Timestamp:</div>
        <input v-model="postTimestamp" />
      </div>
      <div class="inputRow">
        <div class="label">ProfilePicture:</div>
        <input v-model="postProfilePicture" />
      </div>
      <div class="inputRow">
        <div class="label">Content:</div>
        <textarea v-model="postContent" />
      </div>
      <div class="inputRow">
        <div class="label">Comments:</div>
        <input v-model="postComments" />
      </div>
      <div class="inputRow">
        <div class="label">Resqeaks:</div>
        <input v-model="postResqeaks" />
      </div>
      <div class="inputRow">
        <div class="label">Likes:</div>
        <input v-model="postLikes" />
      </div>
    </div>

    <button @:click="savePost">Save</button>

    <div class="divide" />

    <div class="addButton">
      <div class="buttonText">Add a post:</div>
      <button @click="addNewsPost">+</button>
    </div>

    <label for="news">Edit a news post (Select ID):</label>

    <select id="newsSelect" v-model="newsSelected" @change="update">
      <option v-for="newsPost in news" :key="newsPost.id">{{newsPost.id}}</option>
    </select>

    <h3>Preview News Post #{{newsSelected}}:</h3>
    <NewsPost :newsPost="news[newsSelected]" />

    <div class="inputColumn">
      <div class="inputRow">
        <div class="label">ID:</div>
        <input v-model="newsId" disabled />
      </div>
      <div class="inputRow">
        <div class="label">Title:</div>
        <input v-model="newsTitle" />
      </div>
      <div class="inputRow">
        <div class="label">Thumbnail:</div>
        <input v-model="newsThumbnail" />
      </div>
      <div class="inputRow">
        <div class="label">Date:</div>
        <input v-model="newsDate" />
      </div>
      <div class="inputRow">
        <div class="label">Content:</div>
        <textarea v-model="newsContent" />
      </div>
    </div>

    <button @click="saveNewsPost">Save</button>
  </div>
</template>

<script>
import Post from "./Post.vue";
import NewsPost from "./NewsPost";

export default {
  name: "Admin",
  components: {
    Post,
    NewsPost
  },
  props: {
    posts: Array,
    news: Array,
    selectedPostValue: Number,
    selectedNewsPostValue: Number
  },
  watch: {
    selectedNewsPostValue: function() {
      this.newsSelected = this.selectedNewsPostValue;
      this.update();
    },
    selectedPostValue: function() {
      this.postSelected = this.selectedPostValue;
      this.update();
    }
  },
  data: function() {
    return {
      postSelected: this.selectedPostValue,
      newsSelected: this.selectedNewsPostValue,
      postId: "",
      postAuthor: "",
      postTimestamp: "",
      postProfilePicture: "",
      postContent: "",
      postComments: "",
      postResqeaks: "",
      postLikes: "",
      newsId: "",
      newsTitle: "",
      newsThumbnail: "",
      newsDate: "",
      newsContent: ""
    };
  },
  computed: {
    selectedPost: function() {
      if (this.postSelected === undefined) {
        return this.posts[0];
      }
      return this.posts[this.postSelected];
    },
    selectedNewsPost: function() {
      if (this.newsSelected === undefined) {
        return this.news[0];
      }
      return this.news[this.newsSelected];
    }
  },
  methods: {
    update: function() {
      this.postId = this.selectedPost.id;
      this.postAuthor = this.selectedPost.author;
      this.postTimestamp = this.selectedPost.timestamp;
      this.postProfilePicture = this.selectedPost.profilePicture;
      this.postContent = this.selectedPost.content;
      this.postComments = this.selectedPost.comments;
      this.postResqeaks = this.selectedPost.resqeaks;
      this.postLikes = this.selectedPost.likes;
      this.newsId = this.selectedNewsPost.id;
      this.newsTitle = this.selectedNewsPost.title;
      this.newsThumbnail = this.selectedNewsPost.thumbnail;
      this.newsDate = this.selectedNewsPost.date;
      this.newsContent = this.selectedNewsPost.content;
    },
    addPost: function() {
      this.$emit("addPost");
    },
    addNewsPost: function() {
      this.$emit("addNewsPost");
    },
    savePost: function() {
      this.$emit("changeAuthor", this.postId, this.postAuthor);
      this.$emit("changeTimestamp", this.postId, this.postTimestamp);
      this.$emit("changeProfilePicture", this.postId, this.postProfilePicture);
      this.$emit("changePostContent", this.postId, this.postContent);
      this.$emit("changeComments", this.postId, this.postComments);
      this.$emit("changeResqeaks", this.postId, this.postResqeaks);
      this.$emit("changeLikes", this.postId, this.postLikes);
    },
    saveNewsPost: function() {
      this.$emit("change");
    }
  },
  mounted() {
    this.update();
  }
};
</script>

<style>
.addButton {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.buttonText {
  margin-right: 10px;
}

.divide {
  width: 100%;
  height: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid gray;
}

.inputColumn {
  display: flex;
  flex-direction: column;
}

.inputRow {
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
}

input,
textarea {
  flex-grow: 2;
}

.label {
  margin-right: 5px;
}
</style>
