import axios from 'axios';
import RNFetchBlob, {FetchBlobResponse, StatefulPromise} from 'rn-fetch-blob';
import {MediaAsset} from '../types';
import {Urls} from './urls';

export class UploadManager {
  static rnfs: StatefulPromise<FetchBlobResponse>;

  static startUploadTransaction = async ({
    media,
    accessToken,
    onProgressChanged,
    onUploadCompleted,
    onUploadFailed,
  }: {
    media: MediaAsset[];
    accessToken: string;
    url?: string;
    onProgressChanged: (progress: number) => void;
    onUploadFailed: () => void;
    onUploadCompleted: () => void;
  }) => {
    if (media.length < 1) return;
    let counter = 0;
    const total = media
      .map(val => val.fileSize)
      .reduce(
        (prev, current) => (prev as number) + (current as number),
      ) as number;

    try {
      for (let i = 0; i < media.length; i++) {
        var resp = await axios.get(
          Urls.getSignedPostUrl(media[i].fileName as string),
          {
            headers: {authorization: `Bearer ${accessToken}`},
          },
        );

        this.rnfs = RNFetchBlob.fetch(
          'PUT',
          resp.data,
          {},
          RNFetchBlob.wrap(media[i].uri as string),
        ).uploadProgress(sent => {
          counter += sent;
          onProgressChanged(counter / total);
        });

        const response = await this.rnfs;

        if (i == media.length - 1 && response.respInfo.status == 200) {
          onUploadCompleted();
          return media;
        }
      }
    } catch (e) {
      onUploadFailed();
      throw new Error((e as any).message);
    }
  };

  static startProfilePictureUploadTransaction = async ({
    accessToken,
    url,
    fileUri,
  }: {
    accessToken?: string;
    url: string;
    fileUri?: string;
  }) => {
    try {
      var resp = await axios.get(url, {
        headers: {authorization: `Bearer ${accessToken}`},
      });

      this.rnfs = RNFetchBlob.fetch(
        'PUT',
        resp.data,
        {},
        RNFetchBlob.wrap(fileUri as string),
      ).uploadProgress(sent => {});
      const response = await this.rnfs;
      return response;
    } catch (e) {
      throw new Error((e as any).message);
    }
  };

  static stopUploadTransaction = () => {
    if (this.rnfs)
      this.rnfs.cancel(reason => {
        console.log(reason);
      });
  };
}
