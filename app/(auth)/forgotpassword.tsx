import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 items-center justify-center px-5 py-8">
        <Text className="text-[40px] font-bold text-center ">Forgot Password</Text>
        <Text className="text-[16px] text-gray-600 mt-2 mb-6 text-center">
          Enter your email below to receive a password reset link
        </Text>

        {/* Main Container */}
        <View className="w-full max-w-md p-4">
          {/* Email Label + Input */}
          <View>
            <Text className="text-sm font-semibold text-gray-700 mb-1">Email</Text>
            <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 mb-6 bg-gray-100">
              <MaterialIcons name="email" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-2 text-gray-700"
                placeholder="you@yourmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Send Reset Link Button */}
            <TouchableOpacity
              className="bg-indigo-600 py-3 rounded-lg mb-6"
              onPress={() => console.log('Send reset link')}
            >
              <Text className="text-center text-white font-semibold text-base">
                Send Reset Link
              </Text>
            </TouchableOpacity>
          </View>

          {/* Back to Sign In Link */}
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity className="mt-4">
              <Text className="text-blue-600 text-center text-base">← Back to Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
