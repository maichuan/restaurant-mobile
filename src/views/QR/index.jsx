import React, { useState, useEffect } from 'react'
import withSafeArea from '../../hocs/withSafeView'
import NewTable from '../../components/options/NewTable'
import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { PropTypes } from "mobx-react";
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

const QR = ({ navigation, authStore }) => {
    const [mVisible, setMVisible] = useState(false)

    const closeModal = () => {
        setMVisible(false)
    }

    return (
        <>
            <NewTable closeModal={closeModal} visible={mVisible} resId={authStore.restaurant.id} />
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

QR.propTypes = {
    navigation: PropTypes.object,
};

export default compose(
    inject(({ rootStore }) => ({
        spinnerStore: rootStore.spinnerStore,
        authStore: rootStore.authStore,
    })),
    observer
)(QR);