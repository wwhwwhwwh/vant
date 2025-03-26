import { withInstall } from '../utils';
import _Result from './Result';

export const Result = withInstall(_Result);
export default Result;
export { resultProps } from './Result';

declare module 'vue' {
  export interface GlobalComponents {
    VanResult: typeof Result;
  }
}
