import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";


const UserPermission = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Role Page" />
      <Content>
        <p>Permission Page </p>
      </Content>
    </React.Fragment>
  );
};

export default UserPermission;
