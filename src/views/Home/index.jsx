import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import withSafeArea from '../../hocs/withSafeView'
import { serverClient } from '../../api'
import OrderCard from '../../components/home/OrderCard'
import {
    Container,
    HeadBox,
    HeadText,
    StatusBox,
    StatusText,
    Switch,
    OrderBox,
    OrderHeader,
    OrderHeaderText,
    OrderContent
} from './styled'

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
            <HeadBox>
                <HeadText>Welcome to your restaurant</HeadText>
            </HeadBox>
            <StatusBox>
                <StatusText>Status</StatusText>
            </StatusBox>
            <Switch onValueChange={toggleResStatus} value={resStatus} />
            <OrderBox>
                <OrderHeader><OrderHeaderText>Order List</OrderHeaderText></OrderHeader>
                <OrderContent>
                    <OrderCard />
                </OrderContent>
            </OrderBox>
        </Container>
    )
}

export default withSafeArea(Home)