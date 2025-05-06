import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@email.com');
  const [phone, setPhone] = useState('+63 912 345 6789');
  const [location, setLocation] = useState('Gubat, Sorsogon');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [profileSuccessModalVisible, setProfileSuccessModalVisible] = useState(false);

  const handleSaveProfileChanges = () => {
    console.log('Profile Updated:', { fullName, email, phone, location });
    setProfileSuccessModalVisible(true);
    setIsEditingProfile(false);
  };

  const handleSavePasswordChanges = () => {
    if (!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword) {
      setModalVisible(true);
      return;
    }

    console.log('Password Updated:', { currentPassword, newPassword });
    setSuccessModalVisible(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsEditingPassword(false);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <ScrollView
        className="bg-gray-100 px-5"
        contentContainerStyle={{ flexGrow: 1, paddingTop: 40, paddingBottom: 60 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            className="w-24 h-24 rounded-full border-2 border-indigo-500 mb-2"
          />
          <Text className="text-xl font-bold text-gray-800 mt-2">John Doe</Text>
          <Text className="text-gray-500">johndoe@email.com</Text>
          <TouchableOpacity className="mt-2 px-4 py-1 border border-indigo-500 rounded-full">
            <Text className="text-indigo-500 text-sm font-medium">Edit Profile Picture</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info Card */}
        <View className="bg-white rounded-2xl p-5 shadow-md mb-6 relative">
          <Text className="text-lg font-semibold mb-4 text-gray-800">Profile Information</Text>
          <TouchableOpacity
            className="absolute top-5 right-5 bg-gray-100 p-1 rounded-full"
            onPress={() => setIsEditingProfile(!isEditingProfile)}
          >
            <MaterialIcons name={isEditingProfile ? 'close' : 'edit'} size={20} color="#4F46E5" />
          </TouchableOpacity>

          {/* Full Name */}
          <View className="mb-4">
            <Text className="text-sm text-gray-500 mb-1">Full Name</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MaterialIcons name="person" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                editable={isEditingProfile}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
              />
            </View>
          </View>

          {/* Email */}
          <View className="mb-4">
            <Text className="text-sm text-gray-500 mb-1">Email</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MaterialIcons name="email" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                editable={isEditingProfile}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
              />
            </View>
          </View>

          {/* Phone */}
          <View className="mb-4">
            <Text className="text-sm text-gray-500 mb-1">Phone</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <Feather name="phone" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                editable={isEditingProfile}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone Number"
              />
            </View>
          </View>

          {/* Location */}
          <View className="mb-4">
            <Text className="text-sm text-gray-500 mb-1">Location</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MaterialIcons name="location-on" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                editable={isEditingProfile}
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
              />
            </View>
          </View>
        </View>

        {/* Change Password Card */}
        <View className="bg-white rounded-2xl p-5 shadow-md mb-6 relative">
          <Text className="text-lg font-semibold mb-4 text-gray-800">Change Password</Text>
          <TouchableOpacity
            className="absolute top-5 right-5 bg-gray-100 p-1 rounded-full"
            onPress={() => setIsEditingPassword(!isEditingPassword)}
          >
            <MaterialIcons name={isEditingPassword ? 'close' : 'edit'} size={20} color="#4F46E5" />
          </TouchableOpacity>

          {/* Current Password */}
          <View className="mb-4">
            <Text className="text-sm text-gray-500 mb-1">Current Password</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MaterialIcons name="lock" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                secureTextEntry={!showPassword}
                editable={isEditingPassword}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Current Password"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ paddingHorizontal: 8 }}>
                <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>

          {/* New Password */}
          <View className="mb-4">
            <Text className="text-sm text-gray-500 mb-1">New Password</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MaterialIcons name="lock" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                secureTextEntry={!showPassword}
                editable={isEditingPassword}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="New Password"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ paddingHorizontal: 8 }}>
                <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View>
            <Text className="text-sm text-gray-500 mb-1">Confirm Password</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <MaterialIcons name="lock" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                secureTextEntry={!showPassword}
                editable={isEditingPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm New Password"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ paddingHorizontal: 8 }}>
                <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Save Button */}
        {(isEditingProfile || isEditingPassword) && (
          <TouchableOpacity
            className="bg-indigo-600 py-4 rounded-xl mb-4"
            onPress={isEditingProfile ? handleSaveProfileChanges : handleSavePasswordChanges}
          >
            <Text className="text-center text-white font-semibold text-base">Save Changes</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity className="py-3 rounded-xl border border-red-500">
          <Text className="text-center text-red-500 font-semibold">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Updated Modal for Incomplete Fields */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 30,
              paddingHorizontal: 25,
              borderRadius: 20,
              alignItems: 'center',
              width: '80%',
              elevation: 5,
            }}
          >
            <MaterialIcons name="error-outline" size={60} color="#F44336" style={{ marginBottom: 15 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' }}>
              Missing Information
            </Text>
            <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 }}>
              Please fill out all password fields correctly.
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: '#F44336', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8 }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Password Success Modal */}
      <Modal visible={successModalVisible} transparent animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 20, alignItems: 'center', width: '80%' }}>
            <MaterialIcons name="check-circle" size={60} color="#4CAF50" style={{ marginBottom: 15 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Password Updated!</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>Your password has been changed successfully.</Text>
            <TouchableOpacity
              style={{ backgroundColor: '#4CAF50', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8 }}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Profile Success Modal */}
      <Modal visible={profileSuccessModalVisible} transparent animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 20, alignItems: 'center', width: '80%' }}>
            <MaterialIcons name="check-circle" size={60} color="#4CAF50" style={{ marginBottom: 15 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Profile Updated!</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>Your profile information was successfully updated.</Text>
            <TouchableOpacity
              style={{ backgroundColor: '#4CAF50', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8 }}
              onPress={() => setProfileSuccessModalVisible(false)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
