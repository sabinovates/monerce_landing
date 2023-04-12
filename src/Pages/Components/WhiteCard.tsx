import React from 'react'

interface WhiteCardProp{
    icon: string;
    title: string;
    detail: string;
}

const WhiteCard: React.FC<WhiteCardProp> = ({icon, title, detail}: WhiteCardProp) => {
  return (
    <div className='white-card'>
        <div className="image">
            <img src={`assets/images/${icon}.svg`} alt="icon"/>
        </div>
        <div className="wtitle">{title}</div>
        <div className="detail">{detail}</div>
    </div>
  )
}

export default WhiteCard