import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    ball: {
        width: 30,
        height: 30,
        backgroundColor: colors.thirdLight,
        borderRadius: 15
    },
    click: {
        width: 30,
        height: 30,
        backgroundColor: colors.fourth,
        borderRadius: 15
    }
})