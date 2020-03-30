import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import withSafeArea from '../../hocs/withSafeView'
import { serverClient } from '../../api'
import { Container, ContentBox, Content, HeadBox, Switch, OrderBox } from './styled'
import OrderCard from '../../components/home/OrderCard'

const Home = ({ navigation }) => {
    const [resStatus, setResStatus] = useState(false)

    const toggleResStatus = () => {
        if (resStatus) {
            // Alert user wether they want to close their restaurant.
            setResStatus(false)
        } else {
            setResStatus(true)
        }
    }

    return (
        <Container>
            <ContentBox>
                <Content>
                    <HeadBox></HeadBox>
                    <Switch onValueChange={toggleResStatus} value={resStatus} />
                    <OrderBox><OrderCard /></OrderBox>
                </Content>
            </ContentBox>
        </Container>
    )
}

export default withSafeArea(Home)