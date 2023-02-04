import React from 'react'
import Button from './Button'

const KilometerButton = ({activeBtn, setActiveBtn, kilometers,btn}) => {
  return (
    <Button
    className={`${
      activeBtn? "bg-black text-white" : "bg-[#DDDDDD] text-white"
    } py-1 px-3 text-sm hover:bg-black`}
    onClick={() => setActiveBtn({ btn: true })}
  >
    {kilometers}
  </Button>
  )
}

export default KilometerButton
