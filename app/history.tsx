import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Type for the service items
type Service = {
  id: number;
  serviceType: string;
  status: string;
  date: string;
  earnings: string;
  details: string;
};

export default function HistoryScreen() {
  const serviceHistory: Service[] = [
    {
      id: 1,
      serviceType: 'Flat Tire',
      status: 'Completed',
      date: 'April 30, 2025',
      earnings: '₱800',
      details: 'The tire was replaced using a new tube.',
    },
    {
      id: 2,
      serviceType: 'Battery Boost',
      status: 'Declined',
      date: 'April 25, 2025',
      earnings: '₱0',
      details: 'The customer declined the service after a phone call.',
    },
    {
      id: 3,
      serviceType: 'Engine Trouble',
      status: 'Completed',
      date: 'April 20, 2025',
      earnings: '₱1,500',
      details: 'The engine issue was due to a faulty spark plug, which was replaced.',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 px-5 py-10">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-2xl font-bold text-gray-800">History</Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-indigo-600">Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Service History */}
        <View className="space-y-3">
          {serviceHistory.length === 0 ? (
            <View className="items-center py-10">
              <Text className="text-lg text-gray-600">No completed requests yet</Text>
            </View>
          ) : (
            serviceHistory.map((service) => (
              <View
                key={service.id}
                className="bg-gray-100 p-4 rounded-xl shadow-sm"
              >
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="font-semibold text-gray-800">{service.serviceType}</Text>
                  <Text
                    className={`text-sm font-semibold ${
                      service.status === 'Completed' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {service.status}
                  </Text>
                </View>
                <Text className="text-sm text-gray-600">Date: {service.date}</Text>
                <Text className="text-sm text-gray-600">Earnings: {service.earnings}</Text>
                <TouchableOpacity
                  className="mt-2 flex-row items-center space-x-2"
                  onPress={() => handleViewDetails(service)}
                >
                  <MaterialIcons name="info" size={20} color="#4F46E5" />
                  <Text className="text-sm text-indigo-600">View Details</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center border-t border-gray-200 py-3 bg-white">
        <TouchableOpacity className="items-center">
          <MaterialIcons name="dashboard" size={24} color="gray" />
          <Text className="text-xs text-gray-500">Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <FontAwesome5 name="history" size={24} color="#4F46E5" />
          <Text className="text-xs text-indigo-700">History</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <FontAwesome5 name="user-cog" size={24} color="gray" />
          <Text className="text-xs text-gray-500">Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Service Details */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white w-4/5 rounded-2xl p-6 shadow-lg">
            {selectedService && (
              <>
                <Text className="text-xl font-bold text-gray-800 mb-2">Service Details</Text>
                <Text className="text-sm text-gray-600 mb-3">Service Type: {selectedService.serviceType}</Text>
                <Text className="text-sm text-gray-600 mb-3">Status: {selectedService.status}</Text>
                <Text className="text-sm text-gray-600 mb-3">Date: {selectedService.date}</Text>
                <Text className="text-sm text-gray-600 mb-3">Earnings: {selectedService.earnings}</Text>
                <Text className="text-sm text-gray-600 mb-3">Details: {selectedService.details}</Text>

                <TouchableOpacity
                  className="bg-indigo-600 py-2 rounded-lg mt-3"
                  onPress={closeModal}
                >
                  <Text className="text-white text-center font-semibold">Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
