import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";



const HolidayList = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Holiday List Page" />
      <Content>
        <p>Holiday List Page </p>
      </Content>
    </React.Fragment>
  );
};

export default HolidayList;
