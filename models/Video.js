export default class Video {
  constructor(
    id,
    title,
    description,
    length,
    year,
    rating,
    videoUrl,
    posterUrl
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.length = length;
    this.year = year;
    this.rating = rating;
    this.videoUrl = videoUrl;
    this.posterUrl = posterUrl;
  }
}
