import { StyleSheet, Text, View } from 'react-native';

const CardCidade = ({ nome, uf }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text>
            <Text> - </Text>
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
};

export default CardCidade;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#444'
    },
    cidade: {
        fontSize: 18,
        color: '#ff0202',
        fontWeight: '600'
    },
    uf: {
        fontSize: 18,
        color: '#0206ff',
        fontWeight: '900'
    }
});
