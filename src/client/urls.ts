export class Urls {
  static baseUrl: string;
  // baseUrl = https://localhost:4000/api

  instance!: Urls;

  static setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * method POST
   * @returns
   */
  static getAllUsersUrl = () => this.baseUrl + '/user';

  /**
   * method POST
   * @returns
   */
  static getLoginUrl = () => this.baseUrl + '/login';

  /**
   * method POST
   * @returns
   */

  static getRegistrationUrl = () => this.baseUrl + '/register';

  /**
   * method GET
   */
  static getLogoutUrl = () => this.baseUrl + '/logout';

  /**
   * method POST
   * @returns
   */
  static getRecoveryUrl = () => this.baseUrl + '/recover';

  /**
   * method GET
   * @param userId
   * @returns
   */
  static getUserUrl = (userId: string) => this.baseUrl + `/user/${userId}`;

  /**
   * method GET
   * @param fileName {string}
   * @returns
   */
  static getSignedProfilePictureUrl = (fileName: string) =>
    this.baseUrl + `/user/signed/${fileName}`;

  /**
   * Method PUT
   * @returns
   */
  static getUpdateProfileUrl = () => this.baseUrl + `/user`;

  /**
   * method GET
   */
  static getPostsByAuthorUrl = (authorId: string) =>
    this.baseUrl + `/posts/${authorId}`;

  /**
   * method POST
   */
  static getCreatePostUrl = () => this.baseUrl + `/posts`;

  /**
   * method PUT
   */
  static getLikePostUrl = (postId: string) =>
    this.baseUrl + `/posts/like/${postId}`;

  /**
   * method PUT
   */
  static getUnlikePostUrl = (postId: string) =>
    this.baseUrl + `/posts/unlike/${postId}`;
  /**
   * method PUT
   */
  static getAddToBookmarkUrl = (postId: string) =>
    this.baseUrl + `/posts/bookmark/${postId}`;
  /**
   * method PUT
   */
  static getRemoveFromBookmarkUrl = (postId: string) =>
    this.baseUrl + `/posts/like/${postId}`;

  /**
   * method DELETE
   */
  static getDeletePostUrl = (postId: string) =>
    this.baseUrl + `/posts/${postId}`;

  /**
   * method GET
   */
  static getSignedPostUrl = (fileName: string) =>
    this.baseUrl + `/posts/signed/${fileName}`;
}
