import React from 'react';

function SuccessPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Success</h2>
      <p style={styles.paragraph}>Your form has been submitted successfully!</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#dff0d8',
    border: '1px solid #d0e9c6',
    borderRadius: '5px',
    textAlign: 'center',
  },
  heading: {
    color: '#3c763d',
  },
  paragraph: {
    color: '#3c763d',
  },
};

export default SuccessPage;
