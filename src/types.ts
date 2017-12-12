export interface IOptions {
  value: any;
  label: string;

  disabled?: boolean;
}

export interface IReactFormConfig {
  id: string;
  type: 'dropdown' | 'text' | 'toggle' | 'radio' | 'checkbox' | string;
  resultPath: string;

  displayName?: string;
  className?: string;
  isHidden?: <T>(store: T) => boolean;
  optional?: boolean;
  placeholder?: string;
  options?: IOptions[];
  separator?: string;
  topComponent?: <T>(store: T) => JSX.Element;
  simpleValues?: boolean;
  bottomComponent?: <T>(store: T) => JSX.Element;
  componentProps?: any;
  modifyStoreOnChange?: <T>(config: IReactFormConfig, value: any, previousStore: T) => T
}

export interface ISupportedGlobalCallbacks<T> {
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
}

export interface IFormElementProps {
  value: any;
  config: IReactFormConfig;
  additionalProps: any,
}
