import { StyleSheet, View, Button, TextInput } from 'react-native'


const InputContainer = ({ textValue, onHandleChangeItem, addItem}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="New Item"
                placeholderTextColor="white"
                value={textValue}
                onChangeText={onHandleChangeItem}
            />
            <Button title="+ ADD" color={'#000'} onPress={addItem} />
        </View>
    )
}

export default InputContainer;

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        justifyContent: 'space-between',
    },
    input: {
        width: 200,
        height: 50,
        fontSize: 17,
        paddingLeft: 12,
        color: '#fff'
    }
})