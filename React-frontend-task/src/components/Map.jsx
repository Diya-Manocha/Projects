import React from 'react'

const Map = () => {
    return (
        <div className='h-[450px] w-full'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54882.02288953187!2d76.60993397389694!3d30.714845910895907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c69ce784a03fb1b%3A0x42584191becaf33!2sIndraQ%20Technologies!5e0!3m2!1sen!2sin!4v1735708852704!5m2!1sen!2sin"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      );
      
}

export default Map