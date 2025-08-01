import React, { useEffect, useState } from 'react';
import { FaUser, FaBook, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';

const CertificateVerification = () => {
  const [certNumber, setCertNumber] = useState('');
  const [certDetails, setCertDetails] = useState(null);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const API_BASE = 'https://codeandclass.onrender.com/api/certificates'

  const handleSearchCertificate = async () => {
    try {
      const response = await fetch(`${API_BASE}/${certNumber.toUpperCase()}`, {
        method: 'GET',
      });

      const certificateData = await response.json();

      setHasSearched(true);

      if (certificateData && certificateData.name) {
        setCertDetails(certificateData);
        setError('');
      } else {
        setCertDetails(null);
        setError('Certificate not found. Please check the number.');
      }
    } catch (err) {
      console.error(err);
      setCertDetails(null);
      setError('Error fetching certificate. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black text-white min-h-screen px-4 md:px-10 lg:px-20 py-10 relative top-24">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-500 text-center mb-4">
        Certificate Verification
      </h1>

      {!hasSearched && (
        <p className="text-center text-zinc-400 text-sm md:text-base mb-6">
          🔍 Verify your certificate now by entering the certificate number below.
        </p>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 mb-10">
        <input
          type="text"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchCertificate();
            }
          }}
          placeholder="Enter Certificate Number"
          className="w-full md:w-[300px] px-4 py-2 rounded-md border border-white bg-zinc-950"
        />
        <button
          onClick={handleSearchCertificate}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md transition-all shadow-md"
        >
          Verify
        </button>
      </div>

      {error && (
        <div className="text-center text-red-500 mb-6">{error}</div>
      )}

      {certDetails && (
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg max-w-md mx-auto border-2 border-cyan-500 animate-pulse border-dashed">
          <div className="text-center mb-4">
            <BsCheckCircle className="text-green-400 text-4xl mx-auto mb-2 animate-bounce" />
            <h2 className="text-2xl font-bold text-cyan-400">Verified Certificate</h2>
          </div>

          <div className="space-y-4 text-sm md:text-base">
            <p className="flex items-center gap-2">
              <FaUser className="text-cyan-500" />
              <span className="font-semibold text-white">Name:</span> {certDetails?.name}
            </p>
            <p className="flex items-center gap-2">
              <FaBook className="text-cyan-500" />
              <span className="font-semibold text-white">Course:</span> {certDetails?.course}
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-cyan-500" />
              <span className="font-semibold text-white">Date of Completion:</span> {certDetails?.date}
            </p>
            <p className="flex items-center gap-2">
              <FaShieldAlt className="text-cyan-500" />
              <span className="font-semibold text-white">Status:</span>
              <span
                className={`font-bold ${certDetails?.status === 'Verified'
                  ? 'text-green-400'
                  : certDetails?.status === 'Pending'
                    ? 'text-yellow-400'
                    : 'text-red-400'
                  }`}
              >
                {certDetails?.status}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;