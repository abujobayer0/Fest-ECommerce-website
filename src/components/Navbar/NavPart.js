import { Button, Fade, Popper, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import LiquorIcon from "@mui/icons-material/Liquor";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import VillaIcon from "@mui/icons-material/Villa";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import PetsIcon from "@mui/icons-material/Pets";
import SetMealIcon from "@mui/icons-material/SetMeal";
import Catagories from "./Catagories";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
const NavPart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      green: {
        main: "#3bb77e",
        contrastText: "#fff",
      },
    },
  });
  const CataItem = [
    { name: "Milks and Dairies", icon: <LocalDiningIcon /> },
    { name: "Wines & Drinks", icon: <LiquorIcon /> },
    { name: "Clothing & Beauty", icon: <VillaIcon /> },
    { name: "Fresh Seafood", icon: <SetMealIcon /> },
    { name: "Pet Foods & Toy", icon: <PetsIcon /> },
    { name: "Fast Food", icon: <RamenDiningIcon /> },
    { name: "Baking material", icon: <BakeryDiningIcon /> },
    { name: "Vegetable", icon: <AddBusinessIcon /> },
    { name: "Fresh Fruit", icon: <ShoppingBasketIcon /> },
    { name: "Bread and Juice", icon: <LunchDiningIcon /> },
  ];
  return (
    <div className="flex px-4 z-10 shadow-sm items-center py-4 justify-between">
      <div>
        <ThemeProvider theme={theme}>
          <Button
            color="green"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              fontWeight: "bold",
              boxShadow: "none",
              fontFamily: " 'Quicksand', sans-serif",
              gap: "10px",
            }}
            variant="contained"
            onClick={handleClick("bottom-start")}
          >
            <span class="list">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.02303 7.85048H0.689697V2.51715C0.689697 1.98672 0.900411 1.47801 1.27548 1.10294C1.65056 0.727865 2.15926 0.517151 2.6897 0.517151L8.02303 0.517151V7.85048ZM2.02303 6.51715H6.6897V1.85048H2.6897C2.51289 1.85048 2.34332 1.92072 2.21829 2.04575C2.09327 2.17077 2.02303 2.34034 2.02303 2.51715V6.51715Z"></path>
                <path d="M16.6897 7.85048H9.35632V0.517151H14.6897C15.2201 0.517151 15.7288 0.727865 16.1039 1.10294C16.4789 1.47801 16.6897 1.98672 16.6897 2.51715V7.85048ZM10.6897 6.51715H15.3563V2.51715C15.3563 2.34034 15.2861 2.17077 15.1611 2.04575C15.036 1.92072 14.8665 1.85048 14.6897 1.85048H10.6897V6.51715Z"></path>
                <path d="M8.02303 16.5171H2.6897C2.15926 16.5171 1.65056 16.3064 1.27548 15.9314C0.900411 15.5563 0.689697 15.0476 0.689697 14.5171L0.689697 9.18381H8.02303V16.5171ZM2.02303 10.5171V14.5171C2.02303 14.694 2.09327 14.8635 2.21829 14.9885C2.34332 15.1136 2.51289 15.1838 2.6897 15.1838H6.6897V10.5171H2.02303Z"></path>
                <path d="M14.6897 16.5171H9.35632V9.18381H16.6897V14.5171C16.6897 15.0476 16.4789 15.5563 16.1039 15.9314C15.7288 16.3064 15.2201 16.5171 14.6897 16.5171ZM10.6897 15.1838H14.6897C14.8665 15.1838 15.036 15.1136 15.1611 14.9885C15.2861 14.8635 15.3563 14.694 15.3563 14.5171V10.5171H10.6897V15.1838Z"></path>
              </svg>
            </span>
            <span class="text">Browse All Categories</span>
            <span class="arrow dropdown-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </span>
          </Button>
        </ThemeProvider>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
          style={{ zIndex: 1, padding: "0" }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div
                className="rounded-lg lg:flex hidden border-2 bg-white glass
                relative m-1 "
              >
                <Typography sx={{ m: 1 }}>
                  <div className="grid  gap-2 p-4  grid-cols-2">
                    {CataItem.map((item) => (
                      <Catagories catagory={item} />
                    ))}
                  </div>
                </Typography>
              </div>
            </Fade>
          )}
        </Popper>
      </div>
      <div>
        <ul className="flex text-md font-semibold text-gray-700 gap-4">
          <li>
            <FontAwesomeIcon
              className="text-lg px-2 text-[#3bb77e]"
              icon={faFire}
            />
            Deals
          </li>
          <li>Home</li>
          <li>About Shop</li>
          <li> Vendors</li>
          <li>Mega Menu</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="lg:flex   items-center   gap-2">
        <FontAwesomeIcon
          className="text-2xl text-gray-700"
          icon={faHeadphones}
        />
        <div className="flex flex-col text-gray-700 items-start justify-start">
          <p className="text-xl CPC font-semibold">1900 - 888</p>
          <p className="text-[12px]"> 24/7 Suport Center</p>
        </div>
      </div>
    </div>
  );
};

export default NavPart;
