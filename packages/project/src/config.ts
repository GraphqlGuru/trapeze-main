export interface MobileProjectConfig {
  projectRoot?: string;
  ios?: {
    path: string;
  }
  android?: {
    path: string;
  },
  enableAndroid?: boolean;
  enableIos?: boolean;
}