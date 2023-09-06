import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import Modal from './components/Modal'
import ListContainer from './components/ListContainer'
import InputContainer from './components/InputTextContainer'
import Material from '@expo/vector-icons/MaterialIcons'

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [color, setColor] = useState('#fe6855')

  const onHandleChangeItem = text => setTextValue(text)

  const cambiarColor = (item) => {
    const nuevoColor = color === '#fe6855' ? '#4DA167' : '#fe6855';
    item.color = nuevoColor;
    setColor(nuevoColor);
  }

  const addItem = () => {
    if (textValue === '') {
      return
    }
    console.log('ejecuta la funcion de agregar elemnto')
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue, color: '#fe6855' },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: item.color, shadowColor: item.color, }]}
      onPress={() => cambiarColor(item)}
      onLongPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <InputContainer textValue={textValue} onHandleChangeItem={onHandleChangeItem} addItem={addItem} />
      <ListContainer itemsList={itemsList} renderListItem={renderListItem} />
      <View style={styles.press}>
        <Material name='touch-app' size={20} color={'#4DA167'} />
        <Text style={[styles.textItem, { color: '#4DA167' }]}>Press to complete</Text>
      </View>
      <View style={styles.press}>
        <Material name='touch-app' size={25} color={'#fe6755'} />
        <Text style={[styles.textItem, { color: '#fe6755' }]}>Long press to delete</Text>
      </View>

      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} setModalVisible={setModalVisible} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#393d3f',
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 25,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#fe6855',
    shadowColor: '#fe6855',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
  },
  press: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
})
