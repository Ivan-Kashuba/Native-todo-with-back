import React from 'react';
import Login from '../../screens/Login/Login';
import Sign from '../../screens/Sign/Sign';
import Registration from '../../screens/Registration/Registration';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TodoPage from '../../screens/TodoPage/TodoPage';
import TodoCreatePage from '../../screens/TodoCreatePage/TodoCreatePage';
import TodoEditPage from '../../screens/TodoEditPage/TodoEditPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  TODO__PAGE, CREATE__TODO__PAGE, EDIT__TODO__PAGE,
  SIGN, LOGIN, REGISTRATION, SUCCESS__REGISTRATION,
}
  from './../../constants/constants';
import SuccessRegistration
  from '../../screens/SuccessRegistration/SuccessRegistration';


const Stack = createStackNavigator();
export const queryClient = new QueryClient();

const Navigate = () => {
  return (

    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>

          <Stack.Screen
            name={SIGN}
            component={Sign}
            options={{ title: 'Sign ' }}
          />

          <Stack.Screen
            name={LOGIN}
            component={Login }
            options={{ title: 'Login' }}
          />

          <Stack.Screen
            name={REGISTRATION}
            component={Registration}
            options={{ title: 'Registration' }}
          />
          <Stack.Screen
            name={SUCCESS__REGISTRATION}
            component={SuccessRegistration}
            options={{ title: 'Registration Result' }}
          />
          <Stack.Screen
            name={TODO__PAGE}
            component={TodoPage}
            options={{ title: 'Todo Page' }}
          />

          <Stack.Screen
            name={CREATE__TODO__PAGE}
            component={TodoCreatePage}
            options={{ title: 'Create Todo' }}
          />

          <Stack.Screen
            name={EDIT__TODO__PAGE}
            component={TodoEditPage}
            options={{ title: 'Edit Todo' }}
          />

        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>

  );
};

export default Navigate;
