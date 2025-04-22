import React from "react";

const ContactTop = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.6817018257714!2d85.36341431826769!3d27.67516096729172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a1a7a654b17%3A0x123957c18047e2ca!2sJanapremi%20World%20School%2FCollege!5e0!3m2!1sen!2snp!4v1723376708451!5m2!1sen!2snp"
        width="100%"
        height="500"
        allowFullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
      <div className="flex justify-center p-3">
        <p className="text-center justify-center max-w-[800px] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ipsa
          cum dolor, eos at vel, quas placeat a tenetur reprehenderit asperiores
          veritatis blanditiis vero quisquam quis in aliquid et rerum.
        </p>
      </div>
      
    </div>
  );
};

export default ContactTop;
