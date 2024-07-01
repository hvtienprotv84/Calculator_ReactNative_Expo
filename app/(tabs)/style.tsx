// style.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    containerSibling: {
        width: '80%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    button: {
        width: '23%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 28,
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    border: {
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    copy:{
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: -5,
    },
    copy_name:{
        color: 'red',
    },
});

export { styles };
