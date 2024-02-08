import React from 'react';

const BoldTextParser = ({ text }: { text: string }) => {
  // Dividir el texto en partes antes y después de **
  const partes = text.split('**');

  return (
    <>
      {partes.map((parte, index) =>
        index % 2 === 0 ? (
          // normal text
          <span key={index}>{parte}</span>
        ) : (
          // bold text between ** **
          <strong key={index}>{parte}</strong>
        )
      )}
    </>
  );
};

export default BoldTextParser;
