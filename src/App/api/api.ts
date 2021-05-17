import Post from "../types/post";

export default {
  getPosts: (filter: string): Promise<Array<Post>> => {
    return fetch(`https://www.reddit.com/${filter}.json`)
      .then((response) => response.json())
      .then(function (data) {
        let arr: Array<Post> = [];
        data.data.children.map((item: any) => {
          arr.push({
            id: item.data.id,
            subreddit: item.data.subreddit,
            title: item.data.title,
            thumbnail: item.data.url_overridden_by_dest,
            ups: item.data.ups,
            num_comments: item.data.num_comments,
            permalink: item.data.permalink,
            subreddit_name_prefixed: item.data.subreddit_name_prefixed,
            display_image: false,
          });
        });

        return Promise.resolve(arr);
      })
      .catch((err) => Promise.reject("Error getting posts"));
  },
};
