import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation} `}>
    <div className="logo">
      <img src="https://img.freepik.com/premium-vector/contact-us-concept-2-colored-icon-simple-blue-element-illustration-contact-us-concept-symbo
      l-design-can-be-used-web-mobile-ui-ux_159242-4168.jpg" alt="" heigh="300px" width="100px"/>
    </div>
    <ul>
        <li><u>Home</u></li>
        <li><u>Contact</u></li>
        <li><u>About Us</u></li>
        <li><u>Serivice</u></li>
    </ul>
    </nav>
  )
}

export default Navigation
