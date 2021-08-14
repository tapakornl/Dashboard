import React from "react";
import { NetWorth } from './NetWorth'
import { DailyIncome } from './DailyIncome'

export const SummarySection = (props: any) => {
  return (
    <div style={{background: 'tomato', width:'100%', height:'300px', padding:'20px'}}>
      <NetWorth>

      </NetWorth>
      <DailyIncome>

      </DailyIncome>
    </div>
  )
}