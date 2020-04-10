import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { firebaseApp } from '../../utils/firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

const EditImg = styled.TouchableOpacity`
    border-radius: 20px;
    background-color: lightgrey;
    width: 120px;
    height: 120px;
    margin: 20px;
`
const Img = styled.Image`
    border-radius: 20px;
    width: 120px;
    height: 120px;
    resize-mode: stretch;
`

const ProfileImg = ({ }) => {
    const [uri, setURI] = useState('')

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            })
            if (!result.cancelled) {
                let imgURL = await upLoad(result.uri)
                console.log(imgURL)
                setURI(imgURL)
            }
        } catch (E) {
            console.log(E);
        }
    }

    const upLoad = async (img) => {
        let ref = firebaseApp.storage().ref().child('/images/test.jpg')
        let response = await fetch(img)
        let blob = await response.blob()
        let snapshot = await ref.put(blob)
        return snapshot.ref.getDownloadURL()
    }

    const onPress = async () => {
        getPermissionAsync().then(() => {
            pickImage()
        })
    }

    return (
        <EditImg onPress={onPress}>
            <Img source={{ uri: uri }} />
        </EditImg>
    )

}

export default ProfileImg