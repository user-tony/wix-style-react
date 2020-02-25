import { floatingHelperDriverFactory } from 'wix-ui-backoffice/dist/src/components/FloatingHelper/FloatingHelper.driver';

export interface FloatingHelperDriver
  extends ReturnType<typeof floatingHelperDriverFactory> {}
