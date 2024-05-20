// src/routes/About.jsx
import React from 'react';

export const Other = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>About Me</h1>
            <p style={styles.paragraph}>
                Blog page
            </p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    header: {
        fontSize: '2em',
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '1.2em',
    },
};
