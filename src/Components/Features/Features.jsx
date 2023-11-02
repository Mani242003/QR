import React, { useState } from "react";
import "./Features.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BsPeopleFill } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import { BsPersonCircle } from "react-icons/bs";
import CustomTab from "./CustomTab/CustomTab";
import { TabsData } from "../../Data/Dummy";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



const Features = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(TabsData);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F43F5E',
      },
    },
  });
  return ( 
    <section className="features_wrapper" id="features">
      <div className="features_container">
        <div className="features_header">
          <span className="features_header_text">Awesome <span>Features</span></span>
          <div className="features_border"></div>
          <span className="features_header_des">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada{" "}
             fames ac ante ipsum primis in faucibus.
          </span>
        </div>
        <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                variant="fullWidth"
              >
                <Tab
                  icon={<BsPeopleFill />}
                  iconPosition="start"
                  label="Client"
                  value="1"
                />
                <Tab
                  icon={<SiCodechef />}
                  iconPosition="start"
                  label="Chef"
                  value="2"
                  
                />
                <Tab
                  icon={<BsPersonCircle />}
                  iconPosition="start"
                  label="Waiter"
                  value="3"
                />
              </TabList>
            </Box>
            {TabsData.map((data, i) => (
              <TabPanel key={i} value={data.id}>
                <CustomTab
                  middleImg1={data.middleImg1}
                  middleImg2={data.middleimg2}
                  TabLeftItems={data.TabLeftItems}
                  TabRightItems={data.TabRightItems}
                />
              </TabPanel>
            ))}
          </TabContext>
        </Box>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default Features;
