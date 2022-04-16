import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionic from 'react-native-vector-icons/Ionicons';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import AboutCard from '../../Componants/ProfileScreenComponents/AboutCard';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorProfile = props => {
  const [defaultDp, setdefaultDp] = useState(true);
  const UserData = props.route.params.Data;
  const navigation = useNavigation();

  const finddp = () => {
    if (UserData.image != '') {
      setdefaultDp(false);
    }
  };

  useEffect(() => {
    finddp();
  }, [defaultDp]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            marginStart: Width / 3.3,
            fontSize: 22,
          }}>
          Profile
        </Text>
      </View>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0.4, y: 1.3}}
        end={{x: 1, y: 0.5}}
        style={styles.mainContainer}>
        <View style={styles.topIcons}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="crown" size={20} color={AppColors.FontsColor} />
            <Text style={styles.text}>Membership</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting', {
                data: UserData,
              });
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginStart: Width / 1.83,
            }}>
            <Ionic name="settings" size={22} color={AppColors.FontsColor} />
            <Text style={styles.text}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: '5%'}}>
          <TitleCard firstText={UserData.name.toUpperCase()} />
        </View>
        <View style={{height: 'auto', marginTop: '6%'}}>
          <AboutCard
            title="About"
            description={
              UserData.about === '' ? 'Enter About YourSelf' : UserData.about
            }
          />
        </View>
        <View style={{height: '5%', marginTop: '6%'}}>
          <TitleCard firstText="Industry" secoundText="Finance" />
        </View>
        <View style={{height: 'auto', marginTop: '6%'}}>
          <AboutCard
            title="Experience"
            description="Product Designer
                        -InnerBuddha Internship
                        Dates EmployedJan 2021  Aug 2021
                        Duration-8 mos
                        LocationBengaluru, Karnataka, India"
          />
        </View>
        <View style={styles.CompanyDetails}>
          <Text style={styles.title}>Skills</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '0%',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.txt}>Design Research</Text>
            <Text style={styles.txt}>Rapid Prototyping</Text>
          </View>
          <Text
            style={[
              styles.txt,
              {marginStart: '9%', marginTop: '6%', marginBottom: '2%'},
            ]}>
            User InterFace Design
          </Text>
        </View>
        <View style={{height: 'auto', marginTop: '6%'}}>
          <AboutCard
            title="Education"
            description="Birla Institute of Technology and Science, Pilani
                        Bachelor of Engineering - BE Computer Science
                        "
          />
        </View>
      </LinearGradient>
      <View style={styles.dp}>
        {defaultDp ? (
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/Images/jatindp.png')}
          />
        ) : (
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: UserData.image}}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '26%',
    fontSize: 25,
  },
  mainContainer: {
    backgroundColor: AppColors.BtnClr,
    height: Height / 1.58,
    marginVertical: Height / 9.8,
    paddingHorizontal: '2%',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  dp: {
    height: Height / 8.2,
    width: Width / 9.2,
    overflow: 'hidden',
    borderRadius: 200,
    marginStart: '35%',
    marginTop: '12%',
    position: 'absolute',
  },
  topIcons: {
    flexDirection: 'row',
    paddingTop: '5%',
    marginHorizontal: '5%',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  CompanyDetails: {
    width: '100%',
    height: 'auto',
    backgroundColor: AppColors.CardColor,
    marginTop: '3%',
    borderRadius: 10,
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '3%',
    marginTop: '2%',
  },
  txt: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});

export default MentorProfile;
