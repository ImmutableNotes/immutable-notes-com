import React from 'react';

const Context = React.createContext({});

export const deepMerge = (target: { [key: string]: any }, source: { [key: string]: any }) => {
  if (target && source) {
    for (const key in source) {
      if (
        source[key] instanceof Object &&
        !Array.isArray(source[key]) // NB: DOES NOT DEEP MERGE ARRAYS
      ) {
        Object.assign(source[key], deepMerge(target[key] || {}, source[key]));
      }
    }
    Object.assign(target, source);
    return target;
  }
  return target || source;
};

type Props = {
  initialState?: object;
  onSetState?: (state: object, meta: { deepMerge?: boolean }) => void;
};

export class Provider extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { ...(props.initialState || {}) };
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setState: this.reactOneSetState,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }

  reactOneSetState = (data: object, meta: { deepMerge?: boolean } = {}) => {
    const { onSetState } = this.props;
    this.setState(
      (prevState) => (meta.deepMerge ? deepMerge({ ...prevState }, data) : { ...prevState, ...data }),
      () => {
        onSetState && onSetState(this.state, meta);
      }
    );
  };
  getState = () => this.state;
}

type AppState = {
  key: string;
};

export type WepState = AppState & {
  state: object;
  setState: (data: object, meta: { deepMerge?: boolean }) => void;
};

export const connect = (keys?: string | null) => {
  const mapStateToProps = (dict: object) => {
    switch (keys) {
      case undefined:
        return dict;
      case null:
        return {};
      default:
        // eslint-disable-next-line
        return eval(`({${keys}}) => ({${keys}})`)(dict);
    }
  };
  return (Component: React.ComponentType<any>) => (props: object) =>
    (
      <Context.Consumer>
        {(value: any) => <Component {...props} {...mapStateToProps(value.state)} setState={value.setState} />}
      </Context.Consumer>
    );
};
