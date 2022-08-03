import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";



const CompanyPolicy = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Company Policy Page" />
      <Content>
        <p>Company Policy Page </p>
      </Content>
    </React.Fragment>
  );
};

export default CompanyPolicy;
