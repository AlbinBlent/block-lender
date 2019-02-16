import React from 'react'
import Typography from '@material-ui/core/Typography';
import './info.scss'

export default function InfoView(props) {
  return (
    <div className="info-view">
      <Typography component="h2" variant="h3">
        Det här är Forefront
      </Typography>
      <p>
      <Typography variant="subtitle1">
      Forefront Consulting är ett verksamhets- och IT-konsultbolag med drygt 380 anställda. Med kontor på åtta orter i Sverige och en offshoreverksamhet i Kina guidar vi företag och organisationer i det digitala landskapet och övriga transformationer.
      </Typography>
      </p>
      <Typography variant="subtitle1">
      Oavsett om uppdraget avser affärsverksamhet, teknologiska plattformar eller designlösningar är utgångspunkten alltid att först skapa en samsyn kring nödvändiga förändringar för att sedan kunna realisera dessa på bästa sätt för avsedd effekt.
      </Typography>
    </div>
  )
}
