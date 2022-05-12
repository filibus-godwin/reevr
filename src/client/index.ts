import {Auth} from './auth';
import {Post} from './post';
import {Urls} from './urls';
import {User} from './user';

export const reevr = {
  initialize: function (url: string) {
    Urls.setBaseUrl(url);
    this.post = Post.initialize();
    this.user = User.initialize();
  },
  auth: Auth,
  setData: function ({
    accessToken,
    id,
  }: {
    id: string;
    accessToken: string;
    refreshToken: string;
  }) {
    this.post.setData({accessToken, id});
    this.user.setData({accessToken, id});
  },
  post: Post.getInstance(),
  user: User.getInstance(),
};
