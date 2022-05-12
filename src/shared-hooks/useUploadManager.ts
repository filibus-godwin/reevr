import RNFetchBlob, {FetchBlobResponse, StatefulPromise} from 'rn-fetch-blob';
import {MediaAsset} from '../types';
import {useAxiosInstance} from '../hooks/useAxiosInstance';

export const useUploadManager = () => {
  let rnfs: StatefulPromise<FetchBlobResponse>;
  const {axios, abort} = useAxiosInstance();

  const startUploadTransaction = async ({
    media,
    onProgressChanged,
    onUploadCompleted,
    onUploadFailed,
  }: {
    media: MediaAsset[];
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
        console.log('requesting');
        var resp = await axios.get(
          `/post/signed/${media[i].fileName as string}`,
        );

        console.log(resp);

        console.log(resp.data);
        rnfs = RNFetchBlob.fetch(
          'PUT',
          resp.data,
          {},
          RNFetchBlob.wrap(media[i].uri as string),
        ).uploadProgress(sent => {
          counter += sent;
          onProgressChanged(counter / total);
        });

        const response = await rnfs;

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

  const startProfilePictureUploadTransaction = async ({
    accessToken,
    url,
    fileUri,
  }: {
    accessToken?: string;
    url: string;
    fileUri?: string;
  }) => {
    try {
      var resp = await axios.get(url);

      rnfs = RNFetchBlob.fetch(
        'PUT',
        resp.data,
        {},
        RNFetchBlob.wrap(fileUri as string),
      ).uploadProgress(sent => {});
      const response = await rnfs;
      return response;
    } catch (e) {
      throw new Error((e as any).message);
    }
  };

  const stopUploadTransaction = () => {
    // if (rnfs)
    rnfs.cancel(reason => {
      console.log(reason);
    });
  };

  return {
    startUploadTransaction,
    startProfilePictureUploadTransaction,
    stopUploadTransaction,
  };
};
