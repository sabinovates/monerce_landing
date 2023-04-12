import React from 'react'

interface GreyCardProps{
    icon: string;
    title: string;
    detail: string;
}

const GreyCard: React.FC<GreyCardProps> = ({icon, title, detail}: GreyCardProps) => {
  return (
    <div className='grey-card'>
        <div className="image">
            <img src={`assets/images/${icon}.svg`} alt="icon"/>
        </div>
        <div className="content">
            <div className="gtitle">{title}</div>
            <div className="detail">{detail}</div>
        </div>
    </div>
  )
}

export default GreyCard