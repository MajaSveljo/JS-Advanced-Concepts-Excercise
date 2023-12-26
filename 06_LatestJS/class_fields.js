class Movie {
  title;
  director;
  genre;
  releaseYear;
  rating;
  cast = [];
  reviews = [];

  constructor(title, director, genre, releaseYear) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;

    // rating, cast, and reviews are not set in the constructor
  }

  addCastMember(actor) {
    // Adds a new cast member to the movie
    this.cast.push(actor);
  }

  addReview(review) {
    // Adds a new review to the movie
    this.reviews.push(review);
  }

  setRating(rating) {
    // Sets the movie's rating
    if (rating >= 0 && rating <= 10) {
      this.rating = rating;
    } else {
      console.log("Rating must be between 0 and 10.");
    }
  }

  getMovieDetails() {
    return {
      title: this.title,
      director: this.director,
      genre: this.genre,
      releaseYear: this.releaseYear,
      rating: this.rating,
      cast: this.cast,
      reviews: this.reviews,
    };
  }
}

// Usage
const myMovie = new Movie("Inception", "Christopher Nolan", "Sci-Fi", 2010);

// Add cast members
myMovie.addCastMember("Leonardo DiCaprio");
myMovie.addCastMember("Ellen Page");

// Add reviews
myMovie.addReview({ user: "johnDoe", review: "Amazing movie!", rating: 10 });
myMovie.addReview({
  user: "janeDoe",
  review: "Quite an experience!",
  rating: 9,
});

// Set movie rating
myMovie.setRating(9);

// Output movie details
console.log(myMovie.getMovieDetails());
