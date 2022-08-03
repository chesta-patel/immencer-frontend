import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";



const UserInfo = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="User Profile Page" />
      <Content>
        <p>User Profile Page </p>
      </Content>
    </React.Fragment>
  );
};

export default UserInfo;
