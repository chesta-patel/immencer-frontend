import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";



const HolidayType = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Holiday Type Page" />
      <Content>
        <p>Holiday Type Page </p>
      </Content>
    </React.Fragment>
  );
};

export default HolidayType;
