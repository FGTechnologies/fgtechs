import React from 'react';
import Header from "../../components/Header";

const About = () => {
  return (

    <section className="section-bg lg:-mt-36 pt-15 lg:pt-30 relative z-40">
      <Header />
      <div className="x_container grid grid-cols-12 bg-white dark:bg-dark1 rounded bg-opacity-20 dark:bg-opacity-5">
        <div style={styles.container}>
          <h1 style={styles.heading}>About Us</h1>
          <p style={styles.paragraph}>
            Welcome to our website! We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to deliver high-quality products that meet the needs of our customers.
          </p>
          <p style={styles.paragraph}>
            Our journey began in 2023 when our founders saw a need for more customer-centric solutions in the industry. Since then, we have grown and expanded, constantly innovating to bring you the latest and greatest.
          </p>
          <p style={styles.paragraph}>
            Thank you for visiting our site, and we hope you find what you're looking for. If you have any questions or feedback, feel free to contact us.
          </p>
        </div>
      </div>
    </section>

  );
};

const styles = {
  container: {
    width: 'max-content',
    // maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '15px',
  },
};

export default About;
