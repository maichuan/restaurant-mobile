import React, { useEffect, useState } from 'react'
import { Text, Alert } from 'react-native'
import Constants from '../../utils/constants'
import { serverClient } from '../../api'
import OrderCard from '../../components/home/OrderCard'
import {
    Container,
    HeadBox,
    HeadText,
    StatusBox,
    StatusText,
    StatusToggle,
    OrderBox,
    OrderHeader,
    OrderHeaderText,
    OrderContent
} from './styled'
import { withTheme } from 'styled-components'

const Home = ({ navigation }) => {
    const [resStatus, setResStatus] = useState(false)
    const [statusColor, setStatusColor] = useState({ backgroundColor: Constants.redColor })
    const [statusText, setStatusText] = useState('Close')

    // useEffect(() => {
    //     console.log(resStatus);
    //     let color = ''
    //         (resStatus) ? color = 'lightgreen' : color = 'red'
    //     setStatusColor({ backgroundColor: color })

    // })

    const toggleResStatus = () => {
        if (resStatus) {
            // Alert user wether they want to close their restaurant.
            Alert.alert(
                'Do you want to close your restaurant?',
                'Remaining order will be lost.',
                [{
                    text: 'Close my restaurant', onPress: () => {
                        setResStatus(false)
                        setStatusColor({ backgroundColor: Constants.redColor })
                        setStatusText('Close')
                    }
                }, {
                    text: 'Cancel'
                }]
            )

        } else {
            setResStatus(true)
            setStatusColor({ backgroundColor: 'lightgreen' })
            setStatusText('Open')
        }
    }

    return (
        <Container>
            <HeadBox>
                <HeadText>Welcome to your restaurant</HeadText>
            </HeadBox>
            <StatusBox>
                <StatusText>Status</StatusText>
                <StatusToggle onPress={toggleResStatus} style={statusColor} ><Text style={{ color: 'white', fontWeight: 'bold' }}>{statusText}</Text></StatusToggle>
            </StatusBox>
            <OrderBox>
                <OrderHeader><OrderHeaderText>Order List</OrderHeaderText></OrderHeader>
                <OrderContent>
                    <OrderCard />
                </OrderContent>
            </OrderBox>
        </Container>
    )
}

export default Home