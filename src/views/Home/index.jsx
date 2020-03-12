import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import withSafeArea from '../../hocs/withSafeView'
import { serverClient } from '../../api'
import { Container, Content, Head, Switch, OrderBox } from './styled'

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
            <Content>
                <Head></Head>
                <Switch onValueChange={toggleResStatus} value={resStatus} />
                <OrderBox></OrderBox>
            </Content>
        </Container>
    )
}

export default withSafeArea(Home)