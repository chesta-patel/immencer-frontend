import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";



const Employee = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Employee Page" />
      <Content>
        <p>Employee Page </p>
      </Content>
    </React.Fragment>
  );
};

export default Employee;
