import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function PayMongoScreen() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    exp: '',
    cvc: '',
  });
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handlePayment = () => {
    if (!selectedMethod) {
      setModalMessage('Please select a payment method.');
      setShowModal(true);
      return;
    }

    if (selectedMethod === 'card') {
      if (
        !cardDetails.number ||
        !cardDetails.exp ||
        !cardDetails.cvc ||
        !email
      ) {
        setModalMessage('Please fill out all card details.');
        setShowModal(true);
        return;
      }
    }

    setModalMessage('Payment processing...');
    setShowModal(true);
  };

  const renderCardInputs = () => (
    <View className="space-y-3 mt-4">
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
        placeholder="Card Number"
        keyboardType="number-pad"
        value={cardDetails.number}
        onChangeText={(text) => setCardDetails({ ...cardDetails, number: text })}
      />
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
        placeholder="MM/YY"
        value={cardDetails.exp}
        onChangeText={(text) => setCardDetails({ ...cardDetails, exp: text })}
      />
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
        placeholder="CVC"
        keyboardType="number-pad"
        value={cardDetails.cvc}
        onChangeText={(text) => setCardDetails({ ...cardDetails, cvc: text })}
      />
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 p-6">
        <Text className="text-[24px] font-bold mb-2">Payment Summary</Text>
        <View className="bg-gray-100 rounded-xl p-4 mb-6">
          <Text className="text-gray-700">Roadside Assistance</Text>
          <Text className="text-xl font-bold mt-2">₱800.00</Text>
        </View>

        <Text className="text-lg font-semibold mb-2">Select Payment Method</Text>
        <View className="space-y-3">
          <TouchableOpacity
            className={`flex-row items-center border px-4 py-3 rounded-xl ${
              selectedMethod === 'gcash' ? 'border-blue-500' : 'border-gray-300'
            }`}
            onPress={() => setSelectedMethod('gcash')}
          >
            <FontAwesome5 name="wallet" size={20} color="#0F9D58" />
            <Text className="ml-3 text-base">GCash</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-row items-center border px-4 py-3 rounded-xl ${
              selectedMethod === 'grabpay' ? 'border-blue-500' : 'border-gray-300'
            }`}
            onPress={() => setSelectedMethod('grabpay')}
          >
            <AntDesign name="car" size={20} color="#00B14F" />
            <Text className="ml-3 text-base">GrabPay</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-row items-center border px-4 py-3 rounded-xl ${
              selectedMethod === 'card' ? 'border-blue-500' : 'border-gray-300'
            }`}
            onPress={() => setSelectedMethod('card')}
          >
            <MaterialIcons name="credit-card" size={20} color="#0070F3" />
            <Text className="ml-3 text-base">Credit / Debit Card</Text>
          </TouchableOpacity>
        </View>

        {selectedMethod === 'card' && renderCardInputs()}

        <TouchableOpacity
          className="bg-indigo-600 mt-6 py-3 rounded-xl"
          onPress={handlePayment}
        >
          <Text className="text-white text-center font-semibold text-base">Pay Now</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Alert Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-30">
          <View className="bg-white w-4/5 rounded-2xl p-6 shadow-lg">
            <Text className="text-xl font-bold text-indigo-600 text-center mb-2">Payment Status</Text>
            <Text className="text-sm text-gray-700 text-center mb-5">{modalMessage}</Text>
            <TouchableOpacity
              className="bg-indigo-600 py-2 rounded-lg"
              onPress={() => setShowModal(false)}
            >
              <Text className="text-white text-center font-semibold">OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
