import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const TeacherItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: "https://avatars1.githubusercontent.com/u/67931411?s=400&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4" }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marcos Botene</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Pastelão Pastelão Pastelão Pastelão Pastelão Pastelão
                {'\n'}{'\n'}
                Pastelão Pastelão Pastelão Pastelão Pastelão PastelãoPastelão Pastelão
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {''}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutLineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
};

export default TeacherItem;