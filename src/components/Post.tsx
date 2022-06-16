import React from 'react';

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
    <button onClick={onClick} style={{backgroundImage: `url(${backgroundImageURL})`}}>
      <div>{subject}</div>
      <div>{title}</div>
      <div>{author}</div>
    </button>
    )
  }