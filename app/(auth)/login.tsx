import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function SignInScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 items-center justify-center px-5 py-8">
        <Text className="text-[40px] font-bold text-center">Welcome Back</Text>
        <Text className="text-[16px] text-gray-600 mt-2 mb-4 text-center">
          Sign in with your account
        </Text>

        {/* Main Container */}
        <View className="w-full max-w-md p-4">
          {/* Email Label + Input */}
          <View>
            <Text className="text-sm font-semibold text-gray-700 mb-1">Email</Text>
            <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 mb-4">
              <MaterialIcons name="email" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-2 text-gray-700"
                placeholder="your@email.com"
                keyboardType="email-address"
              />
            </View>

            {/* Password Label + Input */}
            <Text className="text-sm font-semibold text-gray-700 mb-1">Password</Text>
            <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2">
              <MaterialIcons name="lock" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-2 text-gray-700"
                placeholder="********"
                secureTextEntry
              />
            </View>

            {/* Forgot Password */}
            <Link href="/(auth)/forgotpassword" asChild>
                <TouchableOpacity className="self-end mt-4 mb-4">
                    <Text className="text-[16px] text-blue-600">Forgot Password?</Text>
                </TouchableOpacity>
            </Link>

            {/* Sign In Button */}
            <TouchableOpacity className="bg-indigo-600 py-3 mt-2 rounded-lg mb-4">
              <Text className="text-center text-white font-semibold text-base">Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Divider Text */}
          <Text className="text-center mt-2 text-xs text-gray-500 mb-3">OR CONTINUE WITH</Text>

          {/* Social Buttons */}
          <View className="flex-row justify-between space-x-6 mt-3">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-gray-300 rounded-md py-2">
              <AntDesign name="google" size={20} color="#DB4437" />
              <Text className="text-sm ml-2 text-gray-700">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-gray-300 rounded-md py-2">
              <FontAwesome name="facebook" size={20} color="#1877F2" />
              <Text className="text-sm ml-2 text-gray-700">Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Prompt */}
          <Text className="text-center text-1xl text-gray-600 mt-5">
            Don’t have an account?{' '}
            <Text className="text-blue-600">Sign Up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}