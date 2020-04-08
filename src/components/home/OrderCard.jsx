import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.TouchableOpacity`
    border-bottom-width: 1px;
    border-color: grey;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`
const MenuBox = styled.View`
`

const MenuText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`
const DesText = styled.Text``

const QTYbox = styled.View`
`

const QTYnum = styled.Text`
    font-size: 42px;
    font-weight: bold;
`

const OrderCard = ({ orderData }) => {

    return (
        <Card>
            <MenuBox>
                <MenuText>{orderData.name}</MenuText>
                <DesText>{orderData.des}</DesText>
            </MenuBox>
            <QTYnum>{orderData.qty}</QTYnum>
        </Card>
    )
}

OrderCard.propTypes = {
    orderData: PropTypes.object,
}

OrderCard.defaultProps = {
    orderData: {
        name: 'คุณก้อง',
        des: 'เบอเกอร์ท่านก้อง',
        qty: 1
    }
}


export default OrderCard