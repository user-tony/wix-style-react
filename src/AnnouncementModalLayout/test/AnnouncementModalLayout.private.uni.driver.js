import { announcementModalLayoutDriverFactory } from '../AnnouncementModalLayout.uni.driver';
import { baseModalLayoutDriverFactory } from '../../BaseModalLayout/BaseModalLayout.uni.driver';

export const announcementModalLayoutPrivateDriverFactory = base => {
  return {
    ...baseModalLayoutDriverFactory(base),
    ...announcementModalLayoutDriverFactory(base),
  };
};
