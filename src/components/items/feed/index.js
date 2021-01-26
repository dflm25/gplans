/**
 * 
 */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles
import styles from './styles';

function Feed({ item, index }){
  return (
    <View key={`item-${index}`} style={styles.content}>
      <View style={styles.header}>
        <Image source={{ uri: item.picture["medium"] }} style={styles.profilePic} />
        <View>
          <Text>{item.gender}</Text>
          <Text>{item.name["first"]} {item.name["last"]}</Text>
        </View>
      </View>
      <View style={styles.contentCard}>
        <Image
          style={styles.picture}
          source={{
            uri: 'https://images.pexels.com/photos/842546/pexels-photo-842546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
          }}
        />
      </View>
      <View style={styles.footer}>
        <View style={[styles.footerItem]}>
          <Icon name="favorite" color="#333" size={24} />
          <Text>Me gusta</Text>
        </View>
        <View style={[styles.footerItem, styles.comment]}>
          <Icon name="note" color="#333" size={24} />
          <Text>Comentarios</Text>
        </View>
        <View style={[styles.footerItem, styles.share]}>
          <Icon name="send" color="#333" size={24} />
          <Text>Compartir</Text>
        </View>
      </View>
    </View>
  );
}

export default Feed;