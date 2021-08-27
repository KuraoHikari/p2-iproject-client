<template>
  <div class="write-review text-start">
    <h1>WRITE YOUR OPINION ABOUT THIS ANIME HERE</h1>
    <p>{{ review }}</p>
    <div class="content">
      <div class="row box-content">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 pt-2">
              <h2>Anime Info</h2>
              <a :href="theAnimeData.url" target="_blank">MORE INFO</a>
            </div>
            <div class="col-md-6 pt-2">
              <p>Title : {{ theAnimeData.title }}</p>
              <p>Rating : {{ theAnimeData.rated }}</p>
              <p>Episode : {{ theAnimeData.episodes }}</p>
            </div>
            <div class="row">
              <form @submit.prevent="postReview">
                <div class="row">
                  <div class="col-6">
                    <label class="form-check-label">Rate the anime : </label><br />
                    <fieldset class="rating">
                      <input type="radio" id="star10" name="rating" value="10" v-model="userpoin" /><label for="star10">10 stars</label> <input type="radio" id="star9" name="rating" value="9" v-model="userpoin" /><label for="star9"
                        >9 stars</label
                      >
                      <input type="radio" id="star8" name="rating" value="8" v-model="userpoin" /><label for="star8">8 stars</label> <input type="radio" id="star7" name="rating" value="7" v-model="userpoin" /><label for="star7"
                        >7 stars</label
                      >
                      <input type="radio" id="star6" name="rating" value="6" v-model="userpoin" /><label for="star6">6 star</label> <input type="radio" id="star5" name="rating" value="5" v-model="userpoin" /><label for="star5"
                        >5 stars</label
                      >
                      <input type="radio" id="star4" name="rating" value="4" v-model="userpoin" /><label for="star4">4 stars</label> <input type="radio" id="star3" name="rating" value="3" v-model="userpoin" /><label for="star3"
                        >3 stars</label
                      >
                      <input type="radio" id="star2" name="rating" value="2" v-model="userpoin" /><label for="star2">2 stars</label> <input type="radio" id="star1" name="rating" value="1" v-model="userpoin" /><label for="star1"
                        >1 star</label
                      >
                    </fieldset>
                  </div>
                  <div class="col-4">
                    <label class="form-check-label" for="inlineRadio1">This anime Recomended? </label><br />
                    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked value="recomended" v-model="recomendation" />
                    <label class="btn btn-outline-light" for="success-outlined">Recomended</label>

                    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" value="notrecomended" v-model="recomendation" />
                    <label class="btn btn-outline-danger" for="danger-outlined">Not Recomended</label>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your review : </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="review"></textarea>
                </div>
              </form>
              <button class="btn post-review" type="submit" @click.prevent="postReviewEdit(theAnimeData.id)">Post Review</button>
            </div>
          </div>
        </div>

        <div class="col-4 text-end justify-content-center">
          <img :src="theAnimeData.image_url" alt="" class="image-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import errorHandler from "../helper/errorHandler";
import successHandler from "../helper/successCase";
export default {
  name: "reviewAnime",
  data() {
    return {
      userpoin: this.$store.state.myReviewEdit.userpoin,
      review: this.$store.state.myReviewEdit.review,
      recomendation: this.$store.state.myReviewEdit.recomendation,
    };
  },
  methods: {
    postReviewEdit(id) {
      this.$store
        .dispatch("editReviewAnime", { id: id, userpoin: this.userpoin, review: this.review, recomendation: this.recomendation })
        .then(() => {
          this.$router.push("/myreview");
          successHandler("Your Review success to Edit");
        })
        .catch((err) => {
          errorHandler(err);
        });
    },
  },
  computed: {
    theAnimeData() {
      return this.$store.state.myReviewEdit;
    },
  },
  created() {
    if (this.$store.state.myReviewEdit.userpoin === undefined) {
      this.$router.push("/myreview");
    }
  },
};
</script>

<style>
.write-review {
  margin-top: 150px;
}
.write-review a {
  color: aqua;
  text-decoration: none;
}
.write-review h1 {
  color: rgb(255, 255, 255);
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
.write-review img {
  margin: 5%;
}
</style>
