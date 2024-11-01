import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VerificationStyle.css';

const Verification = ({ iddossier }) => {
  const [verificationResult, setVerificationResult] = useState(null);
  const {id}=useParams();
  //xmysql -h localhost -u Abdo -p 123456 -d simulation
  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/dossier_terrain?_where=(id_dossier,eq,${id})`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setVerificationResult(data[0].etat);
      })
      .catch(error => {
        console.error('Error fetching verification data:', error);
      });
  }, [iddossier]);

  return (
    <div>
      <h2>Verification Result for iddossier: {iddossier}</h2>
      {verificationResult !== null ? (
        //<p>{verificationResult ? 'Processed by notary' : 'Not processed by notary'}</p>
        verificationResult
      ) : (
        <p>Loading verification result...</p>
      )}
    </div>
  );
};

export default Verification;
