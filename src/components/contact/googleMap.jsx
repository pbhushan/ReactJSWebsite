import React from "react";

const googleMapPage = () => {
  return (
    <div
      id="map-container"
      className="rounded container z-depth-1-half map-container"
      style={{ height: "400px" }}
    >
      <iframe
        title="googlemap"
        src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=SUSCOM%20ELECTROMECHNICAL%20Pvt.%20Ltd.%2CAhinsha%20Vihar%2C%20Opposite%20Reliance%20Fresh%2C%20Ahinsa%20Vihar%20Colony%2C%20Ayodhya%20Bypass%2C%20Bhopal%2C%20Madhya%20Pradesh%20462041+(SUSCOM%20ELECTROMECHNICAL%20Pvt.%20Ltd.)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
      >
        <a href="https://www.maps.ie/create-google-map/">Embed Google Map</a>
      </iframe>
    </div>
  );
};

export default googleMapPage;
