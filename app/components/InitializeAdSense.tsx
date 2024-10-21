import React from "react";
import Script from "next/script";

const InitializeAdSense = () => {
  return (
    <Script
      async
      src={process.env.GOOGLE_ADSENSE_LINK}
      crossOrigin="anonymous"
    />
  );
};

export default InitializeAdSense;
