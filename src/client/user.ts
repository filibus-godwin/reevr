import axios, {AxiosResponse} from 'axios';
import {UserResponseType} from './types';
import {UploadManager} from './upload.manager';
import {Urls} from './urls';
import {Utils} from './utils';

export class User {
  private id!: string;
  private accessToken!: string;
  private static instance: User;

  constructor() {}

  static initialize = () => {
    if (!this.instance) {
      this.instance = new User();
      return this.instance;
    }
    return this.instance;
  };

  static getInstance = () => {
    return this.instance;
  };

  setData = ({accessToken, id}: {accessToken: string; id: string}) => {
    this.accessToken = accessToken;
    this.id = id;
  };

  getUser = async (userId: string) => {
    return axios
      .get<{}, AxiosResponse<UserResponseType>>(Urls.getUserUrl(userId), {
        headers: {Authorization: `Bearer ${this.accessToken}`},
      })
      .then(e => e.data);
  };

  getAllUsers = async () => {
    console.log(this.accessToken);
    return axios
      .get(Urls.getAllUsersUrl(), {
        headers: {authorization: `Bearer ${this.accessToken}`},
      })
      .then(e => e.data);
  };

  editUser = async (
    newData: Pick<
      any,
      'interests' | 'profilePictureUrl' | 'bio' | 'username'
    > & {fileUri: string},
  ) => {
    const profilePictureName = `${Utils.getRandomString()}.jpg`;
    const resp = await UploadManager.startProfilePictureUploadTransaction({
      url: Urls.getSignedProfilePictureUrl(profilePictureName),
      fileUri: newData.fileUri,
      accessToken: this.accessToken,
    });

    if (!resp) throw new Error('failed');

    return axios
      .put<{
        bio: string;
        username: string;
        interests: string[];
        profilePictureUrl: string;
      }>(
        Urls.getUpdateProfileUrl(),
        {
          bio: newData.bio,
          username: newData.username,
          interests: newData.interests,
          profilePictureName,
        },
        {headers: {authorization: `Bearer ${this.accessToken}`}},
      )
      .then(e => console.warn(e));
  };
}
