import React from 'react';
import classes from "./styles.module.scss"

interface AppProps {
  categories: Array<{title: string, onClick: React.MouseEventHandler<HTMLButtonElement>}>
}

export default function Breadcrumb(props: AppProps){
  
  const { categories } = props
  
  return(
    <div className={classes.breadcrumb}>
      <span className={classes.breadcrumbTitle}>Categories:</span>
      <div className={classes.buttonContainer}>
        {
          categories.map( ({title, onClick}) => {
            return <button onClick={onClick}>{title}</button>
          })
        }
      </div>
    </div>
  )
    
}
