import { memo } from "react";

function FuseSplashScreen() {
  return (
    <div id="fuse-splash-screen">
      <div className="center">
        <div className="logo">
          <img
            width="400"
            src="assets/images/GariConnect/Logo.gif"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(FuseSplashScreen);
