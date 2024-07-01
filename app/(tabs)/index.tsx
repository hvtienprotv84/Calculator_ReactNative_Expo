// index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';

const App = () => {
    const [formInput, setFormInput] = useState('');

    const handleSubmit = () => {
        try {
            setFormInput(eval(formInput).toString());
        } catch (error) {
            console.error('Error during calculation:', error);
            Alert.alert('Error', 'Perhitungan tidak valid');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerSibling}>
                <Text style={styles.h1}>React Native - Calculator</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập phép tính của bạn!"
                    onChangeText={setFormInput}
                    value={formInput}
                />

                <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput('')}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`(${formInput})`)}>
                        <Text style={styles.buttonText}>( )</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}%`)}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}/`)}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    {/* Buttons 7-9 and Multiplication */}
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}7`)}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}8`)}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}9`)}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}*`)}>
                        <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    {/* Buttons 4-6 and Subtraction */}
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}4`)}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}5`)}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}6`)}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}-`)}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    {/* Buttons 1-3 and Addition */}
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}1`)}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}2`)}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}3`)}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}+`)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    {/* Buttons 0, Decimal, and Submission */}
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}0`)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFormInput(`${formInput}.`)}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={[styles.buttonText]}>=</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.border}></View>
                    <Text style={styles.copy}>&copy; Mọi Bản Quyền Thuộc Về <Text style={styles.copy_name}>Huỳnh Vĩnh Tiến</Text></Text>
                </View>

            </View>
        </View>
    );
};

export default App;
