import React from 'react';
import classes from './styles.module.scss'

interface AppProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  backgroundImageURL: string;
  subject: string;
  title: string;
  author: string
}

export default function Post(props: AppProps) {
  
  const {
    onClick,
    backgroundImageURL,
    subject,
    title,
    author   
  } = props

  return(
    <button className={classes.clickableContainer} onClick={onClick}>
      <img src={backgroundImageURL} alt=""/>
      <div className={classes.contentContainer}>
        <span className={classes.subject}>{subject}</span>
        <span className={classes.title}>{title}</span>
        <span className={classes.author}>{author}</span>
      </div>  
    </button>
    )
  }