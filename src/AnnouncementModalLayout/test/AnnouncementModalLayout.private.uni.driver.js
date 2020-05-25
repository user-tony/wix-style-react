import { announcementModalLayoutDriverFactory } from '../AnnouncementModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';
import { mergeDrivers } from '../../../test/utils/private-drivers';

export const announcementModalLayoutPrivateDriverFactory = base => {
  return mergeDrivers(
    baseModalLayoutPrivateDriverFactory(base),
    announcementModalLayoutDriverFactory(base),
  );
};
