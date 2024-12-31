import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "@/styles/cookieConsentBanner.module.css"; 

const CookieConsentBanner: React.FC = () => {

  const handleAccept = () => {
    // Handle the acceptance of all cookies
    console.info("All cookies accepted");
  };

  const handleDecline = () => {
    // Handle the selection of specific cookies
    console.info("Only necessary cookies accepted");
  };

  return (
    <CookieConsent
    location="bottom"
    buttonText="Allow All Cookies"
    cookieName="cookie-accepted"
    expires={365}
    enableDeclineButton
    declineButtonText="Allow Selection"
    onAccept={handleAccept}
    onDecline={handleDecline}
    contentStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    buttonStyle={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', fontSize: '0.9em', cursor: 'pointer', margin: '0 10px'}}
    declineButtonStyle={{ backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', fontSize: '0.9em', cursor: 'pointer', margin: '0 10px' }}
  style={{background:'white',display:'block',padding:'20px'}}
  buttonWrapperClasses={styles.buttonWrapper}
  >
    <div className={styles.card}>
      <h2 className={styles.label}>Cookies & Privacy</h2>
      <p className={styles.description}>
        We use cookies to enhance your experience on our website. You can
        choose to accept all cookies or allow only the necessary ones. For
        more details, please read our <a href="/privacy-policy">privacy policy</a>.
      </p>
    </div>
  </CookieConsent>
  );
};

export default CookieConsentBanner;
