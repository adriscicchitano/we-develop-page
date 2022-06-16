import React, { ReactNode } from 'react';

interface AppProps {
  introTitle: string;
  title: string;
  options: Array<{title: string, onClick: React.MouseEventHandler<HTMLButtonElement>}>;
  children: Array<ReactNode>
}

export default function PostSection(props: AppProps){
  
  const {
    introTitle,
    title,
    options,
    children
  } = props

  return(
    <div>
      <div>{introTitle}</div>
      <div>{title}</div>
      <div>{options.map(({title, onClick}) => {
        return <button onClick={onClick}>{title}</button>
      })}</div>
      {children}
    </div>
  )

}