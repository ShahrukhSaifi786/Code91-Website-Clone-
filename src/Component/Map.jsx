import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] mb-10">
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28025.10602183529!2d77.326715!3d28.595629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce562edba0f99%3A0x50141284a8020508!2sCode91!5e0!3m2!1sen!2sin!4v1701847315278!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
