import { customModalLayoutDriverFactory } from '../CustomModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';
import { mergeDrivers } from '../../../test/utils/private-drivers';

export const customModalLayoutPrivateDriverFactory = base => {
  return mergeDrivers(
    baseModalLayoutPrivateDriverFactory(base),
    customModalLayoutDriverFactory(base),
  );
};
