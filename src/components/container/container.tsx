import React, { ReactNode } from "react";

import "./Container.css";

const Container = (parameters: { children?: ReactNode }): React.ReactNode => {
  return <div className="container-root">{parameters.children}</div>;
};

export default Container;