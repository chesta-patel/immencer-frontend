import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";



const CompanyDocument = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Company Document Page" />
      <Content>
        <p>Company Document Page </p>
      </Content>
    </React.Fragment>
  );
};

export default CompanyDocument;
