
import styles from "./Button.module.css";

const Button = (props) => {
  const {isOutline,icon,text}=props
  return (
    <div className= {props.isOutline ? styles.outline_btn :styles.button}>
      
      {icon}
      {text}
      
    </div>
  )
}

export default Button
