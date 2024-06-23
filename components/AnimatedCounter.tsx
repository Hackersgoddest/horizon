'use client'

import CountUp from 'react-countup'


const AnimatedCounter = ({ totalCurrentBalance }: Pick<TotlaBalanceBoxProps, "totalCurrentBalance">) => {
  return (
    <div className="w-full">
        <CountUp
         prefix='$'
         decimal=','
         decimals={2}
         end={totalCurrentBalance}
        />
    </div>
  )
}

export default AnimatedCounter