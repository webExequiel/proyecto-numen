import { useState } from 'react'
import { Card, Content, Title, Cost, FeatureListItem, ActionButton } from './ViandasCard.CSS'

const ViandasCard = () => {

  const [features] = useState([
    "10GB Space",
    "S Domain Names",
    "Unlimitted Mails"
  ])
  return (
    <div>
      <Card>
        <Content>
          <Title></Title>
          <Cost></Cost>
          {
            features.map(item => (
              <FeatureListItem>
                <span>{item}</span>
              </FeatureListItem>
            ))
          }
          <ActionButton>Ordenar ahora</ActionButton>
        </Content>
      </Card>
    </div>
  )
}

export default ViandasCard