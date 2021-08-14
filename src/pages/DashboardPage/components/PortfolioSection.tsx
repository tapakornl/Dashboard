import React from "react";
import { Portfolio } from './Portfolio'
import { PortfolioExposure } from './PortfolioExposure'

export const PortfolioSection = (props: any) => {
  return (
    <div style={{ background: 'tomato', width: '100%', height: '300px', padding: '20px', marginTop:'20px' }}>
      <Portfolio>

      </Portfolio>
      <PortfolioExposure>

      </PortfolioExposure>
    </div>
  )
}