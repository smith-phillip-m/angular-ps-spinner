import { LoaderTypeEnum } from './loader-type';
import { LoaderSpeedEnum } from './loader-speed';

export interface LoaderConfig {
  loaderType?: LoaderTypeEnum;
  loaderSpeed?: LoaderSpeedEnum;
  loaderBgColor?: string;
  loaderColor?: string;
}
