import { messageModalLayoutDriverFactory } from '../MessageModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';
import { mergeDrivers } from '../../../test/utils/private-drivers';

export const messageModalLayoutPrivateDriverFactory = base => {
  return mergeDrivers(
    baseModalLayoutPrivateDriverFactory(base),
    messageModalLayoutDriverFactory(base),
  );
};
