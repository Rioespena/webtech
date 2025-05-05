import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function MechanicDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  const toggleAvailability = () => setIsAvailable((prev) => !prev);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 px-5 py-10">

        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-2xl font-bold text-gray-800">Hello, Berto!</Text>
          <View className="flex-row items-center">
            <Text className="mr-2 text-gray-700 font-medium">Available</Text>
            <Switch
              value={isAvailable}
              onValueChange={toggleAvailability}
              thumbColor={isAvailable ? '#4ade80' : '#ccc'}
            />
          </View>
        </View>

        {/* Active Job */}
        <View className="bg-indigo-100 rounded-2xl p-4 mb-5">
          <Text className="text-lg font-semibold text-indigo-900 mb-1">Active Job</Text>
          <Text className="text-sm text-gray-700">Rescue: Flat tire at San Juan Road</Text>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-sm text-gray-600">ETA: 10 mins</Text>
            <TouchableOpacity className="bg-indigo-600 px-4 py-2 rounded-lg">
              <Text className="text-white text-sm font-semibold">View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Incoming Requests */}
        <Text className="text-lg font-bold text-gray-800 mb-3">Incoming Requests</Text>
        <View className="space-y-3 mb-5">
          {['Battery Boost', 'Engine Trouble', 'Flat Tire'].map((job, idx) => (
            <View key={idx} className="bg-gray-100 p-4 rounded-xl shadow-sm">
              <Text className="font-semibold text-gray-800">{job}</Text>
              <Text className="text-sm text-gray-600">3.2 km away • Rizal Street</Text>
              <View className="flex-row justify-end mt-2 space-x-3">
                <TouchableOpacity className="bg-green-500 px-3 py-1.5 rounded-lg">
                  <Text className="text-white font-medium text-sm">Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-red-500 px-3 py-1.5 rounded-lg">
                  <Text className="text-white font-medium text-sm">Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Earnings Summary */}
        <View className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm mb-5">
          <Text className="text-lg font-bold text-gray-800 mb-1">Earnings Summary</Text>
          <Text className="text-sm text-gray-600 mb-1">Today: ₱1,200</Text>
          <Text className="text-sm text-gray-600">This Month: ₱18,400</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center border-t border-gray-200 py-3 bg-white">
        <TouchableOpacity className="items-center">
          <MaterialIcons name="dashboard" size={24} color="#4F46E5" />
          <Text className="text-xs text-indigo-700">Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="time-outline" size={24} color="gray" />
          <Text className="text-xs text-gray-500">History</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <FontAwesome5 name="user-cog" size={24} color="gray" />
          <Text className="text-xs text-gray-500">Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
