"use client";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const InitializeAnalytics = () => {
  useEffect(() => {
    if (typeof process.env.GOOGLE_ANALYTICS_ID != "undefined") {
      ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID, {
        gaOptions: {
          anonymizeIp: true,
        },
      });
    }
  }, []);

  return <></>;
};

export default InitializeAnalytics;
