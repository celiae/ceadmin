import { Button } from "@mui/material";
import { MdPermMedia } from "react-icons/md";
import React from "react";

export default function Media() {
  const [media, setMedia] = React.useState();
  return (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      aria-label="upload picture"
      component="label"
    >
      <input
        onChange={(e) => {
          setMedia(e.target.files);
          console.log(media);
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
        }}
        hidden
        multiple
        accept="image/*"
        type="file"
      />
      <MdPermMedia size={100} />
    </Button>
  );
}
