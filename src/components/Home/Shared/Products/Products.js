import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProductionQuantityLimits } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Products = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      green: {
        main: "#3bb77e",
        contrastText: "#3bb77e",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full place-content-center justify-center items-center flex  flex-col px-12">
        <h1 className="CPC text-4xl font-semibold  py-4 ">
          Popular Products <ProductionQuantityLimits />
        </h1>
        <hr />
        <Tabs
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={value}
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#3bb77e" },
            "& .Mui-selected": { color: "#3bb77e" },
          }}
          onChange={handleChange}
        >
          <Tab label="All Popular Products" {...a11yProps(0)} />
          <Tab label="Dairy" {...a11yProps(1)} />
          <Tab label="Mart & Grocery" {...a11yProps(2)} />
          <Tab label="Seeds" {...a11yProps(3)} />
        </Tabs>
        <div className="grid md:grid-cols-2 w-full  place-content-center place-items-center grid-cols-1  lg:grid-cols-3  2xl:grid-cols-5">
          {product.map((product) => (
            <TabPanel value={value} index={0}>
              {" "}
              <SingleProduct product={product} />{" "}
            </TabPanel>
          ))}

          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item six
          </TabPanel>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Products;
