import classes from './styles.module.scss'
import dotsPattern from '../../img/dots-pattern.png'

export default function NewsletterSubscriptionForm() {
  return(
    <div className={classes.schedule}>
      <div className={classes.dotPattern}><img src={dotsPattern} alt="decorative dots pattern"/></div>
      <div className={classes.container}>
        <span className={classes.newsletter}>NEWSLETTER</span>
        <span className={classes.newsletterSubscription}>Subscribe to our newsletter</span>
        <hr/>
        <form className={classes.newsletterSubscriptionForm} action="submit">
          <input className={classes.newsletterSubscriptionFormInput} type="text" placeholder="Email"/>
          <button className={classes.newsletterSubscriptionFormButton}>Subscribe</button>
        </form>
      </div>
      <div className={classes.dotPattern}><img src={dotsPattern} alt="decorative dots pattern"/></div>
    </div>
  )
}