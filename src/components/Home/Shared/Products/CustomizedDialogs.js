import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  LinearScale,
  ProductionQuantityLimitsOutlined,
  RemoveRedEye,
} from "@mui/icons-material";
import LOGO from "../../../Images/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default function CustomizedDialogs({
  handleClickOpen,
  setOpen,
  open,
  star,
  img,
  name,
  oldPrice,
  newPrice,
  description,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex items-center gap-2  w-full ">
        <h1 className="text-lg font-semibold CPC">
          Quick View <LinearScale />
        </h1>
        <Button
          style={{
            color: "#3bb77e",
            outline: "2px solid #3bb77e",
            fontSize: "12px",
            padding: "3px",
          }}
          onClick={handleClickOpen}
        >
          <RemoveRedEye />
        </Button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <img className="w-20" src={LOGO} alt="" />
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <span className="w-full text-right flex justify-start  items-center CPC">
            <ProductionQuantityLimitsOutlined /> Limited
          </span>
          <div className="flex">
            <img src={img} className="w-44 lg:w-52" alt="" />
            <div className="text-gray-700">
              <h1 className="text-2xl font-semibold ">{name}</h1>
              <p>{description}</p>
              <p className="text-4xl font-semibold CPC my-4">
                ${newPrice}{" "}
                <span className="text-2xl text-gray-700">${oldPrice}</span>
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              backgroundColor: "#3bb77e ",
              fontWeight: 600,
              gap: "10px",
              color: "white",
            }}
            autoFocus
            varient="contained"
            onClick={handleClose}
          >
            Add To Cart{" "}
            <FontAwesomeIcon className="text-xl" icon={faCartArrowDown} />
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
