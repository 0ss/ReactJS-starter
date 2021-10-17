import React from 'react'

interface CountryImageProps {
    code:string
}

export const CountryImage : React.FC<CountryImageProps>= ({code}) => {
    return (
        <img
        src={`https://flagcdn.com/20x15/${code}.png`}
        loading="lazy"
        alt="flag"
      />
    )
}
