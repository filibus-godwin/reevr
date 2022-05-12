import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  LoginStackParamList,
  RootStackParamList,
  RootTabParamList,
} from '../types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedScreen} from '../screens/Feed';
import {DiscoverScreen} from '../screens/Discover';
import {ChatListScreen} from '../screens/ChatList';
import {ProfileScreen} from '../screens/Profile';
import {MaterialIcons} from '../components/Icons';
import {useTheme} from '../hooks/useTheme';
import {StatusBar} from 'react-native';
import {useColorScheme} from '../hooks/useColorScheme';
import {WelcomeScreen} from '../screens/auth/Welcome';
import {LoginScreen} from '../screens/auth/Login';
import {SignUpScreen} from '../screens/auth/SignUp';
import {useStore} from '../store/store';
import {ExpandedPostScreen} from '../screens/Post.Expanded';
import {UserProfileScreen} from '../screens/Profile.User';
import {CommentsScreen} from '../screens/Comments';
import {SettingsScreen} from '../screens/Settings';
import {ProfileMenuScreen} from '../menu/Profile';
import {EditProfileScreen} from '../screens/Profile.Edit';
import {CreateMenuScreen} from '../menu/Create';
import {CreateTextOnlyScreen} from '../screens/Create.TextOnly';
import {CreateAdScreen} from '../screens/Create.Ad';
import {PostListScreen} from '../screens/Post.List';
import {ConversationScreen} from '../screens/Conversation';
import {PostCardMenuScreen} from '../menu/FeedCardMenu';
import {ActivitiesScreen} from '../screens/Activities';
import {AdManagementScreen} from '../screens/AdManagement';
import {AdsAndContestListScreen} from '../screens/AdAndContestList';
import {OngoingContestScreen} from '../screens/OngoingContest';
import {CreateMediaScreen} from '../screens/Create.Media';
import {Sandbox} from '../screens/Sandbox';
import {UserSearchScreen} from '../screens/Search.User';
import {Provider} from 'react-redux';
import {rootstore, useAppDispatch, useAppSelector} from '../srstore/rstore';
import encryptedStore from 'react-native-encrypted-storage';
import {addCredentials, Credentials} from '../srstore/slices/credentials';

export function App() {
  const mode = useColorScheme();
  const theme = useTheme();
  const isDark = mode == 'dark';
  const isLoggedIn = useStore(state => state.isLoggedIn);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <Provider store={rootstore}>
        <SafeAreaProvider style={{flex: 1}}>
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer
              theme={{
                dark: true,
                colors: {
                  ...DefaultTheme.colors,
                  background: theme.background,
                },
              }}>
               <StackNavigator />
              {/* {!isLoggedIn ? <LoginStackNavigator /> : <StackNavigator />} */}
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

const LoginStack = createStackNavigator<LoginStackParamList>();
function LoginStackNavigator() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <LoginStack.Screen name="Welcome" component={WelcomeScreen} />
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="SignUp" component={SignUpScreen} />
    </LoginStack.Navigator>
  );
}

// refactor to use useEffect hook to prevent reconstruction of classes
const StackNav = createStackNavigator<RootStackParamList>();
function StackNavigator() {
  const dispatch = useAppDispatch();
  encryptedStore
    .getItem('credentials')
    .then(e => {
      console.log('encrypted', e);
      if (!e) return;
      const parsedCredentials = JSON.parse(e) as Credentials;
      dispatch(addCredentials({...parsedCredentials}));
    })
    .catch(e => console.warn(e));
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <StackNav.Screen name="Root" component={BottomTabs} />
      <StackNav.Screen name="ExpandedPost" component={ExpandedPostScreen} />
      <StackNav.Screen name="UserProfile" component={UserProfileScreen} />
      <StackNav.Screen name="Comments" component={CommentsScreen} />
      <StackNav.Screen name="Settings" component={SettingsScreen} />
      <StackNav.Screen name="EditProfile" component={EditProfileScreen} />
      <StackNav.Screen name="CreateAd" component={CreateAdScreen} />
      <StackNav.Screen name="PostList" component={PostListScreen} />
      <StackNav.Screen name="Conversation" component={ConversationScreen} />
      <StackNav.Screen name="Activities" component={ActivitiesScreen} />
      <StackNav.Screen name="AdManagement" component={AdManagementScreen} />
      <StackNav.Screen name="CreateTextOnly" component={CreateTextOnlyScreen} />
      <StackNav.Screen name="OngoingContest" component={OngoingContestScreen} />
      <StackNav.Screen name="CreateMedia" component={CreateMediaScreen} />
      <StackNav.Screen name="Sandbox" component={Sandbox} />
      <StackNav.Screen name="UserSearch" component={UserSearchScreen} />
      <StackNav.Screen
        name="AdAndContestList"
        component={AdsAndContestListScreen}
      />

      <StackNav.Group
        screenOptions={{
          presentation: 'transparentModal',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}>
        <StackNav.Screen name="PostCardMenu" component={PostCardMenuScreen} />
        <StackNav.Screen name="Create" component={CreateMenuScreen} />
        <StackNav.Screen name="ProfileMenu" component={ProfileMenuScreen} />
      </StackNav.Group>
    </StackNav.Navigator>
  );
}

const TabNav = createBottomTabNavigator<RootTabParamList>();
function BottomTabs() {
  const {primary, background} = useTheme();

  const credentials = useAppSelector(state => state.credentials);
  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: primary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: background,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <TabNav.Screen
        name="Feed"
        component={FeedScreen}
        initialParams={{currentUploads: []}}
        options={{
          tabBarIcon: props => <MaterialIcons name="home-filled" {...props} />,
        }}
      />
      <TabNav.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: props => <MaterialIcons name="search" {...props} />,
        }}
      />
      <TabNav.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          title: 'Chats',
          tabBarIcon: props => <MaterialIcons name="chat" {...props} />,
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: props => <MaterialIcons name="person" {...props} />,
        }}
        initialParams={{id: credentials.id}}
      />
    </TabNav.Navigator>
  );
}
