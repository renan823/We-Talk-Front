import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#FF6F91',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 50,
        padding: 8,
        width: 160
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    header: {
        margin: 10,
        padding: 10,
    },
    input: {
        borderColor: '#FF6F91',
        borderWidth: 3,
        borderRadius: 15,
        height: 50,
        padding: 6
    },
    label: {
        margin: 10,
        padding: 10
    },
    labelText: {
        color: '#FF6F91',
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        marginTop: 70
    },
    linkText: {
        backgroundColor: '#FFF',
        color: '#FF9671',
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#FF9671',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    title: {
        color: '#FF6F91',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'left'
    }
});