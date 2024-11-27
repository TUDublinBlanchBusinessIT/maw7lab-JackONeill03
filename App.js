import { Button, View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { db } from './firebaseConfig';

export default function App() {
  
    const styles = StyleSheet.create({
      textbox: {
        borderWidth: 1,
        marginBottom: 10, 
        padding: 8 
      },
      listItem: {
        padding: 16,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
      listItemText: {
        fontSize: 16,
      },
    })

    const [users, setUsers] = useState([
        { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      ]);

      useEffect(() => {
        // Fetching data from the 'users' collection
        db.collection('users')
          .get()
          .then(querySnapshot => {
            setUsers(
              querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
              }))
            );
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      }, [db, name, email]); //the array at the end will set this useEffect to call when any one of these things changes  
  
    //Add two useState() hooks for name and email here
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function saveData() {
      if (db){
        try {
            await db.collection('users').add({
                name: "Joe Bloggs",
                email: "joeb@joeb.com",

            });
            alert('Data saved successfully!');
            setName('');
            setEmail('');
        } catch (err) {
            alert(`Error adding document: ${err.message}`);
            console.error('Error adding document:', err);
        }
      }
      else {
        alert("nodb");
      }
    };
   
    return (
      <View style={{ padding: 20 }}>

          {/* TextInput for Name */}
          <TextInput 
            style={styles.textbox} 
            placeholder="Enter Name" 
            value={name} 
            onChangeText={(text) => setName(text)} 
          />

          {/* TextInput for Email */}
          <TextInput 
            style={styles.textbox} 
            placeholder="Enter Email" 
            value={email} 
            onChangeText={(text) => setEmail(text)} 
          />



        <Button title="Save User" onPress={saveData} />
        
        <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>Name: {item.name}</Text>
                <Text style={styles.listItemText}>Email: {item.email}</Text>
            </View>
            )}
        />
      </View>
    );
  }