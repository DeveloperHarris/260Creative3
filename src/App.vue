<template>
  <div id="app">
    <div class="topBar">
      <div class="siteInfo">
        <router-link to="/">
          <img height="50px" src="./assets/logo.png" />
        </router-link>
        <h1>Squak - {{ this.$route.name }}</h1>
      </div>
      <div class="nav">
        <router-link to="/admin">
          <div class="adminInfo">
            <div class="admin">Admin</div>
            <FontAwesomeIcon :icon="['fas', 'cog']" />
          </div>
        </router-link>
        <router-link to="/">
          <div class="home">
            <div class="homeLink">Home</div>
            <FontAwesomeIcon :icon="['fas', 'home']" />
          </div>
        </router-link>
        <router-link to="/news" class="news">
          <div class="newsLink">News</div>
          <FontAwesomeIcon :icon="['far', 'newspaper']" />
        </router-link>
      </div>
    </div>
    <router-view
      :posts="posts"
      :news="news"
      :selectedPostValue="selectedPostValue"
      :selectedNewsPostValue="selectedNewsPostValue"
      v-on:like="like"
      v-on:unlike="unlike"
      v-on:comment="comment"
      v-on:uncomment="uncomment"
      v-on:resqeak="resqeak"
      v-on:changeAuthor="changeAuthor"
      v-on:changeTimestamp="changeTimestamp"
      v-on:changeProfilePicture="changeProfilePicture"
      v-on:changePostContent="changePostContent"
      v-on:changeComments="changeComments"
      v-on:changeResqeaks="changeResqeaks"
      v-on:changeLikes="changeLikes"
      v-on:addPost="addPost"
      v-on:addNewsPost="addNewsPost"
      v-on:changeTitle="changeTitle"
      v-on:changeThumbnail="changeThumbnail"
      v-on:changeDate="changeDate"
      v-on:changeNewsContent="changeNewsContent"
    />
    <footer>
      Github:
      <a href="https://github.com/DeveloperHarris/260Creative3">Repo</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    like: function(id) {
      this.posts[id].likes++;
      this.posts[id].isLiked = true;
    },
    unlike: function(id) {
      this.posts[id].likes--;
      this.posts[id].isLiked = false;
    },
    comment: function(id) {
      this.posts[id].comments++;
      this.posts[id].isCommented = true;
    },
    uncomment: function(id) {
      this.posts[id].comments--;
      this.posts[id].isCommented = false;
    },
    resqeak: function(id) {
      if (this.posts[id].isResqeaked) {
        this.posts[id].resqeaks--;
        this.posts[id].isResqeaked = false;
      } else {
        this.posts[id].resqeaks++;
        this.posts[id].isResqeaked = true;
      }
    },
    changeAuthor: function(id, author) {
      this.posts[id].author = author;
    },
    changeTimestamp: function(id, timestamp) {
      this.posts[id].timestamp = timestamp;
    },
    changeProfilePicture: function(id, profilePicture) {
      this.posts[id].profilePicture = profilePicture;
    },
    changePostContent: function(id, content) {
      this.posts[id].content = content;
    },
    changeComments: function(id, comments) {
      this.posts[id].comments = comments;
    },
    changeResqeaks: function(id, resqeaks) {
      this.posts[id].resqeaks = resqeaks;
    },
    changeLikes: function(id, likes) {
      this.posts[id].likes = likes;
    },
    changeTitle: function(id, title) {
      this.news[id].title = title;
    },
    changeThumbnail: function(id, thumbnail) {
      this.news[id].thumbnail = thumbnail;
    },
    changeDate: function(id, date) {
      this.news[id].date = date;
    },
    changeNewsContent: function(id, content) {
      this.news[id].content = content;
    },
    addPost: function() {
      let id = this.posts.length;
      let newPost = {
        id: id,
        author: "Placeholder",
        timestamp: Date.now() / 1000,
        profilePicture: "https://via.placeholder.com/50x50",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum ligula id dolor eleifend molestie. Nullam tempor ante vitae dui dictum, eget rutrum purus vehicula.",
        comments: 0,
        resqeaks: 0,
        likes: 0,
        isCommented: false,
        isLiked: false,
        isResqeaked: false,
      };

      this.posts.push(newPost);

      this.selectedPostValue = id;
    },
    addNewsPost: function() {
      let id = this.news.length;

      let newNewsPost = {
        id: id,
        title: "Placeholder News Title",
        thumbnail: "https://via.placeholder.com/300x200",
        date: "JANUARY 1, 1970",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum ligula id dolor eleifend molestie. Nullam tempor ante vitae dui dictum, eget rutrum purus vehicula.",
      };

      this.news.push(newNewsPost);

      this.selectedNewsPostValue = id;
    },
  },
  data: function() {
    return {
      selectedPostValue: 0,
      selectedNewsPostValue: 0,
      posts: [
        {
          id: 0,
          author: "OliviaRoss01",
          timestamp: 1584639132,
          profilePicture:
            "https://images.generated.photos/emcdUsd80TI1wHyEbwx1Pyi4k77WV5I-tkuMwVUTay4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzMTU1ODQu/cG5n.png",
          content:
            "Just had the opportunity to meet Steve Carell from the Office! Such an amazing person.",
          comments: 3,
          resqeaks: 1,
          likes: 17,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 1,
          author: "Peytindol",
          profilePicture:
            "https://images.generated.photos/XsppJsb-g6lvrBdOGWK9Hq6qpXZRCPh3jlHeUuIVxDc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA1MjI5OTEu/cG5n.png",
          timestamp: 1584639132,
          content:
            "Does anyone have a Netflix account they'd be willing to share?",
          comments: 0,
          resqeaks: 0,
          likes: 2,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 2,
          author: "Slout",
          profilePicture:
            "https://images.generated.photos/PxSxbpZKzZaKIzR8fdl9cikqsefBa1njbZdGKICwnWI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzNzA5MDgu/cG5n.png",
          timestamp: 1584639132,
          content:
            "Finally had the time to try out Martha's new recipe. It's amazing! 10/10",
          comments: 1,
          resqeaks: 2,
          likes: 7,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 3,
          author: "RynoTheDino",
          profilePicture:
            "https://images.generated.photos/rv0I3YgVeXIbMPGa_ybebNFhH3SgTjm0P01KaA5phTQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA0ODYxNTEu/cG5n.png",
          timestamp: 1584639132,
          content:
            "I know I'm late to the party, but I finally watched Black Mirror and wow. It's an experience for sure.",
          comments: 10,
          resqeaks: 2,
          likes: 43,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 4,
          author: "HannahPark",
          profilePicture:
            "https://images.generated.photos/XAteK6-25h7GaXCBV_dexwge84djGyZwEKL5zS5eyA0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzMjU3MzYu/cG5n.png",
          timestamp: 1584639132,
          content:
            "Anyone have any recommendations for what I should read next? I just finished Under The Dome by Stephen King.",
          comments: 12,
          resqeaks: 1,
          likes: 32,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 5,
          author: "RynoTheDino",
          profilePicture:
            "https://images.generated.photos/rv0I3YgVeXIbMPGa_ybebNFhH3SgTjm0P01KaA5phTQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA0ODYxNTEu/cG5n.png",
          timestamp: 1584639132,
          content:
            "What classes should I take next semester? I'm thinking bio 101 and cs 312.",
          comments: 3,
          resqeaks: 1,
          likes: 9,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 6,
          author: "OliviaRoss01",
          profilePicture:
            "https://images.generated.photos/emcdUsd80TI1wHyEbwx1Pyi4k77WV5I-tkuMwVUTay4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzMTU1ODQu/cG5n.png",
          timestamp: 1584639132,
          content: "What's the weather like next week?",
          comments: 4,
          resqeaks: 1,
          likes: 12,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 7,
          author: "Clay",
          profilePicture:
            "https://images.generated.photos/tdBiP1XGGYajgnsQ9DiyD6i4ZWUZHACR0tPSi57JurQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAwNDkwNTIu/cG5n.png",
          timestamp: 1584639132,
          content:
            "Yo! What's up everyone? I'm back from my trip to Europe. I had a blast, and definitely want to reconnect with everyone sometime soon!",
          comments: 38,
          resqeaks: 5,
          likes: 124,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
        {
          id: 8,
          author: "Peytindol",
          profilePicture:
            "https://images.generated.photos/XsppJsb-g6lvrBdOGWK9Hq6qpXZRCPh3jlHeUuIVxDc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA1MjI5OTEu/cG5n.png",
          timestamp: 1584639132,
          content:
            "Just got a new puppy and I'm feeling a little underprepared. What should I do?",
          comments: 2,
          resqeaks: 0,
          likes: 8,
          isCommented: false,
          isLiked: false,
          isResqeaked: false,
        },
      ],
      news: [
        {
          id: 0,
          title:
            "GrubHub suspends $100 million in restaurant commissions as virus spreads",
          thumbnail:
            "https://www.vbjusa.com/wp-content/uploads/2018/05/Grubhub-1.png",
          date: "MARCH 13, 2020",
          content:
            "Online food delivery company GrubHub Inc said on Friday it will temporarily suspend collecting commission fees of up to $100 million from independent U.S. restaurants hit by the coronavirus outbreak.",
        },
        {
          id: 1,
          title:
            "Bitcoin surges a fifth as markets rebound, still down a quarter since Monday",
          thumbnail:
            "https://specials-images.forbesimg.com/imageserve/1214132368/960x0.jpg?fit=scale",
          date: "MARCH 13, 2020",
          content:
            "Bitcoin surged by more than a fifth on Friday amid high volatility across rebounding global markets, reversing some of its heavy losses from a day earlier but still leaving the cryptocurrency down nearly 30% since the start of the week.",
        },
        {
          id: 2,
          title:
            "Teleconference apps and new tech surge in demand amid coronavirus outbreak",
          thumbnail:
            "https://a.slack-edge.com/80588/marketing/img/feature/partner-zoom/img-slack-zoom-header-desktop.png",
          date: "MARCH 13, 2020",
          content:
            "Global downloads of business apps including Tencent Conference, WeChat Work, Zoom, Microsoft Teams and Slack have risen nearly five fold since the start of the year, data showed, as the coronavirus outbreak changes how corporations work.",
        },
        {
          id: 3,
          title:
            "Google, Walmart join U.S. effort to speed up coronavirus testing",
          thumbnail:
            "https://cdn.vox-cdn.com/thumbor/YkyvyV5OYH9IL-BAO5sTk9Flp70=/0x0:5568x3712/1200x800/filters:focal(2347x845:3237x1735)/cdn.vox-cdn.com/uploads/chorus_image/image/66499694/1206996881.jpg.0.jpg",
          date: "MARCH 13, 2020",
          content:
            "Corporate America joined the fight against the spread of coronavirus on Friday, as President Donald Trump and executives announced that Google would offer a website to help people determine whether they needed tests and retailers would set up drive-through testing in parking lots.",
        },
        {
          id: 4,
          title:
            "Apple to close retail stores worldwide, except Greater China, Verizon to close some U.S. stores",
          thumbnail:
            "https://timesofindia.indiatimes.com/thumb/msid-69238801,width-1200,height-900,resizemode-4/.jpg",
          date: "MARCH 14, 2020",
          content:
            "Apple Inc said it is closing all its retail stores, except those in Greater China, for the next two weeks to minimize the risk of coronavirus transmission.",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 600px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}

.topBar {
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.adminInfo {
  display: flex;
  flex-direction: row;
}

.admin {
  margin-right: 5px;
}

.news {
  display: flex;
  flex-direction: row;
}

.newsLink {
  margin-right: 5px;
}

.home {
  display: flex;
  flex-direction: row;
}

.homeLink {
  margin-right: 5px;
}

footer {
  margin-top: 25px;
}
</style>
