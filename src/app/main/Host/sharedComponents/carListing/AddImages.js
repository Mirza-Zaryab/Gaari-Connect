import { Button, Card, Typography, Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  addImages,
  removeImages,
} from "../../ListStepper/store/addImageSlices";

const AddImages = () => {
  const dispatch = useDispatch();
  const imageFiLe = useSelector((state) => state.ListStepperReducer);

  const [images, setImages] = React.useState([]);
  const maxNumber = 5;
  const onChange = (imageList, onImageUpload, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);

    setImages(imageList);

    if (onImageUpload) {
      dispatch(
        addImages({
          mainimage: imageList[imageList.length - 1].data_url,
          setCover: "false",
        })
      );
    }
  };
  console.log(images);

  console.log(imageFiLe.vehicleimages.images);

  // useEffect(() => {
  //   setValue(images, location.address)
  // }, [])

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="flex flex-row w-auto">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <CloseIcon
                  style={{ backgroundColor: "#D22A8F", color: "#FFFFFF" }}
                  onClick={() => {
                    dispatch(removeImages(index));
                    return onImageRemove(index);
                  }}
                  className="cursor-pointer text-16 font-medium rounded-full ml-216"
                />
                <img
                  className="rounded-8 mr-10"
                  style={{ width: "228px", height: "160px" }}
                  src={image.data_url}
                  alt=""
                />
              </div>
            ))}

            <Card
              className="cursor-pointer rounded-lg p-24 shadow-none border"
              style={
                isDragging
                  ? { color: "red", width: "250px", height: "160px" }
                  : null
              }
              // style={{  }}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img
                className="mx-auto mb-16"
                src="assets/images/icons/uploadImageicon.svg"
                alt=""
              />
              <Typography className="text-12 space-x-6">
                <span className="font-500" style={{ color: "#D22A8F" }}>
                  Click to upload
                </span>
                <span className="text-grey-500">or drag and drop</span>
              </Typography>
              <Typography className="text-10" color="text.secondary">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography>
            </Card>
            {/* &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button> */}
          </div>
        )}
      </ImageUploading>

      <div>
        {/* <Button
          className="h-44 rounded-lg text-white mt-40"
          style={{ backgroundColor: "#D22A8F" }}
        >
          Save Info
        </Button> */}
      </div>
    </div>
  );
};

export default AddImages;
