import { StyleSheet, View, FlatList } from 'react-native'


const ListContainer = ({ itemsList, renderListItem }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={itemsList}
                renderItem={renderListItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ListContainer;

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 25,
    },
})

