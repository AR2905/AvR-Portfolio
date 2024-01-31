import React, { useState, useEffect, useRef } from 'react';
import certificate8 from '../../Assets/Certificate/aws-c_merged_page-0008.jpg';
import certificate9 from '../../Assets/Certificate/aws-c_merged_page-0009.jpg';
import certificate10 from '../../Assets/Certificate/aws-c_merged_page-0010.jpg';
import certificate11 from '../../Assets/Certificate/aws-c_merged_page-0011.jpg';
import certificate13 from '../../Assets/Certificate/aws-c_merged_page-0013.jpg';
import certificate14 from '../../Assets/Certificate/aws-c_merged_page-0014.jpg';
import certificate15 from '../../Assets/Certificate/aws-c_merged_page-0015.jpg';
import certificate17 from '../../Assets/Certificate/aws-c_merged_page-0017.jpg';
import certificate4 from '../../Assets/Certificate/react.jpg';
import certificate18 from '../../Assets/Certificate/Bootstrap.jpg';
import PY_Bootcamp1 from '../../Assets/Certificate/P_BC1.jpg';
import C_Bootcamp1 from '../../Assets/Certificate/C_BC1.jpg';
import { MdOutlineClose } from "react-icons/md";
import './Certificate.css';

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const certificates = [
    { id: 1, name: 'HTML5 & CSS3 Advanced', image: certificate8 },
    { id: 2, name: 'Modern JavaScript', image: certificate11 },
    { id: 3, name: 'BootStrap Advanced', image: certificate18 },
    { id: 10, name: 'React.Js', image: certificate4 },
    { id: 4, name: 'HTML&CSS - udemy', image: certificate14 },
    { id: 5, name: 'Python - Infosys', image: certificate9 },
    { id: 6, name: 'Python Network Programming', image: certificate10 },
    { id: 7, name: 'Python - udemy', image: certificate15 },
    { id: 8, name: 'RESTapi With Flask', image: certificate13 },
    { id: 9, name: 'Digital design & UI', image: certificate17 },
  ];

  const bootcampCertificates = [
    { id: 'PY_Bootcamp1', name: 'Python', image: PY_Bootcamp1 },
    { id: 'C_Bootcamp1', name: 'Cloud computing', image: C_Bootcamp1 },
  ];

  const openCertificate = (certificateImage) => {
    setSelectedCertificate(certificateImage);
    setImageLoaded(false);
    document.body.classList.add('modal-open'); // Add class to body to disable scrolling
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.classList.remove('modal-open'); // Remove class to enable scrolling
  };

  useEffect(() => {
    if (selectedCertificate) {
      const img = new Image();
      img.src = selectedCertificate;
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
    }
  }, [selectedCertificate]);

  return (
    <>
      <h1 className='project-heading ch'>Certificates</h1>
      <div className="certificate-container">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-item"
            onClick={() => openCertificate(certificate.image)}
          >
            {certificate.name}
          </div>
        ))}
      </div>

      <h3 className='BH'>- BootCamps</h3>

      <div className="certificate-container">
        {bootcampCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className={`certificate-item ${certificate.id}`}
            onClick={() => openCertificate(certificate.image)}
          >
            {certificate.name}
          </div>
        ))}
      </div>

      {selectedCertificate && (
  <div className="certificate-modal-overlay">
    <div className="certificate-modal-content">
      {/* Loading Indicator */}
      <div className="loading-overlay" style={{ display: imageLoaded ? 'none' : 'block' }}>
        <div style={{ color: 'white' }}>Loading...</div>
      </div>

      {/* Image */}
      <img
        ref={imageRef}
        src={selectedCertificate}
        alt="Certificate"
        style={{
          opacity: imageLoaded ? '1' : '0',
          transition: 'opacity 0.5s ease-in'
        }}
        onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when image is loaded
      />

      {/* Close Button */}
      <span className="close-btn" onClick={closeCertificate} style={{
          opacity: imageLoaded ? '1' : '0',
          transition: 'opacity 0.5s ease-in'
        }}><MdOutlineClose className='mainbtn'  /></span>
    </div>
  </div>
)}

    </>
  );
};

export default Certificate;
