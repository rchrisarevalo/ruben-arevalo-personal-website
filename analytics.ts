import ReactGA from 'react-ga4';

const thisWorks = () => {
    console.log("This works!")
}

if (typeof(process.env.GOOGLE_ANALYTICS_ID) != "undefined") {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID, {
        gaOptions: {
            anonymizeIp: true
        }
    })
}

export {thisWorks}