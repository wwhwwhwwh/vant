import { withInstall } from '../utils';
import _Avatar from './Avatar';

export const Avatar = withInstall(_Avatar);
export default Avatar;
export { avatarProps } from './Avatar';

declare module 'vue' {
  export interface GlobalComponents {
    VanAvatar: typeof Avatar;
  }
}
