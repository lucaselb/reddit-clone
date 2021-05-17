export default interface Post {
  id: string;
  subreddit: string;
  title: string;
  thumbnail: string;
  ups: number;
  num_comments: number;
  permalink: string;
  subreddit_name_prefixed: string;
  display_image: boolean;
}
