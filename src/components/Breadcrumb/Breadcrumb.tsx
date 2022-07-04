import React from 'react';
import classes from "./styles.module.scss"
import search from "../../img/search.png"

interface AppProps {
  categories: Array<{title: string, onClick: React.MouseEventHandler<HTMLButtonElement>}>
}

export default function Breadcrumb(props: AppProps){
  
  const { categories } = props
  
  return(
    <div className={classes.breadcrumb}>
      <div className={classes.breadcrumContent}>
        <span className={classes.breadcrumbTitle}>Categories:</span>
        <div className={classes.buttonContainer}>
          {
            categories.map( ({title, onClick}) => {
              return <button onClick={onClick}>{title}</button>
            })
          }
        </div>
        <div className={classes.mobileBreadcrumb}>
          <select className={classes.categoriesDropdown}>
            <option value="">All</option>
            {
              categories.map( ({title, onClick}) => {
                return <option value={title}>{title}</option>
              })
            }
          </select>
        </div>
      </div>
      <button className={classes.searchButton}><img src={search} alt=""/></button>
    </div>
  )
    
}
