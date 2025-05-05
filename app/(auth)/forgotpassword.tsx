import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleResetLink = () => {
    if (!email.toLowerCase().endsWith('@gmail.com')) {
      setShowModal(true);
      return;
    }

    console.log('Send reset link to:', email);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 items-center justify-center px-5 py-8">
        <Text className="text-[40px] font-bold text-center">Forgot Password</Text>
        <Text className="text-[13px] text-gray-600 mt-2 mb-6 text-center">
          Enter your email below to receive a password reset link
        </Text>

        <View className="w-full max-w-md p-4">
          <View>
            <Text className="text-sm font-semibold text-gray-700 mb-1">Email</Text>
            <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 mb-6 bg-gray-100">
              <MaterialIcons name="email" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-2 text-gray-700"
                placeholder="you@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <TouchableOpacity
              className="bg-indigo-600 py-3 rounded-lg mb-6"
              onPress={handleResetLink}
            >
              <Text className="text-center text-white font-semibold text-base">
                Send Reset Link
              </Text>
            </TouchableOpacity>
          </View>

          <Link href="/(auth)/login" asChild>
            <TouchableOpacity className="mt-4">
              <Text className="text-blue-600 text-center text-base">← Back to Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Modal Alert */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white w-4/5 rounded-2xl p-6 shadow-lg">
            <Text className="text-xl font-bold text-red-600 text-center mb-2">Invalid Email</Text>
            <Text className="text-sm text-gray-700 text-center mb-5">
              Please enter a valid Gmail address to receive the reset link.
            </Text>
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
