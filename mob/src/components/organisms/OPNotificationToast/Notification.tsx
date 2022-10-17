import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {Colors} from '../../../constants/Colors';

import {styles} from './style';

interface NotificationProps {
  text: string | undefined;
  title: string | undefined;
  onPress?: () => void;
}

interface TextProps {
  beforeText: string;
  importantText: string;
  restText: string;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Notification = forwardRef((_, ref) => {
  const [text, setText] = useState<TextProps>({
    beforeText: '',
    importantText: '',
    restText: '',
  });
  const [title, setTitle] = useState<string>('');
  const translateY = useRef(new Animated.Value(-150)).current;
  const press = useRef<(() => void) | null>(null);

  useImperativeHandle(ref, () => ({
    open: (body: NotificationProps) => {
      openNotification(body);
    },
  }));

  const handleCloseNotification = () => {
    Animated.spring(translateY, {
      toValue: -200,
      useNativeDriver: true,
    }).start();
  };

  const openNotification = (params: NotificationProps) => {
    const [beforeText, importantText, restText] = params.text
      ? params.text.trim().split('$')
      : '';

    press.current = params.onPress || null;

    setText({
      beforeText: beforeText,
      importantText: importantText,
      restText: restText,
    });
    setTitle(params.title || '');

    Vibration.vibrate();
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        handleCloseNotification();
      }, 2000);
    });
  };

  const handlePress = () => {
    press.current && press.current();
  };

  const handleGestureEvent = (
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) => {
    const yTranslate: number = event.nativeEvent.translationY;
    if (yTranslate < -20) {
      handleCloseNotification();
    }
  };

  return (
    <AnimatedTouchableOpacity
      onPress={handlePress}
      activeOpacity={0.95}
      style={[styles.container, {transform: [{translateY}]}]}>
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <View style={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Image
              source={require('../../../../assets/images/logo_icon_border.png')}
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={styles.text}>{text.beforeText}</Text>
              <Text style={[styles.importantText, {color: Colors.WHITE}]}>
                {text.importantText}
              </Text>
              <Text style={styles.text}>{text.restText}</Text>
            </Text>
            <View style={styles.slider} />
          </View>
        </View>
      </PanGestureHandler>
    </AnimatedTouchableOpacity>
  );
});

let refs: Array<any> = [];

function addNewRef(newRef: any) {
  refs.push({
    current: newRef,
  });
}

function removeOldRef(oldRef: any) {
  refs = refs.filter(r => r.current !== oldRef);
}

export function NotificationToast() {
  const toastRef = useRef(null);

  const setRef = useCallback(ref => {
    if (ref) {
      toastRef.current = ref;
      addNewRef(ref);
    } else {
      removeOldRef(toastRef.current);
    }
  }, []);
  return <Notification ref={setRef} />;
}

function getRef() {
  const reversePriority = [...refs].reverse();
  const activeRef = reversePriority.find(ref => ref?.current !== null);
  if (!activeRef) {
    return null;
  }
  return activeRef.current;
}

NotificationToast.show = (params: NotificationProps) => {
  getRef()?.open(params);
};
