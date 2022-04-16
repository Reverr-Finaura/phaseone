import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext} from 'react';
import AppColors from '../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import Backbtn from '../Componants/Backbtn';
import CustomBtn from '../Componants/CustomBtn';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigations/AuthProvider';

const emailVerify = props => {
  const navigation = useNavigation();
  const [otp, setOtp] = React.useState('');
  const OTP = props.route.params.OTP;
  const Email = props.route.params.Email;
  const Password = props.route.params.Password;
  const Name = props.route.params.Name;
  const Mobile = props.route.params.Mobile;
  const UserType = props.route.params.UserType;
  const data = {
    userType: UserType,
    name: Name,
    email: Email,
    password: Password,
    mobile: Mobile,
  };
  const {register} = useContext(AuthContext);
  const signup = async () => {
    if (UserType === 'Individual') {
      await firestore()
        .collection('Users')
        .doc(Email)
        .set({
          ...data,
          image: '',
          membership: 'none',
          liked: [],
          likes: [],
          matched: [],
          TotalLikes: 20,
          Totalhandshakes: 1,
          notification: [],
          mentors: [],
          about: '',
          education: {
            type: '',
            school: '',
          },
          skills: [],
          industry: '',
          designation: '',
          linkedin: '',
          experience: {
            position: '',
            company: '',
            tenure: '',
          },
          lookingFor: [],
        })
        .then(() => {
          register(Email, Password);
        });
    } else if (UserType === 'Startup') {
      await firestore()
        .collection('Users')
        .doc(Email)
        .set({
          ...data,
          image: '',
          membership: 'none',
          liked: [],
          likes: [],
          matched: [],
          TotalLikes: 20,
          Totalhandshakes: 1,
          notification: [],
          mentors: [],
          about: '',
          industry: '',
          designation: '',
          linkedin: '',
          lookingFor: [],
          founders: [],
          website: '',
          operationsFrom: '',
          memeberNo: 'none',
          stage: '',
        })
        .then(() => {
          register(Email, Password);
        });
    } else if (UserType === 'Mentor') {
      await firestore()
        .collection('Users')
        .doc(Email)
        .set({
          ...data,
          image: '',
          notification: [],
          clients: [],
          about: '',
          industry: '',
          linkedin: '',
          experience: '',
          reviews: [],
          rating: 0,
          totalRating: 0,
          plans: [],
        })
        .then(() => {
          register(Email, Password);
        });
    }
  };

  function submitHandler() {
    if (OTP == otp) {
      signup()
        .then(() => {
          alert('Registered successfully!');
          // navigation.navigate("Login");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Wrong OTP please try again!');
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={{marginTop: 10}}>
          <Backbtn
            IconSize={40}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.pageInfo}>
          <Text
            style={[
              styles.Text,
              {fontSize: 24, color: AppColors.FontsColor, marginBottom: 13},
            ]}>
            Verification
          </Text>
          <Text
            style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
            Please enter the vertification code{' '}
          </Text>
          <Text
            style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
            from the email we just send you
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.inputHeader}>OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="code"
            value={otp}
            onChangeText={e => {
              setOtp(e);
            }}
            placeholderTextColor={AppColors.infoFonts}
          />
          <CustomBtn
            Title="Confirm"
            style={{marginTop: 20}}
            onPress={() => {
              submitHandler();
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text style={{color: AppColors.infoFonts}}>Don’t get it? </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.inputHeader,
                  {fontSize: 12, marginStart: 0, marginTop: 10},
                ]}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  pageInfo: {
    marginTop: 60,
    marginStart: 30,
  },
  Text: {
    fontFamily: 'Poppins-Regular',
  },
  inputHeader: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: 22,
    fontSize: 16,
  },
  container: {
    marginTop: 80,
  },
  input: {
    fontSize: 14,
    marginStart: 20,
    paddingStart: 10,
    color: AppColors.FontsColor,
    paddingTop: 0,
    fontFamily: 'Poppins-Regular',
    backgroundColor: AppColors.inputFieldColor,
    marginTop: 5,
    borderRadius: 10,
    paddingBottom: 0,
    height: 50,
    width: '90%',
  },
});

export default emailVerify;
