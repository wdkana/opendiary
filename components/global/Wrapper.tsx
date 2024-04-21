import React, { ReactElement } from "react";

type ParamsProps = {
  title?: string;
  children?: ReactElement;
};

const Wrapper = ({ title, children }: ParamsProps): ReactElement => {
  return (
    <section className="container mx-auto px-4">
      <h1 className="text-center text-xl mb-8">{title}</h1>
      {children}
    </section>
  );
};

export default Wrapper;
