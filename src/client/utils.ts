import 'react-native-get-random-values';
import {customAlphabet} from 'nanoid';

export class Utils {
  private static nanoid = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    21,
  );
  static getRandomString() {
    return this.nanoid();
  }
}
