import React from 'react';

function ErrorPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Error</h2>
      <p style={styles.paragraph}>There was an error submitting your form. Please try again later.</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f2dede',
    border: '1px solid #ebccd1',
    borderRadius: '5px',
    textAlign: 'center',
  },
  heading: {
    color: '#a94442',
  },
  paragraph: {
    color: '#a94442',
  },
};

export default ErrorPage;
