import React, { ReactNode } from 'react';
import classes from "./styles.module.scss"

interface AppProps {
  introTitle: string;
  title: string;
  options: Array<{title: string, onClick: React.MouseEventHandler<HTMLButtonElement>}>;
  gridSizes: {gridTemplateColumns: string, gridTemplateRows: string}
  children: Array<{child: ReactNode, gridRow: string, gridColumn: string}>
}

export default function PostSection(props: AppProps){
  
  const {
    introTitle,
    title,
    options,
    gridSizes,
    children
  } = props

  return(
    <div>
      <div className={classes.sectionHeader}>
        <div className={classes.introTitle}>{introTitle}</div>
        <div className={classes.title}>{title}</div>
        <div className={classes.divider}/>
        <div>{options.map(({title, onClick}) => {
          return <button onClick={onClick}>{title}</button>
        })}</div>
      </div>    
      <div className={classes.postsGrid} style={gridSizes}>
        {children.map(({child, gridRow, gridColumn}, ix) => {
          return (
            <div style={{
              gridColumn: gridColumn,
              gridRow: gridRow
            }}>
              {child}
            </div>
          )
        })}
      </div>
    </div>
  )

}