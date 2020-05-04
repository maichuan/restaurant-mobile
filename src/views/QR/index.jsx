import React, { useState, useEffect } from 'react'
import withSafeArea from '../../hocs/withSafeView'
import NewTable from '../../components/options/NewTable'
import {
    ScrollContainer,
    Container,
    Content,
    Head,
    HeadText,
    BottomPart,
    AddTable,
    AddTableText,
} from './styled'

const QR = ({ navigation }) => {
    const [mVisible, setMVisible] = useState(false)

    const closeModal = () => {
        setMVisible(false)
    }

    return (
        <>
            <NewTable closeModal={closeModal} visible={mVisible} />
            <ScrollContainer>
                <Container>
                    <Content>
                        <Head><HeadText>Manage Table</HeadText></Head>
                    </Content>
                </Container>
            </ScrollContainer>
            <BottomPart>
                <AddTable onPress={() => { setMVisible(true) }}><AddTableText>New Table</AddTableText></AddTable>
            </BottomPart>
        </>
    )
}

QR.navigationOptions = props => ({
    title: 'asd',
})

export default withSafeArea(QR)