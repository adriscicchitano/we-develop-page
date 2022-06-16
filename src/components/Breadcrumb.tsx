import React from 'react';

interface AppProps {
  categories: Array<{title: string, onClick: React.MouseEventHandler<HTMLButtonElement>}>
}

export default function Breadcrumb(props: AppProps){
  
  const { categories } = props
  
  return(
    <div>
      Categories: {
        categories.map( ({title, onClick}) => {
          return <button onClick={onClick}>{title}</button>
        })
      }
    </div>
  )
    
}
